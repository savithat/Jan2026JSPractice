
var browser = '  SAFari ';

switch(browser.trim().toLocaleLowerCase()){
    case 'chrome':{
            console.log("launching chrome browser");
        break;
    }
    case 'firefox':{
        console.log("launching firefox browser");
        break;
    }
    case 'edge':{
        console.log("launching edge browser");
        break;
    }
    case 'safari':{
        console.log("launching safari browser");
        break;
    }
    default:{
        console.log("Please enter browser name properly");
        break;
    }
}

