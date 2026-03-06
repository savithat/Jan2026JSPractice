//IIFE: Immidiate Invoke Function Expression (called by itself)
//has no name: anonymous function

(function(browserName){
    console.log("Hello world");
    console.log(10+20);
    console.log("browserName:", browserName);
    //DB connection
    //read test data from excel/csv
    //start the server
})('chrome');


console.log();
(function(){
    console.log("Hello world, Hi");
})();


console.log();
(function(){
    console.log("Hello world, bye");
})();