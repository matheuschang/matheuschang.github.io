// Load the current counter value from local storage
let counter = localStorage.getItem("counter") || 0;
// Set the counter element's text to the counter value
document.getElementById("counter").textContent = counter;

// Add an event listener to the add button
document.getElementById("add-button").addEventListener("click", () => {
  // Increment the counter value
  counter++;
  // Update the counter element's text to the new counter value
  document.getElementById("counter").textContent = counter;
  // Save the new counter value to local storage
  localStorage.setItem("counter", counter);
});
