// Meal Maker

const menu = {
  _courses: {
  	appetizers: [],
    mains: [],
    desserts: []
	},

  // Get/Set Appetizers
  get appetizers() {return this.appetizers;},
  set appetizers(appetizerIn) {this.appetizers.push(appetizerIn);},

  // Get/Set Mains
  get mains() {return this.mains;},
  set mains(mainIn) {this.mains.push(mainIn);},

  // Get/Set Desserts
  get desserts() {return this.desserts;},
  set desserts(dessertIn) {this.desserts.push(dessertIn);},

  //Pass food items into Courses from the getter
  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts
    }
  },

  // Take input and create a new dish in the course
  addDishToCourse: function(courseName, dishName, dishPrice) {
    const dish = {
  		name: dishName,
  		price: dishPrice
		}
    this._courses[courseName].push(dish);
  },

  // Generate a random dish
  getRandomDishFromCourse: function(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },

  // Generate a random meal
  generateRandomMeal: function() {
  	const appetizer = this.getRandomDishFromCourse('appetizers');
  	const main = this.getRandomDishFromCourse('mains');
  	const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
  	return 'Your meal is ' + appetizer.name + ', ' + main.name + ', and ' + dessert.name + '. The total is $' + totalPrice;
  }
};

// Meal #1
menu.addDishToCourse('appetizers', 'Caesar Salad', 6);
menu.addDishToCourse('mains', 'Milk Steak', 19);
menu.addDishToCourse('desserts', 'chocolate frogs', 4);

// Meal #2
menu.addDishToCourse('appetizers', 'Booger Soup', 17);
menu.addDishToCourse('mains', 'Sugar Chicken', 15);
menu.addDishToCourse('desserts', 'Truffle Dogs', 2);

// Meal #3
menu.addDishToCourse('appetizers', 'BREAD!', 16);
menu.addDishToCourse('mains', 'EGGS!', 48);
menu.addDishToCourse('desserts', 'BREADED EGGS!', 13);


let meal = menu.generateRandomMeal();
console.log(meal);
