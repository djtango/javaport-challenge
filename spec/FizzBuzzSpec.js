describe("The game: key methods", function(){ // the following is like the 'do' in Ruby: function(){
  var fizzbuzz = new FizzBuzz();
  it("can tell a number is divisible by 3", function(){
    expect(fizzbuzz.isDivisibleByThree(3)).toBe(true);
  });

  it("can tell when a number is not divisible by 3", function(){
    expect(fizzbuzz.isDivisibleByThree(4)).toBe(false);
  });

  it("can tell a number is divisible by 5", function(){
    expect(fizzbuzz.isDivisibleByFive(5)).toBe(true);
  });

  it("can tell when a number is not divisble by 5", function(){
    expect(fizzbuzz.isDivisibleByFive(2)).toBe(false);
  });

  it("can tell when a number is divisible by 3 and 5", function(){
    expect(fizzbuzz.isDivisibleByThreeAndFive(15)).toBe(true);
  });

  it("returns 'Fizz' when a number is divisible by 3", function(){
    expect(fizzbuzz.printer(3)).toBe('Fizz');
  });

  it("return 'Buzz' when a number is divisible by 5", function(){
    expect(fizzbuzz.printer(5)).toBe('Buzz');
  });

});
