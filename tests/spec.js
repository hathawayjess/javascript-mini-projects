describe('joe', function () {
  it('should exist', function () {
    expect(joe).toEqual(jasmine.any(Object));
  });

  it('should have a name key', function () {
    expect(joe.name).toEqual('Joe')
  });

  it('should have an age key', function () {
    expect(joe.age).toEqual(50);
  });

  it('should have a method called setAge', function () {
    expect(joe.setAge).toEqual(jasmine.any(Function))

  });

  it('should change Joe\'s age', function () {
    joe.setAge(10);
    expect(joe.age).toEqual(10);
  });

});

describe('returnName', function () {
    var testObj = {
      name: "Brett"
    }
    expect(returnName(testObj)).toEqual('Brett')
});

describe('sally', function () {
    it('should exist', function () {
        expect(sally).toEqual(jasmine.any(Object))
    });

    it('should have a name and age property', function () {
        expect(sally.name).toEqual('Sally')
        expect(sally.age).toEqual(27)
    });
});

describe('Pet', function () {
    beforeEach(function () {
      spyOn(console, 'log')
    });

    it('should exist', function () {
      expect(Pet).toEqual(jasmine.any(Function))
    });

    it('should log the pets information', function () {
        var pep = new Pet('pep', 'dog', 'black');
        pep.log();
        expect(console.log).toHaveBeenCalled();
    });
});

describe('Shopping', function () {
    it('should exist', function () {
      expect(shopping).toEqual(jasmine.any(Function));
    });

    it('should return an object', function () {
      expect(shopping()).toEqual(jasmine.any(Object));
    });

    it('Should use getCart and addToCart methods', function() {
      var newCart = shopping();
      var arr = ['carrots','almonds','milk','honey'];
      expect(newCart.getCart).toEqual(jasmine.any(Function))
      expect(newCart.addToCart).toEqual(jasmine.any(Function))
      expect(newCart.getCart()).toEqual(arr);
      newCart.addToCart('bananas');
      arr.push('bananas');
      expect(newCart.getCart()).toEqual(arr);
    })
});
