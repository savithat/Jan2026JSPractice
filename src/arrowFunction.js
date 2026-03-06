//Arrow function : =>
//Has no name: Anonymous function
//used in call back function
//no function keyword

//1. no param arrow function
let print = () => console.log("Hello world");
print();

//2. 1 param arrow function
let printNme = (name)=>
    console.log(name);

printNme('savitha');

console.log('------');

let test = (a) => console.log(a+10);
test(10);

console.log('------');

let printNum = (num) => console.log(`total number ${10+num}`);
printNum(20);

console.log('------');
 let printTotal = total => console.log(total+50);
 printTotal(50);

 console.log('------');
 let printBilling = billing => {
    console.log(billing+50);
    console.log('Biling is done');
     console.log('Bye');
 };
 printBilling(200);

 console.log('------');
 let pro = (a) => a+4;
 let r1 = pro(2);
 console.log(r1);

 console.log('------');
 let doLowercase = (name) => name.toLowerCase();
 let lower = doLowercase('SAVITHA');
 console.log(lower);

 let doUpperCase = (name) => name.toUpperCase();

 //3. 2 parameters

 let sum = (a,b) => a+b;
 let p1= sum(10, 20);
 console.log(p1);


 console.log('-----------------');
 let initBrowser = (browserName) => {
    switch (browserName.trim().toLocaleLowerCase()) {
        case 'chrome':
            console.log('launch chrome');
            return true;
    case 'edge':
            console.log('launch edge');
            return true;
    case 'ff':
            console.log('launch ff');
            return true;                
    
        default:
            console.log('please enter right browser');
            return false;
    }
 };

 let flag = initBrowser('chrome');
 console.log(flag);

 console.log('-------------');

 let printDetails = (...details)=>{
    console.log(details);
    console.log(details.length);
    return 0;    
 };

 let s1 = printDetails("sam", 20, "collage");
 console.log(s1);

 //without return inside function
 let printDetails1 = (...details)=>{
    console.log(details);
    console.log(details.length);  
 };

 let s2 = printDetails1("sam", 20, "collage"); 
 console.log(s2);  // if function not returning anything there is nithing to store in s2 so response is undefined