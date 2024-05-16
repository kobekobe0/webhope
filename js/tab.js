const coffeeDrinks = [
  { name: "Espresso", price: 125, description: "Strong and concentrated coffee shot" },
  { name: "Latte", price: 140, description: "Coffee with steamed milk and a small layer of foam" },
  { name: "Cappuccino", price: 120, description: "Espresso with equal parts of steamed and frothed milk" },
  { name: "Mocha", price: 130, description: "Espresso with steamed milk, chocolate syrup, and whipped cream" },
  { name: "Americano", price: 135, description: "Espresso with hot water, creating a similar strength to drip coffee" },
  { name: "Macchiato", price: 165, description: "Espresso 'stained' with a small amount of frothy milk" },
  { name: "Flat White", price: 120, description: "Coffee with velvety milk and a thin layer of microfoam" },
  { name: "Affogato", price: 110, description: "Espresso poured over a scoop of vanilla gelato or ice cream" },
  { name: "Iced Coffee", price: 120, description: "Chilled coffee served over ice cubes" },
  { name: "Cold Brew", price: 125, description: "Coffee brewed with cold water over a longer period, resulting in a smoother flavor" }
];

const nonCoffeeDrinks = [ 
{ name: "Green Tea", price: 125, description: "Traditional Japanese green tea" }, 
{ name: "Chai Latte", price: 120, description: "Spiced tea concentrate with steamed milk" },
{ name: "Hot Chocolate", price: 100, description: "Rich and creamy chocolate drink, perfect for cold days" }, 
{ name: "Matcha Latte", price: 150, description: "Japanese green tea powder mixed with steamed milk" }, 
{ name: "Fruit Smoothie", price: 150, description: "Blend of assorted fruits with yogurt or juice" }, 
{ name: "Lemonade", price: 110, description: "Refreshing drink made from squeezed lemons, sugar, and water" }, 
{ name: "Iced Tea", price: 100, description: "Chilled tea served over ice cubes" }, 
{ name: "Soda", price: 110, description: "Carbonated soft drink available in various flavors" }, 
{ name: "Milkshake", price: 125, description: "Thick and creamy beverage made from milk, ice cream, and flavorings" }, 
{ name: "Smoothie Bowl", price: 125, description: "Thicker smoothie served in a bowl topped with fruits, nuts, and seeds" } ];

const foods = [ 
  { name: "Chicken Teriyaki Donburi", price: 225, description: "Grilled chicken glazed with teriyaki sauce served over steamed rice" }, 
  { name: "Beef Bulgogi Bibimbap", price: 325, description: "Korean mixed rice dish topped with marinated beef, vegetables, and a fried egg" }, 
  { name: "Vegetable Fried Rice", price: 150, description: "Stir-fried rice with mixed vegetables and soy sauce" }, 
  { name: "Salmon Onigiri", price: 150, description: "Japanese rice ball filled with grilled salmon and wrapped in seaweed" }, 
  { name: "Shrimp Tempura Udon", price: 220, description: "Japanese noodle soup with shrimp tempura and vegetables" }, 
  { name: "Croissant", price: 125, description: "Buttery and flaky pastry originating from France" }, 
  { name: "Cookies", price: 100, description: "Homemade chocolate chip cookies" }, 
  { name: "Muffin", price: 90, description: "Soft and moist baked treat, available in various flavors" }, 
  { name: "Brownie", price: 60, description: "Rich and fudgy chocolate dessert" }, 
  { name: "Fruit Salad", price: 150, description: "Assorted fresh fruits cut into bite-sized pieces" }, 
  { name: "Bagel", price: 125, description: "Ring-shaped bread roll, typically toasted and served with cream cheese" }, 
  { name: "Chips", price: 125, description: "Crunchy and savory snack made from thinly sliced potatoes" }, 
  { name: "Granola Bar", price: 110, description: "Nutritious snack bar made from rolled oats, nuts, and honey" } 
];

window.onload = function() {
  openCoffeeType(null, 'CoffeeBased');
}


function openCoffeeType(evt, coffeeTypeName) {
  var i, x, tabLinks;
  x = document.getElementsByClassName("coffee-type");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  tabLinks = document.getElementsByClassName("tab-link");
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(" active-tab", "");
  }
  document.getElementById(coffeeTypeName).style.display = "block";
  if (evt) {
    evt.currentTarget.firstElementChild.className += " active-tab";
  }

  // Render different content based on the selected tab
  if (coffeeTypeName === 'Espresso') {
    displayCoffeeMenu();
  } else if (coffeeTypeName === 'Latte') {
    displayNonCoffeeMenu();
  } else {
    displayFoodMenu();
  }
}

function displayCoffeeMenu() {
  const coffeeMenuElement = document.getElementById("coffeeMenu");
  let tableHTML = "<h3 class='menu-title'>Espresso Based Drinks</h3>";
  tableHTML += "<table class='menu-table'><tr><th>Name</th><th>Price</th><th>Description</th></tr>";
  coffeeDrinks.forEach(function(drink) {
    tableHTML += `<tr><td>${drink.name}</td><td>₱${drink.price}</td><td>${drink.description}</td></tr>`;
  });
  tableHTML += "</table>";
  coffeeMenuElement.innerHTML = tableHTML;
}
function displayNonCoffeeMenu() {
  const coffeeMenuElement = document.getElementById("noncoffeemenu");
  let tableHTML = "<h3 class='menu-title'>Non-Espresso Based Drinks</h3>";
  tableHTML += "<table class='menu-table'><tr><th>Name</th><th>Price</th><th>Description</th></tr>";
  nonCoffeeDrinks.forEach(function(drink) {
    tableHTML += `<tr><td>${drink.name}</td><td>₱${drink.price}</td><td>${drink.description}</td></tr>`;
  });
  tableHTML += "</table>";
  coffeeMenuElement.innerHTML = tableHTML;
}
function displayFoodMenu() {
    console.log("clicked")
  const foodMenuElement = document.getElementById("foodmenu");
  let tableHTML = "<h3 class='menu-title'>Food Menu</h3>";
  tableHTML += "<table class='menu-table'><tr><th>Name</th><th>Price</th><th>Description</th></tr>";
  foods.forEach(function(food) {
    tableHTML += `<tr><td>${food.name}</td><td>₱${food.price}</td><td>${food.description}</td></tr>`;
  });
  tableHTML += "</table>";
  foodMenuElement.innerHTML = tableHTML;
}
