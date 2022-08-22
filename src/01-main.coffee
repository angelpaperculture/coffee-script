# Functions
square = (x) -> x * x
cube = (x) -> square x * x

#console.log square 7
#console.log cube 9

printName = (name = "Angel") ->
  "Welcome #{name} :)"

#console.log printName 'Carlos'
#console.log printName()

# Strings
author = 'Angel'
quote = "A picture is more than this ... #{author}"
sentence = "#{22/7} is a godd aproximation to pi number"

#console.log author
#console.log quote
#console.log sentence

lorem = "lorem
sdafsdaf
fsd
sdfsfsfd
  sdafsdfsadf
  asdfsadfsdf"

#console.log lorem

html = """
      map --> how to mke money
        step 2 --> how to destroy
      step 3 -> life is hapiness
      """

#console.log html

# Objects and Arrays
names = ['angel', 'carlos', 'juan', 'pedro']
singers = {Maluma: 'Pop', Elvis: 'Rock'}

bitList = [
  1, 0, 1
  0, 0, 0
  1, 0, 1
]

family =
  cousin:
    name: 'Carla'
    age: 30
  mother:
    name: 'Lourdes'
    age: 60

#console.log names
#console.log singers
#console.log bitList
#console.log family

# Shortcut Objects
name = 'Angel'
age = 25
job = 'Software Developer'
married = false

me = {name, age, job, married}

#console.log me

# Comments

# one line comment

###
  Multiple line Comment
  lorem lorem lorem
  lore lorem lorem
###

# If, else, conditionals
name = 'Angel' if true
console.log name

if name = 'Angel' and name.length > 2
  console.log 'I like my name'
else
  console.log ':('

name = if 'Angel'.length > 2 then 'Angel :)' else 'Angel :('
console.log name

# Rest parameter/ Spread Syntax
gold = silver =  rest = 'unknown'

awardMedals = (first, second, others...) ->
  gold = first
  silver = second
  rest = others

contenders = [
  "Michael Phelps"
  "Liu Xiang"
  "Yao Ming"
  "Allyson Felix"
  "Shawn Johnson"
  "Roman Sebrle"
  "Guo Jingjing"
  "Tyson Gay"
  "Asafa Powell"
  "Usain Bolt"
]

awardMedals contenders...

console.log """
Gold: #{gold}
Silver: #{silver}
The Field: #{rest.join ' - '}
"""

popular  = ['pepperoni', 'sausage', 'cheese']
unwanted = ['anchovies', 'olives']

all = [popular..., unwanted..., 'mushrooms']
console.log all

user =
  name: 'Angel'
  job: 'Software Developer'

currentUser = {user..., status: 'no married'}
console.log currentUser

# Loops and Comprehensions

eat = (food) -> console.log "#{food} eaten."
eat food for food in ['toast', 'cheese', 'wine']

courses = ['greens', 'caviar', 'truffles', 'roast', 'cake']
menu = (i, dish) -> console.log "Menu Item #{i}: #{dish}"
menu i + 1, dish for dish, i in courses

foods = ['broccoli', 'spinach', 'chocolate']
eat food for food in foods when food isnt 'chocolate'

# Range
countdown = (num for num in [10..1])
console.log countdown

evens = (x for x in [0..10] by 2)
console.log evens

# Iterate over objects
yearsOld = max: 10, ida: 9, tim: 11

ages = for child, age of yearsOld
  "#{child} is #{age}"

console.log ages

ages = for own key, value of yearsOld
  "#{key} is #{value}"

console.log ages

# While

#if studyingEconomics
#  buy()  while supply > demand
#  sell() until supply > demand

num = 6
lyrics = while num -= 1
  "#{num} little monkeys, jumping on the bed.
    One fell out and bumped his head."

console.log lyrics

# Call claused functions into others DO

list = ['.DS_Store', 'Thumbs.db', 'ehthumbs.db', 'doc.txt', 'main.ts', 'db.mysql']

for filename in list
  do (filename) ->
    if filename not in ['.DS_Store', 'Thumbs.db', 'ehthumbs.db']
      console.log filename


# Array slicing and splicing with ranges
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

start   = numbers[0..2]
middle  = numbers[3...-2]
end     = numbers[-2..]
copy    = numbers[..]

console.log start, middle, end, copy

numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
numbers[3..6] = [-3, -4, -5, -6]

console.log numbers