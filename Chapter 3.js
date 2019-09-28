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

  /*B/c of rounding error, the diff between the approximations of .3 and .2 is not 
    exatly the same as the diff between .2 and .1. This problem is not specific to
    JS, but rather, any programming language that uses binary floating-point numbers*/

//On a site you found, it shows the value that is actually stored in float:
    0.1
    //Actually stores as:
    const x = 0.100000001490116119384765625
    //So 
    0.2
    const y = 0.20000000298023223876953125
    //and 
    0.3
    const z = 0.300000011920928955078125

    console.log(z - y);
