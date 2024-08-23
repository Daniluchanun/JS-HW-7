function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let user = new User(1, 'Danil', 'Batkovich', 'sakjnkjnfjwe@gmail.com', '0973235454');
let users = [
    new User(1, 'Danil', 'Batkovich', 'sakjnkjnfjwe@gmail.com', '0973235454'),
    new User(2, 'Danil', 'Batkovich', 'sakjnkjnfjwe@gmail.com', '0973235454'),
    new User(3, 'Danil', 'Batkovich', 'sakjnkjnfjwe@gmail.com', '0973235454'),
    new User(4, 'Danil', 'Batkovich', 'sakjnkjnfjwe@gmail.com', '0973235454'),
    new User(5, 'Danil', 'Batkovich', 'sakjnkjnfjwe@gmail.com', '0973235454'),
    new User(6, 'Danil', 'Batkovich', 'sakjnkjnfjwe@gmail.com', '0973235454'),
    new User(7, 'Danil', 'Batkovich', 'sakjnkjnfjwe@gmail.com', '0973235454'),
    new User(8, 'Danil', 'Batkovich', 'sakjnkjnfjwe@gmail.com', '0973235454'),
    new User(9, 'Danil', 'Batkovich', 'sakjnkjnfjwe@gmail.com', '0973235454'),
    new User(10, 'Danil', 'Batkovich', 'sakjnkjnfjwe@gmail.com', '0973235454')
];
console.log(users);

function filter(user) {
    return user.id % 2 === 0;
}

const result = users.filter(filter);
console.log(result);

function sort(user1, user2) {
    return user2.id - user1.id;
    // return user1.id - user2.id; --- зростання
}

console.log(users.sort(sort));


function Client(id, name, surname, email, phone, order) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

let Users = [
    new Client(1, 'Vasya', 'Petya', 'dfsfsdfsd@gamil.com', '0973235454', ['first order', 'second order', 'third order']),
    new Client(2, 'Petya', 'Lenin', 'dsggrewgerg@gamil.com', '0978324433', ['first order', 'second order']),
    new Client(3, 'Zas', 'Talina', 'erhthtrh@gamil.com', '0973223554', ['first order']),
    new Client(4, 'Zamir', 'ZaKiev', 'kuytktyuyrmmyd@gamil.com', '0973235654', ['first order', 'second order']),
    new Client(5, 'Zag', 'Itlera', 'fh;t.rhr@gamil.com', '0973235454', ['first order', 'second order', 'third order', 'fourth order']),
    new Client(6, 'Och', 'Kolenu', '2094u5-dfd@gamil.com', '0973235454', ['first order', 'second order', 'third order']),
    new Client(7, 'Misha', 'Lunin', 'frgrtrt@gamil.com', '0973235454', ['first order']),
    new Client(8, 'Killian', 'Mbappe', 'aoaooaaooa@gamil.com', '0973235454', ['first order', 'second order', 'third order']),
    new Client(9, 'Enekin', 'Skyworker', 'hay===git----ler@gamil.com', '0973235454', ['first order', 'second order', 'third order', 'fourth order']),
    new Client(10, 'Molnia', 'Makvin', 'dgeqrgrlad@gamil.com', '0973235454', ['first order', 'second order']),
];
console.log(Users);

Users.sort((a, b) => a.order.length - b.order.length);
console.log(Users);


function Car(model, maker, year, maxSpeed, engine) {
    this.model = model;
    this.maker = maker;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${maxSpeed} на годину`)
    }
    this.info = function (key) {
        for (const key in this) {
            console.log(key, this[key]);
        }
    }
    this.increaseMaxSpeed = function (newSpeed) {
        console.log(this.maxSpeed = newSpeed);
    }
    this.changedYear = function (newYear) {
        console.log(this.year = newYear);
    }
    this.addDriver = function (driver) {
        console.log(this.driver = driver);
    }
}

let car = new Car(911, 'Porsche', 2022, 380, 4);
console.log(car);

car.drive();
car.info();
car.increaseMaxSpeed(385);
car.changedYear(2023);
car.addDriver('Vitia');
console.log(car);

{
    class CarClass {

        constructor(model, maker, year, maxSpeed, engine) {
            this.model = model;
            this.maker = maker;
            this.year = year;
            this.maxSpeed = maxSpeed;
            this.engine = engine;
        }
        drive () {
            console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
        }
        info (key) {
            for (const key in this) {
                console.log(key, this[key]);
            }
        }
        increaseMaxSpeed (newSpeed) {
            console.log(this.maxSpeed = newSpeed);
        }
        changedYear (newYear) {
            console.log(this.year = newYear);
        }
        addDriver (driver) {
            console.log(this.driver = driver);
        }
}
    let car = new CarClass(458, 'Ferrari', 2018, 330, 6);
    console.log(car);

    car.drive();
    car.info();
    car.increaseMaxSpeed(340);
    car.changedYear(2019);
    car.addDriver('Kolia');
    console.log(car);
}



class Popel {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
 class Prince {
    constructor(name, age, shoe) {
        this.name = name;
        this.age = age;
        this.shoe = shoe;
    }
 }

 let Popels = [
     new Popel('Marina', 34, 34),
     new Popel('Natasha', 22, 35),
     new Popel('Sasha', 23, 36),
     new Popel('Nadya', 54, 37),
     new Popel('Vika', 30, 38),
     new Popel('Karina', 19, 39),
 ]

let prince = new Prince('Vitalik', 12, 37);
for (const popel of Popels) {
    if(popel.footSize === prince.shoe){
        prince.wife = popel;
    }
}
console.log(prince);


Array.prototype.specialFilter = function (callback) {
    let arr = [];
    for (const element of this) {
        if (callback(element)) {
            arr.push(element);
        }
    }
    return arr;
}
let userss = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
const finalResult = userss.specialFilter((user) => user.status);
console.log(finalResult);