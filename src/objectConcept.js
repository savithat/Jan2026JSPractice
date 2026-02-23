//object ->  non primitive data type
//reference type

//key-value pair format

let user = {
    name: 'savitha',
    age: 30,
    city: 'San Jose',
    isActive : true,
    address: {
        flat: 2134,
        zip: 95000,
        lat: 12.23,
        long: 65.98
    }
};


console.log(user)
console.log(user['name']) // u can access using []
console.log(user.name)
console.log(user.age)
console.log(user.city)
console.log(user.isActive)

console.log()
console.log(user.address)
console.log(user.address.zip)
console.log(user.address['zip'])
console.log(user['address']['zip'])

//add property to object -- creating new key-value 
user.email = 'savitha@gmail.com'
console.log(user)


//delet property to object
console.log()
delete user.age
console.log(user)

//updating
console.log()
user.name = 'Sanju'
console.log(user)