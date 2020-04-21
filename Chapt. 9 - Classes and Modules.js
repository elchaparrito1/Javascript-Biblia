//In JS, classes are based on JS's prototype-based inheritance mechanism.
/*If two objects inherit from the same prototype object, we say they're 
instances of the same class*/

//9.1 Classes and Prototypes
  /*In JS, a class is a set of objects that inherit properties from the same
  prototype object*/

//9.2.1 Constructors and Class Identity
  //The prototype obj is fundamental to the identity of a class.
    /*Again, two objs are instances of the same class only if they 
    inherit from the same prototype object*/
    /*Constructors are not fundamental. Two distinct constructors may point 
    to the same prototyp obj*/
    //But the constructor is the public face of a class.
    //Meaning, the name of the constructor most often becomes the name of the class
    //More fundamentally, constructors are used with the instanceof to test membership of a class
    r instanceof Range

    //This doesn't check if r was initialized but Range, only if it inherits from Range.protoype

//9.2.2 The constructor Property
  //Any JS function can be used as a constructor, which always needs a prototype property
  //Every JS function, therefore, has a prototype property.
  //The value of this property is an object that has a constructor property
  //And the value of this constructor property is the function object.
  let F = function() {};
  let p = F.prototype;
  let c = p.constructor;
  c === F //true; F.prototype.constructor == F for any function

  /*The existence of this predefined prototype object with its constructor property means 
  that objects typically inherit a constructor property that refers to their constructor.*/

  //Illustration on page 204 helps see this relationship.

//9.3 Classes in Javascript
  //In JS, there are three different objects involved in any class definition:
    //Constructor Object: Again, this defines a name for a JS class.
      //Properties you add to this constructor serve as class fields and methods.
    //Prototype Object: The properties of this object are inherited by all instances of the class.
      //And properties whose values are functions behave like instance methods of the class.
    //Instance Object: Each instance of a class is an object in its own right.
      //And properties defined directly on an instance are not shared instances.

//9.6 Object-Oriented Techniques in JavaScript
  //


