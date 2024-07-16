// Task 1: 
// ● Objective: Understand how to create a basic object.

const car ={
    make: "Toyota",
    model: "Camry",
    year: 2020,
    owner:{ 
        firstName: "Jane",
        lasteName: "smith",
        age: "28",
        email: "jane.smith@example.com" 
    }
    
}
console.log(car);



// Task 2: Accessing Object Properties

console.log(car.make);
console.log(car.model);
console.log(car.year);
console.log(car.owner.firstName);
console.log(car.owner.lasteName);
console.log(car.owner.age);
console.log(car.owner.email);




// Task 3: Modifying Object Properties

car.year="2021";
car.email="jane2021.smith@example.com";
console.log(car);





// Task 4: Adding New Properties to an Object 

car.serviceHistory=[
    {
     date: "2021-06-01",
     service: "Oil change",
     cost: 50
    },
    {
     date: "2022-01-15",
     service: "Tire rotation",
     cost: 100
    }
]
console.log(car);

// Task 7: Using for...in Loop


for (const key in car) {
    console.log(`${key}: ${car[key]}`);
}

// Bonus Task 1: Using Object.keys()


let key = Object.keys(car);
let key1 = Object.keys(car.owner);
let key2 = Object.keys(car.insurance);
let key3 = Object.keys(car.serviceHistory);


console.log(key);
console.log(key1);
console.log(key2);
console.log(key3);

// Bonus Task 2: Using Object.values()


let value = Object.values(car);
let value1 = Object.values(car.owner);
let value2 = Object.values(car.insurance);
let value3 = Object.values(car.serviceHistory);

console.log(value);
console.log(value1);
console.log(value2);
console.log(value3);

