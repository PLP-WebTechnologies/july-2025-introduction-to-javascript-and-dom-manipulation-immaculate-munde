// Part 1: Variables & Conditionals
// DOM elements
const nameInput = document.getElementById("name-input");
const ageInput = document.getElementById("age-input");
const checkBtn = document.getElementById("check-btn");
const greeting = document.getElementById("greeting");
const result = document.getElementById("result");
const friendsList = document.getElementById("friends-list");

// Part 2: Functions
function greetUser(name) {
    return `Hello, ${name}!`;
}

function checkEligibility(age) {
    if (age >= 18) {
        return "You are eligible to vote!";
    } else {
        return "You are not eligible yet.";
    }
}

// Part 3: Loop Example
// List of friends' ages
const friendsAges = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 22 },
    { name: "Diana", age: 16 }
];

// Display friends' eligibility
for (let i = 0; i < friendsAges.length; i++) {
    const li = document.createElement("li");
    li.textContent = `${friendsAges[i].name}: ${checkEligibility(friendsAges[i].age)}`;
    friendsList.appendChild(li);
}

// Part 4: DOM Interaction
checkBtn.addEventListener("click", () => {
    const name = nameInput.value;
    const age = parseInt(ageInput.value);

    if (!name || isNaN(age)) {
        alert("Please enter valid name and age.");
        return;
    }

    greeting.textContent = greetUser(name);
    result.textContent = checkEligibility(age);

    if (age >= 18) {
        result.classList.add("eligible");
        result.classList.remove("not-eligible");
    } else {
        result.classList.add("not-eligible");
        result.classList.remove("eligible");
    }
});
