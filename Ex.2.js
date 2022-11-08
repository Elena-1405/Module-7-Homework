/*Задание 2.

Написать функцию, которая принимает в качестве аргументов строку и объект, 
а затем проверяет есть ли у переданного объекта свойство с данным именем. 
Функция должна возвращать true или false. */


const name_1 = "Vasya";
const name_2 = "Boris";
const Obj = {
  name: "Vasya",
  age: 2
};

function checkObjName(name, obj){
  if (typeof name === "string") {
    return name === obj.name
  }
}
console.log(checkObjName(name_1, Obj))
console.log(checkObjName(name_2, Obj))