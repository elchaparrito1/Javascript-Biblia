//Chapter 5 - Statements
    //Remember, expressions are evaluated to produce a value.
    //But, statements are executed to make something happen.

    //JS programs are nothing more than a sequence of statements to execute.
    //And it executes these statements in the order they're written.

//5.1 Expression Statements
    //The simplest kinds of statements in JS are expressions that have side effects.
        //For example, an assignment statement like many covered in chapt 4:
        greeting = "Hello " + name;
        
        /*The -- and ++ operators are related to assignment statements. These have the side
        effect of changing a variable value:*/
            counter++;
        //Delete has the side effect of deleting an object property.
        //Thus, it is almost always used as a statement:
        delete o.x;

        //Or function calls are another example of expression statements:
            alert("Hello");
            window.close();
        /*These client-side function calls are expressions, but they have side effects
        that affect the web browser and are used as statements*/

//5.2 Compound and Empty Statements
    //A comma operator combines multiple expressions into a single line:
    i=1, j=2, k=3;

    /*A statement block combines multiple statements into a single compound statement,
    which are simply enclosed in curly braces:*/
    {
        x = Math.PI;
        cs = Math.cos(x);
        console.log("What does cos do on the Math object?");
    }

    //A compound statement allows you to use multiple statements where JS syntax expects a singl statement.

    //The empty statement is the opposite. 
    //It allows you to include no statements where one is expected. It looks like this:
    ;

//5.3 Declaration Statements
    //var, let, const, and function are declaration statements.
    //These statements define identifiers that can be used elsewhere.
    /*They don't do much on their own, but they are important in defining 
    the meaning of other statements in your program.*/

    //If a variable appears in a function scope it defines local variables.
    //If it appears in the global scope, it becomes a part of the global object.
    //Unlike other global properties, however, properties created with var cannot be deleted.

    /*Note that if no initializer is specified for a variable statement, the variable's initial
    value is undefined. As described in 3.10.1, variables are defined throughout the script or
    function in which they're declared. They are hoisted up to the start of the script or function.
    Initialization, however, occurs at the location of the variable statement, and the value
    of the variable is undefined before that point in the code:*/

    //recall:
    runScope = () => {
        console.log(variable);
        let variable = "local";
      };
      
      runScope(); //returns ReferenceError: Cannot access 'variable' before initialization

    //This would still return the same error:
    let variable = "global";

    runScope = () => {
        console.log(variable);
        let variable = "local";
      };
      
      runScope(); 
    /*b/c again, 'variable' is being declared in the local function and then hoisted, so 
    runScope knows not to go outside of its scope for that variable, but again, initialization
    happens at the location of the var statement, and the value of the variable is undefined before
    that point in the code*/
    
    //Options for avoiding reference errors:
    runScope = () => {
        let variable = "local";
        console.log(variable);
      };
      
      runScope(); 

    //or
    let variable = "global";

    runScope = () => {
        console.log(variable);
      };
      
      runScope(); 

//5.3.2 function
      //We saw the function keyword is used to define functions. 
      //We saw it in function definition expressions:
      let x = function(a,b) {return a+b}

      //It can also be used in statement form:
      x()
      //Example of function declaration:
      function hypo(x,y) {
          return Math.sqrt(x*x + y*y)
      }

      //A key difference between the two is that expressions aren't loaded before any code:
      alert(foo);
      var foo = function() {return 5} //ERROR! foo wasn't loaded yet.
      //Whereas declarations are loaded before any code can run:
      alert(foo);
      function foo() {return 5} // Alerts 5

      /*Function declarations, however, may only appear at the top in nested functions. Definition
      statements are implicitly "hoisted" to the top of the containing script or function,
      so that they are visible throughout the script or function.*/

      /*With function expressions the code remains where you placed it. With declaration
      statements, however, both the function name and the function are hoisted, which means
      you can invoke a JS function before you declare it.*/

      /*The way to remember the difference is that the function declaration statement includes 
      a function name, whereas a function expression is an anonymous function attached to a 
      variable name.*/

//5.4 Conditionals
      //These statements execute code or skip it based on a met condition.
      //These statements are sometimes known as "branches"

      //The basic format of an "if" statement is as follows: if (expression) {statement}
      //JS requires a single statement after the "if" keyword.
      //But you can use a statement block to combine multiple statments into one:
        if (address) {
            address = "";
            message = "No address found";
        }
      //(This covered switch statements in detail, but you didn't see any big surprises).

//5.5 Loops
    //while
        //JS's most basic loop:
        while (expression) {
            statement
        };
        /*To execute a while statement, the interpreter first evaluates expression.
        If the value of the expression is falsy, then the interpreter skips over the
        statement and moves onto the next statement in the program. If truthy then,
        the loop obviously continues until falsy is yielded.*/

        /*Obviously, you know that you wouldn't want to never meet the condition of falsy,
        b/c this would lead to an endless loop*/
    
    //do/while
        //Is like a while loop, but the expression is tested at the bottom of the loop.
        //This means that it will run or be executed at least once.
        do 
          statement
        while (expression);

    //for
        //format
        for(initialize; test; increment) {
            statement
        };
        //initialize, test, and increment are three expressions.
        //Versus the while loop, which breaks up the three expressions as follows:
        initialize;
        while(test) {
            statement
            increment;
        }

    //for/in
        //This loop used the "for" keyword, but it is completely different from the regular for loop
        for (variable in object) {
            statement
        };

        //variable usually names a variable, but ti may be any expression that evaluates to an lvalue
        //object is an expression that evaluates to an object.
        //statement is a statement that serves as the body of the loop.

        //It is easy to iterate through an array using the typical for loop
        for (let i = 0; i < arr.length; i++) {
            console.log(arr[i]);
        };

        //The for/in loop makes it easy to do the same thing for the PROPERTIES of an object
        for (prop in obj) {
            console.log(obj[prop]);
        }; //REMEMBER what a property is: objectName.property (person.age);

        

