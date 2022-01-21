let obj1 = {
    id: 1,
    name: "name1",
    age: 20
}

let obj2 = {
    id: 2,
    name: "name2",
    age: 21
}

let obj3 = {
    id: 3,
    name: "name3",
    age: 22
}

let arr = [obj1, obj2, obj3]
let arr2 = []

arr.forEach(a =>{
    arr2.push(a.name)
    console.log(a.name)
})

console.log(arr2)