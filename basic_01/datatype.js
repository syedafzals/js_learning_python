// primitive
// 7 types: string ,number=>int/float,boolen, null, undefine,bigint,symbol

let name="ALI" //string type
name1=name
const val=101 // number=>int type
let temp= 26.56 //number => float type
let hum=null // null 
let email; // undefine type
let BigNumber=11133313623n // bigint type

console.log(typeof name);
console.log(typeof val);
console.log(typeof temp);
console.log(typeof hum);
console.log(typeof email);
console.log(typeof BigNumber);

const id = Symbol('234')
const userid=Symbol('372')

console.log(typeof id);
console.log(id == userid)

// Reference (NON-primitive)
//3 type: array ,object , function

let stdname=["ali","Ahmed","hamza","GMG"]

let user={
    uname:"Ali",
    Email:"ali123@gmail.com"
}
let user1=user;
const fun=function(){
    console.log("hello world")
}