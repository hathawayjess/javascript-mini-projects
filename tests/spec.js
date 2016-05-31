describe('user object', function() {


  it('should exist', function() {
    expect(user).toEqual(jasmine.any(Object));
  });

  it('should have a name and age property', function() {
    expect(user.name).toEqual(jasmine.any(String));
    expect(user.age).toEqual(jasmine.any(Number));
  });

  it('should have an email property', function() {
    expect(user.email).toBeTruthy();
  })

  it('should have a fake password', function() {
    expect(user.password).toBeTruthy();
  })
})


describe('getKeys', function () {

  beforeEach(function() {
    spyOn(console, 'log');
  })

  it('should exist', function() {
    expect(getKeys).toEqual(jasmine.any(Function));
  })

  it('should have logged each key', function () {
    getKeys()
    expect(console.log).toHaveBeenCalledWith('name')
    expect(console.log).toHaveBeenCalledWith('password')
    expect(console.log).toHaveBeenCalledWith('email')
    expect(console.log).toHaveBeenCalledWith('age')
  });

});

describe('getValues', function () {
    beforeEach(function() {
      spyOn(console, 'log');
    })

    it('should exist', function () {
      expect(getValues).toEqual(jasmine.any(Function))
    });

    it('should log the values', function () {
      getValues();
      expect(console.log.calls.count()).toEqual(4)
    });
});


describe('changeEmail', function () {

  beforeEach(function() {
    user = {
      email: 'foo'
    }
  })

  it('should exist', function () {
    expect(changeEmail).toEqual(jasmine.any(Function));
  });

  it('should change the email to whatever is passed to it', function () {

    changeEmail('bar')
    expect(user.email).toEqual('bar');
  });
});

describe('deletePassword', function() {
  beforeEach(function() {
    user = {
      password: 'bananas',
      name: 'monkey'
    }
    spyOn(console, 'log');
  })

  it('should exist', function () {
    expect(deletePassword).toEqual(jasmine.any(Function))
  });

  it('should delete the password', function () {


    deletePassword();
    expect(user.password).toBeFalsy();
    expect(user.name).toEqual('monkey');

  });
})


describe('checkStatus', function() {
  beforeEach(function() {
    spyOn(console, 'log');
  })

  it('should exist', function () {
    expect(checkStatus).toEqual(jasmine.any(Function));
  });

  it('should console.log the reading status of each book', function () {
    checkStatus();
    expect(console.log).toHaveBeenCalledWith(true);
    expect(console.log).toHaveBeenCalledWith(false);
    expect(console.log.calls.count()).toEqual(4);
  });
})


describe('billGates', function () {
  it('should exist', function () {
    expect(billGates).toEqual(jasmine.any(Function));
  });

  it('should return true', function () {
    expect(billGates()).toEqual(true);
  });

  it('should return false if no bill gates books exist', function() {
    library = [
      {
          author: 'Steve Jobs',
          title: 'Walter Isaacson',
          readingStatus: false
      },
      {
          author: 'Suzanne Collins',
          title:  'Mockingjay: The Final Book of The Hunger Games',
          readingStatus: false
      },
      {
      	   author: 'J.R.R. Tolkein',
      	   title: 'The Hobbit',
      	   readingStatus: false
      }
    ]

    expect(billGates()).toEqual(false);
  })
});


describe('removeBooks', function () {
  beforeEach(function() {
    spyOn(console, 'log')
  })

  it('should exist', function () {
    expect(removeBooks).toEqual(jasmine.any(Function))
  });

  it('should remove books not read', function () {
    removeBooks();
    expect(library.length).toEqual(1);
  });
});
