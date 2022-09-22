class HouseholdeAppliance {
    constructor(name, power) {
        this.name = name;
        this.isOn = false;
    }

    ternOn = function () {
        this.isOn = true
    }
    ternOff = function () {
        this.isOn = false
    }
}

class Lamp extends HouseholdeAppliance {
    constructor(name, brightness, power) {
        super(name);
        this.power = power;
        this.regPercent = 100;
        this.brightness = brightness;
    }
    regulatorOfPower = function (percentOfPower) {
        if (percentOfPower < 1){
            this.regPercent = 1;
        }else if(percentOfPower <= 100){
            this.regPercent = percentOfPower;
        }else {
            this.regPercent = 100;
        }
        this.power *= (this.regPercent / 100);
    }
    getMaxPower = function () {
        return this.power / (this.regPercent / 100);
    }
}

class Television extends HouseholdeAppliance{
    constructor(name, power, diagonal) {
        super(name);
        this.power = power;
        this.didagonal = diagonal;
    }

}
let myLamp = new Lamp('Lamp', 540, 60);
let myTV = new Television('Television', 600, 55);

myLamp.ternOn();
myLamp.regulatorOfPower(60);
myTV.ternOn();
myTV.ternOff();
for (let key in myLamp){
    console.log(`${key} - ${myLamp[`${key}`]}`)
}

for (let key in myTV){
    console.log(`${key} - ${myTV[`${key}`]}`)
}

let allPower = 0;
if (myTV.isOn){
    allPower += myTV.power;
}
if (myLamp.isOn){
    allPower += myLamp.power;
}
console.log(`al power is - ${allPower}`);