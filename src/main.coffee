# Everything is an expression -> all return except (break, continue and return)
grade = (student) ->
  if student.excellentWork
    "A+"
  else if student.okayStuff
    if student.triedHard then "B" else "B-"
  else
    "C"
eldest = if 24 > 21 then "Liz" else "Ike"

console.log grade, eldest

six = (one = 1) + (two = 2) + (three = 3) ## the declaration of variables automaticaly is in the top
console.log six

globals = (name for name of window)[0...10]

console.log globals

#alert(
#  try
#    nonexistent / undefined
#  catch error
#    "And the error is ... #{error}"
#)


# Operators and Aliases

#is	              ===
#isnt	            !==
#not	            !
#and	            &&
#or	              ||
#true,yes, on	    true
#false, no, off   false
#@, this	        this
#a in b	          [].indexOf.call(b, a) >= 0
#a of b	          a in b
#for a from b	    for (a of b)
#a ** b         	a ** b
#a // b	          Math.floor(a / b)
#a %% b	          (a % b + b) % b

#launch() if ignition is on
#volume = 10 if band isnt SpinalTap
#letTheWildRumpusBegin() unless answer is no
#if car.speed < limit then accelerate()
#winner = yes if pick in [47, 92, 13]
#print inspect "My name is #{@name}"