// let user = {
//     name: 'savitha',
//     age: 30,
//     city: 'San Jose',
//     isActive : true,
// };

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
    },
    devices: ['iphone', 'MouseEvent', 'keyboard']
};

//for in loop
for(let key in user){
    console.log(key, ':', user[key] )
}

console.log(user.devices.length)