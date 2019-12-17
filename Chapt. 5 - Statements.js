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

    //A compound statement allows you to use multiple statements where JS syntax expects a single statement.

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

        //To execute a for/in statement, the JS interpreter first evaluates the object expression.
        //If this evaluates to null or undefined, the interpreter skips the loop and moves to the next statement.
        //If it evaluates to a primitive value, that value is converted to its wrapper object.

        /*Note that the variable in the for/in loop may be an arbitrary expression, as long as it
        evaluates to something suitable for the left side of an assignment. This expression is 
        evaluated each time through the loop, which means that it may evaluate differently each time:*/
        let o = {x:1, y:2, z:3};
        let a = [], i = 0;
        for (a[i++] in o);

        //Remember though that arrays are a specialized kind of object.
        //They have their array indexes that can be enumerated with a for/in loop/
        let arr = [1,2,3];
        for (iterator in arr) {
            console.log(iterator);
        };

        //Note that the for/in loop does not actually enumerate all properties of an object.
        //Built in methods, for example, defined by core JS are not enumerable
        //For instance, all objects have a toString() method that for/in doesn't enumerate:
        for (method in window) {
            console.log(method);
        } //toString() would not appear in this list

        //However, all properties defined by your code are enumerable.
        //Also, it is typical that inherited properties are enumerated over, but only after the "own" ones.
    
    //for/of
        //creates a loop iterating over iterable objects, including: built-in String, Array, array-like objects.
        for (variable of iterable) {
            statement
        }
        //Again, for/of loop iterates over the values of an iterable:
        let animals = ['🐔', '🐷', '🐑', '🐇'];
        let names = ['Gertrude', 'Henry', 'Melvin', 'Billy Bob'];

        for (let animal of animals) {
          // Random name for our animal
          let nameIdx = Math.floor(Math.random() * names.length);
        
          console.log(`${names[nameIdx]} the ${animal}`);
        }

        // Henry the 🐔
        // Melvin the 🐷
        // Henry the 🐑
        // Billy Bob the 🐇

        //Again, strings are also an iterable type:
        let str = 'abcde';

        for (let char of str) {
          console.log(char.toUpperCase().repeat(3));
        }

        // AAA
        // BBB
        // ...

//5.6 Jumps
    //Another category of statements are jump statements. 
    //As the name implies, these cause the JS interpreter to jump to a new location in the source code.
        //Break - this statement makes the interpreter jump to the end of a loop

        /*Continue - this statement makes the interpreter skip the rest of the body of a loop, and 
        jump back to the top to start it again.*/
            //this statement can only be used in a loop. Using it anywhere else causes a syntax error.

        /*Return - this statement makes the interpreter jump from a function invocation back to the 
        code that invoked it, and also supplies the value of the invocation.*/
            //Its syntax:
                return expression
            //return statement may appear only within the body of a function.
            //With no return statement, a function invocation simply executes each of the statements in the function body.
            //B/c of JS's automatic semicolon insertion, you cannot include a line break between the return and the expression.   
                
        //Throw - this statement throws an exception and is designed to work with try/catch/finally statement.
            //This is a signal to say that an error has occurred.

//5.6.1 Labeled Statements
    //Any statement may be labeled by using an identifier and colon:
        identifier: statement;

    //By giving it a name, you are able to refer to it later in your program:
        mainloop: while(token != null) {
            continue mainloop;
        }
    /*The namespace for labeled statements vs variables or functions is different so you 
    can use the same name for both a labeled statement and or a variable.*/

//5.7.3 "use strict"
    //You have a general understanding of what this does.
    //The three key differences though between strict mode and non-strict mode are the following:
        //The "with" statement is not allowed in strict mode

        /*In strict mode, all variables must be declared: a ReferenceError is thrown if you assign 
        a value to an identifier that is not a declared variable, function, function parameter, catch
        clause parameter, or property of the global object.*/

        /*In strict mode, functions invoked as functions (rather than as methods) have a this value of
        undefined (in non-strict mode, functions of this kind are passed the global object as their this
        value).*/

        /*In strict mode, assignments to nonwritable properties and attempts to create new properties
        on nonextensible objects throw a TypeError.*/

        /*In strict mode, the arguments object in a function holds a static copy of the value passed to 
        the function. In non-strict mode, the arguments object has "magical" behavior in which elements 
        of the array and named function parameters both refer to the same value*/

        //In strict mode an attempt to delete a nonconfigurable property throws a TypeError.

        //In strict mode, it is a syntax error for an obj literal to define two or more properties by the same name.

        //In strict mode, it is a syntax error for a function declaration to have two or more parameters by the same name.

        //Summary of JS statements on pg 112





        

