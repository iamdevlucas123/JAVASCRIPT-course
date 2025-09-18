

function verificar() {

    var data = new Date()
    var year = data.getFullYear()
    var res = document.getElementById('resultado')
    var img = document.getElementById('imagem')

    var yearx = document.getElementById('yearx').value
    var sex = document.getElementsByName('sexo')

    var idade = year - Number(yearx)

    
    // Year field validation

    if (yearx == '' || idade <= 0 || yearx <= 1900) {
        alert('please enter a valid number')
    }
    
    // Gender validantion
    
    var gender = ''

    if (sex[0].checked){
        gender = 'Masculino'
    }else if (sex[1].checked){
        gender = 'Feminino'
    }

    // image and age on window

    //Masculino:
    if (gender == 'Masculino') {
        
        if (idade < 16) {
            res.innerHTML = `Voçê é um menino de ${idade} anos`
            img.style.backgroundImage = "url('imagens/child.jpg')"
        } else if (idade < 28){
            res.innerHTML = `Voçe é um adulto de ${idade} anos`
            img.style.backgroundImage = "url('imagens/tenager.jpg')"
        } else {
            res.innerHTML = `Voçe é um idoso de ${idade} anos`
            img.style.backgroundImage = "url('imagens/old.jpg')"
        }
    }

    if (gender == 'Feminino') {
        
        if (idade < 16) {
            res.innerHTML = `Voçê é uma menina de ${idade} anos`
            img.style.backgroundImage = "url('imagens/child.jpg')"
        } else if (idade < 28){
            res.innerHTML = `Voçe é uma adulta de ${idade} anos`
            img.style.backgroundImage = "url('imagens/tenager.jpg')"
        } else {
            res.innerHTML = `Voçe é uma idosa de ${idade} anos`
            img.style.backgroundImage = "url('imagens/old.jpg')"
        }
    }

}
  



