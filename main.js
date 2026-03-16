// let age = 20;
// let name = "Andrei";
// let isStudent = true;

// console.log("Name: ", name);
// console.log("Age: ", age);
// console.log("Is students: ", isStudent);

// let value = 10;
// console.log(value);
// value = "Теперь это строка";
// console.log(value);
// value = true;
// console.log(value);

// let userName = "Андрей";

// console.log(`Привет, ${userName}!`);

// let price = 99.99;

// let temper = -15;

// let infinity = 1 / 0;

// let notANumber = 0 / 0;

// console.log(0.1 + 0.2);

// let bigNumber = 9007199254740991n;
// let huge = BigInt("12346554788900");

// let isAlive = true;
// let isWork = true;
// let isAdult = age > 18;

// let x;
// let y = undefined;

// let userDate = null;

// let id = Symbol("id");

// let person = {
//   name: "Andrei",
//   age: 18,
//   isStudent: false,
//   sayHello: function () {
//     console.log("Привет!");
//   },
// };

// console.log(person.name);

// let fruits = ["яблоко", "апельсин", "банан"];
// let number = [1, 2, 3, 4, 5];
// let mixed = ["тексе", 42, true, null];

// function sum(a, b) {
//   return a + b;
// }

// let multiply = function (x, y) {
//   return x * y;
// };

// console.log(sum(5, 3));

// let now = new Date();
// let birthday = new Date("1995-12-17");

// let a = 10;
// let b = 3;

// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(a / b);

// console.log(10 + "5");
// console.log("10" - 5);

// const numbersArray = [1, 2, 3];

// numbersArray[0] = 10;
// console.log(numbersArray);

// //numbersArray =[5,6,7];

// const persons = {
//   name: "Andrei",
//   age: 18,
// };
// person.age = 50;
// person.city = "Volgograd";
// console.log(persons);
// person = {
//   name: "Stas",
// };

// console.log(typeof "Текст");
// console.log(typeof 42);
// console.log(typeof true);
// console.log(typeof undefined);
// console.log(typeof null);
// console.log(typeof {});
// console.log(typeof []);
// console.log(typeof function () {});

// let numberX = null;
// console.log(numberX === null);

// let newPrice = 10;
// console.log(typeof newPrice, newPrice);
// newPrice = "10";
// console.log(typeof newPrice, newPrice);

// let num = 42;
// let str = String(num);
// let str2 = num.toString();
// let str3 = "" + num;

// let strNum = "123";
// let int = Number(strNum);
// let int2 = parseInt("42.5");
// let float = parseFloat("3.14");
// let int3 = +"99";

// let bool1 = Boolean(1);
// let bool2 = !!1;
// let bool3 = Boolean(0);
// let bool4 = Boolean("");

// console.log("5" + 3);
// console.log("5" - 3);
// console.log("5" * "3");
// console.log(true + 3);
// console.log(false + 3);
// console.log(null + 3);
// console.log(undefined + 3);

// console.log(5 == "5");
// console.log(5 === "5");
// console.log(0 == false);
// console.log(0 === false);
// console.log(null == undefined);
// console.log(null == undefined);

// let obj1 = { name: "John" };
// let obj2 = { name: "John" };
// console.log(obj1 == obj2);
// console.log(obj1 === obj2);

// let arr1 = [1, 2, 3];
// let arr2 = [1, 2, 3];
// console.log(arr1 === arr2);

// let x1 = "10";
// let y1 = 2;

// console.log(x1 + y1);
// console.log(x1 + y1);
// console.log(x1 * y1);
// console.log(x1 / y1);

// let a1 = 10,
//   b2 = 20;

// console.log(a1 - b2);
// console.log(a1 + b2);
// console.log(a1 * b2);
// console.log(a1 / b2);

// 12.2
let yourAge = 18;

if (yourAge >= 18){
  console.log("доступ разрещен");
}else {
  console.log("Доступ запрещен");
}


// 12.3
let temperature = 15;
if (temperature < 0) {
    console.log("Холодно");
} else if (temperature >= 0 && temperature <= 20) {
    console.log("Прохладно");
} else {
    console.log("Тепло");
}
// 12.4
let Student = true;
let age = 20;
if (Student && age <25){
  console.log("Доступна студенческая скидка");
}else {
  console.log("Студенческая скидка недоступна")
}

//12.5
let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn && isAdmin) {
    console.log("Полный доступ");
} else if (isLoggedIn && !isAdmin) {
    console.log("Ограниченный доступ");
} else {
    console.log("Доступ запрещён");
}

// 12.6
let a3 =10;
let b3 = "10";

let resuLoos = a3 == b3;
let resuStric = a3 == b3;

console.log("a3== b3:",resuLoos);
console.log("a3 === b3:", resuStric);
console.log(" Разница между == и ===");
console.log("== (нестрогое равенство) выполняет приведение типов перед сравнением");
console.log("=== (строгое равенство) сравнивает и значение, и тип без приведения");
console.log("\nВ нашем случае:");
console.log("a3 имеет тип:", typeof a3);
console.log("b3 имеет тип:", typeof b3);
console.log("Поэтому a3 == b3 возвращает true (значения равны после приведения)");
console.log("А a3 === b3 возвращает false (типы разные: number и string)");
// 12.7
let ages = 20;
let message = ages >= 18 ? "Совершеннолетний" : "Несовершеннолетний";
console.log(message); 

// 12.8
let day = 3;
switch (day){
  case 1: console.log("Понедельник"); break;
  case 2: console.log("Вторник"); break;
  case 3: console.log("Среда"); break;
  default: console.log("Неизвестный день");
}

// 12.9
let monthNumber = 5;
switch (monthNumber) {
    case 1:
        console.log("Январь");
        break;
    case 2:
        console.log("Февраль");
        break;
    case 3:
        console.log("Март");
        break;
    case 4:
        console.log("Апрель");
        break;
    case 5:
        console.log("Май");
        break;
    case 6:
        console.log("Июнь");
        break;
    case 7:
        console.log("Июль");
        break;
    case 8:
        console.log("Август");
        break;
    case 9:
        console.log("Сентябрь");
        break;
    case 10:
        console.log("Октябрь");
        break;
    case 11:
        console.log("Ноябрь");
        break;
    case 12:
        console.log("Декабрь");
        break;
    default:
        console.log("Неверное значение месяца. Введите число от 1 до 12.");
}