let faveFilms = [
    "Underworld",
    "The Fifth Element",
    "007 Skyfall"
];

faveFilms.push("Men in Black", "Inception");

for (filmIndex = 0; filmIndex < faveFilms.length; filmIndex++){
    console.log(faveFilms[filmIndex]);
}

for(i = 0; i < 10; i++){
    console.log(i);
}

for(i = 9; i > -1; i--){
    console.log(i);
}

let cards = ["Diamond", "Spade", "Heart", "Club"];
let currentCard = " ";

while (currentCard != "Spade"){
    console.log(currentCard);
    currentCard = cards[Math.floor(Math.random()*4)];
}

console.log(currentCard);

let faveFilms = [
    "Underworld",
    "The Fifth Element",
    "Ghostbusters",
    "Men in Black",
    "Inception"
];

const filmCheck = () => {
    if (faveFilms[2] != "Ghostbusters"){
    console.log("Boo, we want Ghostbusters");
    }
    else{
    console.log("Yay Ghostbusters");
    }
}

filmCheck();

let number = 50;
let currentNum = 0;

while (currentNum != number){
    currentNum = (Math.floor(Math.random()*51));
    console.log(currentNum);
}