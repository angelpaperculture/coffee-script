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

