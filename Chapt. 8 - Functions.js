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

//8.1.1 Nested Functions
    //In JS, functions may be nested within one another
    function hypotenuse(a,b) {
        function square(x) { return x*x };
        return Math.sqrt(square(a) + square(b));
    }

    //The inteersting thing about nested functions is their variable scoping rules
        //They can access the parameters and variables of the function they're in
        //The square function above can read the parameters a and b if it needed to
        
//8.2 Invoking Functions
    /*JS code that makes up the body of a function is not executed when the function 
    is defined but when it is invoked.*/
    //JS functions can be invoked in four ways:
        //as functions
        //as methods
        //as constructors
        //indirectly through call() or apply()

    //Functions are invoked with an invocation expression.
    /*An expression consists of a function expression that evaluates to an object foll-
    owed by an open parenthesis, a comma-separated list of arguments and a close parenth-
    esis*/
    /*If the function is the property of an object or an element of an array then it is 
    a method invocation expression*/

    //The following include a number of regular function invocation expressions:
        printprops({x:1})
        let total = distance(0,0,2,1) + distance(2,1,3,5);
        let probability = factorial(5)/factorial(13)

    /*In an invocation, each argument expression is evaluated, and the resulting values
    becomes the arguments to the function. These values are assigned to the parameters
    named in the function definition*/

    /*For regular function invocation, the return value of the function becomes the
    value of the invocation expression. If the function returns because the interpreter
    reaches the end, the return value is undefined.*/

    /*If the function returns because the interpreter executes a return, the return 
    value is the value of the expression that follows the return or undefined if the
    return statement has no value*/

//8.2.2 Method Invocation
    //A method is nothing more than a function that is stored as a property in an object
    //Method invocation differ from function invocations is one important way:
        //The invocation context
        //Property access expressions consist of two parts:
            //an object (o)
            //a property name (o.p)

        /*In a method invocation expression like this, the object o becomes an
        invocation context and the function body can refer to that object using the
        keyword this*/

        let calculator = {
            operand1: 1,
            operand2: 2,
            add: function() {
                return this.operand1 + this.operand2
            }
        }

        console.log(calculator.add()); //returns 3;

        //Properties that use square brackets can also invoke methods:
        o['m'](x,y);

        //Method invocations may also involve more complex property access expressions:
        f().m(); //Invoke method m() on return of value of f()

        /*Methods and the 'this' keyword are central to the object-oriented programming
        paradigm. Any function that is used as a method is effectively passed an implicit
        argument - the object through which it is invoked*/

        /*Typically a method performs some sort of operation on that object, and the 
        method-invocation syntax is an elegant way to express the fact that a function
        is operating on an object. Compare the following two lines:*/
        rect.setSize(width, height);
        setRectSize(rect, width, height);
        /*These functions may perform that same operation on the object rect, but the
        method-invocation syntax in the first line more clearly indicates the idea that
        it is the object rect that is the primary focus of the operation*/

        //Unlike variables, the 'this' keyword does not have a scope.
        //Also, a nested function does not inherit the 'this' value of their caller:
        let obj = {
            meth: function() {
                    console.log(this); //logs this method
                    function bar() {
                        console.log(this); //logs window object
                        /*Note that if es6 => functions are used on the nested function
                        the 'this' keyword would reference the meth method*/
                    }
                    bar();
                }
        };

        /*So, if a nested function as a method with 'this' value (meth) is invoked it will 
        refer to the object, but if a nested function is invoked (bar) it will point to 
        the window object*/

        //Other than the arrow function, another workaround is as follows:
        let o = {
            m: function() {
                let self = this;
                console.log(this);
                f();

                function f() {
                    console.log(self);
                }
            }
        }; //But again, this can be replaced with arrow functions...

//8.2.3 Constructor Invocation
    /*If a function or method invocation is preceded by the keyword 
    'new' it means it is a constructor invocation*/

    /*Constructor invocations are quite different from regular invocations. If there
    are arguments in the parenthesis of the constructor, they are passed to the
    function the same way for regular function invocations.*/

    /*BUT if a constructor has not parameters, then JS constructor invocation syntax
    allos the argument list and parenthesis to be ommitted entirely.*/

    //You can even omit the parethesis. The following are equivalent:
    let o = new Object();
    let o = new Object; //Of course if there are no arguments to pass this can work

    /*A constructor invocation creates a new, empty object that inherits from the 
    prototype property of the constructor*/

    /*Constructor functions are intended to initialize objects and this newly created
    object is used as the invocation context, so the constructor function can refer
    to it with the this keyword*/

    //Constructor functions doe not normally use the return keyword.

    /*They typically initialize the new object and then return implicitly when they
    reach the end of the body. In this case, the new object is the value of the 
    constructor invocation expression*/

//8.2.4 Indirect Invocation
    //JS functions are objects, and like all objects, they have methods
    //call() and apply() are methods that invoke a function indirectly
    //Both allow you to specify the 'this' value for the invocation
    /*This means you can invoke any function as a method of any object, even if it is
    not actually a method of the object*/
    //Both use their own argument list. apply() expect an array of arguments

//8.3 Function Arguments and Parameters
    //JS functions do not expect a type for function parameters
    //Nor do function invocations expect a certain type for argument values
    //In fact, JS does not even check the number of arguments being passed.

//8.3.1 Optional Parameters
    /*When a func is called with fewer arguments than parameters, the rest are set 
    to undefined*/
    //It is good to write functions so that some arguments are optional
    //Note that you should put the optional arguments at the end of the list

//8.3.2 Variable-Length Argument Lists: The Arguments Object
    //Just refer to this section if you really need to.

//8.3.3 Using Object Properties As Arguments
    /*When a func has more than three parameters, it becomes difficult for the
    programmer who invokes the fun to remember the correct order to pass*/
    //In these cases, an object can be used to pass the arguments:

//8.3.4 Argument Types
    //JS method parameters have no declared types, and no type checking is performed
    //Option to help with this is making your code more descriptive
    /*As descrived in 3.8, JS performs liberal type conversion as needed. If a func 
    expects a string, and a different value type is passed, it will be coerced. All
    primitive types can be converted to strings, and all objects have toString()
    methods.*/

//8.4 Functions As Values
    //The most important feature of functions is that they're first class.
    //They can be defined and invoked like in a lot of languages.
    //A big difference though is that they functions are also values in JS
    //So they can be assigned variables, passed as arguments, assigned to objects, etc.
    //So functions are both DATA and SYNTAX
    square = (x) => {
        return x * x
    }

    let s = square; //Now s refers to the same function that square does
    s(4); //16

    //They can also be assigned to object properties. Thus, we have methods:
    let = {square: function(x) {return x*x}}

    //They don't even require names when assigned to array elements:
    let arr = [function(x) {return x*x}, 20]
    arr[0](2); //returns 4
    //or
    arr[0](arr[1]); //returns 400

    /*As another example of functions as values, consider the Array.sort() method. 
    This method sorts the elements of an array. B/c there are so many possible orders
    to sort by (numeric, alphabetic, date, ascending, etc.) the method optionally
    takes a function as an argument to tell it how to perform the sort.*/

    /*This function has a simple job: for any two values it is passed, it returns a 
    value that specifies which element would come first in a sorted array. This 
    function argument makes Array.sort() perfectly general and infinitely flexible*/

//8.4.1 Defining Your Own Function Properties
    //Functions are not primitive values in JS, but a specialize object.
        //This means that they have properties
    /*When a function needs a 'static' variable whose value persists across invocations
    it is often convenient to use a property of the function, instead of cluttering
    up the name space by defining a global variable*/

//8.5 Functions As Namespaces (namespace is technique for avoiding object name collision)
    //Recall from 3.10.1 that JS has function scope: 
        //functions declared within a function are visible throughout the function
    /*JS does not define a way to declare a variable that is hidden within a single 
    block of code, and for this reason, it is sometimes useful to define a function 
    simply to act as a temporary namespace in which you can define variables without 
    polluting the global namespace.*/

    /*This is getting into the purpose of an IIFE. Like if you had a module that you
    wanted to use throughout your program, there might be an issue with how variables
    are named. A way to rectify that would be*/

    (function() {
        //Module goes here
    }());

    //The parenthesis around the function are necessary.
    //Otherwise, the intepreter would try and parse the function as a declaration

    //Links:
        //https://dev.to/muhammadridwan/namespace-in-js-5dbj
        //https://medium.com/@sayes2x/hiding-variables-and-closure-in-javascript-c6d1cafbd037
        //Pg 182 of book also gives a good example that reinforces this

    //Further examples:
        function changeBy() { 
            console.log('this is the outer function in the global namespace')
          }

          var dwightSalary = (function() {
              var salary = 60000;
              function changeBy(amount) {
                  salary += amount;
              }
              return {
                  raise: function(amt) {
                      changeBy(amt);
                  },
                  lower: function(amt) {
                      changeBy(amt);
                  },
                  currentAmount: function() {
                      return salary;
                  }
              }; 
          })();
          console.log(dwightSalary.currentAmount()); // $60,000
          dwightSalary.raise(20000);
          console.log(dwightSalary.currentAmount()); // $80,000
          dwightSalary.lower(-30000);
          console.log(dwightSalary.currentAmount()); // $50,000
          changeBy(); /*No name collision occurs b/c the other changeBy() 
                      is protected in an IIFE closure*/
          dwightSalary.changeBy(10000); /*TypeError: dwightSalary.changeBy is not a 
                                        function*/
          /*Using closures to namespace private functions keeps more general namespaces 
          clean, preventing naming collisions. Neither the salary variable nor the changeBy 
          function are available outside of dwightSalary. However, raise, lower and 
          currentAmount all have access to them and can be called on dwightSalary.*/

          /*raise, lower, and currentAmount are available outside b/c that is what is 
          being returned*/
          /*Remember that this follows the module design pattern within object-oriented 
          programming*/

        /*Private variables need not be exclusive to a single closure: as seen above
        it is perfectly possible to have two or more nested functions be defined within
        the same outer function and share the same scope chain*/

        function counter() {
            let n = 0;
            return {
                count: function() {return n++;},
                reset: function() {return n = 0;}
            }
        }

        let c = counter(), d = counter();
        c.count(); //0
        d.count(); //0
        c.reset();
        c.count(); //resets to 0
        d.count(); //1
    /*The counter function returns a counter object which has two methods (count, reset).
    These two methods share access to the private variable n. And each invocation of 
    counter creates a new scope chain and private variable, so c and d scopes work
    independently of each other.*/

//8.6 Closures
    //Like most modern-day languages, JS uses lexical scoping.
        /*Meaning functions are executed using the variable scope that was in effect 
        when they were defined, not the variable scope in effect when they were invoked*/

        /*To implement lexical scope, the internal state of a JS function object must 
        include not only the code of the function but also a reference to the current
        scope chain.*/

        //Technically speaking, all JS functions are closures:
            //They're objects and they have a scope chain associated with them
            //Most functions are invoked using the same scope chain as when they were defined
        /*They become interesting though when they're invoked under a different scope chain
        than under the one when they were defined*/

        /*You know that this happens mostly when a nested function object is returned 
        from the function within it is defined.*/

        let scopes = 'global scopes';

        function checkScope() {
            let scope = 'local scope';
            function f() {return scope;}

            return f()
        };

        checkScope(); //this is obvious why it returns "local scope"

        //But what about this:

        let scopes = 'global scopes';

        function checkScope() {
            let scope = 'local scope';
            function f() {return scope;}

            return f()
        };

        checkScope()()

        //This would still return local scope
        //B/c the lexical scope:
            /*JS functions are executed using the scope chain that was in effect 
            when defined*/

//8.7 Function Properties, Methods, and Constructor
    //functions are values in JS as you recall.
    //typeof function would return string function
    //but we know that functions are a specialized kind of object
    //as objects, they can have properties and methods
    //recall there is even a function constructor to create new function objects
    //many of these methods are outlined below

//8.7.1 The length Property
    /*Within the body of a function, arguments.length specifies the number of
    arguments that were passed to the function.*/

    function test(a,b,c,d) {
        console.log(arguments.length);
      }
      
      test("str", true, false, 3); //4

    //Its not worried about parameters; just arguments

    function test(a,b,c,d) {
        console.log(arguments.length);
      }
      
      test("str", true, false); //3

//8.7.2 The prototype Property
    //Every function has a prototype property.
    //It refers to an object known as the prototype object.
    //Every function has a different prototype object.
    /*When a function is used as a constructor, the newly created object inherits 
    properties from the prototype object*/
    //Refer to 6.1.3 for more details

//8.7.3 The call() and apply() Methods
    /*These methods allow you to indirectly invoke a function as if it were a method 
    of some other object*/
    //First argument in both cases is the object on which the func is to be invoked
      //This is essentially the invocation context and becomes the value of 'this'
      //Invoke f() as a method of object o:
      f.call(o);
      f.apply(o);

      //Under the hood, this is what these two methods are doing:
      o.m = f;
      o.m();
      delete o.m;

    //Any arguments after the first invoke context argument are the values passed to the function
    f.call(o, 1, 2);

    //Remember that apply uses an array:
    f.apply(o, [1,2]);

    //With apply() you can invoke a function with the same arguments as the current function
    //Just by passing the arguments array directly:
    function trace(o, m) {
        let original = o[m];
        o[m] = function() {
            console.log(new Date(), "Entering:", m)
            let result = original.apply(this, arguments);
            console.log(new Date(), "Exiting:", m);
            return result;
        }
    }; //this dynamic alteration of existing methods is sometimes called "monkey-patching"

//8.7.6 The Function() Constructor
    //Functions are usually defined using the function keyword.
    //Either as a function definition statement, or a function literal expression.
    //But they can also be defined with the function constructor:
    
        let f = new Function("x", "y", "return x*y;");

    //equivalent to:

        let f = function(x,y) { return x*y }

    //The Function() constructor creates anonymous functions, like function literals.
    //Important points of the constructor:
        //It allows functions to be created dynamically and compiled at runtime
        /*It parses the function body and creates a new function object each time
        it is called. If in a loop, it will be re-created and compiled each time, 
        which isn't efficient. In contrast, function definitions are not recompiled
        on each iteration*/
        /*The functions it creates do not use lexical scoping; instead they are always
        compiled as if they were top-level functions:*/

        let scope = "global";
        function constructorFunction() {
            let scope = "local";
            return new Function("return scope"); //returns global!
        }

        //This line returns global b/c the function returned has no local scope
        //This constructor should rarely be used

//8.7.7 Callable Objects
    /*7.11 taught us about array-like objects that are not true arrays but can be 
    treated that way for our purposes*/
    //A similar situation exists for functions:
    //A callable object is any object that can be invoked in a function expression.

    //A common situation for these callable objects are RegExp objects.
    //In many browsers, you can invoke a RegExp object directly as a shortcut.
    //This is completely non-standard

//8.8 Functional Programming
    //
