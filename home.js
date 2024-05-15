function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

//  for       type messagggggggggggggggggggggggggggggggggggggggggggggge
function typeMessages(messages, targetElement) {
  let messageIndex = 0;
  let charIndex = 0;
  const target = document.querySelector(targetElement);

  const intervalId = setInterval(() => {
    if (charIndex === messages[messageIndex].length) {
      messageIndex++;
      if (messageIndex === messages.length) {
        clearInterval(intervalId);
        return;
      }
      // Add line break between messages
      target.innerHTML += "<br>";
      charIndex = 0;
    } else {
      target.textContent += messages[messageIndex][charIndex++];
    }
  }, 70);
}
// First set of messages for .back1
const newMessages1 = [
  "FRONT-END ",
  "Web devolper"
  //"These messages are for .screen.",
  // "You can add more messages as needed!",
];
const targetElement1 = ".back1 h1"; // Targeting the ".screen" element
typeMessages(newMessages1, targetElement1);
// Second set of messages for .screen
const newMessages2 = [
  "Elevating Web Experiences, One Line of Code at a Time.",
  //"Empowering Your Online Presence, Pixel by Pixel.",
  //"Crafting Digital Wonders, Inspiring Connections.",
  //"Elevating Web Experiences, One Line of Code at a Time.",
  //"Transforming Ideas into Digital Masterpieces.",
  //"Building the Web of Tomorrow, Today."
];
const targetElement2 = ".screen"; // Targeting the ".screen1" element
typeMessages(newMessages2, targetElement2);
// 3rd type 
const newMessages3 = [
  "We Empowering Your Online Presence, Pixel by Pixel! Here you can get a full service unique and best solutions for the responsive Website Design and Development! ",

];
const targetElement3="#sget h2";
typeMessages(newMessages3,targetElement3);
//Open Model () Function Open window alert

function openModal() {
  var modal = document.getElementById('certificateModal');
  modal.style.display = 'block';
}

function closeModal() {
  var modal = document.getElementById('certificateModal');
  modal.style.display = 'none';
}

// Close modal when clicking outside of the modal content
window.onclick = function (event) {
  var modal = document.getElementById('certificateModal');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}


function openModal() {
  var modal = document.getElementById('certificateModal');
  modal.style.display = 'block';
}

function closeModal() {
  var modal = document.getElementById('certificateModal');
  modal.style.display = 'none';
}

// Close modal when clicking outside of the modal content
window.onclick = function (event) {
  var modal = document.getElementById('certificateModal');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}





























//Pictres slides
document.addEventListener("DOMContentLoaded", function () {
  var images = ["back1.jpeg", "back2.jpg", "back3.jpeg",
    "back4.jpeg", "back5.jpeg", "back6.jpg", "back15.jpg",
  ];
  var currentIndex = 0;
  var backDiv = document.querySelector(".back ");

  function changeBackground() {
    backDiv.style.backgroundImage = "url('" + images[currentIndex] + "')";
    currentIndex = (currentIndex + 1) % images.length;
    setTimeout(changeBackground, 5000);
  }

  changeBackground();
});
// Get random Color
function getRandomcolor() {
  let a1 = Math.ceil(0 + Math.random() * 255);
  let a2 = Math.ceil(0 + Math.random() * 255);
  let a3 = Math.ceil(0 + Math.random() * 255);
  return `rgb(${a1},${a2},${a3})`;
}
setInterval(() => {

  document.querySelector(".khan").style.color = getRandomcolor();

  document.querySelector(".back h1").style.color = getRandomcolor();
  document.querySelector(".screen").style.color = getRandomcolor();
  document.querySelector(".Myintro span").style.color = getRandomcolor();
  document.querySelector("#serbutton").style.color = getRandomcolor();
  document.querySelector(".otherd button").style.color = getRandomcolor();



}, 5000);
// Form submission url
document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();
  alert("  Thanks for connecting with us We received your response successfully! We will contact you within an hour.");
});

document.addEventListener("DOMContentLoaded", function () {
  var slides = [
    "back9.jpeg", "back10.jpg", "back11.jpg"
  ];
  var currentIndex = 0;
  var backDiv = document.querySelector(".tagline"); // Corrected variable name

  function changeBackgroundSlide() { // Corrected function name
    backDiv.style.backgroundImage = "url('" + slides[currentIndex] + "')"; // Corrected variable name
    currentIndex = (currentIndex + 1) % slides.length; // Corrected variable name
    setTimeout(changeBackgroundSlide, 5000); // Corrected function name
  }

  changeBackgroundSlide(); // Corrected function name
});



// form button 
let btn = document.getElementById("submitButton");
btn.onclick = function () {
  form.style.display = 'none';
  modal.style.display = 'block';
}