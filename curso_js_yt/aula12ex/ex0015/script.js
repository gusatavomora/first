function verificar() {
    let data  = new Date();
    let ano = data.getFullYear();
    let fano = document.querySelector('#txtano');
    let res = document.querySelector('#res');
    if(fano.value.length == 0 || Number(fano.value) > ano) {
        alert('[Erro] verifique os dados e preencha os dados novamente');
    }else{
        let fsex = document.getElementsByName('radsex');
        let idade = ano - Number(fano.value)
        let gênero = ''
        let img = document.createElement('img');
        img.setAttribute('id', 'foto')
        if(fsex[0].checked) {
            gênero = 'Homem'

            if(idade >= 0 && idade <= 10) {
                //criança
            img.setAttribute('src', 'imagens/criança-m.jpg')
            }else if(idade <= 21) {
                //jovem
            img.setAttribute('src', 'imagens/jovem-m.jpg')
            }else if(idade <= 60) {
                //adulto
            img.setAttribute('src', 'imagens/adulto-m.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'imagens/idoso.jpg')
            }

        }else if(fsex[1].checked) {
            gênero = 'mulher'

            if(idade >= 0 && idade <= 10) {
                //criança
            img.setAttribute('src', 'imagens/criança-f.jpg')
            }else if(idade <= 21) {
                //jovem
            img.setAttribute('src', 'imagens/jovem-f.jpg')
            }else if(idade <= 60) {
                //adulta
            img.setAttribute('src', 'imagens/adulto-f.jpg')
            }else{
                //idosa
                img.setAttribute('src', 'imagens/idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `detectamos ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}