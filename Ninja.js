class Ninja{
	constructor(name, health=10, speed=3,strength=3){
		this.name=name;
		this.health = health;
		this.speed=speed;
		this.strength=strength;
	}
	sayName(){
		console.log('Hi my name is ',this.name)
	}
	showStats(){
		console.log(`${this.name} 
			has ${this.strength} strength, 
			${this.speed} speed and 
			${this.health} health.`);
	}
	drinkSake(){
		this.health+=10;
	}
}

class Sensei extends Ninja{
	constructor(name,wisdom=10){
		super(name)
		this.wisdom = wisdom;
	}
	speakWisdom(){
		console.log("We all are students")
	}
	drinkSake(){
		console.log("Sensei gets more health from sake");
		this.health+=10;
	}
}

