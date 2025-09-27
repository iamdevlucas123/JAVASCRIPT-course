document.addEventListener("DOMContentLoaded", carregarTarefas)

//"DOMContentLoaded" – This is the event being listened for. It fires once the HTML document has been completely loaded and parsed, but before images, stylesheets, and other resources finish loading.

function adicionarTarefas(){
    const input = document.getElementById('taskInput')
    const tarefa = input.value.trim();

    if (tarefa === ""){
        alert('Digite uma tarefa!')
        return;
    }

    // Passo 1: Buscar tarfeas existentes no localStorage
    //Pega o valor armazenado no navegador com a chave "tasks"
    //JSON.parse() : Converte a string de volta para um objeto ou array JavaScript.
    //O || [] garante que tarefas será sempre um array, mesmo que esteja vazio.
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    //Passo 2: Adicionar nova tarefa no array
    tasks.push(tarefa)


    //Passo 3: Salvar novamente no localStorage
    localStorage.setItem("tasks", JSON.stringify(tasks))

    //passo 4: Atualizar lista na tela:
    exibirTarefas()

    // Limpar input
    input.value = "";
}
