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

//Unlike many languages, JS does not make a distinction between integers and floating-point values. 

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
            //Then, you would etch out each power of 2 and minus from the given number. If the given base 2 can minus from it, then it would be a 1 in binary. 
            //If it cannot, then it would be 0. You follow this process until reaching zero for the given number.
    
        /*Letters would be similar process. For instance, F is the 6th number of the alphabet, so our given 
        number would be 6. There are 8 bytes again or 8 digits, and for letters, lowercase always starts with 
        0110, so your binary for the letter F would be: 01100110.*/

    //Remember that 8 bits make up a byte. And a byte can string together 256 different combinations (Remember powers of 2? 2 to the power of 8 is 256.).
    
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
            /*Numbers entered into JavaScript are decimal floating-point numbers and are then internally represented as binary floating-point numbers. That conversion for decimal floating-point numbers whose prime factors include anything other than 2 will lead to imperfect results. 
                For example —
                    0.125 in decimal = 125/1000 = 1/8 = 0.001 in binary
                    0.1 in decimal = 1/10 = 1/2*5
                    0.2 in decimal = 1/20 = 1/2*2*5
            */
    
    //Null vs Undefined
        //null is a language keyword that evaluates to a special value that is usually used to indicate the absence of value
            //using typeof operator on ull returns the string "object", indicating that null can be thought of as a speical object.
            //In practice, however, this is just regarded as its own type and can be used to indicate no value for numbers, strings, and objects.

        //undefined represents a deeper kind of absence.
            //It indicates a value that has not been declared and will indicate when an object or array does not exist.
            //It is also returned by functions that have no return value.

        //== operator considers undefined and null to be equal.
        //Both are falsy values, and neither have any properties or methods.
        //Consider undefined to be a system-level, unexpected, or error-like absence of a value
        //Consider null to be a program-level, normal or expected absence of a value

//3.5 The Global Object is a regular object that serves a very important purpose:
    //the properties of this object are the globally defined symbols that are available to a JS program.
    /*When the JS intepreter starts, or whenever a web broser loads a new page, it creates a new 
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
  This global Window has a self-referential "window" property that can be used instead of "this" to refere to the 
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

//We've also seent aht strings have properties and methods:
  let s = "hello world";
  let word = s.substring(s.indexOf(" ")+1, s.length); //Using string properties
    //substring() - The substring() method extracts the characters from a string, between two specified indices, and returns the new sub string.
    //indexOf() - The indexOf() method returns the position of the first occurrence of a specified value in a string.
  console.log(word);

//Important: Strings are not objects, however, so why do they have properties?
  /*Whenever you try to refer to a property of a string "s", JS converts the string value to an object
  as if by calling new String(s). This object inherits string methods and is used to resolve the property
  reference. Once the property reference has been resolved, the newly created object is discarded*/