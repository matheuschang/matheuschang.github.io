// Load the current counter value from the GitHub API
fetch("https://api.github.com/repos/{username}/my-website/contents/counter.txt")
  .then(response => response.json())
  .then(data => {
    // Convert the base64-encoded content to a string
    const content = atob(data.content);
    // Parse the counter value from the string
    const counter = parseInt(content);
    // Set the counter element's text to the counter value
    document.getElementById("counter").textContent = counter;
  })
  .catch(error => {
    console.error(error);
  });

// Add an event listener to the add button
document.getElementById("add-button").addEventListener("click", () => {
  // Load the current counter value from the GitHub API
  fetch("https://api.github.com/repos/{username}/my-website/contents/counter.txt")
    .then(response => response.json())
    .then(data => {
      // Convert the base64-encoded content to a string
      const content = atob(data.content);
      // Parse the counter value from the string
      let counter = parseInt(content);
      // Increment the counter value
      counter++;
      // Update the counter element's text to the new counter value
      document.getElementById("counter").textContent = counter;
      // Encode the new counter value as base64
      const encodedContent = btoa(counter.toString());
      // Update the counter.txt file on GitHub using the GitHub API
      fetch("https://api.github.com/repos/{username}/my-website/contents/counter.txt", {
        method: "PUT",
        headers: {
          "Authorization": "token {access_token}",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          message: "Update counter",
          content: encodedContent,
          sha: data.sha
        })
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
        })
        .catch(error => {
          console.error(error);
        });
    })
    .catch(error => {
      console.error(error);
    });
});
