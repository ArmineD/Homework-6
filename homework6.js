// 1
class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }
    get length() {
        return this._length;
    }

    set length(value){
        this._length = value;
    }

    get width() {
        return this._width;
    }
    
    set width(value) {
        this._width = value;
    }

    getArea() {
        return this.length * this.width;
    }

    getPerimeter(){
        return 2 * (this.length + this.width)
    }
}


// 2
class Employee {
    constructor(id, firstName, lastName, position, salary, workingHours) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._position = position;
        this._salary = salary;
        this._workingHours =  workingHours;
    }
    get getId(){
        return this._id;
    }
    set setId(id) {
        this._id = id;
    }
    get getFirstName(){
        return this._firstName;
    }
    set setFirstName(firstName) {
        this._firstName = firstName;
    }
    get getLastName(){
        return this._lastName;
    }
    set setLastName(position) {
        this._lastName = position;
    }
    get getPosition(){
        return this._position;
    }
    set setPosition(position) {
        this._position = position;
    }
    get getSalary(){
        return this._salary;
    }
    set setSalary(salary) {
        this._salary = salary;
    }
    get getWorkingHours(){
        return this._workingHours;
    }
    set setWorkingHours(workingHours) {
        this._workingHours = workingHours;
    }
    getFullName() {
        return `${this.getFirstName} ${this.getLastName}`;
    }
    getAnnualSalary() {
        return this.getWorkingHours * this.getSalary * 365;
    }
    getRaiseSalary(percent) {
        this.setSalary = this.getSalary + this.getSalary * percent/100
        return this.getSalary;
    }
}


// 3

class Author {
    constructor(name, email, gender) {
        this._name = name;
        this._email = email;
        this._gender = gender;
    }

    get getName() {
        return this._name;
    }

    set setName(name) {
        this._name = name;
    }

    get getEmail() {
        return this._email;
    }

    set setEmail(email) {
        this._email = email;
    }

    get getGender() {
        return this._gender;
    }

    set setGender(gender) {
        this._gender = gender;
    }

    toString() {
        return "[object User]"
    }
}

class Book {
    constructor(title, author, price, quantity) {
        this._title = title;
        this._author = author;
        this._price = price;
        this._quantity = quantity;
    }

    get getTitle() {
        return this._title;
    }

    set setTitle(title) {
        this._title = title;
    }
    get getAuthor() {
        return this._author;
    }

    set setAuthor(author) {
        this._author = author;
    }

    get getPrice() {
        return this._price;
    }

    set setPrice(price) {
        this._price = price;
    }

    get getQuantity() {
        return this._quantity;
    }

    set setTitle(quantity) {
        this._quantity = quantity;
    }

    getProfit() {
        return this.getPrice * this.getQuantity;
    }

    toString() {
        return "[object Book]"
    }
}

let author = new Author("AgathaChristie", "Agatha@mail.com", "female")
let book = new Book("DeathOntheNile", author, 10, 3);
