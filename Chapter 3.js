//PG 29: Computer programs work by manipulating values. These values that can be represented and manipulated are known as types.

//JS types can be divided into two categories:
  //primitive types - numbers, strings, boolean, null, undefined
  //object types - Any value that is not a primitive type (objects, arrays, or functions)
    //Functions are an object that return executable code
    //The most important thing about functions is that they are true values and that JS programs can treat them like regular objects.
      //Meaning that you can assign functions to variables, array elements, or pass them around as arguments.

//Constructors are functions written to initialize a newly created object.
//Each constructor defines a class of objects
//Core JS defines three other useful classes:
  //Date class 
  //RegExp class
  //Error class

//3.1 Numbers:
//You know that you can define your own classes of objects by defining appropriate constructor functions.

/*Unlike many languages, JS does not make a distinction between integers and floating-point values. Rather, all numbers
are recognized as floating-point values.*/ 

//When a number appears in JS, it is called a numeric literal.

//JS supports more complex arithmetic operations with the Math object.

/*Note that arithmetic in JS does not raise errors in case of overflow (result 
  larger than the largest representable number), underflow (when the result of 
  a numeric operations is closer to zero than the smallest representable number), 
  or division by zero:*/

    //Division by zero:
        console.log(4/0); //This is technically undefined in mathmatical rules. 
                          //In the console, however, you would get INIFINITY

    //Overflow:
        console.log(Number.MAX_VALUE * 2); //This would return Infinity

    //Underflow:
        console.log(Number.MIN_VALUE / 10); //This would return 0
        //If underflow occurs from a negative value, then the return would be -0
    
    //One exception to 'Division by zero' is the following:
        console.log(0/0); //This would return NaN
        //NaN would also come up with Infinity/Infinity

    //NaN is also strange b/c it does not compare equal to any other value, even itself:
        console.log(NaN === NaN); //returns false
        console.log(typeof NaN); //Also strange. This would give you a number
        //But this is a result of a bad mathematical calculation so its the numeric result of an error
    
    //-0 is also strange for the following:
        console.log(0 === -0); //return true
        //They are only distinguishable as divisors:
        console.log(1/0 === 1/-0); //returns false b/c inifity and -infinity are not equal

/*There are infinitely many real numbers in JS. The IEEE-754 floating-point representation
  used by JS is a binary representation, which can EXACTLY represent fractions like
  1/2, 1/8, and 1/1024. Decimal fractions, however, are more commonly needed (1/10, 1/100, and so on)
  Binary floating-point representations cannot exactly represent numbers as simple as 0.1*/

  let x = .3 - .2;
  let y = .2 - .1;
  x == y //false: the two values are not the same
  x == .1 //false: .3-.2 is not equal to .1
  y == .1 //true: .2-.1 is equal to .1

  /*b/c of rounding error, the diff between the approximations of .3 and .2 is not 
    exactly the same as the diff between .2 and .1. This problem is not specific to
    JS, but rather, any programming language that uses binary floating-point numbers*/

//On a site you found, it shows the value that is actually stored in float:
    const x = 0.1
    //Actually stores as: 0.100000001490116119384765625

    const y = 0.2
    //Actually stores as: 0.20000000298023223876953125
    
    const z = 0.3
    //Actually stores as: 0.300000011920928955078125

    console.log(z - y); //The result is 0.10000000894069672, which means:
    z - y === x //Is still false

    //Articles that help in understanding this better:

    //Aside on how Binary works:
        //Snippets to remember about binary code (https://medium.com/basecs/bits-bytes-building-with-binary-13cb4289aafa):
        //It counts in bases of 2, so 2^0, 2^1, 2^2, etc.
    
        //Numbers one through 5 look like this: 1, 10, 11, 100, and 101.

        //The conversion down to binary is quite complex, but at the heart, the conversion is done using the base 2s. 
            //Given a random number, first rule is you can't start with a base 2 higher than the given number. 
            /*Then, you would etch out each power of 2 and minus from the given number. If the given base 2 can minus 
            from it, then it would be a 1 in binary.*/ 
            //If it cannot, then it would be 0. You follow this process until reaching zero for the given number.
    
        /*Letters would be similar process. For instance, F is the 6th number of the alphabet, so our given 
        number would be 6. There are 8 bytes again or 8 digits, and for letters, lowercase always starts with 
        0110, so your binary for the letter F would be: 01100110.*/

    /*Remember that 8 bits make up a byte. And a byte can string together 256 different combinations (Remember powers 
    of 2? 2 to the power of 8 is 256.).*/
    
    /*A 16-bit machine would break up and process 16 bits at a time. The number of bits that are processed at a time are known as a computer word, so 
    we can think of bits as the “letters” that make up a computer word.*/

    /*Most computers now have a word length of 32 or 64 bits. And now you know what that means: that your machine passes around and processes 32 
    or 64 bits at a time. In other words, your computer processes binary strings that are 32 or 64 digits long! (a single letter would 
    require 8 bits to intepret and process*/
    
    //Video about numbers in JS (https://www.youtube.com/watch?v=MqHDDtVYJRI&feature=youtu.be):
    
    //Test Case Two: 0.1 + 0.2 = 0.30000000000000004
        /*The tricky part of this expression is that it seems like crazy town. Where did the 4 come 
        from? Something I hadn’t considered until I spent an afternoon converting numbers to binary 
        and back is that it probably wasn’t intended to be a 4.*/
        
            //100 in binary is 4. (2² = 4, 4–4 =0, our binary represents the places filled by 2² 2¹ 2⁰).
            /*In JavaScript numbers, generally, any digits that exceed the 52 bits provided by the fraction 
            (or significand) are assumed to be 0 and discarded.*/
            /*Numbers entered into JavaScript are decimal floating-point numbers and are then internally represented 
            as binary floating-point numbers. That conversion for decimal floating-point numbers whose prime factors 
            include anything other than 2 will lead to imperfect results. 
                For example —
                    0.125 in decimal = 125/1000 = 1/8 = 0.001 in binary
                    0.1 in decimal = 1/10 = 1/2*5
                    0.2 in decimal = 1/20 = 1/2*2*5
            */
    
    //Null vs Undefined
        //null is a language keyword that evaluates to a special value that is usually used to indicate the absence of value
            //using typeof operator on null returns the string "object", indicating that null can be thought of as a special object.
            //In practice, however, this is just regarded as its own type and can be used to indicate no value for numbers, strings, and objects.

        //undefined represents a deeper kind of absence.
            //It indicates a value that has not been declared and will indicate when an object or array does not exist.
            //It is also returned by functions that have no return value.

        //== operator considers undefined and null to be equal.
        //Both are falsy values, and neither have any properties or methods.
        //Consider undefined to be a system-level, unexpected, or error-like absence of a value
        //Consider null to be a program-level, normal or expected absence of a value

        //A little aside:
        //While null is a primitive value there is something strange with it:
        console.log(typeof null); //This would return an object, but why?

        /*In the first implementation of JavaScript, JavaScript values were represented as a type 
        tag and a value, with the type tag for objects being 0, and null was represented as 
        the NULL pointer (0x00 on most platforms). As a result, null had 0 as a type tag, hence 
        the bogus typeof return value (reference).

//3.5 The Global Object is a regular object that serves a very important purpose:
    //the properties of this object are the globally defined symbols that are available to a JS program.
    /*When the JS intepreter starts, or whenever a web browser loads a new page, it creates a new 
    global object and gives it an intial set of properties that define:*/
      //global properties like undefined, Infinity, and NaN
      //global functions like isNaN(), parseInt(), and eval()
      //constructor functions like Date(), RegExp(), String(), Object(), and Array()
      //global objects like Math and JSON

    /*In the top-level code that is not part of a function, you can use the keyword 
    "this" to reference the global object:*/
    let global = this;
    console.log(global);

  /*The Window object serves as the global object for all JS code contained in the browser window it represents.
  This global Window has a self-referential "window" property that can be used instead of "this" to refer to the 
  global object.*/
  console.log(window === this);
  //The Window object defines the core global properties.

  /*Important NOTE!! - When created, this global object defines all of JS's predefined global values. But
  it also holds program-defined globals as well. If you declare a global variable, that variable is a property of it*/
  //A "true" global variable doesn't have the var, let, or const keyword:

test="stuff";
dateBaby = new Date();

console.log(window.test);
console.log(window);
console.log(window.dateBaby); //If dateBaby has const in front of it:

/*With this, all scopes will see it. Variables with the var keyword are local to the scope that they were declared.
A variable will be "global to window" (property of window object) only if you declare it in the window scope, 
making it global to the browsers that usually use window as the global scope.*/

//3.6 Wrapper Objects:
/*JS objects are composite values: they are a collection of properties or named values. When the value is a function
we refer to this as a method.*/

//We've also seen that strings have properties and methods:
  let s = "hello world";
  let word = s.substring(s.indexOf(" ")+1, s.length); //Using string properties
    //substring() - The substring() method extracts the characters from a string, between two specified indices, and returns the new sub string.
    //indexOf() - The indexOf() method returns the position of the first occurrence of a specified value in a string.
  console.log(word);

//Important: Strings are not objects, however, so why do they have properties?
  /*Whenever you try to refer to a property of a string "s", JS converts the string value to an object
  as if by calling new String(s). This object inherits string methods and is used to resolve the property
  reference. Once the property reference has been resolved, the newly created object is discarded*/

//For example:
    const str = 'hello';
    const upper = str.toUpperCase();
    console.log(upper); // --> HELLO

//The above essentially translates to:
    const upper = (new String(str)).toUpperCase()

/*JavaScript coerces wrapper objects into the wrapped primitive values as necessary. The == equality 
will treat a value and its wrapper object as equal, while the === strict equality operator will treat 
them as different entities.*/
    const a = 'hello';             // primitive
    const b = new String('hello'); // wrapper object
    typeof a;  // "string"
    typeof b;  // "object"
    a == b  // true
    a === b // false

/*This explains why trying to assign properties to a primitive doesn't work, but also doesn't throw an 
error. Assigning the property succeeds, but the property is set on a wrapper object which is immediately 
destroyed. So when you go to look up the property later, there is nothing there anymore.*/

//Note that it is possible to create explicitly wrapper objects:
    let n = 1, s = "hi", b = true
    const num = new Number(n);
    const str = new String(s);
    const bool = new Boolean(b);
    //This, however, is almost never necessary or useful.
    //The typeof operator will show the difference between a primitive value and a wrapper object
    //The behavior or n vs num or s vs str, etc. is usually the same, but not always.

//3.7 - Immutable Primitve Values and Mutable Object References
    /*There is a fundamental difference in JS between primitives values (undefined, null, booleans, 
    numbers and strings) and objects (functions and arrays):*/
        //Primitives are immutable
            //This is obvious for say numbers or booleans (it doens't even make sense to change the value of a number)
            //Not so obvious with a string though, b/c they're like arrays of characters.
            /*In fact, methods on strings (str => wrapper obj(String()) => global object) which appear to 
            change the string are simply returning a new string*/
            let s = "hello";
            s.toUpperCase(); //returns "HELLO" but doesn't alter s
            console.log(s); //returns "hello"

            //Primitives are also compared by VALUE.
                //two values are the same only if they have the same value
                //Again, seems clear for numbers or booleans, b/c there is no other way they could be compared

        //Objects are mutable
            //This is obvious to you:
            let o = {x:1};
            o.y = 3;

            //Objects are not compared by value, even if they share the same properties/values:
            let o = {x:1}; let m = {x:1}
            o === m //returns false

            //Objects are sometimes called reference types to distinguish them from JS's primitives types.
            //So objects are compared by REFERENCE
                //two objects are the same if, and only if they make reference to the same object:
                let a = [];
                let b = a;
                b === a; // returns true

                let c = [];
                let d = [];
                c === d; // returns false
            //Assigning the object or array to a variable assigns the REFERENCE.
            //It does not create a new copy of the array.

            //If we want to compare two arrays, we must compare their properities or elements as follows:
                function equalArrays(a,b) {
                    if (a.length != b.length) return false;
                    for (let i = 0; i < a.length; i++) {
                        if (a[i] !== b[i]) return false;
                    }
                    return true;
                }

//3.8 - Type Conversions
    //JS is very flexible about types of values it requires.
        //If it wants a string, it will convert whateer value you give it to a string:
        10 + " objects" // => "10 objects"
        //or a number:
        "7" * "4"; // => 28

    //Some other important conversion you should know:
    undefined //NaN, false, typeError for object
    null //0 false typeError for object
    true //1 new Boolean(true)
    "" //0 false new String("")
    0, -0 //false new Number(-(0)
    Infinity // true new Number(Infinity)

    /*String that can be parsed as numbers convert to those numbers. Trailing or leading
    spaces are allowed. However, any trailing or leading spaces that are not part of a
    numeric literal or converted into NaN*/

    //Primitive to object conversions are straightforward: primitve values convert to their wrapper object.

    //Conversions and Equality
        //You know that == is pretty flexible when it comes to comparisons:
                null == undefined //true
                "0" == 0 //string converts than is consider true
                0 == false // true
                "0" == false // true
        //=== does not perform conversion when comparing

    //Explicit Conversions 
        //Explicit conversions may sometimes be required by the programmer.
        //The easiest way to do this is by use of the wrapper objects:
            Number("3")
            String(false) //"false"
            Boolean([]) //true
            Object(3) //new Number(3)
            //Note that any value (other than undefined and null) have a toString() method
            //The result of this method is usually the same as new String()

        //Watch out for certain implicit types of conversion:
            x + "" //Same as String(x)
            +x //Same as Number(x)
            !!x //Sames as Boolean(x)

        //parseFloat() and parseInt() skip leading whitespace, and ignore anything that follows:
                parseInt("3 blind mice"); //3
                parseFloat(" 3.14 meters"); //3.14

        //If a string begins with Ox or OX, parseInt interprets it as a hexadecimal number:
                parseInt("Oxff"); //255

        //Other things to know:
                parseInt("0.1"); //NaN: integers can't start with "."
                parseFloat("$72.34"); //NaN: numbers can't start with "$"

        //parseInt accepts an optional second argument specifying the radix (base) of the number to parse:
                parseInt("11", 2) // 3 (1*2 + 1)
            
            /*The radix parameter is used to specify which numeral system to be used, for example, a radix of 16 
            (hexadecimal) indicates that the number in the string should be parsed from a hexadecimal number to 
            a decimal number.

                If the radix parameter is omitted, JavaScript assumes the following:
                    If the string begins with "0x", the radix is 16 (hexadecimal)
                    If the string begins with "0", the radix is 8 (octal). This feature is deprecated
                    If the string begins with any other value, the radix is 10 (decimal)*/

//3.8.3 Object to Primitive Conversions
    //Object-to-boolean conversions are trivial: all objects (arrays & functions) convert to true;
        //This is even the case for wrapper objects:
        new Boolean(false) //This is an obj rather than a primitive so it converts to true
    
    /*Object-to-string or object-to-number conversions are performed by invoking a method
    of the object to be converted. This is complicated by the fact that JS objects have two
    different methods that perform conversions:*/
        //The first is called toString().
            //It returns a string representation of the object, but it has some interesting effects:
            let obj = {a:2,b:3}
            let strObj = obj.toString() //this returns [object Object]

            //The toString() method for other classes also exists:
                //Array Class:
                    [1,2,3].toString() //"1,2,3" => converts each element to a string
                //Function Class:
                    (function(x) {f(x);}).toString() //"(function(x) {f(x);})" returns an implementation defined version
                //RegExp Class:
                    /\d+/g.toString() //converts to a string that looks like a RegExp literal 
        
        //The second is called valueOf().
            //This method is less well defined. Its supposed to convert the obj to a primitive value that represents the obj.
            //Objects though are compound values, and most objects cannot really be represented by a single primitive value.
            //So valueOf() usually just returns the object itself rather than a primitive

        //To convert an object to a string, JS takes these steps:
    
    //If obj has toString() method, JS calls it. If it returns a primitive value, JS converts that to a string.
    //If there is no toString() or a primitive isn't returned, then JS looks for valueOf().
    //Otherwise, JS cannot obtain a primitive value from either toString() or valueOf().
    //For converting to a number, JS follows the same steps, but tries with valueOf() first.

    /*The "+" operator in JS is used for addition and string concatenation. If either of its operands is an object, js converts 
    the object using a special object-to-primitive conversion rather than the object-to-number conversion*/
        typeof(now + 1) // "string": + converts dates to strings
        typeof(now - 1) //"number": - uses object-to-number conversion
        let now = new Date();
    //Variable Declaration
        /*In non-strict mode in JS, if you assign a value to an undeclared variable, JS actually creates that variable 
        as a property of the declared global variable.*/
    num = 9 //This would attached itself to the global object.
    //Variable Scope
    //You know that a local variable in a function would take precedence over a global variable by the same name
    let scope = "global"

    checkscope = () => {
      let scope = "local";
      return scope
    }

    console.log(checkscope()) //returns "local"
    //Although you can get away with not using "let, var, const" when in the global scope, you must always use this with local variables.

    scope = "global"

    checkScope = () => {
      scope = "local";
      myscope = "local"
      return [scope, myscope]; //changes the global scope
    }

    console.log(checkScope(), scope) //This is the global scope, but would log as "local"

    /*In some C-like languages, each block of code within curly braces ahs its own scope, 
    and variables are not visible outside of the block in which they are declared. This is
    called block scope and JS does not have it. Instead, JS uses function scope - variables
    are visible within the funtion in which they are defined and within any functions that 
    are nested within that function.*/

    /*Function scope means that all variables declared within a function are visible throughout
    the body of the function. Buriously, this means that variables are even visible before they
    are declared, which of course is known as hoisting*/

    function f() {
      console.log(scope); //This would be undefined. Remember though that scope gets hoisted, and assigned undefined for now.
      let scope = "local"; //Then here the value is actually changed to "local"
      console.log(scope); //logs "local"
    }

    /*JS is a lexically scoped language: The scope of a variable can be thought of as the set of source code lines
    for which the variable is defined. Global variables are defined throughout the program. Local variables are 
    defined throughout the function in which they are declared.*/

    /*If we think of local variables as properties of some kind of implementation-defined-boject, then there is 
    another way to think about variable scope. Every chunk of JS code has a scope chain associated with it.*/

    /*The scope chain is a list or chain of objects that defines the variables that are "in scope" for that code. 
    When JS needs to look up the value of a variable x (a process called variable resolution) it starts by looking
    at the first object in teh chain. If it cannot locate a property called x there, it goes up a level in the chain.
    This continues until x is found or a ReferenceError is logged.*/

  