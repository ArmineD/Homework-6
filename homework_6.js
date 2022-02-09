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

    toString(){
        return JSON.stringify(this)
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
        return JSON.stringify(this);
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
        return JSON.stringify(this);
    }
}

let author = new Author("AgathaChristie", "Agatha@mail.com", "female")
let book = new Book("DeathOntheNile", author, 10, 3);


// 4

class Account {
    
    static identifyAccount(accountFirst, accountSecond){
        return accountFirst._name === accountSecond._name && accountFirst._balance === accountSecond._balance && accountFirst._id === accountSecond._id
    }
    
    constructor(id, name, balance){
        this._name = name;
        this._balance = balance;
        this._id = id; 
    }

    get id(){
        return this._id;
    }

    get name(){
        return this._name;
    }

    set name(name){
        this._name = name;
    }

    get balance(){
        return this._balance;
    }

    set balance(balance){
        this._balance = balance;
    }
    
    credit(amount){
        this._balance += amount;
        return this._balance
    }

    debit(amount){
        if(this._balance >= amount){
            return this._balance -= amount;
        } else {
            return 'Amount exceeded balance'
        }
    }

    transferTo(anotherAcount, amount){
        if(this._balance >= amount){
            this._balance -= amount;
            anotherAcount.balance += amount;
            return this._balance; 
        } else {
            return 'Amount exceeded balance'
        }
    }
    
    toString () {
        return JSON.stringify(this)
    }
}





//5 -


class Person {
    constructor (firstName, lastName, gender, age) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._gender = gender;
        this._age = age;
    }
    
    get firstName(){
        return this._firstName
    }

    set firstName(firstName){
        this._firstName = firstName;
    }

    get lastName(){
        return this._lastName
    }

    set lastName(lastName){
        this._lastName = lastName;
    }

    get gender(){
        return this._gender;
    }

    set gender(gender){
        this._gender = gender;
    }

    get age(){
        return this._age;
    }

    set age(age){
        this._age = age;
    }
    
    toString() {
        return JSON.stringify(this);
    }
}


class Student extends Person {
    passedExams = {};

    constructor(programs, year, fee){
        super()
        this._programs = programs;
        this._year = year;
        this._fee = fee;
        this.preparingStudentProgram(programs)
    } 
    
    get programs(){
        return this._program;
    }

    set programs(programs){
        this._programs = programs;
    }

    get year(){
        return this._year;
    }

    set year(year){
        this._year = year;
    }

    get fee(){
        return this._fee;
    }

    set fee(fee){
        this._fee = fee;
    }

    preparingStudentProgram(programs){
        this.passedExams = {};
        for (let i = 0; i < programs.length; i++){
            this.passedExams[programs[i]] = false;
        }
    }
    passExam(program, grade) {
        if (grade >= 50){
            this.passedExams[program] = true;
        }
        let obj = this.passedExams;
        

    }

    toString(){
        return super.toString();
    }
}


class Teacher extends Person {
    constructor(program, pay){
        super();
        this._program = program;
        this._pay = pay;
    }
    
    get program(){
        return this._program;
    }

    set program(program){
        this._program = program;
    } 

    get pay(){
        return this._pay;
    }

    set pay(pay){
        this._pay = pay;
    } 

    toString(){
        return super.toString();
    }
}
