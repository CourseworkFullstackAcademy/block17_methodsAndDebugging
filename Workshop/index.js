const coffeeMenu = require("./coffee_data.js");
console.log("Menu: ", coffeeMenu)

// //1. Print an array of all of the drinks on the menu by looping through each object, using the .forEach method, in the coffeeMenu array and printing the name property for each object. 
// const drinkNames = coffeeMenu.forEach((drink) => drink.name)

// //coffeeMenu.forEach((drink) => {

// 	console.log(drinkNames);
// //})

//1. modified. I do not know how to make an array with forEach, so I will use .map instead. I will decalre a variable to be able to console log every drink name into an array.

const drinkName = coffeeMenu.map((drink) => drink.name);
console.log("Drinks on the menu: ", drinkName)

//2. now, print an array for all the drinks that are $5 and under. For this I will use the forEach method to loop through each object in the array, then have a function that will filter out the drinks that or $5 or under. OR, maybe, the filter method will work for that!
//I have to add map to get it to print in an array.
const underFive = coffeeMenu.filter((drink) => drink.price <= 5).map((drink) => drink.name);
console.log("Drinks under $5 ", underFive)

//3. Print an array of drinks that are priced @ an even #. So, I will use the filter method again to filter out drinks that have a remainder of 0 when divided by 2 with the modulus function, then print it in an array with the .map method.
const evenPrice = coffeeMenu.filter((drink) => drink.price % 2 === 0).map((drink) => {
	return {
		name: drink.name,
		price: drink.price
	};
});
console.log("Drinks with prices that are even numbers ", evenPrice);

//4.  Print the total if you were to order one of every drink. Ok, So, since this is a sum, I will use reduce to add all of the prices, then console.log the total to print it.
const totalAllDrinks = coffeeMenu.reduce((sum, currPrice) => (currPrice.price += sum), 0);
console.log(`Cost of ordering one of every drink: $${totalAllDrinks}`);

//5. Print an array with all the drinks that are seasonal. I will try using filter first then using map to get an array.
const seasonalDrinks = coffeeMenu.filter((drink) => drink.seasonal === true).map((drink) => drink.name);
console.log("Seasonal Drinks ", seasonalDrinks);

//6. Print all the seasonal drinks with the words "with imported beans" after the item name. For example: "affogato with imported beans". For this I will simply copy line 31, change the variable name, delete the .map method part, then change the console.log to have only the drink name and read with imported beans. 

//6. MODIFIED That did not work because it still printed an array. So, I'll use the same code to get an array of the seasonal drinks, but then use .forEach to got through each seaonal drink in the array and print it with the message. 
const importedBeans = coffeeMenu.filter((drink) => drink.seasonal === true).map((drink) => drink.name);
importedBeans.forEach((drink) => console.log(`${drink} with imported beans.`))

























console.log(`Hello, World`)

