/* 

Write JavaScript code that selects content id by using getElementById.
Write a function which will update the text content of the selected element to "Hello, World!" by clicking the button.
*/
let selectContent = document.getElementById('content');

 document.querySelector('#content').innerText = 'Hello, World'; //change content directly without clicking

 document.addEventListener("click", function (){
selectContent.textContent =  "Hello, World!"; 
});
