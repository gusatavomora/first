let atual = new Date()
let hora = atual.getHours()
document.write(`agoar são ${hora} horas<br>`) 
if(hora < 12 && hora >= 6){
    window.document.write(`Bom Dia!`)
}else if(hora > 12 && hora < 18){
    window.document.write(`Boa Tarde!`)
}else{
    window.document.write(``)
}