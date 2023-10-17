"use strict";
// ENUMS 
var DayOfWeek;
(function (DayOfWeek) {
    DayOfWeek[DayOfWeek["MONDAY"] = 1] = "MONDAY";
    DayOfWeek[DayOfWeek["TUESDAY"] = 2] = "TUESDAY";
    DayOfWeek[DayOfWeek["WEDNESDAY"] = 3] = "WEDNESDAY";
    DayOfWeek[DayOfWeek["THURSDAY"] = 4] = "THURSDAY";
    DayOfWeek[DayOfWeek["FRIDAY"] = 5] = "FRIDAY";
    DayOfWeek[DayOfWeek["SATURDAY"] = 6] = "SATURDAY";
    DayOfWeek[DayOfWeek["SUNDAY"] = 7] = "SUNDAY";
})(DayOfWeek || (DayOfWeek = {}));
function getDayString(dayNumber) {
    switch (dayNumber) {
        case DayOfWeek.MONDAY:
            return "Monday";
        case DayOfWeek.TUESDAY:
            return "Tuesday";
        case DayOfWeek.WEDNESDAY:
            return "Wednesday";
        case DayOfWeek.THURSDAY:
            return "Thursday";
        case DayOfWeek.FRIDAY:
            return "Friday";
        case DayOfWeek.SATURDAY:
            return "Saturday";
        case DayOfWeek.SUNDAY:
            return "Sunday";
        default:
            return "Invalid day number";
    }
}
// Example usage
const numericValue = 3;
const dayString = getDayString(numericValue);
console.log(`The string representation for ${numericValue} is ${dayString}`);
// No2. Define an enum for basic geometric shapes and write a function that takes a shape as an argument 
var GeometricShape;
(function (GeometricShape) {
    GeometricShape[GeometricShape["CIRCLE"] = 0] = "CIRCLE";
    GeometricShape[GeometricShape["SQUARE"] = 1] = "SQUARE";
    GeometricShape[GeometricShape["TRIANGLE"] = 2] = "TRIANGLE";
    GeometricShape[GeometricShape["RECTANGLE"] = 3] = "RECTANGLE";
})(GeometricShape || (GeometricShape = {}));
function calculateArea(shape, dimensions) {
    switch (shape) {
        case GeometricShape.CIRCLE:
            // Assuming dimensions[0] is the radius of the circle
            return Math.PI * Math.pow(dimensions[0], 2);
        case GeometricShape.SQUARE:
            // Assuming dimensions[0] is the side length of the square
            return Math.pow(dimensions[0], 2);
        case GeometricShape.TRIANGLE:
            // Assuming dimensions[0] and dimensions[1] are the base and height of the triangle
            return 0.5 * dimensions[0] * dimensions[1];
        case GeometricShape.RECTANGLE:
            // Assuming dimensions[0] and dimensions[1] are the length and width of the rectangle
            return dimensions[0] * dimensions[1];
        default:
            throw new Error('Invalid geometric shape');
    }
}
// Example usage
const circleArea = calculateArea(GeometricShape.CIRCLE, [5]);
const squareArea = calculateArea(GeometricShape.SQUARE, [4]);
const triangleArea = calculateArea(GeometricShape.TRIANGLE, [6, 3]);
const rectangleArea = calculateArea(GeometricShape.RECTANGLE, [8, 4]);
console.log(`Area of a circle with radius 5: ${circleArea}`);
console.log(`Area of a square with side length 4: ${squareArea}`);
console.log(`Area of a triangle with base 6 and height 3: ${triangleArea}`);
console.log(`Area of a rectangle with length 8 and width 4: ${rectangleArea}`);
// No3. Create an enum representing HTTP status codes and return the status message for a given code 
var HttpStatusCode;
(function (HttpStatusCode) {
    HttpStatusCode[HttpStatusCode["OK"] = 200] = "OK";
    HttpStatusCode[HttpStatusCode["CREATED"] = 201] = "CREATED";
    HttpStatusCode[HttpStatusCode["ACCEPTED"] = 202] = "ACCEPTED";
    HttpStatusCode[HttpStatusCode["NO_CONTENT"] = 204] = "NO_CONTENT";
    HttpStatusCode[HttpStatusCode["BAD_REQUEST"] = 400] = "BAD_REQUEST";
    HttpStatusCode[HttpStatusCode["UNAUTHORIZED"] = 401] = "UNAUTHORIZED";
    HttpStatusCode[HttpStatusCode["FORBIDDEN"] = 403] = "FORBIDDEN";
    HttpStatusCode[HttpStatusCode["NOT_FOUND"] = 404] = "NOT_FOUND";
    HttpStatusCode[HttpStatusCode["INTERNAL_SERVER_ERROR"] = 500] = "INTERNAL_SERVER_ERROR";
})(HttpStatusCode || (HttpStatusCode = {}));
function getStatusMessage(code) {
    switch (code) {
        case HttpStatusCode.OK:
            return "OK";
        case HttpStatusCode.CREATED:
            return "Created";
        case HttpStatusCode.ACCEPTED:
            return "Accepted";
        case HttpStatusCode.NO_CONTENT:
            return "No Content";
        case HttpStatusCode.BAD_REQUEST:
            return "Bad Request";
        case HttpStatusCode.UNAUTHORIZED:
            return "Unauthorized";
        case HttpStatusCode.FORBIDDEN:
            return "Forbidden";
        case HttpStatusCode.NOT_FOUND:
            return "Not Found";
        case HttpStatusCode.INTERNAL_SERVER_ERROR:
            return "Internal Server Error";
        default:
            return "Unknown Status Code";
    }
}
// Example usage
const statuss = HttpStatusCode.OK;
const message = getStatusMessage(statuss);
console.log(`HTTP Status Code ${statuss}: ${message}`);
// No4. Implement a type that accepts only specific enum values as input 
var Color;
(function (Color) {
    Color["RED"] = "Red";
    Color["GREEN"] = "Green";
    Color["BLUE"] = "Blue";
})(Color || (Color = {}));
// Example usage
const validColor = Color.RED; // This is valid
// const invalidColor: AllowedColors = Color.BLUE; // This will result in a TypeScript error
console.log(validColor);
// No5. Write a function that Iterate through the keys of an enum and returns an array of their values 
function enumKeysToValues(enumObj) {
    return Object.keys(enumObj)
        .filter(key => !isNaN(Number(enumObj[key])))
        .map(key => enumObj[key]);
}
(function (Color) {
    Color["PINK"] = "Pink";
    Color["WHITE"] = "White";
    Color["YELLOW"] = "Yellow";
})(Color || (Color = {}));
const colorValues = enumKeysToValues(Color);
console.log(colorValues);
// Example usage
const person = {
    name: 'John Doe',
    age: 30,
    email: 'johndoe@example.com'
};
console.log(`Person Name is: ${person.name} and his age is: ${person.age} contact email: ${person.email}`);
// Example usage
const point = {
    x: 5,
    y: 10
};
console.log(point.x);
// Example usage
const item = {
    name: 'Product Name',
    price: 19.99,
    quantity: 2
};
console.log(item.name);
// CombinedType can be either of TypeA or TypeB
const result1 = {
    propA: 'Hello',
};
const result2 = {
    propB: 42,
};
console.log(result1.propA);
// Example usage
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const result11 = add(5, 3); // Result is 8
const result22 = subtract(10, 4); // Result is 6
console.log(result11);
const myCar = {
    make: "Toyoto",
    model: "4 Runner",
    year: 2023
};
console.log(myCar.model);
const countryUser = {
    name: 'John',
    phone: +2349067174704,
};
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }
}
class Square {
    constructor(sideLength) {
        this.sideLength = sideLength;
    }
    calculateArea() {
        return this.sideLength * this.sideLength;
    }
}
// Example usage
const circle = new Circle(5);
const square = new Square(4);
console.log(`Circle Area: ${circle.calculateArea()}`); // Output: Circle Area: 78.53981633974483
console.log(`Square Area: ${square.calculateArea()}`); // Output: Square Area: 16
function printPersonInfo(person) {
    console.log(`Name: ${parson.name}, Age: ${parson.age}`);
}
// Example usage
const parson = {
    name: 'John Doe',
    age: 30,
};
printPersonInfo(parson);
class MyCar {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
}
// Create an object using the CarConstructor interface
const CarFactory = MyCar;
const myCan = new CarFactory('Toyota', 'Camry', 2022);
console.log(`My car: ${myCan.year} ${myCan.make} ${myCan.model}`);
// Example usage
const newMan = {
    name: 'John Doe',
    age: 30,
    email: 'johndoe@example.com',
};
console.log(`${newMan.name} ${newMan.age} and email ${newMan.email}`);
// Example usage
const poin = {
    x: 5,
    y: 10
};
const newPoint = {
    x: 5,
    y: 10
};
console.log(poin);
const cart = {
    productName: "Dell Laotop",
    price: 10.99,
    quality: 3
};
console.log(`${cart.productName} @ ${cart.price}K Quality is ${cart.quality}`);
const exampleA = {
    propA: "Hello",
};
const exampleB = {
    propB: 42,
};
const adder = (a, b) => a + b;
const subtracter = (x, y) => x - y;
// Example usage
const result101 = adder(5, 3); // 8
const result202 = subtracter(10, 4); // 6
console.log(result202);
const myBook = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
};
const anotherBook = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
};
console.log(`${anotherBook.title} by ${anotherBook.author}`);
const person1 = {
    name: "John Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown",
        postalCode: "12345",
        country: "USA",
    },
};
const person2 = {
    name: "Alice Smith",
    age: 25,
    address: {
        street: "456 Elm Rd",
        city: "Another City",
        postalCode: "54321",
        country: "Canada",
    },
};
console.log(person2.address.street);
//   No3. Implement an object type for a shopping cart item with method to update the quantity 
class ShoppingCartItem {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
    // Method to update the quantity
    updateQuantity(newQuantity) {
        if (newQuantity >= 0) {
            this.quantity = newQuantity;
        }
        else {
            console.error("Quantity cannot be negative.");
        }
    }
}
const user1 = {
    name: "John Doe",
    age: 30,
    address: "123 Main St, Anytown, USA",
};
const user2 = {
    name: "Alice Smith",
    age: 25,
    address: "451 Elo Road, Another City, Canada",
};
console.log(user2.address);
function greetUser(user) {
    return `Hello, ${user.name}! You are ${user.age} years old.`;
}
const user123 = {
    name: "John Doe",
    age: 30,
};
const greeting = greetUser(user123);
console.log(greeting); // Output: Hello, John Doe! You are 30 years old.
// Define a function to process the array of colors
function processColors(colors) {
    for (const color of colors) {
        console.log(`Color: ${color}`);
    }
}
// Example usage
const colors = ["Red", "Green", "Blue", "Yellow"];
processColors(colors);
// Function to find the highest and lowest prices
function findMinMaxPrices(prices) {
    if (prices.length === 0) {
        throw new Error("The array is empty.");
    }
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    return { minPrice, maxPrice };
}
// Example usage
const prices = [19.99, 29.99, 14.99, 49.99, 9.99];
const { minPrice, maxPrice } = findMinMaxPrices(prices);
console.log(`Lowest Price: $${minPrice}`);
console.log(`Highest Price: $${maxPrice}`);
// Function to sort names in alphabetical order
function sortNames(names) {
    return [...names].sort();
}
// Example usage
const names = ["Alice", "Charlie", "Bob", "David"];
const sortedNames = sortNames(names);
console.log("Sorted Names:", sortedNames);
// No4. Write a function that accepts an array type and returns a reversed array 
function reverseArray(arr) {
    return [...arr].reverse();
}
// Example usage with numbers
const originalArray = [1, 2, 3, 4, 5];
const reversedArray = reverseArray(originalArray);
console.log("Original Array:", originalArray);
console.log("Reversed Array:", reversedArray);
function calculateTotalDistance(coordinates) {
    let totalDistance = 0;
    for (let i = 0; i < coordinates.length - 1; i++) {
        const currentCoord = coordinates[i];
        const nextCoord = coordinates[i + 1];
        const distance = Math.sqrt(Math.pow(nextCoord.x - currentCoord.x, 2) +
            Math.pow(nextCoord.y - currentCoord.y, 2));
        totalDistance += distance;
    }
    return totalDistance;
}
// Example usage
const coordinates = [
    { x: 0, y: 0 },
    { x: 3, y: 4 },
    { x: 6, y: 8 },
];
const distance = calculateTotalDistance(coordinates);
console.log("Total Distance:", distance);
//   UNION TYPES: 
// No1. Create a function that accepts a union type for numbers and returns the square of the input 
function squareNumber(input) {
    if (typeof input === "number") {
        return input * input;
    }
    else if (typeof input === "string" && !isNaN(Number(input))) {
        const num = Number(input);
        return num * num;
    }
    else {
        return null; // Handle invalid inputs
    }
}
// Example usage
const numberResult = squareNumber(5);
console.log("Square of 5:", numberResult);
const stringResult = squareNumber("3");
console.log("Square of '3':", stringResult);
const invalidResult = squareNumber("abc");
console.log("Invalid Input:", invalidResult);
// Circle class
class Circlee {
    constructor(radius) {
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}
// Square class
class Squaree {
    constructor(sideLength) {
        this.sideLength = sideLength;
    }
    calculateArea() {
        return Math.pow(this.sideLength, 2);
    }
}
// Triangle class
class Triangle {
    constructor(base, height) {
        this.base = base;
        this.height = height;
    }
    calculateArea() {
        return (this.base * this.height) / 2;
    }
}
// Example usage
const circlee = new Circlee(5);
const squaree = new Squaree(4);
const triangle = new Triangle(3, 6);
const circleAreaa = circle.calculateArea();
const squareAreaa = square.calculateArea();
const triangleAreaa = triangle.calculateArea();
console.log("Circle Area:", circleArea);
console.log("Square Area:", squareArea);
console.log("Triangle Area:", triangleArea);
//   No3. Implement a union type for different data types (number, string, boolean) and return the type of the input 
function getType(input) {
    return typeof input;
}
// Example usage
const numType = getType(42); // Returns "number"
const strType = getType("Hello"); // Returns "string"
const boolType = getType(true); // Returns "boolean"
console.log("Type of 42:", numType);
console.log("Type of 'Hello':", strType);
console.log("Type of true:", boolType);
function convertLength(length, fromUnit, toUnit) {
    if (fromUnit === toUnit) {
        return length; // No conversion needed if units are the same
    }
    if (fromUnit === "feet" && toUnit === "meters") {
        return length * 0.3048; // Convert feet to meters
    }
    if (fromUnit === "meters" && toUnit === "feet") {
        return length / 0.3048; // Convert meters to feet
    }
    throw new Error("Invalid unit conversion"); // Handle invalid unit conversions
}
// Example usage
const feetToMeters = convertLength(10, "feet", "meters");
const metersToFeet = convertLength(3, "meters", "feet");
console.log("10 feet in meters:", feetToMeters);
console.log("3 meters in feet:", metersToFeet);
function processItems(items) {
    for (const item of items) {
        if (typeof item === "number") {
            console.log(`This is a number: ${item}`);
            // Perform number-specific operations here
        }
        else if (typeof item === "string") {
            console.log(`This is a string: ${item}`);
            // Perform string-specific operations here
        }
        else {
            console.log(`This item has an unsupported type: ${item}`);
        }
    }
}
// Example usage
const items = [1, "two", 3, "four", "five"];
processItems(items);
const person11 = {
    name: "John Doe",
    age: 30,
    email: "john@example.com",
    phone: "123-456-7890",
};
const person22 = {
    name: "Alice Smith",
    age: 25,
    email: "alice@example.com",
};
const person3 = {
    name: "Bob Johnson",
    age: 40,
    phone: "987-654-3210",
};
console.log(`${person3.name} ${person22.email}`);
function greetPerson(person) {
    const { name, age = 25, email = "N/A" } = person;
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Email: ${email}`);
}
// Example usage
const person001 = {
    name: "John Doe",
    age: 30,
    email: "john@example.com",
};
const person002 = {
    name: "Alice Smith",
};
const person003 = {
    name: "Bob Johnson",
    email: "bob@example.com",
};
greetPerson(person001);
greetPerson(person002);
greetPerson(person003);
const config1 = {
    setting1: "value1",
    setting2: 42,
};
const config2 = {
    setting3: true,
};
const config3 = {}; // An empty configuration with no settings
console.log(config1);
console.log(config2);
console.log(config3);
//   No4. Write a function that accepts an optional type and handles both defined and undefined inputs 
function handleOptionalInput(input) {
    if (input === undefined) {
        console.log("Input is undefined.");
    }
    else {
        console.log(`Input is defined: ${input}`);
        // You can perform operations with the defined input here
    }
}
// Example usage
handleOptionalInput("Hello, World!"); // Input is defined: Hello, World!
handleOptionalInput(); // Input is undefined.
function performOperation(x, y, callback) {
    if (callback) {
        const result = callback(x, y);
        console.log("Result:", result);
    }
    else {
        console.log("Callback function is not provided..");
    }
}
// Example usage
function addd(x, y) {
    return x + y;
}
performOperation(5, 3, addd); // Logs "Result: 8"
performOperation(5, 3); // Logs "Callback function is not provided."
