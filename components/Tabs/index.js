// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

// select the main dom node to attach our dynamic content

const tabs = document.querySelector(".topics");

// send GET request using axios

axios
  .get(`https://lambda-times-backend.herokuapp.com/topics`)

  .then(resolved => {
    const apiData = resolved.data;
    // Handles Success: here's where we get the results from server

    //console.log("Handles success", apiData);

    const topics = apiData["topics"];

    //console.log("topics", topics);

    // Using forEach to iterate over the topics creating a new Tab component and add it to the DOM
    // Use forEach to iterate over array topics
    topics.forEach(topic => {
      // Create new tab component in reference to function being created below 
      newTab = createTabs(topic);
      // Add to DOM
      tabs.appendChild(newTab);
    });
  })
.catch(error => {
    // Handles failure:
    console.log("The API is currently down, try again later ", error);
  });

// Creating function

function createTabs(topic) {
  // create the elements based off HTML
  const tab = document.createElement("div");
  

  //set the styles based off classes in HTML
  tab.classList.add("tab");

  // set the content based (HTML on left, API info on right)
  tab.textContent = `${topic}`;

  return tab;
}; 
