// JS Object ----> JSON.  ----Serialization, marshlling
//JSON --->JS Object ------de-serialization , unmarshalling

//API automation
//POST call: url, json
//user Object in JS----> Json String
//json --- Java script Object Notation
//api response (JSON) ---> JS Object

let user = {
    name: 'savitha',
    age: 30,
    city: 'San Jose',
    isActive : true
}

//JS object to JSON
//let userJson = JSON.stringify(user).   ------ single line
let userJson = JSON.stringify(user, null, 2) //
console.log(userJson)
console.log(typeof userJson)


//JSON string to JS object 
let userObject = JSON.parse(userJson);
console.log(userObject)
console.log(typeof userObject)
console.log(user.name === userObject.name)
console.log()

let customer = {
    name: 'savitha',
    age: 30,
    city: 'San Jose',
    isActive : true,
    address: {
        flat: 2134,
        zip: 95000,
        lat: 12.23,
        long: 65.98
    },
    devices: ['iphone', 'MouseEvent', 'keyboard']
};

//JS object to JSON string
let customerJson = JSON.stringify(customer, null, 3);
console.log(customerJson);

//JSON string to JS object 
let customerObj = JSON.parse(customerJson)
console.log(customerObj);

console.log(customer.devices.length === customerObj.devices.length);
console.log(customer.address.flat === customerObj.address.flat);
console.log(customer.address.length === customerObj.address.length);

