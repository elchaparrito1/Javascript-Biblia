//On IF statements

let cond = 1;

if (cond) {
  console.log("Executed!")
} else {
  console.log("Not Executed!")
}

//This would return "Executed" b/c as you know, 1 is seen as a truthy primitive value
//What if it were 2 though? This would return true as well, and 0 would be false

//But consider the following:
console.log(2 == true); //returns false
//What gives?
/*Well, JS only treats 0 as false for conditionals, and anything that doesn't equal 0 
is true as far as numeric primitives are concerned.*/
//So... cond could equal -1, -2, or even -.000003033/232322, and return true

//What about this then:

let condition = "text";

if (condition) {
  console.log("Executed!")
} else {
  console.log("Not Executed!")
}

//This still returns true. Again, its this truthy vs falsy. 
    //An empty string would indeed be false, b/c it is falsy, whereas a string containing chars is truthy

//The same as far as falsy would go for null, which would be "Not Executed!"

//JS is a dynamic typing language:
let var1 = 1;

console.log(var1); // 5

var1 = 10;

console.log(var1) // 10

//It never cares about the type either, unlike other languages:
let var1 = 1;

console.log(var1); //Variable is a number here: 5

var1 = "10";

console.log(var1) //Variable becomes a string here: "10"

//Look out for section 8.7.7 on callable objects vs true functions.