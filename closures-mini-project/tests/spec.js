describe('closures', function() {

	describe('doThrice', function() {

		it('should exist', function() {
			expect(doThrice).toBeDefined();
		})

		it('should be a function', function() {
			expect(doThrice).toEqual(jasmine.any(Function))
		})
})

	describe('sayHelloClosure', function() {

		it('should exist', function() {
			expect(sayHelloClosure).toBeDefined();
		})
		it('should be assigned to a function invocation', function() {
				var say = function() {
				console.log(hello);
				}
			expect(sayHelloClosure()).toEqual(JSON.stringify(say));
		})

	})


	describe('numberGenerator', function() {
		it('should exist', function() {
			expect(numberGenerator).toBeDefined();
		})
		it('should return a function definition', function() {
			expect(numberGenerator).toEqual(jasmine.any(Function));
		})

	})

	describe('number', function() {
		it('should exist', function() {
			expect(number).toBeDefined();
		})
		it('should be assigned to a function invocation', function() {
			var checkNumber = function() {
  				console.log(num);
 			 } 
			expect(number()).toEqual(JSON.stringify(checkNumber));
		})
	})

	describe('helloGoodbye', function() {
		it('should exist', function() {
			expect(helloGoodbye).toBeDefined();
		})
		it('should return an object', function() {
			expect(helloGoodbye()).toEqual(jasmine.any(Object))
		})
	})

	describe('greeting', function() {
		it('should exist', function() {
			expect(greeting).toBeDefined();
		})
		it('should be equal the object returned by numberGenerator', function() {
			expect(greeting).toEqual(jasmine.any(Object))
		})
		it('should greet correctly ', function() {
			var test = (function() {
		      	var newGreet = helloGoodbye();
				var sayHi = "Hello, ";
				var sayBye = "Goodbye, ";
				var name = 'Joe';

		return {
			name: name,
			sayHi: sayHi,
			sayBye: sayBye
		}
		})();
			
			expect(greeting.hello).toEqual(jasmine.any(Function))
      		expect(greeting.goodbye).toEqual(jasmine.any(Function))
      		expect(greeting.hello(test.name)).toEqual(test.sayHi + test.name)
      		expect(greeting.goodbye(test.name)).toEqual(test.sayBye + test.name)
		})
	})

	describe('myHello', function() {
		it('should exist', function() {
			expect(myHello).toBeDefined();
		})
		it('should return a string', function() {
			expect(myHello).toEqual(jasmine.any(String))
		})
	})

	describe('myGoodbye', function() {
		it('should exist', function() {
			expect(myGoodbye).toBeDefined();
		})
		it('should return a string', function() {
			expect(myGoodbye).toEqual(jasmine.any(String))
		})
	})

	describe('passwordGame', function() {
		it('should equal an object', function() {
			expect(passwordGame).toEqual(jasmine.any(Object))
		})
		it('should return true if guess is correct', function() {
			var test2 = 'xh38sk';
			expect(passwordGame.guessPassword(test2)).toBeTruthy();
		})
		it('should return false if guess is incorrect', function() {
			var test1 = 'heyisthisit?';
			expect(passwordGame.guessPassword(test1)).toBeFalsy();
		})

	})





});