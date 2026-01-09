// Function to handle modal opening
function openModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "block";
}

// Function to handle modal closing
function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "none";
}

// Course modals
var course1Btn = document.getElementById("course1-btn");
course1Btn.onclick = function() {
  openModal("course1-modal");
}

var course2Btn = document.getElementById("course2-btn");
course2Btn.onclick = function() {
  openModal("course2-modal");
}

var course3Btn = document.getElementById("course3-btn");
course3Btn.onclick = function() {
  openModal("course3-modal");
}

// Close buttons
var closeButtons = document.getElementsByClassName("close");
for (var i = 0; i < closeButtons.length; i++) {
  closeButtons[i].onclick = function() {
    var modalId = this.getAttribute("data-modal");
    closeModal(modalId);
  }
}

// Menu toggle functionality
var menuToggle = document.getElementById("menu-toggle");
var navMenu = document.getElementById("nav-menu");

if (menuToggle && navMenu) {
  menuToggle.onclick = function() {
    menuToggle.classList.toggle("active");
    navMenu.classList.toggle("active");
  }

  // Close menu when clicking on a link
  var menuLinks = navMenu.getElementsByTagName("a");
  for (var i = 0; i < menuLinks.length; i++) {
    menuLinks[i].onclick = function() {
      menuToggle.classList.remove("active");
      navMenu.classList.remove("active");
    }
  }
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target.classList.contains('modal')) {
    event.target.style.display = "none";
  }
}
