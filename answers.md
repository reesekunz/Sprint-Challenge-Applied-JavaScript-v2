1. What is the DOM?

Document Object Model; it’s the interface for the web page document that represents the page so that we can adjust the styling and content. We can adjust the DOM with a programming language like JavaScript, but the DOM itself is not a language. 

2. What is an event?

An event refers to the thing that is happening when the user is navigating the webpage (click, scroll, etc.). 
You can add this event to an HTML element to adjust the content or styling of the element depending on what is happening on the user’s end. 

3. What is an event listener?

The event listener listens for when the event is being called (e.g. the user clicks on the element an event was attached to). You can use .addEventListener to an element in JavaScript, which lets us execute this code that is released whenever that particular event occurs. 


4. Why would we convert a NodeList into an Array?

When you use querySelectorAll(‘ ‘), the “All” returns a node list of all the elements being called. 
You need to convert the node list into an array because the JavaScript methods (.forEach(), .filter(), etc.) can only be executed when they’re referring to arrays not node lists. 


5. What is a component?

Components are a set of logic and behaviors being brought together through HTML, CSS, and JavaScript to form pieces of code that can be later reused. It is essential in JavaScript because elements that have the same functionality can be applied to the pre-existing component instead of having to individually deal with each element. 