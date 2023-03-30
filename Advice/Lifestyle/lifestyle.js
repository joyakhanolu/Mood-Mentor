function getActivity() {
    fetch("https://www.boredapi.com/api/activity")
      .then(response => response.json())
      .then(data => {
        document.getElementById("activity").innerHTML = data.activity;
      })
      .catch(error => {
        console.error("Error fetching activity:", error);
      });
  }

  const backButton = document.querySelector('.back-button');
  backButton.addEventListener('click', function() {
      history.back();
  });

