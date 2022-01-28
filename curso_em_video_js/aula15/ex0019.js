let num = [8, 7, 5, 6, 2, 3, 4]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é o ${num[0]}`)
let pos = num.indexOf(8)
if(pos == -1){
    console.log(`O valor não foi encontrado!`)
}else{
    console.log(`O valor 8 está na posição ${pos}`)
}