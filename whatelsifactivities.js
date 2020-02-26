let password = "Whatever";
if (password.length < 8){
    console.log("That password is too short");
}
else{
    console.log(password);
}
//Length checks the length of a string

let num = 4;
if (num % 3 == 0|| num % 5 ==0){
    console.log("This number is divisible by 3 or 5");
}
else{
    console.log("This number is not divisible by 3 or 5");
}
//% checks if a number is divisble by a stated number
//e.g. 20 % 5 === 0 
//The triple equals to 0 checks whether there is nothing left over
//A double or triple equals can be used based on necessity

num = 30;
if (num % 3 == 0 && num % 5 == 0 == false){
    console.log("Fizz");
}
else if (num % 5 == 0 && num % 3 == 0 == false){
    console.log("Buzz");
}
else if(num % 3 == 0 && num % 5 == 0){
    console.log("Fizz Buzz");
}
else{
    console.log(num);
}
// The false is necessary so that the progam can determine that either 3 or 5 isn't divisible
// Without the false the program defaults to the first if in the loop 
// In this case just saying Fizz instead of Fizz Buzz
//A better way would be to put the double check first as the code checks the first thing
//and will stop early otherwise

let time = 18;
let placeOfWork = "CodeNation";
let townOfHome = "Ellesmere Port"

if (time <= 7 || time >=19){
    console.log(`My current location is ${townOfHome}`);
}
else if(time >7 && time <9){
    console.log("I am currently commuting to work");
}
else if(time >=9 && time <=17){
    console.log(`My current location is ${placeOfWork}`);
}
else{
    console.log("I am returning home.");
}

//Defining whether a number is greater than and ore less than other numbers
//Allows for multiple n umbers to be usable in a single if else statement
//Such as the hours from 9 to 17 being eligible for work
//This also allows for the singling out of single hours for transit


let word = "wow";
let lastLetter = word[word.length-1];
if(lastLetter != word.charAt(0)){
    console.log(false);
}
else{
    console.log(true);
}

//charAt checks location of characters in a string
//0 returns the first character whilst -1 returns the last letter

let num1 = 9;
let num2 = 5;
let result = num1 + num2;
let badResult = num1 * num2;
if(result % 2 == 0){
    console.log(result);
}
else{
    console.log(badResult);
}

//result automatically adds the two numbers together
//badResult automatically multiplies the numbers together