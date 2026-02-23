
//push(add to end),unshift(add to start), pop(remove end element), shift(remove 1st element) 
let arr= [1,2,3,4,5]

let len = arr.length // length is array property --- it will return the the length of an array

console.log(len)

arr.push[60]  //add at the end 
console.log(arr)

arr.unshift(5) //add at the starting
console.log(arr)

console.log("*********")
let last = arr.pop()  //remove at the end 
console.log(last)
console.log(arr)

console.log(arr.shift()) //remove at the start
console.log(arr)

arr[0] = 90. //replace 0th index value
console.log(arr)

arr[arr.length-1] = 80. //replace last index value
console.log(arr)



//constant array --- replace single element, can't  replace all, we can 
const intArr = [10,20,30,40,50]
console.log(intArr) 

// intArr = [60,70,80,50,40]  ---  can't Assignment to constant variable
console.log(intArr) 

intArr[0] = 90
console.log(intArr) 

console.log()

//********* splice *********************
let inrArr = [11,12,13,14,15]
console.log(inrArr) 

inrArr.splice(0,2)  // delete items
console.log(inrArr) 

inrArr.splice(3, 0,16,17,18)  // Add items-- start index 2 and added values 16,17,18
console.log(inrArr) 

inrArr.splice(0,2,21,22) //start, delete count, replasing values)
console.log(inrArr) 

inrArr.splice(2, 0 , 33) //replace a values 33 at 2nd index. 
console.log(inrArr) 
console.log(JSON.stringify(inrArr)); // print array in single line

// console.log(inrArr.length) 
inrArr.splice(0,intArr.length,41,42,43,44,45,46,47,48) //
console.log(inrArr) 

//**************. indexOf. **********
let strArr = ["banana","kiwi", "cherry", "banana", "grapes", "banana","mango","banana"]
console.log(strArr) 

let indexOfApple = strArr.indexOf("banana");
console.log(indexOfApple) 

//2nd index of apple
let indexOfSecApple = strArr.indexOf("banana", strArr.indexOf("banana")+1);
console.log(indexOfSecApple) 

//3rd index of apple
let indexOfThirdApple = strArr.indexOf("banana", strArr.indexOf("banana", strArr.indexOf("banana")+1)+1);
console.log(indexOfThirdApple) 

//4th index of apple
let indexOfForthApple = strArr.indexOf("banana", strArr.indexOf("banana", strArr.indexOf("banana", strArr.indexOf("banana")+1)+1)+1);
console.log(indexOfForthApple) 

strArr[0] = "chia"
console.log(strArr) 

console.log(strArr.indexOf("peanut"))  // is the string doesnot exist