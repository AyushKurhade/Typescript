function orderChai(size: "small" | "medium" | "large" | number) {
  if (size === "small") {
    return "Small cutting chai";
  } else if (size === "medium" || size === "large") {
    return "Make extra chai";
  } else {
    return size; // Handles the number case
  }
}

class kulhadchai {
    serve(){
        return `serving chai in kulhad`
    }
}

class banmaska {
    serve(){
        return `serving banmaska in plate`
    }
}
function serve (chai : kulhadchai | banmaska){
    if(chai instanceof kulhadchai){
        return chai.serve();
    }

}
//-------------------------------------
type chaiorder = {
    type : string  
    suger : number 
}
function isChaiOrder(obj: any): obj is ChaiOrder {
    return(
        typeof obj === "object" &&
        obj !== null &&
        typeof obj.type === "string" &&
        typeof obj.sugar === "number"
    )
}

function serveOrder(item: any) {
    if(isChaiOrder(item)) {
        // Now TypeScript knows 'item' is of type 'ChaiOrder'
    }
}