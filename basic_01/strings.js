// let fname= "ALI"
// let lname ="RAZA"

// console.log("First name"+fname+" last name"+lname)
// console.log(`First Name: ${fname.length}\nLast Name: ${lname}`)

let name3 = new String("Zabtech")

// console.log(name3.charAt(0))
// console.log(name3.indexOf('a')) 
//Z A B T E C  H
//0 1 2 3 4 5  6
// // console.log(name3.substring(0,4+1))
// console.log(name3.slice())

let name1= name3.slice(-2,6)
console.log(name1)

let progrm = "    ALI   "
console.log(`Helloo ${progrm.trim()} bhai` )

const pro="zabtech Hyd"
console.log(pro.replace('Hyd','khi'.toUpperCase()))

const values=["Ahmed","tahir","GM","sami khan "]
console.log(values.includes("tahir"))
let val ="hello,world pakistan, hjhsahd. hdgjdd "
console.log(val.split("."))