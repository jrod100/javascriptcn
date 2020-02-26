let orderCount = 0;

const pizzaOrder = (topping, extra) => {
    console.log (`Pizza with ${topping} and ${extra}`);
    orderCount++;
    return orderCount;
}

pizzaOrder ("pepperoni", "mushroom");
pizzaOrder ("ham", "pineapple");
pizzaOrder ("pepperoni", "extra cheese");

let pin = 1234;
let funds = 350;

const cashWithdrawal = (pin, withdraw) => {
    if (pin == 1234 && withdraw <= funds){
        console.log(`Pin accepted, £${withdraw} withdrawn from account.`);
    }
    else if (withdraw > funds){
            console.log("Funds not available")
    }
    else{
            console.log("Incorrect pin");
        }
    }

cashWithdrawal (1999, 350);
cashWithdrawal (1234, 500);
cashWithdrawal (1234, 250);

const subtractor = (num1, num2) => {
    console.log(num1 - num2);
}

const divider = (num1, num2) => {
    console.log(num1 / num2);
}

subtractor (5, 3);
subtractor (50, 37);
subtractor (100, 25);

divider (10, 5);
divider (30, 3);
divider (6, 5);