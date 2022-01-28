/*
Aula 4 JS: Função Simples;
*/

function hello() {
    var name;
    /*
    name = prompt('Digite o seu nome'); //jeito mais facil, porem não corrigi erros.
    alert('Hello' + name);
    */
    var name = prompt('Escreva seu nome abaixo:');
    if(name.length == 0) {
        alert('[Erro] Preencha os dados novamente!'); //jeito mais inteligente de se fazer.
    }else{
        alert(`hello ${name}`);  //melhor jeito!
        //alert('hello ' + nome);
    }
}