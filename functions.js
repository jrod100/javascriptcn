const takeOrder = (size, drinkType, price) => {
    console.log(`Order received: ${size} ${drinkType} that will be ${price} please.`)
}
//This function details all the info I need for the order

takeOrder("Tall", "Latte", "£5.50");
takeOrder("Small", "Cappuchino", "£2.30");
takeOrder("Medium", "Pepsi", "£3.60");

//Thanks to the function I don't hsve to declare a new variable each time
//Other thingd in the function are also done for me saving time and effort

const personalInfo = (name, age, favouriteColour) => {
    console.log(`This is ${name} they are ${age} years old and their favourite colour is ${favouriteColour}.`)
}

personalInfo("John", "23", "purple");
personalInfo("Ashley", "20", "red");
personalInfo("Bob", "35", "yellow");

const sandwichOrder = (filling1, filling2, filling3, breadType) => {
    console.log(`Here is your order of ${filling1}, ${filling2} and ${filling3} on ${breadType}`)
}

sandwichOrder("Turkey", "Ham", "Beef", "White");
sandwichOrder("Lettuce", "Cheese", "Onion", "Brown");
sandwichOrder("Beef", "Bacon", "Sausage", "White");