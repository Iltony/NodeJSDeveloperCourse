const fs = require('fs')

// read the content of the file
const userBuffer = fs.readFileSync('jsonExercise.json')
const userJSON = userBuffer.toString()
const user = JSON.parse(userJSON)

// overrides the property with my properties
user.name = 'Antonio'
user.planet = "Mars"
user.age = 35
console.log(user);

// Saves the changes
const userString2Save = JSON.stringify(user)
fs.writeFileSync('jsonExercise.json', userString2Save)
