let x= 'savtha';
console.log(x);

console.log('--------------------');

//single dimesion array
let arr = [1,2,3];
console.log(arr);

//push
arr.push(4)
console.log(arr);

//pop
console.log(arr.pop());
console.log(arr);

//unshift
arr.unshift(5);
console.log(arr);

//shift
console.log(arr.shift());
console.log(arr);

//splice
arr.splice(0,2,8,9,10);
console.log(arr);

//slice
let arr1 = arr.slice(1,3);
console.log(arr1);

//concat array
let arr3 = arr.concat(arr1);
console.log(arr3);

//indexOf
console.log(arr3.indexOf(9));

//lastIndex
console.log(arr3.lastIndexOf(9));

//
console.log(arr.includes(3));

console.log('--------------------');

//two dimension array
let arrTwoDimension = [
    [1,2,3],
    [4,5,6],
    [7,8,9]

];

console.log(arrTwoDimension[0]);
arrTwoDimension[0] = [11,12,13];
console.log(arrTwoDimension);

console.log('--------------------');