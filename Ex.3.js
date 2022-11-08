/* Задание 3.

Написать функцию, которая создает пустой объект, но без прототипа. */


function createEmptyObject() {
    return Object.create(null)
} 

let emptyObject = createEmptyObject();
console.log(emptyObject)
console.log(Object.getPrototypeOf(emptyObject))