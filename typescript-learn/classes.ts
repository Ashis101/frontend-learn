// Class 

class Person12 {
    
    constructor(public name:string, private surname : string){} 

    getName(){
        return "My Name is " + this.name + ' ' + this.surname;
    }
}

let p = new Person12("Ashis","Banerjee");
console.log(p.getName());

// Implements 

interface  PersonsInterface {
    name    :   string;
    age     :   number;
    id      :   number;
    getData :   () => string
}

class Persons implements PersonsInterface {

    constructor (public name:string, public age:number, public id:number) {}

    getData (): string {
        return `Name: ${this.name}, Age: ${this.age}, ID: ${this.id}`;
    }

    getValues(): any {
        return {
            name: this.name,
            age: this.age,
            id: this.id
        };
    }

} 


// Generics

// Generics in TypeScript allow you to create reusable components that work with a variety of types while still maintaining type safety


// Genrics function

function identity <T> (arg:T) : T 
{
    return arg;
} 

let result  = identity<number>(10);
let result1 = identity<string>('Hello');

function getArray<T>(items: T[]): T[] {
    return items;
}

// Usage
let numberArray = getArray<number>([1, 2, 3, 4]);

// Generics class

class Box<T> {
    contents: T;

    constructor(value: T) {
        this.contents = value;
    }

    getContents(): T {
        return this.contents;
    }
}

let numberBox = new Box<number>(123);
let stringBox = new Box<string>("Hello");

// Generics Interface

interface Pair<T, U> {
    first: T;
    second: U;
}

let stringNumberPair: Pair<string, number> = {
    first: "One",
    second: 1
};

// Generics Constrains

interface Lengthwise {
    length: number;
}

function logLength<T extends Lengthwise>(arg: T): void {
    console.log(arg.length);
}

// Usage
logLength({ length: 10, value: "Hello" });


