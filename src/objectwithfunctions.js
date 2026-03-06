let user = {
    //property key value pair
    name: 'savi',
    age: 30,
    dept: 'EC',
    salary: 2.34,
    city: 'Bangalore',
    //functions: behaviour
    code(){
        console.log('user is coding');
    },
    travel(){
        console.log('user is travel');
    },
};

console.log(user);
console.log(user.name);
console.log(user.city);
console.log(user.code);
user.code();
user.travel();

console.log("-------");

let loginPage ={
    useerName: 'savi@gmail.com',
    password: 'root',
    role: 'admin',

    login(){
        console.log('login to app',this.useerName);
        this.resetPassword();
    },
    resetPassword(){
        console.log('resetting the password');
    },
    logout(){
        console.log('logout from app');
    }

};

loginPage.login();