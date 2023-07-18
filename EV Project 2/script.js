// add animation to the sections
const sections = document.querySelectorAll('section');
const options = {
  threshold: 0.2,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});
window.onscroll = function() {scrollFunction()};

		function scrollFunction() {
			if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
				document.getElementById("back-to-top").style.display = "block";
			} else {
				document.getElementById("back-to-top").style.display = "none";
			}
		}

		// When the user clicks on the button, scroll to the top of the document
		document.getElementById("back-to-top").addEventListener("click", function(){
			document.body.scrollTop = 0; // For Safari
			document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
		});
/*// Add event listener to submit button
document.getElementById("submitBtn").addEventListener("click", function() {
	// Retrieve the selected rating
	var rating = document.querySelector('input[name="rating"]:checked');
  
	// Check if a rating is selected
	if (rating) {
	  // Display the selected rating value
	  console.log("Selected rating: " + rating.value);
  
	  // Perform additional actions or submit the rating data to the server
	  // ...
	} else {
	  // If no rating is selected, display an error message or take appropriate action
	  console.log("Please select a rating!");
	}
  });*/

  function sendRating() {
	var rating = document.getElementById("rating").value;
	var email = "sohamray122@gmail.com";
  
	var message = "Website rating: " + rating;
  
	var smtp = new XMLHttpRequest();
	smtp.open("POST", "mailto:" + email, true);
	smtp.setRequestHeader("Content-Type", "text/plain");
	smtp.send(message);
  }
  
  document.getElementById("submit").addEventListener("click", sendRating);

  /*document.addEventListener("DOMContentLoaded", function() {
	var sliderContainer = document.querySelector(".slider-container");
	var prevArrow = document.querySelector(".prev-arrow");
	var nextArrow = document.querySelector(".next-arrow");
  
	var images = sliderContainer.querySelectorAll("img");
	var currentIndex = 0;
  
	function showImage(index) {
	  for (var i = 0; i < images.length; i++) {
		images[i].classList.remove("active");
	  }
	  images[index].classList.add("active");
	}
  
	prevArrow.addEventListener("click", function() {
	  currentIndex = (currentIndex - 1 + images.length) % images.length;
	  showImage(currentIndex);
	});
  
	nextArrow.addEventListener("click", function() {
	  currentIndex = (currentIndex + 1) % images.length;
	  showImage(currentIndex);
	});
  });*/
  
		  