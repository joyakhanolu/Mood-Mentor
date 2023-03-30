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
/*
  function generateAdvice(categories) {
    const morning = ["Good morning!", "Rise and shine!", "It's a new day!"];
    const afternoon = ["Good afternoon!", "Hope you're having a great day!", "Enjoy your afternoon!"];
    const night = ["Good night!", "Sweet dreams!", "Rest well!"];

    const currentHour = new Date().getHours();
    let greeting;
    if (currentHour < 12) {
      greeting = morning[Math.floor(Math.random() * morning.length)];
    } else if (currentHour < 18) {
      greeting = afternoon[Math.floor(Math.random() * afternoon.length)];
    } else {
      greeting = night[Math.floor(Math.random() * night.length)];
    }

    let advice = `${greeting}\n`;

    for (let category of categories) {
      switch (category) {
        case "health":
          advice += "Take care of your body and mind. Exercise regularly and eat well.\n";
          break;
        case "career":
          advice += "Stay focused on your goals and keep working hard towards them.\n";
          break;
        case "relationships":
          advice += "Make time for your loved ones and communicate openly and honestly.\n";
          break;
        case "finance":
          advice += "Save and invest wisely, and live within your means.\n";
          break;
        default:
          advice += "Unknown category: " + category + "\n";
      }
    }

    return advice;
  }

  function generateAdviceOnClick() {
    const categories = [];
    const checkboxes = document.querySelectorAll('input[type=checkbox]:checked');

    checkboxes.forEach((checkbox) => {
      categories.push(checkbox.value);
    });

    const advice = generateAdvice(categories);
    const adviceOutput = document.querySelector('#advice-output');
    adviceOutput.innerText = advice;
  }

  function generateAdviceOnLoad() {
    const currentHour = new Date().getHours();
    let greeting;
    if (currentHour < 12) {
      greeting = 'Good morning!';
    } else if (currentHour < 18) {
      greeting = 'Good afternoon!';
    } else {
      greeting = 'Good evening!';
    }

    const advice = `${greeting} Select one or more categories above to receive advice.`;
    const adviceOutput = document.querySelector('#advice-output');
    if (adviceOutput) {
      adviceOutput.innerText = advice;
    }
  }

  generateAdviceOnLoad();
  const generateButton = document.querySelector('#generate-button');
  generateButton.addEventListener('click', generateAdviceOnClick);

});

*/