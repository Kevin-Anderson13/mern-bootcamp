class Ninja {
    constructor(name, hp, speed, strength) {
        this.name = name;
        this.hp = hp;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        console.log("The Ninja's name is: " + this.name);
        return this;
    }

    showStats() {
        console.log("Name: " + this.name);
        console.log("Health Points: " + this.hp);
        console.log("Speed: " + this.speed);
        console.log("Strength: " + this.strength);
        return this;
    }

    drinkSake() {
        console.log("Health Points were: " + this.hp);
        console.log("Drank sake");
        this.hp += 10;
        console.log("Health Points now: " + this.hp);
        return this;
    }
}

class Sensei extends Ninja {
    constructor(whoIsTheMaster) {
        super(whoIsTheMaster);
        this.hp = 200;
        this.strength = 100;
        this.speed = 100;
    }

    speakWisdom() {
        this.drinkSake();
        console.log("Eat much pizza and I say.... Cowabunga!")
    }
}

const master = new Sensei("Master Splinter");
master.sayName();
master.showStats();
master.speakWisdom();

const BlueNinja = new Ninja("Leo the Leader", 10, 3, 0);
BlueNinja.sayName();
BlueNinja.showStats();
BlueNinja.drinkSake();

const OrangeNinja = new Ninja("Mikey the Crazy one", 5, 2, 1);
OrangeNinja.sayName();
OrangeNinja.showStats();
OrangeNinja.drinkSake();