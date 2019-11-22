//JS's fundamental datatype is the object

//An object is an unordered collection of properties, each of which has a name and a value
//Property names are strings so we can say that objects map strings to values

//This string-to-value mapping goes by various names: "hash", "hashtable", "dictionary"
//An object is more than a simple string-to-value map however.

/*In addition to maintaining its own properties, a JS object also inherits the properties 
of another object, known as its prototype.*/
/*The methods of an object are typically inherited properities, making prototypal inherit-
ance a key feature of the language.*/

//Objects are made up of properties, which have keys and values.
//In addition to its name and value, each property has associated values that we'll call property attributes:
    //The writable attribute specifies whether the value of the property can be set.
    //The enumerable attribute specifies whether the property name is returned by a loop.
    //The configurable attribute specifies whether the property can be deleted and attributes altered.

//In addition to its properties, every object has three associated object attributes:
    //An object's prototype is a reference to another object from which properties are inherited
    //An object's class is a string that categorizes the type of an object
    //An object's extensible flag specifies whether new properties may be add to the object.

//Finally, here are some terms that will be important throughout this chapter:
    //Native object - object or class of objects defined by ECMAScript specifications.
        //Arrays, functions, dates, and regulator expressions are native objects
    //Host object - is an object defined by the host environment
        /*The HTMLElement objects that represent the structure of a webpage in client-side JS 
        are host objects.*/
    //User-Defined object - is any object created by the execution of JS code
    //Own property - is a property defined directly on the object
    //Inherited property - ...duh

//6.1 Creating Objects
    //Objects can be created one of three ways:
        //Object literals
        //With the new keyword
        //With Object.create()
    
//6.1.1 Object Literals
    //This is the easiest way to create an object:
    let obj = {}; 
    let objTwo = {a:1,b:2};
    let objThree = {'main':'Javascript', 'sub-title':'The Definitive Guide'}

    /*An object literal is an expression that creates and initializes a new distinct object each 
    time it is evaluated*/
    //The value of each property is evaluated each time the literal is evaluated.

//6.1.2 Creating Objects with new
    /*The new operator creates and initializes a new object. The new keyword must be followed
    by a function invocation. A function used in this way is called a constructor*/
    //Recall that JS includes built-in constructors for native types:
        let o = new Object();
        let a = new Array();
        let d = new Date();
        let r = new RegExp();

//6.1.2 Prototypes
    //Before covering the third option, we must discuss prototypes.
    /*As you know, each object created always has a second object associated with it, which is
    known as a prototype, and the object inherits properties from it.*/

    /*All objects created by object literals have the same prototype object, and we can refer
    to this prototype object in JS code as Object.prototype.*/

    /*Objects created using the new keyword and a constructor invocation use the value of the
    prototype property of the constructor function as their prototype.*/

    /*So the object created by new Object() inherits from Object.prototype just as the object
    created by {} does. Similarly => new Array() uses Array.prototype and new Date() uses Date.prototype*/

    //Object.prototype is one of the rare objects that has no prototype: it does not inherit any properties.
    //All of the built-in constructors have a prototype that inherits from Object.prototype.
    //For example, Date.prototype inherits properties from both Object.prototype and Date.prototype.
        //This linked series of prototype objects is known as the prototype chain.

//6.1.4 Object.create()
    //Object.create() creates a new object, using its first argument as the prototype of that object.
        //It also takes an optional second argument that describes the properties of a new object.

    //Object.create() is a static function, not a method inovked on individual objects:
        let obj = Object.create({x:1, y:2});

//6.2.1 Objects As Associative Arrays
    //Remember how to query or set properties:
        let author = book.author;
        let title = book["title"];

        book.edition = 6;
        book["main title"] = "Moby Dick";

    //The dot notation is the syntax used to access a static field or object in C or Java.
    /*The bracket notation looks like an array access, but to an array indexed by strings rather than
    by numbers. This kind of array is known as an associative array or hash or map or dictionary.*/
    //JS objects are associative arrays, and this section explains why that is important.

    /*In C, C++, Java and similar strongly typed languages, an object can have only a fixed number of
    properties and the names of these properties must be defined in advance. Since JS is a loosely typed
    language, this rule does not apply: a program can create any number of properties in any object*/

    /*When you use the . operator to access a property of an object, however, the name of the property is
    expressed as an identifier. Identifiers must be typed literally into your JS program; they are not
    a datatype so they cannot be manipulated by the program.*/

    /*On the other hand, when you access a property of an object with the [] array notation, the name of
    the property is expressed as a string. Strings are JS datatypes, so they can be manipulated and created
    while a program is running:*/
    let addr = "";
    for (i = 0; i < 4; i++) {
        addr += custom["address" + i] + '\n';
    } //This would return address0, address1, address2, etc.

    /*This shows the flexibility of using array notation to access properties of an object with 
    string expressions. The code above could be rewritten using the dot notation, but there are 
    cases in which only the array notation will do.*/

    /*Suppose, for example, that you are writing a program that uses network resources to compute
    the current value of the user's stock market investments. The program allows the user to type in
    the name of each stock she owns as well as the number shares of each stock. You might use an object
    named portfolio to hold this information. The object has one property for each stock. The name of
    the property is the name of the stock, and the property value is the number of shares of that stock.
    So for example, if a user holds 50 shares of stock in IBM, the porfolio.ibm property has the value 50*/

    //Suppose there is a function that adds a new stock to the portfolio:
    function addstock(portfolio, stockname, shares) {
        portfolio[stockname] = shares;
    }
    /*Since the user enters stock names at runtime, there is no way that you can know the property
    name ahead of time. This would make dot notation unusable. You can use the bracket notation,
    however, because it uses a string value rather than an identifier.*/

//6.2.2 Inheritance
    //JS objects have a set of "own properties", and also inherit a set from their prototype object.
    let o = {};
    o.x = 1;
    let p = inherit(o);
    p.y = 2;
    q.x + q.y //3 => x and y are inherited from o and p.

    //Now suppose o already has the property x assigned to it.
    //If this is the case, the new property x simply changes the value of the existing value
    //If o had previously inherited the x property, the property is now hidden by the newly created own property.

    /*Property assignment examines the prototype chain to determine whether the assignemnt is allowed.
    If o inherits a read-only property named x, then the assignment is not allowed. If allowed, however,
    it always creates or sets a property in the original object and never modifies the prototype chain,
    i.e., going back up the chain and modifying the original*/

    /*The fact that inheritance occurs when querying properties but not when setting them is a key 
    feature of JS, because it allows us to selectively override inherited properties.*/

    let q = {x:1};
    let o = {...q};

    o.x = 4;

    console.log("Q property:" + q.x); //returns 1
    console.log("O property:" + o.x); //returns 4

//6.2.3 Property Access Errors
    //Property access expressions do not always return or set a value.
    /*It is not an error to query a property that does not exist. If the property x is not
    found as an own property or an inherited property of o, the peroprty access expression o.x
    evaluates to undefined. Recall that our book object has a "sub-title" property, but not a "subtitle"
    property*/

    book.subtitle //undefined; property does not exist

    //It is an error, however, to attempt to query a property of an object that does not exist.
    /*The null and undefined values have no properties, and it is an error to query properties
    of these values*/

    let len = book.subtitle.length //TypeError exception. undefined doesn't have a length property

    //Note that attempts to set properties on other values do not always succeed.
    //Some properties are read-only and cannot be set. Curiously, however, these attempts fail silently.
    Object.prototype = O; //The prototype properties of built-in constructors are read-only.

    //This quirk of JS can be rectified in strict mode.

    /*The rules that specify when a property assignment succeeds and when it fails are intuitive 
    but difficult to express concisely.*/

    //An attempt to set a property p of an object o fails in these circumstances:
        //o has an own property p that is read-only: it is not possible to set a read-only property
        /*o has an inherited property p that is read-only: it is not possible to hide an inherited 
        read-only property with an own property of the same name*/
        /*o does not have an own property p; o does not inherit a property p with a setter method, 
        and o's extensible attribute is false. If p does not already exist on o, and if there is 
        no setter method to call, then p must be added to o. But if o is not extensible, then no
        new properties can be defined on it.*/
