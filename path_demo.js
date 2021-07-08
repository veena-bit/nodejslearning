const path = require('path')

console.log(__filename)

//base file name
console.log(path.basename(__filename))


//base directory
console.log(path.dirname(__filename))

//extension

console.log(path.extname(__filename))

//create path Object

console.log(path.parse(__filename))