/*Задание 4.

Реализуйте следующее консольное приложение подобно примеру, который разбирался в видео. 
Реализуйте его на прототипах.
Определите иерархию электроприборов. Включите некоторые в розетку. 
Посчитайте потребляемую мощность (передайте аргумент). 
Таких приборов должно быть как минимум два (например, настольная лампа и компьютер). 
Выбрав прибор, подумайте, какими свойствами он обладает.

План:
Определите родительскую функцию с методами, которые включают/выключают прибор из розетки.
Создайте делегирующую связь [[Prototype]] для двух конкретных приборов.
У каждого из приборов должны быть собственные свойства и, желательно, 
методы, отличные от родительских методов.
Создайте экземпляры каждого прибора.
Выведите в консоль и посмотрите на результаты работы, можете гордиться собой :)

Общие требования:
Имена функций, свойств и методов должны быть информативными
Соблюдайте best practices:
использование camelCase нотации для переменных и методов, 
PascalCase для названия функций-конструкторов и классов;
информативные имена (а не a, b);
четкая связь между классом и его экземплярами 
(класс описывает множество, а экземпляр — конкретную реализацию);
использование синтаксиса es6 (кроме функции-конструкторов) и так далее.
Удачи! */

function Appliance (type, brand, power){
    this.type = type,
      this.brand = brand,
      this.power = power,
      this.isPlugged = false
  }
  
  Appliance.prototype.plugIn = function (){
    console.log(this.type + " is plugged");
    this.isPlugged = true
  }
  
  Appliance.prototype.plugOff = function (){
    console.log(this.type +  " is unplugged");
    this.isPlugged = false
  }
  
  Appliance.prototype.getPower = function(power){
    console.log('The power is ' + power + ' watt')
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
  
  