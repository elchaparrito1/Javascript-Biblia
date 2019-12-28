/*A function is defined as a block of JS code that may be defined 
once, but used or invoked any number of times.*/

//JS functions are parameterized: may include a list of parameters
//function invocations provide arguments.

//8.1 Defining Functions
    //Whether it is a function expression or definition, they have these components:
    //(Keep in mind this is pre-ES6 syntax)
        //Identifier to name the function
        //A pair of parentheses around a comma-separated list of identifiers
        //A pair of curly braces with JS statements inside
            //These are executed whenever the function is invoked

    //Nuances of function declaration vs function expression
        //Note that function names are optional for expressions.
        //A function statement actually declares a variable and assigns an object to it
        //A func expression on the other hand does not declare a variable name
            let funcExpression = function() {console.log("cool")}
        /*If a func expression includes a name, the local function scope will include a
        binding of that name to the function object*/
        //Most func expressions do not need names

        /*function declarations are hoisted so that functions declared in this way may
        be invoked from code that appears befor they are defined. This is not true for
        function expressions. To invoke it, you must be able to refer to it, and you
        can't refer to it until the expression is assigned to a variable. Variables are
        hoisted, but assignments to them are not, so functions defined with expressions
        cannot be invoked before they're defined*/

    /*Some functions contain a return statement. The return statement causes the function
    to stop executing and return the value of its expression. If a function does not
    contain a return statementit simply executes each statement in the function body
    and returns the undefined value of the caller*/

    function printprops(o) {
        for (let p in o) {
            console.log(`${p}: ${o[p]}'\n'`);
        }
    }
    //Notes that this function doesn't need to return a value, but performs a separate task
    //The return value for this function would be undefined