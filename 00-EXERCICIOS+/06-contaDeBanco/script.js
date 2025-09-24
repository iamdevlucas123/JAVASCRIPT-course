

function login(){
    let nome = String(document.getElementById('usuario').value.trim())
    let senha = Number(document.getElementById('senha').value.trim())

    if (nome == 'lucas' && senha == 1234){
        window.location.href = 'mainPage.html'
    }else {
        alert('Please write the correct name.')
        alert(`o nome é ${nome} e senha ${senha}`)
    }
}

function start(){
    alert(`a variavel recebeu${nome}`)
    welcome.append(nome)
}




