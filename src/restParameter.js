//var args: rest parameter : ...

function selectCountryFromDropdown(...countryName){
    console.log("selectCountry: ",countryName);
    console.log("selectCountry: ",countryName.length);

    for(let e of countryName){
        console.log(e);
            
    }
    
};


function fillValues(name, ...details){
    console.log("checking the details", details);
    console.log(details.length);

    for(let e of details){
        console.log(e);
            
    }

    };

selectCountryFromDropdown('India','UK','USA','UAE');
selectCountryFromDropdown('USA');


fillValues("savitha", 100, "Bangalore");