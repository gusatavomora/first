function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[Erro] verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            gênero = 'Homem'
            if(idade >= 0 && idade <= 10){
                //Criança
                img.setAttribute('src', 'imagens/criança-m.jpg')
            }else if(idade <= 21){
                //Jovem
                img.setAttribute('src', 'imagens/jovem-m.jpg')
            }else if(idade < 60){
                //Adulto
                img.setAttribute('src', 'imagens/adulto-m.jpg')
            }else{
                //Idoso
                img.setAttribute('src', 'imagens/idoso.jpg')
            }
        }else if(fsex[1].checked) {
            gênero = 'Mulher'
            if(idade >= 0 && idade <= 10){
                //Criança
                img.setAttribute('src', 'imagens/criança-f.jpg')
            }else if(idade <= 21){
                //Jovem
                img.setAttribute('src', 'imagens/jovem-f.jpg')
            }else if(idade < 60){
                //Adulto
                img.setAttribute('src', 'imagens/adulto-f.jpg')
            }else{
                //Idoso
                img.setAttribute('src', 'imagens/idosa.jpg')
            }

        }
        res.style.textAlign = "center"
        res.innerHTML = `detectamos ${gênero} com ${idade} anos `
        res.appendChild(img)
        img.style.height = '150px'
        img.style.display = 'block'
        img.style.borderRadius = '15px'
        img.style.margin = 'auto'
    }
}