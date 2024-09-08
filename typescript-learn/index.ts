// Type anotation 

let a:number = 0;
let b:string = 'hello';
let num : number[];
num = [12,22,89];

// Return Type 

function add(x:number,y:number) :number
{
    return x+y;
}

// Tuples 

let address : [number,string,number];
address = [12,"ashis",89];

let person : {name: string };
person = {name : "Ashis"};

let anotherPerson : {name: string, age? : number};
anotherPerson = {name : "Ashis", age:30};
anotherPerson = {name: 'Ashis'};


// Interface 

interface Person {
    name    :   string;
    age     :   number;
    id      :   number;  
}

interface Student {
    name    :   string;
    rollNo  :   number;
    age     :   number;
}

let personInterface     : Person    = {
    name    : "Ashis", 
    age     : 14, 
    id      : 2 
};

let studentInterface    : Student   = {
    name    : "Ashis",
    rollNo  : 10,
    age     : 15
}

// Union type

let p1  :   Person|Student; 

p1 = {
    name    : "Ashis",
    rollNo  : 10,
    age     : 15,
    id      : 10    // This property does not required at the time using union type. 
                    // because above defination mathes any of two interface.
}

// Intersection 

let p2  :   Person & Student; 

p2 = {
    name    : "Ashis",
    rollNo  : 10,
    age     : 15,
    id      : 10    // This property required at the time using intersection type.                    
}


// type alias

type Count = string | number;

let c:Count;

c = 1;
c = "One";
// c = true  ->  this will give error bcz alias is set only string and number

type x = string & number; // if using '&' then type will be never  

const n : [] = []; // it will make never array 
// n.push('hi')     ->  this will not work because of never type.






