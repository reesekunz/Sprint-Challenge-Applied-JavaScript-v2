// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const tabs = document.querySelector(".topics");

// send GET request using axios

axios
  .get(`https://lambda-times-backend.herokuapp.com/topics`)
  .then(resolved => {
    const apiData = resolved.data;
    console.log("Handles success", apiData);

    topics = apiData["topics"];
    console.log("topics", topics);

    topics.forEach(topic => {
      newTab = createTabs(topic);

      tabs.appendChild(newTab);
    });
  })
  .catch(error => {
    console.log("The API is currently down, try again later ", error);
  });

// Creating function

function createTabs(topic) {
  // create the elements based off HTML
  const tabs = document.createElement("div");
  const topics = document.createElement("div");
  const title = document.createElement("span");

  //set the styles based off classes in HTML

  tabs.classList.add("tabs");
  topics.classList.add("topics");

  // set the content based off API info
  title.textContent = topic;

  // put together based off HTML parent/child
  tabs.appendChild(topics);
  topics.appendChild(title);

  return tabs;
}
