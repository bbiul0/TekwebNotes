
// Variables example
let age = 25;
const name = "John";
document.getElementById("variableDemo").innerHTML = `Name: ${name}, Age: ${age}`;

// Functions example
function greet() {
    alert('Hello from JavaScript function!');
}

// Loops example
function loopDemo() {
    let result = "";
    for (let i = 0; i < 5; i++) {
        result += "Number: " + i + "<br>";
    }
    document.getElementById("variableDemo").innerHTML = result;
}

// DOM Manipulation
function changeContent() {
    document.getElementById("myElement").innerHTML = "Content has been changed!";
}

// Event Listener
document.getElementById("myButton").addEventListener("click", function() {
    alert("Button was clicked!");
});

// Arrays example
let fruits = ["Apple", "Banana", "Orange"];
document.getElementById("arrayDemo").innerHTML = `Fruits: ${fruits.join(", ")}`;

// Objects example
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
    greet: function() {
        return `Hello, ${this.firstName} ${this.lastName}`;
    }
};
document.getElementById("objectDemo").innerHTML = person.greet();

// JSON example
let personJSON = JSON.stringify(person);
let personObj = JSON.parse(personJSON);
document.getElementById("jsonDemo").innerHTML = `JSON: ${personJSON}`;

// Error Handling
function errorHandling() {
    try {
        let result = riskyOperation(); // This will throw an error
    } catch (error) {
        alert("An error occurred: " + error.message);
    }
}

function riskyOperation() {
    throw new Error("This is a sample error.");
}
