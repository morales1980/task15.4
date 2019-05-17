'use strict'

function Phone(brand, price, color, type, os, version) {
  var self = this;
  this.brand = brand;
  this.price = price;
  this.color = color;
  this.type = type;
  this.os = os;
  this.version = version;
}
Phone.prototype.printInfo = function () {
  console.log('The phone brand is ' + this.brand + ', color is ' + this.color + ' and the price is ' + this.price + '.' + ' Phone type is ' + this.type + ' and its operating system is ' + this.os + '.');
}
Phone.prototype.dial112 = function () {
  console.log('Dialing emergency number 112..');
  console.log('Please hold the line..');
}
Phone.prototype.updateSystem = function () {
  console.log('Current operating system version is ' + this.os + ' v.' + this.version + ' Update in progress..');
}

var iPhone6s =        new Phone('Apple', 2250, 'silver', 'smartphone', 'IOS', '12');
var samssunGalaxyS6 = new Phone('Samsung', 1000, 'black', 'smartphone', 'Android', '5.1.1');
var onePlusOne =      new Phone('One Plus', 1500, 'red', 'smartphone', 'Cyanogen OS', '11S');

iPhone6s.printInfo();
iPhone6s.dial112();
iPhone6s.updateSystem();
samssunGalaxyS6.printInfo();
samssunGalaxyS6.dial112();
samssunGalaxyS6.updateSystem();
onePlusOne.printInfo();
onePlusOne.dial112();
onePlusOne.updateSystem();
