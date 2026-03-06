let n = 5;
let sum=0;

for(let i=1; i<=n; i++){
    sum += i;
}

console.log("sum:",sum);

console.log("-------------------");
let arr = [1,2,3,4,5,6];
for(let i of arr){
    console.log(i);
}

console.log();
for(let i in arr){
     console.log("index:",i, " Value:", arr[i]);
}

let Student = {
    name: 'savi',
    age: 30,
    city: 'San Jose'
};

console.log(Student.name);
console.log(Student.age);
console.log(Student.city);
Student.name = 'Sanjana';
console.log(Student.name);


let total = function(number){
    let intial = 0;
    for(let i =1; i<=number; i++){
         intial += i;
    }
   return intial;
};

console.log(total(5));


 let total1 = (number) =>{
    let initial1 = 0;
    for(let i =1; i<=number; i++){
         initial1 += i;
    }
   return initial1;
 };

 console.log(total1(5));

((number) =>{
    let initial1 = 0;
    for(let i =1; i<=number; i++){
         initial1 += i;
    }
   console.log(initial1);
 })(5);