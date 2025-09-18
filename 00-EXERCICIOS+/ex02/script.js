var data = new Date()
var hora = data.getHours()
var texto = document.getElementById('hora')
var img = document.getElementById('img')

function load() {
    if (hora < 12) {
        texto.innerHTML = `Bom dia! são ${hora} horas da manhã`
        img.style.backgroundImage = "url('imagens/bomdia.jpg')";
        document.body.style = 'background-image: linear-gradient(to bottom, rgba(0, 0, 255, 0.638), rgba(255, 166, 0, 0.849));'
    }
    else if (hora > 12 && hora < 18){
        texto.innerHTML = `Boa tarde! são ${hora} horas da tarde`
        img.style.backgroundImage = "url('imagens/boatarde.jpg')";
        document.body.style = 'background-color: rgba(0, 0, 255, 0.447);'
    }
    else {
        texto.innerHTML = `Boa noite! são ${hora} horas da noite`
        img.style.backgroundImage = "url('imagens/boanoite.jpg')";
        document.body.style = 'background-color: black'
    }
}