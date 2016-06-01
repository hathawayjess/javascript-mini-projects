//Create a new user object named joe. On this object, create a name key with the value being "Joe" and an age key with the value being 50.
//Add a method on joe called setAge that, when invoked, will take in a newAge parameter and change age to newAge.

var joe = {
	name: "Joe",
	age: 50,
	setAge: function(newAge) {
		joe.age = newAge;
	}
}


//Now invoke the method to change the age value to 40.
//Invoke it again to change the age to 20.

joe.setAge(40);

joe.setAge(20);




//Create a function called returnName that will return any user object's name.
//Hint: use the this keyword 

function returnName() {
	return this.name;
}


//On the line below, declare the returnName function definition as a method to the joe user object.
joe.returnName = returnName;

//Invoke it to return Joe's name.

joe.returnName();

//Create a new user object called sally. Set her name to 'Sally' and her age to 27.
var sally = {
	name: "Sally",
	age: 27
}

//Like you did with joe, add returnName as a method to the sally object. Invoke it.
sally.returnName = returnName;
sally.returnName();


//Write a function that takes both joe and sally as parameters and returns the difference in their ages.
function ageDiff(joe, sally) {
	return sally.age - joe.age;
}



//Make a constructor function called Pet that will create an object with a name property, a species property, and a color property.
//Add a method called log on your constructor that will console.log the pet's name, species, and color.
function Pet(name, species, color) {
	this.name = name;
	this.species = species;
	this.color = color;
	this.log = function() {
		console.log(this.name, this.species, this.color)
	}
}

//Using the Pet constructor, create three new Pet objects passing in the species, breed and color of your favorite pets (or make some up). 
//Store them in variables.

var pet1 = new Pet("name1","species1","color1");
var pet2 = new Pet("name2","species2","color2");
var pet3 = new Pet("name3","species3","color3");

//Invoke the log method on each new pet object.

pet1.log()
pet2.log()
pet3.log()


//Create a function called shopping. Put the cart array (found below) inside of the function.
//var cart = ['carrots','almonds','milk','honey'];

function shopping() {

	var cart = ['carrots','almonds','milk','honey'];

}

//Now uncomment the console.log below and notice that cart is not defined.
//console.log(cart)


//This is because cart is essentially a private variable within the shopping function's scope and is not accessible outside of it.
//How could we make it possible to modify or access that cart array from somewhere else in our code?
//We can use something called the Module Pattern. You can read more about that here: https://toddmotto.com/mastering-the-module-pattern/



//In your shopping function, return two methods. One will be called getCart and the other will be called addToCart.
//getCart will return the cart array and addToCart will take in an item as a parameter and add it to the cart array.

function shopping() {

	var cart = ['carrots','almonds','milk','honey'];

	return {
		getCart: function() {
			return cart;
		},
		addToCart: function(item) {
			cart.push(item);
		}
	}

}

//Invoke the getCart method and console.log the response.
//Invoke the addToCart method, passing in an item as an argument.