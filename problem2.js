console.log('============Exercise #2==============')
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/


// Create our Person Prototype
function Person(name, age){
    this.name = name;
    this.age = age;
    
    // Use an arrow to create the printInfo method
    this.printInfo = () => {
        return console.log(`${this.name} is ${this.age} years old`);
    }
    
    // Create another arrow function for the addAge method that takes a single parameter
    this.birthday = (howMany) => {
        // Adding to the age 
        this.age += howMany;
    }
}

let John = new Person('John', 20)
let Rosalie = new Person('Rosalie', 25)

Rosalie.printInfo()
John.printInfo()
John.birthday(3)
John.printInfo()