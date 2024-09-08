// Class 
var Person = /** @class */ (function () {
    function Person(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    Person.prototype.getName = function () {
        return "My Name is " + this.name + ' ' + this.surname;
    };
    return Person;
}());
var p = new Person("Ashis", "Banerjee");
console.log(p.getName());
