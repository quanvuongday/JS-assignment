/* 
Write JavaScript code that adds an event listener to the button.

When the button is clicked, the function should:
- Retrieve the value from the input field.
- Create a new <li> element and set its text content to the input field's value.
- Append the new <li> element to the fruitList <ul>.

Ensure the input field is cleared after adding the fruit to the list.
*/
//let i = document.getElementById("addFruitBtn").addEventListener("click", myFunction);

//function myFunction() {
  // Your code here

  // HTML

// JavaScript
const changeText = document.querySelector("#change-text");

changeText.addEventListener("click", function() {
  changeText.textContent = "Text has been changed!";
});