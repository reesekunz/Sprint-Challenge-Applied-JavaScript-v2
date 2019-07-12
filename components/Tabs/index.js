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
  .get("https://lambda-times-backend.herokuapp.com/topics")

  .then(data => {
    // Handles Success: here's where we get the results from server
    console.log("Handles success", data);
    const apiData = data.data;
    
    // select the main dom node to attach our dynamic content
const tabs = document.querySelector(".topics");
    tabs.appendChild(apiData);

  })

  .catch(error => {
    // Handles failure:
    console.log("The API is currently down, try again later", error);
  });

  
  function createTabs(topic) {
    
// create the elements based off HTML
  const tabs = document.createElement("div");
  const topics = document.createElement("div");
  const title = document.createElement("span");
  
/* <!-- TABS COMPONENT, PLACE TABS HERE-->
  <div class="tabs">
  <div class="topics">
    <span class="title">TRENDING TOPICS:</span>
  </div>
</div>
*/

//set the styles based off classes in HTML 

tabs.classList.add("tabs");
topics.classList.add("topics");
 

// set the content based off API info
  title.textContent = topic.topics;

  
 

