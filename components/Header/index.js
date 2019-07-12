// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >

// Add to DOM in the .header-container component
const headerContainer = document.querySelector(".header-container");
headerContainer.appendChild(Header());


function Header() {
  // create the elements based off HTML
  const headerClass = document.createElement("div");
  const date = document.createElement("span");
  const lambdaHeader = document.createElement("h1");
  const temp = document.createElement("span");

  // set the styles based off classes
  headerClass.classList.add("header");
  date.classList.add("date");
  temp.classList.add("temp");

  // set the content based off HTML template
  date.textContent = "MARCH 28, 2019";
  lambdaHeader.textContent = "Lambda Times";
  temp.textContent = "98°";

  // put together based off HTML parent/child

  headerClass.appendChild(date);
  headerClass.appendChild(lambdaHeader);
  headerClass.appendChild(temp);

  return headerClass;
};


