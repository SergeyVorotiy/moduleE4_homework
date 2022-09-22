function HouseholdeAppliance(name, power){
    this.name = name,
    this.isOn = false
}
HouseholdeAppliance.prototype.ternOn = function () {
    this.isOn = true
}
HouseholdeAppliance.prototype.ternOff = function () {
    this.isOn = false
}

function Lamp (brightness, power) {
    this.power = power,
    this.regPercent = 100,
    this.brightness = brightness
}
Lamp.prototype = new HouseholdeAppliance('Lamp');
Lamp.prototype.regulatorOfPower = function (percentOfPower) {
    if (percentOfPower < 1){
        this.regPercent = 1;
    }else if(percentOfPower <= 100){
        this.regPercent = percentOfPower;
    }else {
        this.regPercent = 100;
    }
    this.power *= (this.regPercent / 100);
}
Lamp.prototype.getMaxPower = function () {
    return this.power / (this.regPercent / 100);
}


function Television (power, diagonal) {
    this.power = power,
    this.didagonal = diagonal
}
Television.prototype = new HouseholdeAppliance('Television');

let myLamp = new Lamp(540, 60);
let myTV = new Television(600, 55);

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