const cars = [0,1,21,3,4,5];
const car = ["Saab", "Volvo", "BMW"];
//array indexing       0 1 2 3 4 5
const myarr= new Array(1,2,3,4,5,6)
// console.log(myarr[0])
// array Method
// myarr.push(7)
// myarr.push(8,9)
// console.log(myarr)
// myarr.pop()
// myarr.unshift(0)
// myarr.shift()
// console.log(myarr.includes(7))
// console.log(myarr.indexOf(1))
// const mynewarr=myarr.join()
// console.log(mynewarr)
// slice ,space
console.log("A",myarr)
const arr=myarr.slice(1,4)
console.log(arr)
console.log("B",myarr)

const arr2=myarr.splice(1, 3)
console.log(arr2)
console.log("C",myarr)