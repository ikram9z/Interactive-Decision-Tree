// Event listener for button click
document.getElementById('submit-button').addEventListener('click', generateRecommendation);

function generateRecommendation() {
  // Get user inputs
  const preference = document.getElementById('preference').value;
  const activity = document.getElementById('activity').value;
  const budget = document.getElementById('budget').value;

  // Validate inputs
  if (!preference || !activity || !budget) {
    alert('Please fill out all fields!');
    return;
  }

  // Generate recommendation
  const recommendation = createRecommendation(preference, activity, budget);

  // Display result
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `<p>${recommendation}</p>`;
}

// Decision tree logic
function createRecommendation(preference, activity, budget) {
  const options = {
    Mountains: {
      Adventure: {
        Low: "Explore the Himalayas on a budget trek! Experience breathtaking views and local culture.",
        Medium: "Visit Colorado for skiing and snowboarding with comfortable lodging options.",
        High: "Embark on a luxury tour of the Swiss Alps with guided hikes and five-star accommodations."
      },
      Relaxation: {
        Low: "Enjoy a peaceful retreat in the Appalachian Mountains with cozy cabins.",
        Medium: "Stay at a wellness resort in the Rockies, complete with spa treatments.",
        High: "Relax in a luxury chalet in Aspen with panoramic mountain views and fine dining."
      }
    },
    Beach: {
      Adventure: {
        Low: "Go surfing in Bali or snorkeling in Thailand's pristine beaches on a budget.",
        Medium: "Visit Hawaii for hiking volcanic trails and exploring marine life.",
        High: "Experience luxury water sports and private boat tours in the Maldives."
      },
      Relaxation: {
        Low: "Unwind on the tranquil beaches of Goa, India, with affordable stays.",
        Medium: "Stay in a beachfront villa in Mexico for a mix of relaxation and comfort.",
        High: "Enjoy a high-end retreat in Bora Bora with overwater bungalows."
      }
    }
  };

  return options[preference][activity][budget];
}
