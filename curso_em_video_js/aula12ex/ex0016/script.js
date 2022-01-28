function contar() {
    let ini = document.querySelector('#txti');
    let fim = document.querySelector('#txtf');
    let pas = document.querySelector('#txtp');
    let res = document.querySelector('#res')

    if(ini.value.length == 0 || fim.value.lenght == 0 || pas.value.length == 0) {
        //alert('[Erro] preencha os dados corretamente');
        res.innerHTML = 'Impossivel Contar!'
    }else{
        res.innerHTML = 'contando:'
        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(pas.value);
        if(p <= 0) {
            alert('Passo Inválido! Considerando PASSO 1')
            p = 1;
        }
        if(i < f) {
            for(let c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} `
            }
        }else{
            for(let c = i; c >= f ; c -= p) {
                res.innerHTML += `${c} `
            }
        }
    }
}