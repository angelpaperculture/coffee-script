"use strict";

// Generated by CoffeeScript 2.7.0
(function () {
  // Everything is an expression -> all return except (break, continue and return)
  var eldest, footprints, globals, grade, lottery, major, name, one, ref, ref1, six, solipsism, speed, three, two, zip;

  grade = function grade(student) {
    if (student.excellentWork) {
      return "A+";
    } else if (student.okayStuff) {
      if (student.triedHard) {
        return "B";
      } else {
        return "B-";
      }
    } else {
      return "C";
    }
  };

  eldest = 24 > 21 ? "Liz" : "Ike";
  console.log(grade, eldest);
  six = (one = 1) + (two = 2) + (three = 3); //# the declaration of variables automaticaly is in the top

  console.log(six);

  globals = function () {
    var results;
    results = [];

    for (name in window) {
      results.push(name);
    }

    return results;
  }().slice(0, 10);

  console.log(globals); //alert(
  //  try
  //    nonexistent / undefined
  //  catch error
  //    "And the error is ... #{error}"
  //)
  // Operators and Aliases
  //is	              ===
  //isnt	            !==
  //not	            !
  //and	            &&
  //or	              ||
  //true,yes, on	    true
  //false, no, off   false
  //@, this	        this
  //a in b	          [].indexOf.call(b, a) >= 0
  //a of b	          a in b
  //for a from b	    for (a of b)
  //a ** b         	a ** b
  //a // b	          Math.floor(a / b)
  //a %% b	          (a % b + b) % b
  //launch() if ignition is on
  //volume = 10 if band isnt SpinalTap
  //letTheWildRumpusBegin() unless answer is no
  //if car.speed < limit then accelerate()
  //winner = yes if pick in [47, 92, 13]
  //print inspect "My name is #{@name}"
  // The existential Operator

  solipsism = (ref = typeof mind !== "undefined" && mind !== null && (typeof world === "undefined" || world === null) ? true : void 0) != null ? ref : 14;
  speed = 0;

  if (speed == null) {
    speed = 15;
  }

  footprints = typeof yeti !== "undefined" && yeti !== null ? yeti : "bear";
  console.log(solipsism, speed, footprints);
  major = 'Computer Science';

  if (major == null) {
    signUpForClass('Introduction to Wines');
  }

  lottery = {};
  zip = typeof lottery.drawWinner === "function" ? (ref1 = lottery.drawWinner().address) != null ? ref1.zipcode : void 0 : void 0;
  console.log(zip); //a?	                      tests that a is in scope and a != null
  //a ? b	                  returns a if a is in scope and a != null; otherwise, b
  //a?.b                     returns a.b if a is in scope and a != null; otherwise, undefined
  //a?['b']
  //a?(b, c)  	              returns the result of calling a (with arguments b and c) if a is in scope and callable; otherwise, undefined
  //a? b, c
  //a ?= b	                  assigns the value of b to a if a is not in scope or if a == null; produces the new value of a
  // Chaining Function Calls

  $('body').click(function (e) {
    return $('.box').fadeIn('fast').addClass('show').css('background', 'white');
  });
}).call(void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJtYXBwaW5ncyI6Ijs7O0FBQStFO0VBQUE7RUFBQTs7RUFDL0VBLFFBQVEsZUFBQ0MsT0FBRDtJQUNOLElBQUdBLE9BQU8sQ0FBQ0MsYUFBWDthQUNFO0lBREYsT0FFSyxJQUFHRCxPQUFPLENBQUNFLFNBQVg7TUFDSCxJQUFHRixPQUFPLENBQUNHLFNBQVg7ZUFBMEI7TUFBMUI7ZUFBbUM7TUFEaEM7SUFBQTthQUdIOztFQU5JLENBQVI7O0VBT0FDLFNBQVksS0FBSyxFQUFMLEdBQWEsS0FBYixHQUF3QixLQUFwQztFQUVBQyxPQUFPLENBQUNDLEdBQVIsQ0FBWVAsS0FBWixFQUFtQkssTUFBbkI7RUFFQUcsTUFBTSxDQUFDQyxNQUFNLENBQVAsS0FBYUMsTUFBTSxDQUFuQixLQUF5QkMsUUFBUSxDQUFqQyxDQUFOLENBWitFOztFQWEvRUwsT0FBTyxDQUFDQyxHQUFSLENBQVlDLEdBQVo7O0VBRUFJLFVBQVU7O0lBQUNDOztJQUFBO21CQUFBQztJQUFBOzs7R0FBRCxHQUF5QkMsS0FBekIsQ0FBeUIsQ0FBekIsRUFBeUIsRUFBekIsQ0FBVjs7RUFFQVQsT0FBTyxDQUFDQyxHQUFSLENBQVlLLE9BQVosRUFqQitFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXNEL0VJLHFKQUE2QyxFQUE3QztFQUNBQyxRQUFRLENBQVI7OztJQUNBQSxRQUFTLEVBQVQ7OztFQUNBQyw0REFBYUMsSUFBYixHQUFvQixNQUFwQjtFQUVBYixPQUFPLENBQUNDLEdBQVIsQ0FBWVMsU0FBWixFQUF1QkMsS0FBdkIsRUFBOEJDLFVBQTlCO0VBRUFFLFFBQVEsa0JBQVI7O0VBQ0EsSUFBT0EsYUFBUDtJQUNFQyxlQUFlLHVCQUFmOzs7RUFFRkMsVUFBVSxFQUFWO0VBQ0FDLHFHQUFtQyxDQUFFQyxPQUFyQyxHQUFxQyxNQUFyQyxHQUFxQyxNQUFyQztFQUVBbEIsT0FBTyxDQUFDQyxHQUFSLENBQVlnQixHQUFaLEVBcEUrRTs7Ozs7Ozs7O0VBZ0YvRUUsRUFBRSxNQUFGLEVBQ0NDLEtBREQsQ0FDTyxVQUFDQyxDQUFEO1dBQ0xGLEVBQUUsTUFBRixFQUNHRyxNQURILENBQ1UsTUFEVixFQUVHQyxRQUZILENBRVksTUFGWixFQUdDQyxHQUhELENBR0ssWUFITCxFQUdtQixPQUhuQjtFQUZGO0NBaEYrRSIsIm5hbWVzIjpbImdyYWRlIiwic3R1ZGVudCIsImV4Y2VsbGVudFdvcmsiLCJva2F5U3R1ZmYiLCJ0cmllZEhhcmQiLCJlbGRlc3QiLCJjb25zb2xlIiwibG9nIiwic2l4Iiwib25lIiwidHdvIiwidGhyZWUiLCJnbG9iYWxzIiwicmVzdWx0cyIsIm5hbWUiLCJzbGljZSIsInNvbGlwc2lzbSIsInNwZWVkIiwiZm9vdHByaW50cyIsInlldGkiLCJtYWpvciIsInNpZ25VcEZvckNsYXNzIiwibG90dGVyeSIsInppcCIsInppcGNvZGUiLCIkIiwiY2xpY2siLCJlIiwiZmFkZUluIiwiYWRkQ2xhc3MiLCJjc3MiXSwic291cmNlUm9vdCI6Ii4uLyIsInNvdXJjZXMiOlsic3JjL21haW4uY29mZmVlIl0sInNvdXJjZXNDb250ZW50IjpbIiMgRXZlcnl0aGluZyBpcyBhbiBleHByZXNzaW9uIC0+IGFsbCByZXR1cm4gZXhjZXB0IChicmVhaywgY29udGludWUgYW5kIHJldHVybilcclxuZ3JhZGUgPSAoc3R1ZGVudCkgLT5cclxuICBpZiBzdHVkZW50LmV4Y2VsbGVudFdvcmtcclxuICAgIFwiQStcIlxyXG4gIGVsc2UgaWYgc3R1ZGVudC5va2F5U3R1ZmZcclxuICAgIGlmIHN0dWRlbnQudHJpZWRIYXJkIHRoZW4gXCJCXCIgZWxzZSBcIkItXCJcclxuICBlbHNlXHJcbiAgICBcIkNcIlxyXG5lbGRlc3QgPSBpZiAyNCA+IDIxIHRoZW4gXCJMaXpcIiBlbHNlIFwiSWtlXCJcclxuXHJcbmNvbnNvbGUubG9nIGdyYWRlLCBlbGRlc3RcclxuXHJcbnNpeCA9IChvbmUgPSAxKSArICh0d28gPSAyKSArICh0aHJlZSA9IDMpICMjIHRoZSBkZWNsYXJhdGlvbiBvZiB2YXJpYWJsZXMgYXV0b21hdGljYWx5IGlzIGluIHRoZSB0b3BcclxuY29uc29sZS5sb2cgc2l4XHJcblxyXG5nbG9iYWxzID0gKG5hbWUgZm9yIG5hbWUgb2Ygd2luZG93KVswLi4uMTBdXHJcblxyXG5jb25zb2xlLmxvZyBnbG9iYWxzXHJcblxyXG4jYWxlcnQoXHJcbiMgIHRyeVxyXG4jICAgIG5vbmV4aXN0ZW50IC8gdW5kZWZpbmVkXHJcbiMgIGNhdGNoIGVycm9yXHJcbiMgICAgXCJBbmQgdGhlIGVycm9yIGlzIC4uLiAje2Vycm9yfVwiXHJcbiMpXHJcblxyXG5cclxuIyBPcGVyYXRvcnMgYW5kIEFsaWFzZXNcclxuXHJcbiNpc1x0ICAgICAgICAgICAgICA9PT1cclxuI2lzbnRcdCAgICAgICAgICAgICE9PVxyXG4jbm90XHQgICAgICAgICAgICAhXHJcbiNhbmRcdCAgICAgICAgICAgICYmXHJcbiNvclx0ICAgICAgICAgICAgICB8fFxyXG4jdHJ1ZSx5ZXMsIG9uXHQgICAgdHJ1ZVxyXG4jZmFsc2UsIG5vLCBvZmYgICBmYWxzZVxyXG4jQCwgdGhpc1x0ICAgICAgICB0aGlzXHJcbiNhIGluIGJcdCAgICAgICAgICBbXS5pbmRleE9mLmNhbGwoYiwgYSkgPj0gMFxyXG4jYSBvZiBiXHQgICAgICAgICAgYSBpbiBiXHJcbiNmb3IgYSBmcm9tIGJcdCAgICBmb3IgKGEgb2YgYilcclxuI2EgKiogYiAgICAgICAgIFx0YSAqKiBiXHJcbiNhIC8vIGJcdCAgICAgICAgICBNYXRoLmZsb29yKGEgLyBiKVxyXG4jYSAlJSBiXHQgICAgICAgICAgKGEgJSBiICsgYikgJSBiXHJcblxyXG4jbGF1bmNoKCkgaWYgaWduaXRpb24gaXMgb25cclxuI3ZvbHVtZSA9IDEwIGlmIGJhbmQgaXNudCBTcGluYWxUYXBcclxuI2xldFRoZVdpbGRSdW1wdXNCZWdpbigpIHVubGVzcyBhbnN3ZXIgaXMgbm9cclxuI2lmIGNhci5zcGVlZCA8IGxpbWl0IHRoZW4gYWNjZWxlcmF0ZSgpXHJcbiN3aW5uZXIgPSB5ZXMgaWYgcGljayBpbiBbNDcsIDkyLCAxM11cclxuI3ByaW50IGluc3BlY3QgXCJNeSBuYW1lIGlzICN7QG5hbWV9XCJcclxuXHJcblxyXG4jIFRoZSBleGlzdGVudGlhbCBPcGVyYXRvclxyXG5cclxuc29saXBzaXNtID0gKHRydWUgaWYgbWluZD8gYW5kIG5vdCB3b3JsZD8pID8gMTRcclxuc3BlZWQgPSAwXHJcbnNwZWVkID89IDE1XHJcbmZvb3RwcmludHMgPSB5ZXRpID8gXCJiZWFyXCJcclxuXHJcbmNvbnNvbGUubG9nIHNvbGlwc2lzbSwgc3BlZWQsIGZvb3RwcmludHNcclxuXHJcbm1ham9yID0gJ0NvbXB1dGVyIFNjaWVuY2UnXHJcbnVubGVzcyBtYWpvcj9cclxuICBzaWduVXBGb3JDbGFzcyAnSW50cm9kdWN0aW9uIHRvIFdpbmVzJ1xyXG5cclxubG90dGVyeSA9IHt9XHJcbnppcCA9IGxvdHRlcnkuZHJhd1dpbm5lcj8oKS5hZGRyZXNzPy56aXBjb2RlXHJcblxyXG5jb25zb2xlLmxvZyB6aXBcclxuXHJcbiNhP1x0ICAgICAgICAgICAgICAgICAgICAgIHRlc3RzIHRoYXQgYSBpcyBpbiBzY29wZSBhbmQgYSAhPSBudWxsXHJcbiNhID8gYlx0ICAgICAgICAgICAgICAgICAgcmV0dXJucyBhIGlmIGEgaXMgaW4gc2NvcGUgYW5kIGEgIT0gbnVsbDsgb3RoZXJ3aXNlLCBiXHJcbiNhPy5iICAgICAgICAgICAgICAgICAgICAgcmV0dXJucyBhLmIgaWYgYSBpcyBpbiBzY29wZSBhbmQgYSAhPSBudWxsOyBvdGhlcndpc2UsIHVuZGVmaW5lZFxyXG4jYT9bJ2InXVxyXG4jYT8oYiwgYykgIFx0ICAgICAgICAgICAgICByZXR1cm5zIHRoZSByZXN1bHQgb2YgY2FsbGluZyBhICh3aXRoIGFyZ3VtZW50cyBiIGFuZCBjKSBpZiBhIGlzIGluIHNjb3BlIGFuZCBjYWxsYWJsZTsgb3RoZXJ3aXNlLCB1bmRlZmluZWRcclxuI2E/IGIsIGNcclxuI2EgPz0gYlx0ICAgICAgICAgICAgICAgICAgYXNzaWducyB0aGUgdmFsdWUgb2YgYiB0byBhIGlmIGEgaXMgbm90IGluIHNjb3BlIG9yIGlmIGEgPT0gbnVsbDsgcHJvZHVjZXMgdGhlIG5ldyB2YWx1ZSBvZiBhXHJcblxyXG4jIENoYWluaW5nIEZ1bmN0aW9uIENhbGxzXHJcblxyXG4kICdib2R5J1xyXG4uY2xpY2sgKGUpIC0+XHJcbiAgJCAnLmJveCdcclxuICAgIC5mYWRlSW4gJ2Zhc3QnXHJcbiAgICAuYWRkQ2xhc3MgJ3Nob3cnXHJcbiAgLmNzcyAnYmFja2dyb3VuZCcsICd3aGl0ZSdcclxuXHJcbiJdfQ==
//# sourceURL=/home/luisangel2895/courses/coffee-script/src/main.coffee