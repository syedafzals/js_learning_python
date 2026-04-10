// // function sayname(){
// //     console.log("S");
// //     console.log("a");
// //     console.log("a");
// //     console.log("d") 
    
// // }
// function name(){
//     console.log("Hello");
// }
// // sayname()
// function person(name,batch) {
//     return `Name______${name} 
//     Batch_______${batch}
//     `
    
// }
// let sdt1= person("Ali","Python")
// let sdt2 = person("Saad","Python")

// console.log(sdt1)
// console.log(sdt2)
// name()
// name()
// name()

// function sum() {
//     return 2 + 2;
// }
// // Function Parameters
// function sub(num1,num2) {
//     return num1-num2;
// }
// su=sub(12,4)
// console.log(su)
// let user="zab" //gobal
// const zab=function(){
//     let user ="zab"
//     //local
//     return user
//     // console.log(this.user)
// }

// console.log(zab())
// const hello = () => {
//     let username = "zab"
//     console.log(username);}

// hello()

function numsys(...number) {
    return number
    
}

let num=numsys(2,3,4,5,6,7,8,9,1,2,3,4,5,6)

console.log(num)
function objecthandle(anyobject) {
    return `welcome to ${anyobject.User} and ${anyobject.pwd}`
    
}

let st=objecthandle({
    User:"Ali",
    pwd:"Hello"
})
console.log(st)