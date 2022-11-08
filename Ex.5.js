/* Задание 5.

Переписать консольное приложение из предыдущего юнита на классы.

Общие требования:

Имена классов, свойств и методов должны быть информативными;
Соблюдать best practices;
Использовать синтаксис ES6.*/

class Appliance{
    constructor(type, brand, power){
      this.type = type,
      this.brand = brand,
      this.power = power,
      this.isPlugged = false
    }

    plugIn(){
    console.log(this.type + " is plugged");
    this.isPlugged = true
  }
  
    plugOff(){
    console.log(this.type +  " is unplugged");
    this.isPlugged = false
  }
  
  getPower(power){
    console.log('The power is ' + power + ' watt')
  }
  }
  
  function totalPower (){
   console.log('The total power is ' + (microwave.power + laptop.power) + ' watt')
  }
  
  const microwave = new Appliance ('microwave', 'Redmond', 700);
  const laptop = new Appliance ('laptop', 'MacBook', 300);
  
  microwave.plugIn()
  laptop.plugOff()
  microwave.getPower(microwave.power)
  laptop.getPower(laptop.power)
  totalPower()