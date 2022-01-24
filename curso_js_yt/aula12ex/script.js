function carregar() {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')
    let date = new Date()
    let hora = 15 //date.getHours()
    msg.innerHTML = `agora são ${hora} horas`
    if(hora >= 0 && hora < 12) {
        //bom dia!
        img.src = "fotomanha.jpeg"
    }else if(hora >= 12 && hora < 18){
        //boa tarde!
        img.src = "fototarde.jpeg"
    }else{
        //boa noite!
        img.src = "fotonoite.jpeg"
    }
}