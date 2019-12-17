  //An expression is a phrase of JavaScript that a JavaScript interpreter can evaluate to produce a value

//A variable name is a simple expression that evaluates to whatever value has been assigned to that variable.

    //The most common way to build a complex expression out of simpler expressions is with an operator.
    x * y

    //The simplest expressions, known as primary expressions, are those that stand alone.
    1.23
    "hello"
    /pattern/

    //Some of JS's reserved words are primary expressions:
    true
    false
    null
    this

    //finally, the third type of primary expression is the bare variable reference:
    i //Evaluates to the value of the variable i
    sum //Evaluates to the variable sum
    undefined //undefined is a global variable, not a keyword lik null

    //Object and array initializers are expressions whose value is a newly created object or array.
    //These initializer expressions are sometimes called object literals and array literals.
    /*Unlike true literals, however, they are not primary expressions, because they include 
    a number of subexpressions that specify property and element values*/

    //Array initializer:
    [1+2,3+4] //2-element array. First element is 3. Second is 7.

    /*The element expressions in an array initializer can themselves be array initializers, which means that these
    expressions can create nested arrays:*/
    let matrix = [[1,2,3], [4,5,6], [7,8,9]]

    /*The initializer for an array is a comma-separated list of constant expressions enclosed in braces ( { } ). 
    The initializer is preceded by an equal sign ( = ). You do not need to initialize all elements in an array.*/

    //A function definition expression:
    let square = function(x) { return x * x}

//Property Access Expressions:
    //Really is referring to the dot or bracket notation:
    expression.identifier
    expression[identifier]
    
    /*If the value is null or undefined, the expression shows a TypeError, since these
    are two JS values that cannot have properties.*/

    /*dot notation is the simpler of the two property access options.
    But notice that it can only be used when the property you want to access has a name,
    and when you know the name of that identifier.*/

    /*If the property is a reserved word or includes spaces or punctuation characters,
    or when it is a number, you must use the square bracket notation.*/

//Invocation Expressions:
    //An invocation expression is JS's syntax for calling a function or method.
    //It starts with a function expression that identifies the function to be called.
    f(o);
    Math.max(x,y,z);
    a.sort();

    /*When an invocation expression is evaluated, the function expression is evaluated
    first, and then the argument expressions are evaluated to produce a list of argument
    values. Next the argument values are assigned, in order, to the parameter names spe-
    cified when the function was defined, and then the body of the function executed.*/

    //Every function invocation includes a pair of parenthesis and an expression.

    /*If that expression is a property access expression, then the invocation is known as
    a method invocation.*/

    /*In the method invocations, the object or array that is the subject of the property access
    becomes the value of the "this" parameter while the body of the function is executed*/

    /*This enables an object-oriented programming paradigm in which functions operate on 
    the object of which they're a part*/

//Object Creation Expressions
    //An object creation expression creates a new object.
    //It invokes a function (called a constructor) to initialize the properties of that object.
    new Object()
    new Point(2,3)
    //If no arguments are passed to the constructor function, then the parenthesis can be omitted.
    new Object

    //When an object creation expression is evaluated, JS first:
        //creates a new empty object, just like the one created by the object initializer{}. 
        //Next, it invokes the specified function with the specified arguments,
            //passing the new obj as the value of the "this" keyword
            //The function can then use "this" to initialize the properties of the newly created object
    
    //Functions written for use as constructors do not return a value
    //And the value of the object creation expression is the newly created and initialized object

//4.7.3
    //Lvalues are an expression that can legally appear on the left side of an assignment expression.
    //In JS, variables, properties of objects, and elements of arrays are lvalues.

//4.7.4
    //Operator side effects can occur with certain operators.
    //The delete operator for example has side effects: deleting a property is like assigning undefined to it.

//4.8.1
    //The binary + operator add numeric operands or concatenates string operands
    //When both operands are numbers, or both are strings, it is obvious what the + does.
    //But what if they're different?

    //+ gives priority to string concatenation. 
        //if either of the operands is a string or an object that coverts to a string, the other is converted to match.
        //So it behaves like this:
            1 + 2 //3
            "1" + "2" // "12"
            "1" + 2 //"12"
            1 + {} //"1[object Object]"
            true + true //2: addition after boolean-to-number

    2 + null //2: addition after null converts to 0
    2 + undefined //NaN: addition after undefined converts to NaN

    /*You should note that the + symbol with strings and numbers may not always be associative.
    Meaning that the result may depend on which order the operations were performed*/

    1 + 2 + " blind mice" // "3 blind mice"
    1 + (2 + " blind mice"); //"12 blind mice"

    console.log(2++)

    //Further good examples of the + symbol's behavior:
        let a = true;
        let b = " join";

        console.log(a + b); //"true join"

        let c = [1,2];
        let d = " join";

        console.log(c + d); //"1,2 join"

        let e = false;
        let f = false;

        console.log(e + f); //0
    
    //Other operations also have their little tricks:
        let a = "split";
        let b = "us";

        console.log(a - b); //NaN. Subtraction does not behave like + and just concantenate them

        let c = 12;
        let d = "1";

        console.log(c - d); //11. If it can though, JS will coerce a string into a value for subtraction

        let e = 2;
        let f = "2.2";

        console.log(e * f); //4.4. JS cannot build strings out of * operations.
                            //The string, therefore, is coerced into a value.

        let g = 2;
        let h = "Num";

        console.log(g * h); //NaN. "Num" cannot be changed to a value.

//4.8.2 Unary Arthmetic Operators
  //These modify the value of a single operand to produce a new value.
  //In JS these all have high precedence and right-associative (+, -, ++, --)

  //Unary Plus(+) - converts its operand to a number (or NaN) and returns that converted value.
  //Good article: https://codeburst.io/javascript-increment-and-decrement-8c223858d5ed
  //Unary minus (-) - it converts an operand to a number, and then changes the sign of the results
  //Increment (++) - increments its single operand, which must be an lvalue.
  //The return value of this depends on the operator's position on the operand
    var i = 1, j = ++i //i and j are both 2
    var i = 1, j = i++ //i is 2, j is 1

  /*If it is used before the operand, this is a preincrement so it increments, and then evaluates the incremented values.
  If used after, it increments its operand but evaluates to the unincremented value of that operand*/

    let i = 1, j = i++;

    console.log(j); // 1
    console.log(i); //2
    console.log(j++); //1
    console.log(j); //2
    console.log(j++); //2

    //Note that ++ never performs string concatenation.
    //It ALWAYS converts its operand to a number and increments it.
    let x = "1";
    console.log(x + 1); //"11"
    console.log(++x); //2
    console.log(x++); //2

    //Decrement (--) - this operators also expects an lvalue operand
        //Like the ++ operator, it depends on the position of the operator.

//4.9 Relational Expressions
  //Essentially are what test for equales, less than, property of
  //=== is known as the strict equality operator
  //== is known as the equality operator
  //Then obviously != and !== test for the opposite

  //=== compares as follows and obviously doesn't perform type conversion
    //If the two values have different types, they are not equal
    //If both values are null or both values are undefined, they are equal.
    //If both values are true, or both are false, they are equal
    //If one or both values is NaN, they are not equal
      //The NaN value is never equal to any other value, including itself!
      //To check if a value is NaN, use x !== x.
        //This reason this works so well is b/c again, NaN is not equal even to itself.
        //So, when you compare x to itself, if it is NaN, then it won't be equal to itself.
      //You could also use isNaN() function. It comes with its own pitfalls as well though:
        isNaN(1); //false => this is straightforward
        isNaN("A"); //true => this is straightforward
        isNaN("1"); //false => this gets coerced into a numeric value, which makes it false
    //If both values are numbers and have the same value, they are equal.
      //If one value is 0 and the other is -0, they are also equal.
    /*If both values are strings and contain exactly the same 16-bit values 
      in the same positions, they are equal.*/
      /*If the strings differ in length or content, they are not equal. Two 
      strings may have the same meaning and the same visual appearance, but 
      still be encoded using different sequences of 16-bit values*/

    //If both values refer to the same object, array, or function, they are equal.

    //The == operator is less strict

    //Use the following rules and type conversions to check for equality:
      //If one value is null and the other is undefined, they are equal
      //If one value is a string, and the other is a number, convert the string and compare
      //If either value is true, convert it to 1 and try the comparison again.
        //If either is false, convert it to a 0 and try it again.
      //If one value is an object and the other is a number or string, convert the object to a string as described in 3.8.3.
      //Any other combinations of values are not equal

      //With ==, stuff like this would be equal even:
      "1" == true; 
      //The boolean first gets converted to 1; then the comparison is done again.
      //Next, the string is converted to a number then compared again.
      false == 'false' //false => this is b/c it chooses to convert the string to boolean which = true
                       //this is b/c it is not an empty string, which makes it true

    //Comparison Operators have some important rules as well:
        //If either operand evaluates to an object, this gets converted into a primitive like in 3.8.3
        /*If, after this conversion, both operands are strings, the two strings are compared, using 
        alphabetical order, where the order is defined by the numerical order of the 16-bit 
        Unicode values.*/
        /*If after an object conversion, at least one operand is not a string, both are converted to 
        numbers and compared numerically.*/

    //Remember that string comparison is case sensitive.
        //so all capital letters are less than lowercase.
        //This can cause some confusion:
        console.log("Zoo" > "aardvark"); //This is false b/c of the uppercase

    /*For a more robust way to compare strings, and not get caught up in the upper and lower case debate,
    there is a method:*/
        let a = "cool";
        let b = "COOL";

        console.log(a.localeCompare(b)); //This would return -1
        //There are three possible returns:
            //-1 - this indicates that "a" comes after "b";
            //0 - this indicates that they are essentially the same
            //1 - this would indicate that "a" comes after "b";

    //remember that + operator favors strings.
        //It performs concatenation if either operand is a string:
        1 + 2 //3
        "1" + "2" //"12" 
    //comparison operators favor numbers, and only perform string comparison if both values are strings:
        11 < 3 //false
        "11" < "3" //true; Link that gives a good answer: https://stackoverflow.com/questions/6280835/treemap-behaves-abnormally/6280860#6280860
            /*What it boils down to though is that they go in lexicographical order. So 0 comes before 1 and 4 comes
            before 3,456. Just like "a" comes before "m", the smaller string representation of a number is considered
            greater than another. This would be totally reversed if both string primitives were coverted to numbers.*/
        "11" < 3 //false; the "11" is converted to a number.
        "one" < 3 //false; "one" changes to NaN, thus resulting in a false statement

//4.9.3 The in Operator
    /*The in operator exprects a left-sided operand that is or can be converted to a string. It expects a right-side
    operand that is an object. It evaluates to true if the left-side value is the name of a property of the right-side
    object*/
      let obj = {a:1, b:2};
          console.log("c" in obj); //false; b/c "c" is not a property in obj
          console.log("a" in obj); //true;
    //Again, works for objects, so it works for arrays:
        let data = [7,8,9];
        "0" in data //true: array has an element or index of 0 (0:7);
        "2" in data //true
        "3" in data //false
    
//4.9.4 The instanceof Operator
  /*the instanceof operator expects a left-side operand that is an 
  object and a right-side operand that idenifies a class of objects*/
  
  //The operator evaluates to true if the left-side object is an instance of the right side.
  
  /*Chapter 9 explains that classes of objects are defined by the constructor
  function that initializes them. Thus, the right-side operand of instance of 
  should be a function*/
    let d = new Date();
    d instanceof Date; //true; d was created with Date();
    d instanceof Object; //true; all objects are instances of objects;
    d instanceof Number; //false;
    console.log(d instanceof Number)

  //Note that all objects are instances of Object.
  //instanceof considers the "superclasses" when deciding whether an object is an instance of a class

  //Remember that this goes back to the prototype chain.
    //instanceof will start at the lowest part and go up the prototype chain until it is either found or return false.

//4.10 Logical Expressions
  //AND (&&) operator performs boolean algebra
    //This can be understood at three different levels:
      /*1 - when used with boolean operands, && performs the Boolean AND operation on
            the two values: it returns true if and only if both operands are true*/
      
          //It is often used as a conjuntion to join two relational expressions:
          x == o && y == o; //true only if both do equal o.
        
          /*Relational expressions always evaluate to true or false, but they 
          do not require that its operands be boolean values*/

          //recall that all JS values are either truthy or falsy
            //falsy values: 0, -0, NaN, null, undefined, and " "
            //truthy values: all other primitives and objects

      /*2 - the second level to understand is as a Boolean AND operator for
            truthy and falsy values. If both operands are truthy, the operator
            returns a truthy value. Otherwise, one or both operands must be falsy
            and the operator returns a falsy value.*/

      /*3 - note that the above says that the operator returns a truthy or falsy
            value. It does not, however, specify what that value is. This operator
            starts by evaluating its first operand, the expression on its left.
            If the value on the left is falsy, then the entire expression must be
            falsy, so && simply returns the value on the left, and does not even
            evaluate the expression on the right. BUT, if the value on the left
            is truthy, then the overall value of the expression depends on the 
            value on the right-hand side. If the value on the right is truthy
            , then the overall value must be truthy, and if the value on the 
            right is falsy, then the overall value must be falsy. So when 
            the value on the left is truthy, the operator evaluates and returns 
            the value on the right:.*/

            let o = {x : 1};
            let p = null;
            o && o.x; //1: o is truthy, so return value of o.x;
            p && p.x  //null; p is falsy, so return it and don't evaluate p.x

            let a = "";
            let b = false;
            let c = true;
            console.log(a && "Hello"); //"" returns "a" value b/c the left-side operand is falsy
            console.log(b && "Hello"); //false returns "b" value b/c the left-side operand is falsy
            console.log(c && "Hello"); //"Hello" returns right-side value b/c left side is true
            console.log(c && false); //false returns right-side value b/c left side is true

            //You use this a lot in React, but it is used for when to put a statement there based on state.
        
        //So it is important to understand that the && operator may or may not evaluate its right-side operand
        //This behavior is called short circuiting, and you use it a lot in React where you exploit this behavior
        if (a == b) {stop()};
        //is the same as
        (a == b) && stop();

//4.10.2 Logical OR(||)
  //This operator behaves a lot like &&
  /*It works as follows: it starts by evaluating its first operand, the expression on its left. If the value
  of this first operand is truthy, it returns that value. Otherwise, it evaluates its second operand and 
  returns that value.*/

    //You've seen a lot of practical examples for this. It is often used to provide default values:
    let username = req.body.username || "Bob"

//4.10.3 Logical NOT (!)
  //Unlike && and ||, they6 ! operator converts its operand to a boolean value before inverting the value.
  //This means that ! always returns true or false

//4.11 Assignment Expressions
  i = 0
  //The = operator expects its left-side operand to be an lvalue: a variable or object property or array element
  //It expects its right-side operand to be an arbitrary value of any type.
  /*Although this assignment expression is quite simple, you may sometimes see the value of a = expression used 
  as part of a larger expression. For instance, you can assign and test in the same expression*/
  (a = b) === 0 // = has a very low precedence so often parenthesis are required for expressions

  //Then there is assignment with operation
    total += sales_tax

//4.13.2 The typeof Operator
  //This returns a string value of the type of operand.
  //Remember that null returns as an object.
  //Also, typeof returns object for all objects and arrays. 
  /*You need other techniques for differentiating object and array values (instanceof 4.9.4, class attribute 
  6.8.2, constructor property 6.8.1, 9.2.2)*/
  //Although functions are an object, typeof considers them sufficiently different to have their own return value:
    function f() {}

    console.log(typeof f); //"function"

//4.13.3 The delete Operator
    //unary operator used to delete the object property or array element.
    //delete is typically used for its property deletion side effect, and not for the value it returns:
        let o = {x:1, y:2};
        delete o.x;
        "x" in o; // false: the property has been deleted

    //delete expects its operand to be an lvalue. It returns true if successfully deleted.
    //Not everything can be deleted though: built-in core or client- or user-side variables, and functions
    let o = {x:1, y:2};
    delete o; //returns false b/c it cannot delete a declared variable
    