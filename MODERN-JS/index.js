console.log("learning modern js");
let heading = document.querySelector("h1");
//alert(heading.innerHTML);
heading.innerHTML = "Learning MERN";
//selecting the h1 tag of the page
console.log(document.URL);
//Current url of the page
//store in local storage {key:value,value:value}
localStorage.setItem("test", "JavaScript");
localStorage.removeItem("test");
//var is used to create global object or window object
//so we will not use var
let n1 = "sajib";
//alert(n1)
n1 = "saha";
if (true) {
	//alert(n1)
}
const n4 = "Purba";
//we can't change the value of const variable
let obj = new Object();
obj = {
	name: "Sajib",
	age: 24,
};
console.log(obj.name, ":", obj.age);
const obj1 = {
	name: "Sajib",
};
obj1.name = "Purba";
console.log(obj1);
//Though the value of const obj or variable can't be changed ,the value of object property can be changed
let fname = "Sajib";
let lname = "Saha";
//prompt() takes input from user from alert box
//let age=prompt('Guess Sajib\'s age:')
//old way to concatenate string with variable
//let result=fname+" "+lname+" is "+age+" years old"
//alert(result)
//new way
//Template string
// Here `` is backstring which is under the esc button on keyboard
//let result=`${fname} ${lname} is ${age} years old`
//alert(result)
//Function
/*user="Hi" and message="Baby" are the default parameter value of the function welcome
if during function call the parameter,/s aren't passed then function will use the default value*/
function welcome(user = "Hi", message = "Baby") {
	alert(`Hello ${user}, ${message}`);
}
let user = "Purba";
let message = "I Love You";
//welcome(user)
//arrow user
//if arrow function has just one line we don't have to write return
let greeting = (message) => alert(`${message} everyone`);
//greeting("Hello")
let createBlog = (title, body) => {
	if (!title) {
		throw new Error("Give a title");
	}
	if (!body) {
		throw new Error("Give a body");
	}
	return `${title}-${body}`;
};
//alert(createBlog("A Blog Title","My First Blog"))
//this keyyword refers to the enclosing context
//normally within { } scope
//but  in javascript old school functions become a part of
//a global window object as soon as we declare them
let australia = {
	cities: ["Sydney", "Melbourne", "Adelaide"],
	printWithDash: function () {
		alert(this.cities.join(" "));
	},
};
australia.printWithDash();
alert(australia.cities[1]);
let sportsLegend = {
	cricket: "kohli",
	football: "Neymar",
};
console.log(sportsLegend.cricket, " ", sportsLegend.football);
//Destructuring properties of an object
let { cricket, football } = sportsLegend;
//now we can use cricket , football as variable
console.log(cricket);

let uniStudents = ({ fname, lname }) => {
	console.log(`${fname} is my first name`);
};
uniStudents({
	fname: "Sajib",
	lname: "Saha",
});
//array destructuring
const students = [1, 2, 3];
console.log(students[0]); //it will print 1
//const [,students]=[1,2,3]
//console.log(students) it will take 2

//Spread operator [...name]
const australianCities = ["Adeliade", "Sydney", "Melbourne"];
const americanCities = ["Las Vegas", "Chicago", "Washigton D.C"];
const allCities = [...australianCities, ...americanCities];
console.log(allCities);
//adding an element to the end of the list
allCities.push("Lehig");
// Rest operator
const [first, ...rest] = allCities;
console.log(first);
console.log(rest);
const user1 = {
	name: "Sajib",
	email: "sajibsaha859@gmail.com",
	password: "1234",
};
const { password, ...rest1 } = user1;
console.log(rest1);
//function and prototypes
function country(name, capital) {
	this.name = name;
	this.capital = capital;
}
country.prototype.info = function () {
	console.log(`${this.name} : ${this.capital}`);
};
const nepal = new country("NEPAL", "Kathmandu");
console.log(nepal.name, nepal.capital);
//
class Holiday {
	constructor(city, days) {
		this.city = city;
		this.days = days;
	}
	info() {
		console.log(`${this.city} : ${this.days} `);
	}
}
const ho1 = new Holiday("Kathmundu", 30);
console.log(ho1.info());
const ho2 = new Holiday("Las Vegas", 35);
console.log(ho2.info());
class Accessories extends Holiday {
	constructor(city, days, gear) {
		super(city, days);
		this.gear = gear;
	}

	info() {
		super.info();
		const [camera, ...rest] = this.gear;
		console.log(`Bring ${rest} along with ${camera}`);
	}
}
const ac1 = new Accessories("Mumbai", 15, ["shoes", "watch", "camera", "food"]);
console.log(ac1.info());
