//function expression
let cart = function addToCart(productName){
    console.log('add to cart',productName);
    return true;
}

//function expression name: cart
//Actual function name: addToCart
//addToCart() ---- error
console.log(cart)  //give function name

//call the function
let n1 = cart('macbook');
 console.log(n1);

 let wairFor = function waitForElementuntillVisible(productName){
    console.log('add to cart',productName);
    return true;
}
console.log("****",wairFor.name);

let flag = wairFor('mac book');
console.log(flag);
flag = wairFor('iPhone');
console.log(flag);
flag = wairFor('tv');
console.log(flag);