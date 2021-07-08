/*const person = {
    name:'Veena',
    age:36
}

module.exports = person*/

class Person {

    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    greeting(){
        console.log(`I am ${this.name} and i am ${this.age} years old`)
    }

    

}
module.exports = Person