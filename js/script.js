'use strict'

//2. Створіть об'єкт person з властивістю name та методом greet, який повертає рядок привітання з ім'ям особи. Викличте метод greet і виведіть результат.

// let user = {
//     name,
// };
// user.greet = function(name){
//     return console.log(`Привіт ${name}`); 
// }
// user.greet('Артем');
// console.log(user);

//3. Додайте метод getAge до об'єкта person, який буде приймати рік народження і повертати вік особи. Викличте метод getAge і виведіть результат.

// let person = {
//     year: 2006,
// };
// person.getAge = function(){
//     let trueAge = 2023 - this.year;
//     return console.log(`Ваш вік ${trueAge}`);
// }
// person.getAge();

//4. Створіть об'єкт rectangle з властивостями width і height, а також методом getArea, який повертає площу прямокутника (ширина * висота). Викличте метод getArea і виведіть результат.

// let rectangle = {
//     width: 4,
//     height: 2,
//     getArea(){
//         console.log(`Площа прямокутника з шириною ${this.width} та довжиною сторін ${this.height}: ` + this.width * this.height); 
//     }
// };
// rectangle.getArea();
// let rectangle = {
//     width: 4,
//     height: 2,
//     getArea(){
//         return `Площа прямокутника з шириною ${this.width} та довжиною сторін ${this.height}: ` + this.width * this.height;
//     }
// };
// console.log(rectangle.getArea());

//5. Створіть об'єкт bankAccount з властивістю balance і методами deposit і withdraw. Метод deposit повинен додавати суму до балансу, а метод withdraw - знімати з балансу відповідну суму. Переконайтеся, що баланс не стає від'ємним. Викличте обидва методи і виведіть оновлений баланс.

// let bankAccount = {
//     balance: 100,
//     deposit(){
//         let dep = +prompt('Додати суму до балансу: ');
//         if(dep > 0){
//             this.balance += dep; 
//         }else console.log('Некоректна операція');
//         return `Поповнення картки: ${dep} грн 
// Баланс: ` + this.balance;
//     },
//     withdraw(){
//         let withdrw = +prompt('Зняти суму з балансу: ');
//         if(this.balance - withdrw > 0){
//             this.balance -= withdrw;
//         }else console.log('Недостатньо коштів на рахунку');
//         return `Зняття коштів з картки: ${withdrw} грн
// Баланс: ` + this.balance;
//     },
// };
// console.log(bankAccount.deposit());
// console.log(`Коштів на рахунку: ${bankAccount.balance}`);
// console.log(bankAccount.withdraw());
// console.log(`Коштів на рахунку: ${bankAccount.balance}`);

//6. Створіть об'єкт car з властивостями brand, model і year, а також методом getInfo, який повертає рядок із інформацією про автомобіль. Викличте метод getInfo і виведіть результат.

// let car = {
//     brand: 'BMW',
//     model: 'X6', 
//     year: 2022,
//     getInfo(){
//         return `Марка машини: ${this.brand}
// Модель авто: ${this.model} 
// Рік випуску: ${this.year}`
//     }
// };
// console.log(car.getInfo());

//7. Створіть об'єкт temperature з властивостями celsius і getFahrenheit, який повертає температуру в градусах Фаренгейта. Викличте метод getFahrenheit і виведіть
// let temperature = {
// celsius: 25,
// getFahrenheit(){
//     let result = this.celsius * 1.8 + 32;
//     return `${this.celsius} Цесльсіїв у Фаренгейти: ${result}F`;
// }
// };
// console.log(temperature.getFahrenheit());

//8. Створіть об'єкт shoppingList з властивостями items (об'єкт з назвами товарів та їх кількістю) та методом addItem, який додаватиме товар до списку покупок. Метод повинен приймати назву товару і кількість. Викличте метод та виведіть оновлений список покупок.
// let shoppingList = {
//     items: {
//         milk: 5,
//         bread: 2,
//         meat: 3,
//     },
//     addItem(itemName, value){
//         if(this.items[itemName]){
//             this.items[itemName] += value;
//         }else{
//             this.items[itemName] = value;
//         }
//     }
// };
// console.log(shoppingList.addItem('apple', 5));
// console.log(shoppingList.items);

//9. 1) Створіть об'єкт studentGrades з властивостями, що представляють оцінки студента з різних предметів. Ключі властивостей повинні бути іменами предметів, а значеннями - оцінками.
// 2) Додайте метод getAverageGrade, який обчислюватиме середню оцінку студента на основі його оцінок. Не використовуйте функціонал масивів для цього завдання.
// 3) Додайте метод getBestSubject, який повертатиме назву предмета, у якого студент отримав найвищу оцінку.
// 4) Додайте метод getWorstSubject, який повертатиме назву предмета, у якого студент отримав найнижчу оцінку.
// 5) Додайте метод updateGrade, який дозволить оновити оцінку студента з певного предмета. Метод повинен приймати два аргументи: назву предмета та нову оцінку. Використайте цей метод, щоб оновити оцінку з одного з предметів.
// let studentGrades = {
//     literature: 8,
//     math: 10,
//     english: 11,
//     getAverageGrade(){
//         let i = 0;
//         let sum = 0;
//         for(let key in studentGrades){
//             if(typeof this[key] === 'number'){
//                 sum += this[key];
//                 i++
//             }
//         }
//         return `Середня оцінка студента з оцінками : ${this.math}, ${this.literature}, ${this.english} = ` + sum / i;
//     },
//     getBestSubject(){
//         let maxGrade = -Infinity;
//         let subject = null;
//         for(let key in studentGrades){
//             if(typeof this[key] === 'number' && this[key] > maxGrade){
//                     maxGrade = this[key];
//                     subject = key;
//                 }
//             }
//             return `Найкращий предмет: ` + subject;
//         },
//         getWorstSubject(){
//             let minGrade = Infinity;
//             let worstMark = null;
//             for(let key in studentGrades){
//                 if(typeof this[key] === 'number' && this[key] < minGrade){
//                     minGrade = this[key];
//                     worstMark = key;
//                 }
//             }
//             return `Найгірший предмет: ` + worstMark;
//         },
//         updateGrade(name, value){
//             if(typeof this[name] === 'number'){
//                 this[name] = value;
//         }
//     },
// };
// console.log(studentGrades.getAverageGrade());
// console.log(studentGrades.getBestSubject());
// console.log(studentGrades.getWorstSubject());
// console.log(studentGrades.updateGrade('math', 12));
// console.log(studentGrades);

// Створіть об’єкт calculator з трьома методами:
// read() запитує два значення та зберігає їх як властивості об’єкта з іменами a та b відповідно.
// sum() повертає суму збережених значень.
// mul() множить збережені значення і повертає результат.

let calculator = {
read(){
    this.a = +prompt('Введіть перше число: ');
    this.b = +prompt('Введіть друге число: ');
    
},
sum(){
    let sum = this.a + this.b;
    return `Сума значень ${this.a} та ${this.b} = ${sum}`;
},
mul(){
    let mul = this.a * this.b;
    return `Результат множення значень ${this.a} та ${this.b} = ${mul}`;
},
};
console.log(calculator.read());
console.log(calculator);
console.log(calculator.sum());
console.log(calculator.mul());