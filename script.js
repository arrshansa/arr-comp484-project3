// Task 1: Verification Log

// Global variable setup (required for Task 10 using setInterval/clearInterval)
let intervalId = null;

// Use const to target required elements for easier access later in the script
// We use querySelector or getElementById to retrieve specific DOM nodes [3].
const mainTitle = document.querySelector("#main-title");
const toggleButton = document.getElementById("toggle-button");
const statusOutput = document.querySelector("#status-output");
const timerButton = document.getElementById("timer-button");
const controlPanel = document.getElementById("control-panel");
const itemList = document.getElementById("item-list");

/* ======================================= */
// --- Task 3: Selecting and Changing Inner HTML ---
// Write the code here to select the mainTitle and update its innerHTML:
// Example: mainTitle.innerHTML = "New Title";

/* ======================================= */
// --- Task 4: Attribute Modification ---
// Write the code here to use setAttribute() on the toggleButton element
// to add the required 'data-action' attribute.

/* ======================================= */
// --- Task 9: Looping and Applying Changes ---
// Define and call the highlightListItems() function here so it runs on load.
// You will need to use document.querySelectorAll('li') and a loop structure
// (like a 'for' loop or 'forEach') to iterate over all list items [3-5].

/* ======================================= */
// --- Tasks 5, 6, 7 & 8: Toggle Functionality ---
// Define the functions (e.g., toggleStatus, createTimestamp) and event listeners
// here to handle the click event on the toggleButton [6, 7].

/* ======================================= */
// --- Task 10: Timed Animation ---
// Define the startFlashing() and stopFlashing() functions using
// setInterval() and clearInterval() [8, 9], and bind them to the
// timerButton using addEventListener for 'click' and 'dblclick' [10].
