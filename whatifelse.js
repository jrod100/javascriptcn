// == Checks if the values are equal regardless of type
// === Checks if the values and type are equal
// != Checks if the values are not equal regardless of type
// !== Checks if the values and type are not equal

if (1 === "1"){
    console.log (true);
}
else{
    console.log(false);
}

if (1 != "1"){
    console.log (true);
}
else{
    console.log(false);
}

// > equals more than
// >= equals more than or equal to
// < equals less than
// <= equals less than or equal to

let age = 23;
let country = "UK";

if (age > 17 && country == "UK"){
    console.log("Yes I can serve you.");
}
else{
    console.log("Sorry but I can't serve you.");
}

// && equals and (obviously)
// || equals or