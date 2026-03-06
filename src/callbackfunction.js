//call back: a call back(CB) is a simple function passed as an argument to an another function, which will be called
//call by value
//call by obj reference
//call by function: call back

let sayHi = function(){
    console.log("hiiiiiii");
};

let sayHello = function(callback){
    callback();
};

sayHello(sayHi); //calling a function by passing a function
sayHello(()=>console.log('Hello'));

console.log("--------------");

//utility function
let add = (a,b)=>a+b;
let sub = (a,b)=>a-b;
let mul = (a,b)=>a*b;
let div = (a,b)=>a/b;

function calculator(a, b, callback){
    return callback(a, b);
};

//core function: end user function
let r1 = calculator(10,20, add);
console.log("add: ",r1);
r1 = calculator(30,20, sub);
console.log("add: ",r1);
r1 =calculator(10,20, mul);
console.log("add: ",r1);
r1 = calculator(40,20, div);
console.log("add: ",r1);

console.log("--------------");

function intializeDriver(browserName){
    console.log(`browser name: ${browserName}`);

    switch (browserName.trim().toLowerCase()) {
        case 'chrome':
            console.log('launch crome');
            return true;
        case 'firefox':
            console.log('launch firefox');
            return true;
        default:
            console.log('please enter right browser', browserName);
            return false;
    }
};

//
function enterURL(browserName, url, callback){
    console.log('start test execution....');

    callback(browserName);
    console.log('enter the url', url);
};

enterURL('chrome', 'http://www:google.com', intializeDriver);


console.log('-------------------------');

function myCalc(a,b, callback){
    return callback(a, b);
};

 let t1 = myCalc(10, 20, (a,b)=> a+b);
 console.log('t1:',t1);

let t2 = myCalc(10, 20, function(a,b){ return a+b});
 console.log('t2:',t2);


 console.log('-------------------');



 function launchBrowser(browserName, callback){
    callback(browserName);
 };

 let flag = launchBrowser('chrome', (browserName) =>{
    console.log(`browser name: ${browserName}`);

    switch (browserName.trim().toLowerCase()) {
        case 'chrome':
            console.log('launch crome');
            return true;
        case 'firefox':
            console.log('launch firefox');
            return true;
        default:
            console.log('please enter right browser', browserName);
            return false;
    }
});

if(flag){
    console.log('enter the url');
}

console.log('-----------');

let num = [1,2,3,4,5];
num.forEach(x=> console.log(x));

let even = num.filter(x=>x%2===0);
console.log(even);

let odd = num.filter(x=>x%2!==0);
console.log(odd);

