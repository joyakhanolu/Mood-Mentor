// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


document.addEventListener('DOMContentLoaded', () => {

  /* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  });

  var categoryMap = {
    "health": {
      "title": "Health",
      "sentences": ["Health sentence 1", "Health sentence 2", "Health sentence 3"]
    },
    "lifestyle": {
      "title": "Lifestyle",
      "sentences": ["Lifestyle sentence 1", "Lifestyle sentence 2", "Lifestyle sentence 3"]
    },
    "relationship": {
      "title": "Relationship",
      "sentences": ["Relationship sentence 1", "Relationship sentence 2", "Relationship sentence 3"]
    },
    "tech": {
      "title": "Tech Tips",
      "sentences": ["Tech Tips sentence 1", "Tech Tips sentence 2", "Tech Tips sentence 3"]
    },
    "career": {
      "title": "Career",
      "sentences": ["Career sentence 1", "Career sentence 2", "Career sentence 3"]
    },
    "finance": {
      "title": "Finance",
      "sentences": ["Finance sentence 1", "Finance sentence 2", "Finance sentence 3"]
    }
  };
  
  function toggleDisplayBox(category) {
    var box = document.getElementById("display-box");
    var title = document.getElementById("title");
    var sentences = document.getElementById("sentences");
    var currentCategory = box.dataset.category;
    if (category === currentCategory) {
      box.style.display = "none";
				box.dataset.category = "";
			} else {
				// Otherwise, show the display box with the new category content
				box.style.display = "block";
				box.dataset.category = category;
				title.innerHTML = categoryMap[category].title;
        sentences.innerHTML = categoryMap[category].sentences.join("<br>");
        {
					var p = document.createElement("p");
					p.innerHTML = sentence;
					sentences.appendChild(p);
				};
			}
		}