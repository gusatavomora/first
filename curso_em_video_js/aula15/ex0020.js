let valores = [3, 1, 9, 4, 5]
valores.sort()

console.log(valores)

/*
console.log(`a posição 0 recebe o valor ${valores[0]}`)
console.log(`a posição 1 recebe o valor ${valores[1]}`)
console.log(`a posição 2 recebe o valor ${valores[2]}`)
console.log(`a posição 3 recebe o valor ${valores[3]}`)
console.log(`a posição 4 recebe o valor ${valores[4]}`)


for(let pos = 0;pos < valores.length; pos++){
    console.log(`a posição ${pos} recebe o valor ${valores[pos]}`)
}
*/

for(pos in valores){
    console.log(`a posição ${pos} racebe o valor ${valores[pos]}`)
}