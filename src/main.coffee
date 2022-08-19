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