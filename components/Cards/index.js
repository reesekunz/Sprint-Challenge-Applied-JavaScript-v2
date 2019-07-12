// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

// select the main dom node to attach our dynamic content

const cards = document.querySelector(".cards-container");

// send GET request using axios

axios
  .get(`https://lambda-times-backend.herokuapp.com/articles`)

  .then(resolved => {
    const articles = resolved.data.articles;
    // Handles Success: here's where we get the results from server

    //console.log("Handles success", articles);

    // Use Object.keys to create array
    const articleTopics = Object.keys(articles);
    console.log("topics", articleTopics);

    //You will be creating a component for each 'article' in the list.

    // Use forEach to iterate through array created through Object.keys above
    articleTopics.forEach(topic => {
      // Use another forEach to add component for each 'article' in the list.
      articles[`${topic}`].forEach(article => {
        // Add to DOM
        cards.append(createCards(article));
      });
    });
  })
  .catch(error => {
    // Handles failure:
    console.log("The API is currently down, try again later ", error);
  });

function createCards(topic) {
  // create the elements based off HTML
  const card = document.createElement("div");
  const headline = document.createElement("div");
  const author = document.createElement("div");
  const imageContainer = document.createElement("div");
  const image = document.createElement("img");
  const authorName = document.createElement("span");

  //set the styles based off classes in HTML

  card.classList.add("card");
  headline.classList.add("headline");
  author.classList.add("author");
  imageContainer.classList.add("img-container");

  //set the content based (HTML on left, API info on right)
  headline.textContent = topic.headline;
  image.src = topic.authorPhoto;
  authorName.textContent = topic.authorName;

  // put together based off HTML parent/child
  card.append(headline);
  card.append(author);
  author.append(imageContainer);
  author.append(authorName);
  imageContainer.append(image);

  return card;
}
