//Modules
// const secret = "secret key"
// const john =  'john'
// const peter = 'peter'

// const sayHi = (name) => {
//     console.log(`Hello ${name}`);
// }

const names = require('./names')
const sayHi = require('./utils')
console.log(names)


sayHi("rikka")
sayHi(names.john)
sayHi(names.peter)

const data = require('./export')

console.log(data)
