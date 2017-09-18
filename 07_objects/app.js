var myCar = new Object();
myCar.maxSpeed = 300;
myCar.driver = 'Jeewoo';
myCar.drive = function() {
	console.log('now driving');
}

console.log(myCar.maxSpeed);
console.log(myCar.driver);
myCar.drive();

var myCar2 = {
	maxSpeed: 400,
	driver: 'Dean',
	drive: function() {
		console.log('now driving again');
	}
}

console.log(myCar2.maxSpeed);
console.log(myCar2.driver);
myCar2.drive();

var myCar3 = {
	maxSpeed: 400,
	driver: 'Dean',
	drive: function(speed, time) {
		console.log(speed * time);
	}
}

console.log(myCar3.maxSpeed);
console.log(myCar3.driver);
myCar3.drive(30,40);

var myCar4 = {
	maxSpeed: 400,
	driver: 'Dean',
	drive: function(speed, time) {
		console.log(speed * time);
	},
	test: function() {
		console.log(this);
	}
}

myCar4.test();

var myCar5 = {
	maxSpeed: 400,
	driver: 'Dean',
	drive: function(speed, time) {
		console.log(speed * time);
	},
	logDriver: function() {
		console.log('the driver is ' + this.driver);
	}
}

myCar5.logDriver();

var consCar = function(maxSpeed, driver) {
	this.maxSpeed = maxSpeed,
	this.driver = driver,
	this.drive = function(speed, time) {
		console.log(speed * time);
	},
	this.logDriver = function() {
		console.log('the driver is ' + this.driver);
	}
}

var user1 = new consCar(200, "Jeewoo");
var user2 = new consCar(300, "Dean");
var user3 = new consCar(400, "hello");
var user4 = new consCar(500, "yeah");

