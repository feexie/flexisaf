// script.js

// Scope: let and const
function demonstrateScope() {
    let blockScoped = "I'm block-scoped";
    const constantValue = "I don't change";
    const output = `Block Scoped: ${blockScoped}, Constant: ${constantValue}`;
    document.getElementById("scope-output").innerText = output;
}

// Arrow functions
function runMultiply() {
    const a = parseFloat(document.getElementById("multiply-a").value);
    const b = parseFloat(document.getElementById("multiply-b").value);
    if (isNaN(a) || isNaN(b)) {
        document.getElementById("arrow-output").innerText = "Please enter valid numbers.";
    } else {
        const multiply = (x, y) => x * y;
        document.getElementById("arrow-output").innerText = `Result: ${multiply(a, b)}`;
    }
}

// Array operations
function processArray() {
    const input = document.getElementById("array-input").value;
    const numbers = input.split(",").map(num => parseFloat(num.trim()));

    if (numbers.some(isNaN)) {
        document.getElementById("array-output").innerText = "Please enter a valid list of numbers.";
    } else {
        // map: Multiply each element by 2
        const doubled = numbers.map(num => num * 2);
        // filter: Get numbers greater than 2
        const filtered = numbers.filter(num => num > 2);
        // reduce: Calculate the sum of all numbers
        const sum = numbers.reduce((acc, curr) => acc + curr, 0);

        document.getElementById("array-output").innerHTML = `
            <p>Doubled: ${doubled}</p>
            <p>Filtered (greater than 2): ${filtered}</p>
            <p>Sum: ${sum}</p>
        `;
    }
}

// Objects
function displayPerson() {
    const person = {
        name: "Alice",
        age: 30,
        job: "Developer"
    };

    // Object destructuring
    const { name, age, job } = person;

    // Spread operator
    const extendedPerson = { ...person, location: "New York" };

    document.getElementById("object-output").innerHTML = `
        <p>Name: ${name}</p>
        <p>Age: ${age}</p>
        <p>Job: ${job}</p>
        <p>Extended Person: ${JSON.stringify(extendedPerson)}</p>
    `;
}
