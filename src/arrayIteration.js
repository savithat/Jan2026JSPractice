
//Array iteration using regular for loop
let array = ["savitha", 30, 12.34, 2025, 'IBK', true]

for(let i = array.length-1; i>=0; i--){
    console.log(array[i])
}


//for of ---- item iteration
let intArr = [1,2,3,4,5,6]
for (let num of intArr){
    console.log(num);
}


//for in-----   index based iteration
let strArr = Array.of("savi", "sanju", "Nidhi", "jags")
for(let x in strArr){
    console.log(x,"=",strArr[x])
}


//for each
strArr.forEach((value, index) =>
console.log(value, index))