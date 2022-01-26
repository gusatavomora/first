function carregar() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let date = new Date()
    let hora = date.getHours()
    msg.innerHTML = `agora são ${hora} horas`
    if(hora >= 0 && hora < 12) {
        //bom dia!
        img.src = "images/fotomanha.jpg"
    }else if(hora >= 12 && hora < 18){
        //boa tarde!
        img.src = "images/fototarde.jpg"
    }else{
        //boa noite!
        img.src = "images/fotonoite.jpg"
    }
}