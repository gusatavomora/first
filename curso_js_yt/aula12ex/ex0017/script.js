function gerarTabuada() {
    var numb = Number(document.getElementById('txttabu'))
    var res = document.getElementById('res')
    var tabuada = ''

    for(let c = 0; c <= 10; c++){
        tabuada += numb + 'x' + c + ' = ' + numb * c + "<br>"
    }
    res.innerHTML = tabuada
}