// List of restaurants
const restaurants = [
    "Burger king",
    "MCDonalds",
    "Valley Lodge",
    "Greenwood Grill",
    "Popeyes",
    "KFC",
    "L Woods tap and pine Lodge",
    "MJ steak House",
    "The Dearborn",
    "Riverview Tavern"
];

// Get elements
const button = document.getElementById('generateButton');
const restaurantDisplay = document.getElementById('restaurantName');

// Event listener for button click
button.addEventListener('click', function() {
    // Get a random index
    const randomIndex = Math.floor(Math.random() * restaurants.length);
    
    // Display the random restaurant
    restaurantDisplay.textContent = restaurants[randomIndex];
});