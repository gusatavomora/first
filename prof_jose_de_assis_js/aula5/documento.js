/*
Aula 5: Contador Flex;
*/

let etanol, gasolina;

function calcular() {
  etanol = parseFloat(aula5.txtEtanol.value.replace(',','.'));
  gasolina = parseFloat(aula5.txtGasolina.value.replace(',','.'));
  if(etanol >= 0.7 * gasolina){
    Img.src = 'imagens/etanol.png'
    
  }
}