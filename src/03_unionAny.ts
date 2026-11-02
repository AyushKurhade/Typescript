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