// union type
let money : number | string = 20000

let apiRequest : "pending" | "success" | "error" = "pending"

let airline : "indigo" | "airindia" | "spicejet" = "indigo"
// airline = "Air India" // error

const orders = ['20','30', '40', '50', '60', '70', '80', '90', '100'] as const

let curruntorder : string  | undefined;

for (let order of orders) {
    if(order === '100'){
        curruntorder = order ;
        break 
    }
    curruntorder = '11' }
    console.log(curruntorder)


    // Union Types
let userId: number | string;

userId = 101;
userId = "USER101";

// Multiple Types
let status: string | boolean;

status = "Active";
status = true;

let value: string | number | boolean;

value = "Hello";
value = 100;
value = false;

// Union Types with Functions
function printId(id: number | string) {
    console.log(id);
}

printId(101);
printId("USER101");

// Type Narrowing
function printUserId(id: number | string) {
    if (typeof id === "string") {
        console.log(id.toUpperCase());
    } else {
        console.log(id);
    }
}

printUserId("USER101");
printUserId(101);

// The Problem with any
let data: any = "Hello";

data = 100;
data = true;
data = ["Java", "Python"];

// any Disables Type Checking
let username: any = "Ayush";

console.log(username.toUpperCase());
// console.log(username.toFixed(2)); // Runtime Error

// Without any
let userName: string = "Ayush";

// userName.toFixed(2); // TypeScript Error
console.log(userName.toUpperCase());