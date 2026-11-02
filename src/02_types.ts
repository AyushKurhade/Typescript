// type inferencing 
// apne aap decide kar leta hai 
let drink = "coffee";
// drink =23

let num = Math.random() > 0.5 ? 10 : 5
// num = "42"


// type annotation 
// apko khud decide karna padta hai
let username : string = "ayushk30"
username = "anushk02"
// username = 18003131212

let status : boolean = true;




// Type Inference
let username2 = "Aayush";
let age = 21;
let isStudent = true;

// Type Annotation
let userName: string = "Ayush";
let userAge: number = 21;
let student: boolean = true;

// String
let name: string = "Ayush";
let city: string = "Amravati";

console.log(name);
console.log(city);

// Number
let myAge: number = 21;
let price: number = 99.99;
let temperature: number = -5;

console.log(myAge);
console.log(price);
console.log(temperature);

// Boolean
let isLoggedIn: boolean = true;
let isAdmin: boolean = false;

console.log(isLoggedIn);
console.log(isAdmin);

// Practical Example
let studentName: string = "Ayush";
let marks: number = 89;
let passed: boolean = true;

console.log(studentName);
console.log(marks);
console.log(passed);

// Type Errors (Uncomment to test)
// let wrongAge: number = "twenty";
// let wrongName: string = 123;
// let wrongStatus: boolean = "yes";