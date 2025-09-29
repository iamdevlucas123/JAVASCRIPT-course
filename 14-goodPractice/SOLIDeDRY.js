/*
    - O SOLID é um conjunto de 5 práticas para tornar o código mais limpo, organizado, escalável e facil de manter;
    - Aplicado a Programação Orientada a Objeto (POO)
*/

// -- SINGLE RESPONSABILITY PRINCIPLE -- 
// Uma Classe ou função deve ter apenas um motivo para ser criada, uma única responsábilidade.

//Exemplo RUIM:

class Usuario {
  cadastrarUsuario(dados) {
    // Lógica para cadastrar usuário
  }

  enviarEmailDeBoasVindas(email) {
    // Lógica para enviar e-mail
  }
}

//Exemplo Correto:
// Agora temos as classes separadas agora quando mudar o envio de emails não afeta o cadastro de usúarios.

class UsuarioService {
  cadastrarUsuario(dados) {
    console.log("Usuário cadastrado:", dados.nome);
  }
}

class EmailService {
  enviarEmailDeBoasVindas(email) {
    console.log(`Email enviado para ${email}`);
  }
}

// -- OPEN/CLOSED PRINCIPLE
//Classes e funções devem estar abertas para extensão, mas fechadas para modificação.
//Ou seja, você pode adicionar funcionalidades sem alterar o código existente, evitando quebrar o que já funciona.

//Exemplo ruim, cada vez que surge um novo tipo de desconto precisa aumentar a classe.

class CalculadoraDesconto {
  calcular(tipo, valor) {
    if (tipo === "Natal") return valor * 0.9;
    if (tipo === "AnoNovo") return valor * 0.8;
    return valor;
  }
}

//Exemplo correto: Agora, para adicionar um novo desconto, você cria uma nova classe, sem modificar as existentes.

class Desconto {
  calcular(valor) {
    return valor;
  }
}

class DescontoNatal extends Desconto {
  calcular(valor) {
    return valor * 0.9;
  }
}

class DescontoAnoNovo extends Desconto {
  calcular(valor) {
    return valor * 0.8;
  }
}

function aplicarDesconto(tipo, valor) {
  return tipo.calcular(valor);
}

// Uso:
console.log(aplicarDesconto(new DescontoNatal(), 100)); // 90
console.log(aplicarDesconto(new DescontoAnoNovo(), 100)); // 80

//LISKOV SUBTITUTION PRINCIPLE
//Uma classe filha deve poder substituir sua classe mãe sem quebrar o programa.
//Se um código espera uma AveQueVoa, não terá problemas com Pinguim

class Ave {
  comer() {
    console.log("Comendo...");
  }
}

class AveQueVoa extends Ave {
  voar() {
    console.log("Voando...");
  }
}

class Pinguim extends Ave {
  nadar() {
    console.log("Nadando...");
  }
}

//INTERFACE SEGREGATION PRINCIPLE
//Não forçar classes a implementar métodos que elas não usam.

//Exemplo errado:

class Funcionario {
  trabalhar() {}
  gerenciarEquipe() {}
}

class Desenvolvedor extends Funcionario {
  trabalhar() {
    console.log("Codando...");
  }

  gerenciarEquipe() {
    // Não faz sentido para um desenvolvedor
    throw new Error("Desenvolvedor não gerencia equipe!");
  }
}

//exemplo correto: o desenvolvedor só implementa aquilo que faz sentido pra ele:

class Funcionario {
  trabalhar() {}
}

class Gerente extends Funcionario {
  gerenciarEquipe() {
    console.log("Gerenciando equipe...");
  }
}

class Desenvolvedor extends Funcionario {
  trabalhar() {
    console.log("Codando...");
  }
}

//DEPENDENCY INVERSION PRINCIPLE
//Classes não devem depender diretamente de outras classes específicas.

//Exemplo ruim: Se você quiser mudar para MongoDB, terá que alterar toda a classe UsuarioService.

class MySQLDatabase {
  salvar(dado) {
    console.log("Salvando no MySQL:", dado);
  }
}

class UsuarioService {
  constructor() {
    this.db = new MySQLDatabase(); // Dependência direta
  }

  cadastrarUsuario(usuario) {
    this.db.salvar(usuario);
  }
}

//exemplo correto: 

class UsuarioService {
  constructor(database) {
    this.db = database; // Injeção de dependência
  }

  cadastrarUsuario(usuario) {
    this.db.salvar(usuario);
  }
}

class MySQLDatabase {
  salvar(dado) {
    console.log("Salvando no MySQL:", dado);
  }
}

class MongoDatabase {
  salvar(dado) {
    console.log("Salvando no MongoDB:", dado);
  }
}

// Agora podemos trocar o banco facilmente:
const usuarioService = new UsuarioService(new MongoDatabase());
usuarioService.cadastrarUsuario({ nome: "Lucas" });

//DRY (Dont Repeat Yourself)

//ERRADO:

// Página de compras
let preco = 100;
let desconto = preco * 0.1;
let precoFinal = preco - desconto;
console.log("Preço final:", precoFinal);

// Página de carrinho
let precoCarrinho = 250;
let descontoCarrinho = precoCarrinho * 0.1;
let precoFinalCarrinho = precoCarrinho - descontoCarrinho;
console.log("Preço final carrinho:", precoFinalCarrinho);



//CERTO:

function calcularDesconto(preco, taxa = 0.1) {
  return preco - (preco * taxa);
}

// Página de compras
console.log("Preço final:", calcularDesconto(100));

// Página de carrinho
console.log("Preço final carrinho:", calcularDesconto(250));
