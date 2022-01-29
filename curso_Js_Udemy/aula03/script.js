let objeto = {
        objeto2 : {
            vetor : [1, 2, {valor: 55}]
        }
}

//Qual valor exibirá o valor 55?
console.log(objeto["objeto2"].vetor.valor)

console.log(objeto.objeto2.vetor.valor)

console.log(objeto["objeto2"]["vetor"][2].valor)
(                                              ) 
console.log(objeto.objeto2.vetor[2].valor)