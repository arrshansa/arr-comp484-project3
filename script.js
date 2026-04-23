// Task 1: Verification Log
console.log("Status Manager Started");

// Global variable setup (required for Task 10 using setInterval/clearInterval)
let intervalId = null;

// Global log array for the Timestamp History Log feature
const eventLog = [];

// Use const to target required elements for easier access later in the script
const mainTitle = document.querySelector("#main-title");
const toggleButton = document.getElementById("toggle-button");
const statusOutput = document.querySelector("#status-output");
const timerButton = document.getElementById("timer-button");
const controlPanel = document.getElementById("control-panel");
const itemList = document.getElementById("item-list");

// Task 3: Selecting and Changing Inner HTML
mainTitle.innerHTML = "DOM Project: Ready!";

// Task 4: Attribute Modification
toggleButton.setAttribute("data-action", "status-toggle");

// Task 9: Looping and Applying Changes
function highlightListItems() {
  const listItems = document.querySelectorAll("li");
  listItems.forEach(function (item) {
    item.style.color = "blue";
  });
}

highlightListItems();

// Task 8: Dynamic Element Creation
function createTimestamp() {
  // Remove any existing timestamps first
  statusOutput.querySelectorAll("span").forEach((span) => span.remove());

  const span = document.createElement("span");
  span.innerHTML = new Date().toLocaleTimeString();
  statusOutput.appendChild(span);
}

// Extra Feature: Timestamp History Log
function addLogEntry(type) {
  // Build the entry object with type and current time
  const entry = {
    type: type,
    time: new Date().toLocaleTimeString(),
  };

  // Add to the front of the array so newest entry appears on top
  eventLog.unshift(entry);

  // Re-render the log div
  const logDiv = document.getElementById("event-log");
  logDiv.innerHTML = "";

  eventLog.forEach(function (e) {
    const div = document.createElement("div");
    div.classList.add("log-entry", e.type);
    div.innerHTML = `
      <span>${e.type === "show" ? "▶ Status Shown" : "■ Status Hidden"}</span>
      <span>${e.time}</span>
    `;
    logDiv.appendChild(div);
  });
}

// Tasks 5, 6, 7 & 8: Toggle Functionality
function toggleStatus(e) {
  // Task 6: Prevent the anchor tag from jumping/refreshing the page
  e.preventDefault();

  // Task 5: Toggle the .hidden class on the status output div
  statusOutput.classList.toggle("hidden");

  // Task 7: Change title background based on visibility
  if (!statusOutput.classList.contains("hidden")) {
    // Status is now visible — set background to yellow
    mainTitle.style.backgroundColor = "yellow";

    // Task 8: Append a timestamp each time the status becomes visible
    createTimestamp();

    // Extra Feature: Log the show event
    addLogEntry("show");
  } else {
    // Status is now hidden — reset background color
    mainTitle.style.backgroundColor = "";

    // Extra Feature: Log the hide event
    addLogEntry("hide");
  }
}

// Task 5: Bind the toggleStatus function to the toggle button's click event
toggleButton.addEventListener("click", toggleStatus);

// Task 10: Timed Animation
function startFlashing() {
  clearInterval(intervalId);
  intervalId = setInterval(function () {
    controlPanel.classList.toggle("hidden");
  }, 500);
}

function stopFlashing() {
  // Use clearInterval to stop the flashing and ensure panel is visible
  clearInterval(intervalId);
  intervalId = null;
  controlPanel.classList.remove("hidden");
}

// Bind startFlashing to single click, stopFlashing to double click
timerButton.addEventListener("click", startFlashing);
timerButton.addEventListener("dblclick", stopFlashing);
