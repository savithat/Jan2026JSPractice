
//no function over loading in js

function search(){
    console.log("Hello search1");
}
search();

function search(name){  //1 parameter
    console.log("Hello search2", name);
}

search();