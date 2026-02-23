//reverse array
let number = [1,2,3,4,5]

//usr for of --- to reverse array
for(let e of number){
    let count = number.length - number.indexOf(e) - 1;
    console.log(number[count])
}


//use for in
console.log()
for(let i in number){
    let count = number.length - i -1
    console.log(number[count])
}