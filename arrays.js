let faveSongs = [
    "American Idiot",
    "Land Down Under",
    "Satisfaction"
];

faveSongs[1] = "Celebration";
console.log(faveSongs[1]);

//The list starts from 0 not 1
//Information in an array can be changed later
//The original data is overwritten not moved

console.log(faveSongs.length);

//Length on the array returns the number of items in the array

faveSongs = [
    "American Idiot",
    "Land Down Under",
    "Satisfaction"
];

faveSongs.push("Smoke on the Water");
console.log(faveSongs);

//Push adds an entry to the end of an array

faveSongs = [
    "American Idiot",
    "Land Down Under",
    "Satisfaction"
];

faveSongs.pop();
console.log(faveSongs);

//Pop removes the last entry from an array

faveSongs = [
    "American Idiot",
    "Land Down Under",
    "Satisfaction"
];

console.log(faveSongs.pop());

//Pop also returns the value that was removed

let faveWebsites = [
    "Youtube",
    "TvTropes",
    "Twitch"
];

faveWebsites.push("BBC Weather", "Polygon");
faveWebsites.pop();
console.log(faveWebsites);
//Push can push multiple items at once

faveWebsites = [
    "Youtube",
    "TvTropes",
    "Twitch"
];

faveWebsites.shift();
console.log(faveWebsites)
//Shift removes the first item from an array

faveWebsites = [
    "Youtube",
    "TvTropes",
    "Twitch"
];

faveWebsites.unshift("Polygon", "BBC Weather");
console.log(faveWebsites)
//Unshift adds new items to the start of an array
//Unshift can add multiple iotesm and will show up in the order theya re entered

faveWebsites = [
    "Youtube",
    "TvTropes",
    "Twitch",
    "BBC Weather",
    "Polygon"
];

let newFaves = faveWebsites.slice(1,4);
console.log(newFaves);

//Slice is used to creat a new array with soem of the contents ffom an existing array
//The original array remains untouched and is just used as the basis for the slice method
//The new array starts from the first selected number and ends one before the second number
//Everything betweeen the numbers is include except the item in the end number
//e.g. 1,4 would include items 1, 2 & 3 but exclude 4

faveWebsites = [
    "Youtube",
    "TvTropes",
    "Twitch",
    "BBC Weather",
    "Polygon"
];

faveWebsites.splice(0, 4,"BBC News", "Kotaku");
console.log(faveWebsites);

//Splice adds new items into an array and also removes items at the same time
//This method alters the original array
//The first number shows where the new info will be entered
//The second number determines what entries will be deleted
//Entries will be delted from one before the second number
//The above example replaces the first two entries and deltes everything else before the 5th entry

//List of array methods
//https://www.w3schools.com/js/js_array_methods.asp