let space1 = "x";
let space2 = "o";
let space3 = " ";
let space4 = "x";
let space5 = "x";
let space6 = " ";
let space7 = "o";
let space8 = " ";
let space9 = " ";

console.log("    |     | "   );
console.log(` ${space1}  |  ${space2}  | ${space3}  `);
console.log("    |     | "   );
console.log("---------------");
console.log("    |     | "   );
console.log(` ${space4}  |  ${space5}  | ${space6}  `);
console.log("    |     | "   );
console.log("---------------");
console.log("    |     | "   );
console.log(` ${space7}  |  ${space8}  | ${space9}  `);
console.log("    |     | "   );

if(space1 && space2 && space3 == "x" || space1 && space2 && space3 == "o"){
    console.log("Top row wins!");
}
else{
    console.log("There's all to play for!");
}

//Current method works but will report a win even if all spaces are empty
//Consider making each releveant space equal X or O

let childFare = "£8.00";
let adultFare = "£10.95";
let senior = "£7.50";
let age = 23;

if(age < 18){
    console.log(childFare);
}
else if(age >= 18 && age <= 59)
{
    console.log(adultFare);
}
else{
    console.log(senior);
}