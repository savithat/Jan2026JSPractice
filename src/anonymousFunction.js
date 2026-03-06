//has no name: anonymous function

let world = function() {
    console.log("hello world");
    return 100;
}

console.log(world);
world();  //call anonymous function by expression name
console.log(world());

console.log();
let t1 = world();
console.log(t1);


console.log();
/**
 * 
 * @param {String} browserName 
 */
let initDriver = function(browserName){
    console.log(`Browser name is ${browserName}`);

    switch (browserName.trim().toLocaleLowerCase()) {
        case 'chrome':
            console.log('launch chrome');
            break;
    case 'edge':
            console.log('launch edge');
            break;
    case 'ff':
            console.log('launch ff');
            break;                
    
        default:
            console.log('please enter right browser');
            break;
    }
};

 let isInit = initDriver('chrome');

 if(isInit){
    console.log('enter the url: google.com');
 };


