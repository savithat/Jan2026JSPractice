//simple function : no input ans no return

//function can be hoisted(call the function before defining the function)
//test();

function test(){
    console.log("this is my firstFunction");
    //no output no return keyword: void
}

//call function
test();


function printInfo(){
    console.log("autom automation");
}

printInfo();
console.log();


//2. no input return something
function getTrainerName(){
    console.log("giving trainer name");
    let trinerName = "savitha";
    return trinerName;
}


let name = getTrainerName();
console.log(name);
console.log(getTrainerName());


console.log();
//3. some inut and some return

/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @returns 
 */
function add(a, b){    //a and p are parameters
    console.log("adding two numbers...");
    let c = a+b;
    return c;
}

let sum = add(2, 3);  //values or arguments
 console.log("sum =",sum);
 
let sum1 = add(2, 'savitha');
 console.log("sum1 =",sum1);


 console.log();
 //AC(Acceptence criteria): create a function
 //which will calculate the student marks...:renge 1 to 100
 //input parameter: studentName: (String)
 //return marks of the student (number)
 //if student name is not found...  return -1

 /**
  * 
  * @param {String} studentName 
  * @returns 
  */
 function getSsudentMarks(studentName){
    console.log("getting marks of the student", studentName);
    let marks = -1;

    if(studentName === 'sanju'){
       // return 90;
       marks = 90;
    }
    else if(studentName === 'savitha'){
       // return 80;
       marks = 80;
    }
    else if(studentName === 'Nidhi'){
        //return 100;
        marks = 100;
    }
    else{
        console.log(`${studentName} is not found`);
      //  return -1;
    }
    return marks;
 };

 let m1 = getSsudentMarks('savitha');
 console.log(m1);


 //switch case
 console.log("-----");
 /**
  * 
  * @param {String} studentName 
  */
 function getMarks(studentName){
    console.log("getting marks of the student", studentName);
    switch (studentName.trim().toLocaleLowerCase()) {
        case 'savitha':
            return 90;    
        case 'nidhi':
            return 90;  
        case 'sanju':
            return 90;  
        default:
           console.log(`${studentName} is not found`);
           return -1;
    }
 };

 let m = getMarks('Sanju')
 console.log(m);


 console.log("---------------");
 /**
  * 
  * @param {Number} productPrice 
  * @param {Number} tax 
  * @param {Number} lateFee 
  */
 function getTotalBilling(productPrice, tax, lateFee, gst){
    console.log('calculate the final billing .....');
    return productPrice + tax + lateFee;
 };

 let amount = getTotalBilling(1000, 20, 10, 5);
 console.log(amount);
 console.log(typeof getTotalBilling);
 console.log(getTotalBilling.name);
 console.log(getTotalBilling.length);