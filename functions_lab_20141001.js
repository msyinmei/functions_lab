// //1. Write a function that prints "Hello, World!" to the console when called.

// var greeting = function(){
// 	console.log("Hello, World!");
// };

// greeting();

// //making it separate:
// var greeting = function(){
// 	return("Hello, World!");
// };

// console.log(greeting());

// //2. Write a function that takes the name of a person as an argument, and says "Hello" to that person in the console.
// var greeting = function(name) {
// 	console.log("Hello " + name);
// };

// greeting("Yin");

//3. If your previous function did not use the return keyword, modify it so that it does.
//It should return the message to be logged instead of logging it directly. 
//Store the result in a variable and log that instead.
//Bonus: Appreciate the difference between logging from within the function and returning a value to be logged outside the function. (did so with Calvin!)

// var greeting = function(name) {
// 	return("Hello " + name);
// };

// var message = greeting("Yin");
// console.log(message);

//4. Write a function add() that takes two numbers as arguments and returns the sum.
//Write a function sub() take takes two numbers as arguments and returns the difference.
//Write a function combine() that takes three parameters. The first two are numbers and the last is a boolean.
//If the boolean is true, return the sum of the first two arguments, otherwise, return the difference. Hint: use add() and sub() from within combine().

var add = function(x,y){
	return (x + y);
};

// console.log(add(1,2));

var sub = function(a,b) {
	return (a - b);
};

// console.log(sub(2,1));

var combine = function( q, w, u){
	if (u === true) {
		return(add(q,w));
	} else {
		return(sub(q,w));
	}
};

console.log(combine(5,9,true));
console.log(combine(6,2,false));























