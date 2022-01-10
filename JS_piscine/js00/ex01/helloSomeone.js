export function helloSomeone(a) {
   
    
    if (a !== "" && typeof a == 'string')
        console.log("Hello " + a + "!");
    else if (a === "")
        console.log("Who are you?")
    else if (a < 0 || a == 0)
        console.log("I am Benjamin Button!");
    else if (a === null)
        console.log("I am null and void");        
    else if (typeof a == 'number' && isNaN(a) == false)
        console.log("My age is 42");
    else if (typeof a == 'number')
        console.log("Age is just a number");
    else if (a === undefined)
        console.log("Nobody can define me!");


}

export default helloSomeone;