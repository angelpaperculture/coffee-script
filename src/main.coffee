# Functions
square = (x) -> x * x
cube = (x) -> square x * x

console.log square 7
console.log cube 9

printName = (name = "Angel") ->
  "Welcome #{name} :)"

console.log printName 'Carlos'
console.log printName()

# Strings
author = 'Angel'
quote = "A picture is more than this ... #{author}"
sentence = "#{22/7} is a godd aproximation to pi number"

console.log author
console.log quote
console.log sentence

lorem = "lorem
sdafsdaf
fsd
sdfsfsfd
  sdafsdfsadf
  asdfsadfsdf"

console.log lorem

html = """
      map --> how to mke money
        step 2 --> how to destroy
      step 3 -> life is hapiness
      """

console.log html

