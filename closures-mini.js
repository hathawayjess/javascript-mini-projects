

//Given the following code, write one line of code that will print "Hello, world!" three times.


function doThrice(action) {
	action();
	action();
	action();
}

function greet() {
	console.log("Hello, world!");
}


//Code here


////////////////////////////////////////////////////////////////////////////////////////////////////////


//Below is a function that returns the definition of a function. 
//On Line A, assign the invocation of sayHello to a new variable called sayHelloClosure. 
//Uncomment the console.log and notice that it logs the function definition of say.
//On Line B, invoke that new variable. Check your console for 'Hello again, world!'.
//Because of the closure, we were able to 'look inside' the scope of the sayHello function.

function sayHello() {
	var say = function() {
		console.log(hello);
	}
	var hello = 'Hello again, world!';
	return say;
}

//Line A

//console.log(sayHelloClosure);
//Line B




///////////////////////////////////////////////////////////////////////////////////////////////////////////


//NO TESTS
//You found a mysterious piece of code that calculates and prints theAnswer. What will it print and why?

	//Answer


var universe = 1;  //global variable

function getEverything(){
    var life = 22; //declared in function
    return life;
}

function doubleUniverse(){
    universe = universe * 2;
}

//double universe 4 times
for(var life=0; life<4; life++){  
    doubleUniverse(); 
}

var everything = getEverything();
var theAnswer = life + universe + everything;
console.log(theAnswer);



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




//On line A, declare a local variable called num and give it a value of 1.
//On line B, write another function called checkNumber. Make it so the checkNumber function will console.log(num).
//On line C, return the function definition of checkNumber.
//On line D, assign the invocation of numberGenerator to a new variable called number.
//On line E, invoke number. What does it return? Why?


function numberGenerator() {
  //Line A

  //Line B


  num++;
  //Line C


}

//Line D


//Line E





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Step 1: Write a function called helloGoodbye. Inside of this function, declare two local variables: sayHi and sayBye. Examples below.
//        var sayHi = "Hello, "; 
//        var sayBye = "Goodbye, ";

//Step 2: Below these variables, declare two functions. Both should take a name parameter. One should be called hello and one should be called goodbye.
//		  The hello function should return sayHi + name and the goodbye function should return sayBye + name

//Step 3: Following the module pattern, return an object containing these two function definitions so we can access them from outside helloGoodbye's scope.

//Step 4: Now invoke helloGoodbye and save it to a new variable called greeting. 
//        Then, invoke the hello method, passing in your name and save it to a new variable called myHello. 
//        Invoke the goodbye method, passing in your name and save it to a new variable called myGoodbye. 






//Code here








///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



//Below is a function with a private reference to the password variable.
//Inside the return object, write a method called guessPassword that will take in a guess parameter.
//Have that method return true if the guess is equal to password, and false if it's not.

function secretPassword() {
  var password = 'xh38sk';
  return {
  	//Code here
    }
  }


var passwordGame = secretPassword();
passwordGame.guessPassword('heyisthisit?'); // should return false
passwordGame.guessPassword('xh38sk'); // should return true







/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//NO TESTS

//Step 1: Take a look at the function below and think about what it will print in the console.
//        When you invoke the function below, you'll notice that it prints the number 5 multiple times.
//        The reason it does this is because the context/scope is the same for all 5 functions in the result array.
//        Therefore, every time i is incremented, it updates scope. Any function trying to access i will return 5,
//        because i is equal to 5 when the for loop exits.

//Step 2: Get scopeFunc to print 1, then 2, then 3, etc. You can do this by giving each function inside of the for loop its own scope. 
//		  HINT: Wrap it in a function that invokes immediately. You will need to pass i in as an argument.




function scopeFunc() {

	var result = [];

	for (var i = 0; i < 5; i++) {
		result[i] = function() {
			console.log(i);
		}
	}

	result[0]();
	result[1]();
	result[2]();
	result[3]();
	result[4]();

}

scopeFunc();


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//QUESTIONS - feel free to use google to research

//1) In your own words, what is execution context? What is the call stack?
	//Answer



//2) What is the scope chain?
	//Answer



//3) What are some reasons to use closures in JavaScript?
	//Answer