
document.addEventListener("DOMContentLoaded", carregarTarefas)

function adicionarTarefas() {

    //Pegar o valor digitado:
    const input = document.getElementById("taskInput");
    const task = input.value.trim();

    //condição para ver. se input está vazio
    if (task === ""){
        alert('Please type something!')
    }

    //Buscar tarefas já existentes dentro do localStorage ou um array vazio
    let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

    //Adicionar uma nova tarefa dentro do array
    tarefas.push(task)

    //Salvar novamente no localStorage e transformar em um texto JSON
    localStorage.setItem("tarefas", JSON.stringify(tarefas))

    //Atualizar a lista na tela
    exibirTarefas()

    // Limpar input
    input.value = "";

}

function exibirTarefas(){
    //Pegar a lista:
    const lista = document.getElementById('taskList')
    lista.innerHTML = "";

    // Recupera as tarefas do localStorage
    let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

    //Criar cada item na tela:
    tarefas.forEach((tarefa, index) =>{

        //Criar uma li na lista
        const li = document.createElement("li");
        li.textContent = tarefa; //??

        //botão de remover
        const btn = document.createElement("button");
        btn.textContent = "X";

        //Função que remove a tarefa
        btn.onclick = () => removerTarefa(index);

        //Cria um botão e tarefa
        li.appendChild(btn);
        lista.appendChild(li);
    })
}

function removerTarefa(index){

    //Recupera tarefas no localStorage
    let tarefas = JSON.parse(localStorage.getItem("tarefas")) || []

    //Remove pelo Índice
    tarefas.splice(index, 1);

    //Salva lista atualizada
    localStorage.setItem("tarefas", JSON.stringify(tarefas));

    //Atualiza a lista na tela
    exibirTarefas()
}

function carregarTarefas() {
    exibirTarefas()
}