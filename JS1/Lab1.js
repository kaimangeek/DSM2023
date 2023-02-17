// №1 Функция должна принимать другую функцию и возвращать результат вызова этой функции
console.log('№1')

function sayHi() {
    return "Привет!";
}

function callBack(func) {
    return func();
}

console.log(callBack(sayHi));


/*
№2 Функция должна принимать число (если ничего не передано, то воспринимать как 0) и возвращать новую функцию (foo).
При вызове функции foo, переданное ранее число должно быть увеличено на единицу и возвращено из foo
*/
console.log('№2')

function func(num = 0) {
    return function foo() {
        num++;
        return num;
    }
}

const num = func(5);
console.log(num());


//№3 Функция должна возвращать все переданные ей аргументы в виде массива. Количество переданных аргументов заранее неизвестно.
console.log('№3')

function argumentsToArray() {
    return Array.from(arguments);
}

console.log(argumentsToArray('Hello', 1, 2, 3));

//№4 Напишите функцию pow(x,n), которая возводит x в степень n и возвращает результат.
console.log('№4')

function pow(x, n) {
    return x**n
}

console.log(pow(2, 10));

//№5 Напишите аналог встроенного метода forEach для работы с массивами
console.log('№5')

function myForEach(array, callBack) {
    for (let i = 0; i < array.length; i++) {
        callBack(array[i], i, array);
    }
}

const numbers = [1, 2, 3, 4, 5];

myForEach(numbers, function(num, index, array) {
    console.log(`index: ${index}, number: ${num}, array: ${array}`);
});

//№6 Напишите аналог встроенного метода map для работы с массивами
console.log('№6')

function myMap(array, callback) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i], i, array));
    }
    return newArray;
}

const numbers2 = [1, 2, 3, 4, 5];
console.log(myMap(numbers2, number => number * 2));

// Напишите аналог встроенного метода reduce для работы с массивами
console.log('№7')
function myReduce(array, callback, initialValue) {
    let accumulator = initialValue;
    for (let i = 0; i < array.length; i++) {
        accumulator = callback(accumulator, array[i], i, array);
    }
    return accumulator;
}

const numbers3 = [1, 2, 3, 4, 5];
console.log(myReduce(numbers, (accumulator, number) => accumulator + number, 0));

// Напишите аналог встроенного метода slice для работы с массивами
console.log('№8')

function mySlice(array, start, end) {
    const newArray = [];
    for (let i = start; i < end && i < array.length; i++) {
        newArray.push(array[i]);
    }
    return newArray;
}

const numbers4 = [1, 2, 3, 4, 5];

console.log(mySlice(numbers4, 2, 3));


