//   Створити функцію конструктор для об'єкту який описує теги
//   Властивості
//    -назва тегу
//    - опис його дій
//    - масив з атрибутами (2-3 атрибути максимум)
//    Кожен атрибут описати як окремий який буде містити
//    -назву атрибуту
//    -опис дії атрибуту
//    інформацію брати з htmlbook.ru

//    Таким чином описати теги
//    -a
//    -div
//    -h1
//    -span
//    -input
//    -form
//    -option
//    -select
//    Приклад результату
//      {
//           titleOfTag: 'area',
//           action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//           attrs: [
//           {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//           {/*some props and values*/},
//           {/*...*/},
//           {/*...*/},
//           ]

//      }
//   ==============================================

let nameTag = ['a',
    'div',
    'h1',
    'span',
    'input',
    'form',
    'option',
    'select'
];


let descriptionTag = ['Тег <a> предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь.',
    'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.',
    'Тег <h1> представляет собой наиболее важный заголовок первого уровня',
    'Тег <span> предназначен для определения строчных элементов документа. С помощью тега <span> можно выделить часть информации внутри других тегов и установить для нее свой стиль.',
    'Главным образом <input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков.',
    'Связывает поле с формой по её идентификатору. Такая связь необходима в случае, когда поле располагается за пределами <form>, например, при создании её программно или по соображениям дизайна.',
    'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>',
    'Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка, а также список с одним или множественным выбором.'
]


let attributes = [
    [{ titleOfAttr: 'name', actionOfAttr: 'Устанавливает имя якоря внутри документа.' },
        { titleOfAttr: 'href', actionOfAttr: 'Задает адрес документа, на который следует перейти.' }
    ],
    [{ titleOfAttr: 'align', actionOfAttr: 'Задает выравнивание содержимого тега <div>.' },
        { titleOfAttr: 'tittle', actionOfAttr: 'Добавляет всплывающую подсказку к содержимому.' }
    ],
    [{ titleOfAttr: 'align', actionOfAttr: 'Определяет выравнивание заголовка.' },
        { titleOfAttr: 'style', actionOfAttr: 'Атрибут style применяется для определения стиля элемента с помощью правил CSS.' }
    ],
    [{ titleOfAttr: 'Class', actionOfAttr: 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.' },
        { titleOfAttr: 'id', actionOfAttr: 'Указывает имя стилевого идентификатора.' }
    ],
    [{ titleOfAttr: 'checked', actionOfAttr: 'Предварительно активированный переключатель или флажок.' },
        { titleOfAttr: 'placeholder', actionOfAttr: 'Выводит подсказывающий текст.' }
    ],
    [{ titleOfAttr: 'action', actionOfAttr: 'URI-адрес программы, которая обрабатывает информацию переданную через форму.' },
        { titleOfAttr: 'method', actionOfAttr: 'HTTP метод, который браузер использует, для отправки формы.' }
    ],
    [{ titleOfAttr: 'label', actionOfAttr: 'Указание метки пункта списка.' },
        { titleOfAttr: 'value', actionOfAttr: 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.' }
    ],
    [{ titleOfAttr: 'size', actionOfAttr: 'Количество отображаемых строк списка.' },
        { titleOfAttr: 'multiple', actionOfAttr: 'Позволяет одновременно выбирать сразу несколько элементов списка.' }
    ]
]


function TagCreate(titleOfTag, action, attrs) {
    this.titleOfTag = titleOfTag;
    this.action = action;
    this.attrs = attrs;
}


for (let i = 0; i < nameTag.length; i++) {
    console.log(new TagCreate(nameTag[i], descriptionTag[i], attributes[i]));

}

console.log('===============================================================');
//   ==============================================
//   -  Створити класс  для об'єкту який описує теги
//   Властивості
//    -назва тегу
//    - опис його дій
//    - масив з атрибутами (2-3 атрибути максимум)
//    Кожен атрибут описати як окремий який буде містити
//    -назву атрибуту
//    -опис дії атрибуту
//    інформацію брати з htmlbook.ru

//    Таким чином описати теги
//    -a
//    -div
//    -h1
//    -span
//    -input
//    -form
//    -option
//    -select
//    Приклад результату
//      {
//           titleOfTag: 'area',
//           action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//           attrs: [
//           {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//           {/*some props and values*/},
//           {/*...*/},
//           {/*...*/},
//           ]

//      }
//   ==============================================

class Tag {
    constructor(titleOfTag, action, attrs) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attrs = attrs;
    }
}

for (let i = 0; i < nameTag.length; i++) {
    console.log(new Tag(nameTag[i], descriptionTag[i], attributes[i]));

}

console.log('===============================================================');
//   ==============================================
//   - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//   -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//   -- info () - яка виводить всю інформацію про автомобіль
//   -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//   -- changeYear (newValue) - змінює рік випуску на значення newValue
//   -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//   ==============================================

let car = {
    model: 'Passat B8',
    producer: 'Volkswagen',
    year: 2016,
    maxspeed: 220,
    tankVolume: 1.8,
    drive: function() {
        console.log(`їдемо зі швидкістю ${this.maxspeed} км на годину`);
    },
    info: function() {
        console.log(`model: ${this.model}, producer: ${this.producer}, year: ${this.year}, maxspeed: ${this.maxspeed} км/год, tankVolume: ${this.tankVolume}`);
    },
    increaseMaxSpeed: function(newSpeed) {
        this.maxspeed = this.maxspeed + newSpeed;
        console.log('нова максимальна швидкість', this.maxspeed);
    },
    changeYear: function(newValue) {
        this.year = newValue;
        console.log(this.year);
    },
    addDriver: function(driver) {
        this.driver = driver;
        return this;
    }
}

let newDriver = {
    name: 'Valtteri Bottas',
    age: '34',
    sex: 'man',
    experience: '3 years'
}

car.drive();
car.info();
car.increaseMaxSpeed(40);
car.changeYear(2019);
console.log(car.addDriver(newDriver));

console.log('===============================================================');
//   ==============================================
//   - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//   -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//   -- info () - яка виводить всю інформацію про автомобіль
//   -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//   -- changeYear (newValue) - змінює рік випуску на значення newValue
//   -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//   ==============================================

function Car(model, producer, year, maxspeed, tankVolume) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxspeed = maxspeed;
    this.tankVolume = tankVolume;

    this.drive = function() {
        console.log(`їдемо зі швидкістю ${this.maxspeed} км на годину`);
    };
    this.info = function() {
        console.log(`model: ${this.model}, producer: ${this.producer}, year: ${this.year}, maxspeed: ${this.maxspeed} км/год, tankVolume: ${this.tankVolume}`);
    };
    this.increaseMaxSpeed = function(newSpeed) {
        this.maxspeed = this.maxspeed + newSpeed;
        console.log('нова максимальна швидкість', this.maxspeed);
    };
    this.changeYear = function(newValue) {
        this.year = newValue;
        console.log(this.year);
    };
    this.addDriver = function(driver) {
        this.driver = driver;
        return this;
    }
}
let bmw = new Car('X5', 'BMW', 2016, 250, 3.2);
console.log(bmw);
bmw.drive();
bmw.info();
bmw.increaseMaxSpeed(50);
bmw.changeYear(2020);
console.log(bmw.addDriver(newDriver));

console.log('===============================================================');
//   ==============================================
//   - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
//   -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
//   -- info () - яка виводить всю інформацію про автомобіль
//   -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//   -- changeYear (newValue) - змінює рік випуску на значення newValue
//   -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
//   ==============================================

class CarNew {
    constructor(model, producer, year, maxspeed, tankVolume) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxspeed = maxspeed;
        this.tankVolume = tankVolume
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxspeed} км на годину`);
    }

    info() {
        console.log(`model: ${this.model}, producer: ${this.producer}, year: ${this.year}, maxspeed: ${this.maxspeed} км/год, tankVolume: ${this.tankVolume}`);
    }

    increaseMaxSpeed(newSpeed) {
        this.maxspeed = this.maxspeed + newSpeed;
        console.log('нова максимальна швидкість', this.maxspeed);
    }

    changeYear(newValue) {
        this.year = newValue;
        console.log(this.year);
    }

    addDriver(driver) {
        this.driver = driver;
        return this;
    }

}

let chevrolet = new CarNew('Camaro', 'Chevrolet', 2018, 260, 2.9);
console.log(chevrolet);

chevrolet.drive();
chevrolet.info();
chevrolet.increaseMaxSpeed(70);
chevrolet.changeYear(2019);
console.log(chevrolet.addDriver(newDriver));


console.log('===============================================================');
//   ==============================================
//   -створити класс попелюшка з полями ім'я, вік, розмір ноги
//   --Створити 10 попелюшок , покласти їх в масив
//   --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//   -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
//   ==============================================

let cinderellas = [];

class Cinderella {
    constructor(name, age, footSize) {
        this.name = name,
            this.age = age,
            this.footSize = footSize

    }
}

cinderellas.push(new Cinderella('Katya', 28, 37));
cinderellas.push(new Cinderella('Nastya', 25, 39));
cinderellas.push(new Cinderella('Olya', 27, 36));
cinderellas.push(new Cinderella('Natalya', 28, 40));
cinderellas.push(new Cinderella('Olena', 29, 42));
cinderellas.push(new Cinderella('Victoriya', 31, 41));
cinderellas.push(new Cinderella('Ira', 32, 43));
cinderellas.push(new Cinderella('Marta', 30, 38));
cinderellas.push(new Cinderella('Vira', 23, 35));
cinderellas.push(new Cinderella('Solomiya', 33, 44));

console.log(cinderellas);


class Prince extends Cinderella {
    constructor(name, age, shue) {
        super(name, age);
        this.shue = shue;
    }

    findCinderella(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].footSize === this.shue) {
                console.log(`Принц ${this.name} повинен бути з ${arr[i].name}, її розмір ноги ${arr[i].footSize}`);
            }

        }
    }

}

let jack = new Prince('Jack', 31, 36);

jack.findCinderella(cinderellas);


console.log('===============================================================');
//   ==============================================
//   -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
//   --Створити 10 попелюшок , покласти їх в масив
//   --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
//   -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить


cinderellas = [];

function CinderellaNew(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}

cinderellas.push(new CinderellaNew('Katya', 28, 37));
cinderellas.push(new CinderellaNew('Nastya', 25, 39));
cinderellas.push(new CinderellaNew('Olya', 27, 36));
cinderellas.push(new CinderellaNew('Natalya', 28, 40));
cinderellas.push(new CinderellaNew('Olena', 29, 42));
cinderellas.push(new CinderellaNew('Victoriya', 31, 41));
cinderellas.push(new CinderellaNew('Ira', 32, 43));
cinderellas.push(new CinderellaNew('Marta', 30, 38));
cinderellas.push(new CinderellaNew('Vira', 23, 35));
cinderellas.push(new CinderellaNew('Solomiya', 33, 44));

console.log(cinderellas);

function PrinceNew(name, age, shue) {
    this.name = name;
    this.age = age;
    this.shue = shue;

    this.findCinderella = function(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].footSize === this.shue) {
                console.log(`Принц ${this.name} повинен бути з ${arr[i].name}, її розмір ноги ${arr[i].footSize}`);
            }

        }
    }
}

let harry = new PrinceNew('Harry', 35, 40);

harry.findCinderella(cinderellas);

console.log('===============================================================');

//=======================================================
//=========        Практична робота      ================
//=======================================================

//Реализуйте класс Student (Студент), который будет наследовать от класса User . 
//Этот класс должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User), 
//year (год поступления в вуз). Класс должен иметь метод getFullName() (наследуется от User), 
//с помощью которого можно вывести одновременно имя и фамилию студента. Также класс должен иметь метод, 
//который будет изменять имя и фамилию студента.

class User {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }

    getFullName() {
        console.log(`Full Name : ${this.name} ${this.surname}`);
    }
}


class Student extends User {
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }

    changeStudentName() {
        this.name = prompt('Введіть нове ім\'я');
        this.surname = prompt('Введіть нове Прізвише');
        console.log(`New Name : ${this.name} ${this.surname}`);
    }

}

let student = new Student('Viktor', 'Petrov', 2014);
student.getFullName();
student.changeStudentName();