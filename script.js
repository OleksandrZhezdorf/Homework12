
/* Метод forEach */

const items = ['item1', 'item2', 'item3'];
const copyItems = [];


function forEachCallbackFunction(arr) {
    arr.forEach(function (item) {
        copyItems.push(item)
    })
}
function forEachExample(arr, cb) {
    cb(arr);
    return copyItems;
}
forEachExample(items, forEachCallbackFunction);
console.log(copyItems);


/* метод map */

const array1 = [1, 4, 9, 16];


function mapCallbackFunction(arr) {
    map1 = arr.map(x => x * 2)
}
function mapExample(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        cb(arr);
    };
    return map1;
}
mapExample(array1, mapCallbackFunction);
console.log(map1);



/* Метод filter */

const arrayOfDigits = [1, 2, 3, 5, 6, 9];

function filterCallbackFunction(arr) {
    rem = arr.filter((num) => num != 0 && !(num % 3))
}
function filterExample(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        cb(arr);
    };
    return rem;
}
filterExample(arrayOfDigits, filterCallbackFunction);
console.log(rem);



/* Метод every */

const array2 = [12, 30, 20, 130, 44];

function everyCallbackFunction(arr) {
    everyRem = arr.every(function isBigEnough(element) {
        return element >= 10;
    })
}
function everyExample(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        cb(arr);
    };
    return everyRem;
}
everyExample(array2, everyCallbackFunction);
console.log(everyRem);




/* Метод some */

/* Оставил для себя потом доработать*/

/*const fruits = ['apple', 'banana', 'mango', 'guava'];
let someRem;*/


/*(function () {
    let someRem;
    const someExample = (arr, cb) => {
        cb(someRem = function checkAvailability(val) {
            return arr.some(function (arrVal) {
                return val === arrVal;
            });
        });
    }

    someExample(fruits, () => console.log (someRem('banana')));
})()*/


function someCallbackFunction(arr) {
    someRem = arr.some(function isBigEnough(element) {
        return element >= 40;
    })
}
function someExample(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        cb(arr);
    };
    return someRem;
}
someExample(array2, someCallbackFunction);
console.log(someRem);



/* Метод find */

function findbackFunction(arr) {
    findRem = arr.find(function isSmallEnough(element) {
        return element <= 40;
    })
}
function findExample(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        cb(arr);
    };
    return findRem;
}
findExample(array2, findbackFunction);
console.log(findRem);



/* Метод reduce */

function reducebackFunction(arr) {
    reduceRem = arr.reduce((accumulator, currentValue) => {
        return accumulator + currentValue
    }, 8)
}
function reduceExample(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        cb(arr);
    };
    return reduceRem;
}
reduceExample(arrayOfDigits, reducebackFunction);
console.log(reduceRem);



