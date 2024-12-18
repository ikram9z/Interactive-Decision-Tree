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

// Enhanced Decision Tree Logic
function createRecommendation(preference, activity, budget) {
  // Pool of options for dynamic and varied recommendations
  const options = {
    Mountains: {
      Adventure: {
        Low: [
          "Embark on a thrilling trek through the Himalayas, exploring breathtaking vistas on a budget.",
          "Set out for an adventurous camping trip in the Rockies with minimal expenses.",
          "Experience the charm of the Appalachian Trail while keeping your costs low."
        ],
        Medium: [
          "Discover the adrenaline-packed slopes of Colorado with mid-range lodging.",
          "Enjoy guided hikes and stunning views in the Swiss Alps with moderate expenses.",
          "Take on the Dolomites with comfort and adventure in balance."
        ],
        High: [
          "Relax in luxury as you explore the Swiss Alps, with private guided tours and fine dining.",
          "Indulge in a premium Himalayan retreat with exclusive services and amenities.",
          "Experience Aspen's grandeur, with high-end chalets and ski passes included."
        ]
      },
      Relaxation: {
        Low: [
          "Find peace in a rustic Appalachian cabin for a serene and affordable escape.",
          "Take a quiet trip to the Blue Ridge Mountains with cozy, budget-friendly accommodations.",
          "Relax by the mountain lakes of Scotland for an affordable retreat."
        ],
        Medium: [
          "Pamper yourself at a wellness resort in the Rockies, perfect for mid-range budgets.",
          "Rejuvenate at a charming chalet in the French Alps without overspending.",
          "Enjoy a peaceful yoga retreat in the Sierra Nevada mountains."
        ],
        High: [
          "Indulge in a luxury Aspen chalet with spa services and personalized experiences.",
          "Find ultimate relaxation in a premium Swiss Alps resort with world-class amenities.",
          "Experience tranquility in a high-end lodge in the Canadian Rockies."
        ]
      }
    },
    Beach: {
      Adventure: {
        Low: [
          "Catch waves in Bali or snorkel in Thailand, all on a shoestring budget.",
          "Explore the Caribbean’s coral reefs with affordable diving excursions.",
          "Experience the thrill of kite surfing in the budget-friendly beaches of Vietnam."
        ],
        Medium: [
          "Dive into the wonders of the Great Barrier Reef with moderate expenses.",
          "Explore Hawaii’s volcanic trails while staying in mid-range accommodations.",
          "Enjoy kayaking through Costa Rica’s mangroves with eco-friendly lodging."
        ],
        High: [
          "Indulge in private yacht tours and luxury scuba adventures in the Maldives.",
          "Stay in an opulent Bora Bora overwater bungalow with water sports included.",
          "Discover Fiji’s secluded beaches with top-tier luxury and personalized services."
        ]
      },
      Relaxation: {
        Low: [
          "Lounge on Goa’s serene beaches while staying in affordable accommodations.",
          "Find solace in a cozy beachside hut on Thailand's Koh Samui.",
          "Relax on the tranquil sands of Sri Lanka with budget-friendly stays."
        ],
        Medium: [
          "Enjoy a mid-range beach retreat in Tulum, Mexico, perfect for unwinding.",
          "Spend peaceful days in Maui, Hawaii, with moderate-cost beachfront villas.",
          "Relax in the Seychelles with a mix of comfort and affordability."
        ],
        High: [
          "Experience Bora Bora’s iconic overwater bungalows for the ultimate luxury.",
          "Unwind in a premium Maldivian resort with private beach access and spa treatments.",
          "Indulge in high-end tranquility on a private island in the Bahamas."
        ]
      }
    }
  };

  // Select a random recommendation from the pool
  const recommendations = options[preference][activity][budget];
  const randomIndex = Math.floor(Math.random() * recommendations.length);
  const selectedRecommendation = recommendations[randomIndex];

  // Templating for user input integration
  const personalizedRecommendation = ` ${selectedRecommendation}`;
  
  return personalizedRecommendation;
}

