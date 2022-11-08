/*Задание 1.

Написать, функцию, которая принимает в качестве аргумента объект и 
выводит в консоль все ключи и значения только собственных свойств. 
Данная функция не должна возвращать значение. */


const europe = {
    Italy: "Rome"
  };

  const asia = Object.create(europe);
     asia.China = "Beijing";
     asia.Japan = "Tokio";
  
  function showKeys(obj){
    for(let prop in obj){
      if (obj.hasOwnProperty(prop)){ 
      console.log(obj)
      }
    } 
  }

   showKeys(asia)