var idade = 32
window.document.write(`você tem ${idade}<br>`)
if(idade < 16) {
    window.document.write(`você não vota<br>`)
}else if(idade < 18 || idade >= 65){
    window.document.write(`voto opcional`)
}else{
    window.document.write(`voto obrigatório`)
}