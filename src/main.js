"use strict";

// Generated by CoffeeScript 2.7.0
(function () {
  // Functions
  var age, author, bitList, cube, family, html, job, lorem, married, me, name, names, printName, quote, sentence, singers, square;

  square = function square(x) {
    return x * x;
  };

  cube = function cube(x) {
    return square(x * x);
  };

  console.log(square(7));
  console.log(cube(9));

  printName = function printName() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "Angel";
    return "Welcome ".concat(name, " :)");
  };

  console.log(printName('Carlos'));
  console.log(printName()); // Strings

  author = 'Angel';
  quote = "A picture is more than this ... ".concat(author);
  sentence = "".concat(22 / 7, " is a godd aproximation to pi number");
  console.log(author);
  console.log(quote);
  console.log(sentence);
  lorem = "lorem sdafsdaf fsd sdfsfsfd sdafsdfsadf asdfsadfsdf";
  console.log(lorem);
  html = "map --> how to mke money\n  step 2 --> how to destroy\nstep 3 -> life is hapiness";
  console.log(html); // Objects and Arrays

  names = ['angel', 'carlos', 'juan', 'pedro'];
  singers = {
    Maluma: 'Pop',
    Elvis: 'Rock'
  };
  bitList = [1, 0, 1, 0, 0, 0, 1, 0, 1];
  family = {
    cousin: {
      name: 'Carla',
      age: 30
    },
    mother: {
      name: 'Lourdes',
      age: 60
    }
  };
  console.log(names);
  console.log(singers);
  console.log(bitList);
  console.log(family); // Shortcut Objects

  name = 'Angel';
  age = 25;
  job = 'Software Developer';
  married = false;
  me = {
    name: name,
    age: age,
    job: job,
    married: married
  };
  console.log(me);
}).call(void 0);