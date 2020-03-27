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

    //ASIDE ON PROTOTYPE, DUNDER PROTO, and CONSTRUCTOR:
        //Dunder proto; prototype; and constructor
        /*"Prototype is a property on a function that points to an 
        [anonymous] object" - Tyler McGinnis*/
        /*prototype is the object that is used to build __proto__ when you 
        create an object with new.*/
        /*Just remember that __proto__ is an accessor property of the 
        Object.prototype object.*/
        //It exposes the internal prototype link of an object through which it is accessed.
        //constructor references back to the constructor function itself.
            function Foo (name) {
                this.name = name
            }
            Foo.prototype.greet = function() {
                console.log(`Hello ${this.name}`);
            }
            let objLiteral = {};
            let newName = new Foo("Carl");
            let newerName = newName
            console.log(newName); //It's constructor is Foo(name)
            console.log(objLiteral); //It's constructor is Object()
            console.log(Object.getPrototypeOf(newName)); //*
            console.log(Foo.prototype); //*
            console.log(newName.prototype); //returns undefined
                /*prototype is not available on the instances themselves; 
                only on the function constructor*/
                //__proto__ is available everywhere
            console.log(Foo.prototype.constructor); //returns the function of Foo
            console.log(Object.getPrototypeOf(newerName)); //* 
            console.log(newerName.__proto__ === Foo.prototype); //true
            console.log(newName.constructor === Foo); //true
        //*returns the Foo function prototype property, which is an object

        /*JavaScript's Pseudo Classical Inheritance works this way: 
        I am a constructor, and I am just a function, and I hold a prototype 
        reference, and whenever foo = new Foo() is called, I will let foo.__proto__ 
        point to my prototype object. So Foo.prototype and obj.__proto__ are two 
        different concepts. Foo.prototype indicates that, when an object of Foo is 
        created, this is the point where the prototype chain of the new object 
        should point to — that is, foo.__proto__ should point to where Foo.prototype 
        is pointing at.*/
        
        //Good article: https://hackernoon.com/understand-nodejs-javascript-object-inheritance-proto-prototype-class-9bd951700b29

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

//6.3 Deleting Properties
    //Delete does not operate on the value of the property but the property itself
    //The delete operator only deletes own properties, not inherited ones.
    //To delete an inherited property, you must delete it from the prototype object in which it is defined.

    //A delete expression evaluates to true if the delete succeeded or if the delete had no effect (like deleting a nonexistent property).
    o = {x:1} //o has own property x and inherits property toString
    delete o.x; //Delete x, and return true
    delete o.x; //Does nothing, and returns true
    delete o.toString; //Does nothing; toString isn't an own property , but returns true
    delete 1; //Nonsense, but evaluates to true

    //Delete does not remove properties that have a configurable (property can be deleted) attribute of false
    //Certain properties of built-in objects are nonconfigurable
    //As are properties of the global object created by variable and function declaration
    //Delete simply evaluates to false when a nonconfigurable property is deleted:
    delete Object.prototype; //Can't delete; property is non-configurable
    let x = 1;
    delete this.x; //Can't delete this property
    function f() {}
    delete this.f; //Can't delete this property either

    /*When deleting configurable properties of the global object, you can omit the reference 
    to the global object and simply follow the delete operator with the property name:*/
    this.x = 1; //Create a configurable global property (no let);
    delete x; //And delete it

//6.4 Testing Properties
    //JS objects can be thought of as sets of properties
        /*And it is often useful to be able to test for membership in the set - to check whether an
        object has a property with a given name, you can do this with the following:*/
            //in operator
                //expects a property name (as a string) on its left side, and an object on the right.
                //It returns a boolean:
                let o = { x:1 };
                "x" in o; //true
                "toString" in o //true; o inherits a toString property
            //hasOwnProperty()
                //checks if has the property name as its own. returns a boolean:
                let o = { x:1 };
                o.hasOwnProperty("x"); //true 
            //propertyIsEnumerable()
                //this refines the hasOwnProperty() test.
                //returns true only if the named property is owned and is enumerable
                //remember that certain built-in properties are not enumerable
                Object.prototype.propertyIsEnumerable("toString"); //false: not enumerable

            //Instead of using the in property, it is often sufficient to query the property and use !==
            let o = { x:1 }
            o.x !== undefined //true: o has a property x

            /*One thing the "in" operator can do that the above can't is distinguish when a property does 
            exist, but is just set to undefined:*/
                let o = { x:undefined }
                o.x !== undefined //false; property exists, but is undefined
                "x" in o //true; the property exists

//6.5 Enumerating Properties
    //We sometimes want to iterate through and see the properties of an object
    //This can be done using the for/in loop, which runs over each enumerable properties of the object
    //Built-in methods that objects inherit are not enumerable, but the properties that your code adds are
    let o = {x:1, y:2, z:3};
    o.propertyIsEnumerable("toString"); //false: not enumerable
    for (propr in o) {
        console.log(prop);
    }; //prints x, y, z, but not toString

    //In addition to the for/in loop, ECMAScript 5 defines two functions that enumerate property names
        //Object.keys() - which returns an array of the names of the enumerable own properties of an object
        /*Object.getOwnPropertyNames() - It works like the above but returns the name of all the own proper-
        ties, and not just the enumerable ones*/

//6.6 Property Getters and Setters
    //We've said that an object property is a name, a value, and a set of attributes
    //In ECMAScript 5, the value may be replaced by one or two methods, known as a getter and a setter
    //These are sometimes known as accessor properties, to distinguish them from data properties.
    
    /*When a program queries the value of an accessor property, JS invokes the getter method.
    The return value of this method becomes the value of the property access expression. When a program
    sets the value of an accessor property, JS invokes the setter method, passing the value of the 
    right-hand side of the assignment. This method is responsible for "setting" the property value*/

    /*For the most part, in JavaScript, what you see is what you get. A value’s a value; there are 
    no tricks. Sometimes however, you want a value that’s based on some other values: someone’s 
    full name, for example, is a concatenation of their first and last names. If you have a person 
    object, and you want the users of that object to be able to set the full, first or last name, 
    and see that change immediately reflected in the other values, you’d conventionally build it 
    with functions:*/

    person.setLastName('Smith');
    person.setFirstName('Jimmy');
    person.getFullName(); // Jimmy Smith

    /*But this is ugly, and requires the users of your object to care that the properties are 
    related; in a more complex example, that might not be as obvious as with names. Luckily, 
    there’s a better way, added in ECMAScript 5.*/

    //So getters and setters...

    /*Let’s make that person object. We want to be able to set the first name, last name or full 
    name, and have it update the other two automagically.*/

    let person = {
        firstName: 'Jimmy',
        lastName: 'Smith',
        get fullName() {
            return this.firstName + ' ' + this.lastName;
        },
        set fullName (name) {
            var words = name.toString().split(' ');
            this.firstName = words[0] || '';
            this.lastName = words[1] || '';
        }
    }

    person.fullName = 'Jack Franklin';
    console.log(person.firstName); // Jack
    console.log(person.lastName) // Franklin

    //So what’s going on here?

    /*The get and set keywords are important. Following them is the property they relate to 
    (fullName) and a function body that defines the behaviour when the property is accessed 
    (name = person.fullName) or modified (person.fullName = 'Some Name').*/

    /*These two keywords define accessor functions: a getter and a setter for the fullName 
    property. When the property is accessed, the return value from the getter is used. When 
    a value is set, the setter is called and passed the value that was set. It’s up to you 
    what you do with that value, but what is returned from the setter is the value that was 
    passed in – so you don’t need to return anything.*/

    //The official way: 
    Object.defineProperty
    
    /*Along with the inline method of declaring getters and setters, it can also be done more 
    explicitly via Object.defineProperty (MDN Documentation). This method takes three arguments. 
    The first is the object to add the property to, the second is the name of the property, and 
    the third is an object that describes the property (known as the property’s descriptor). 
    Here’s an example that replicates the above example:*/

    var person = {
        firstName: 'Jimmy',
        lastName: 'Smith'
    };

    Object.defineProperty(person, 'fullName', {
        get: function() {
            return firstName + ' ' + lastName;
        },
        set: function(name) {
            var words = name.split(' ');
            this.firstName = words[0] || '';
            this.lastName = words[1] || '';
        }
    });

    /*The advantage here isn’t immediately apparent. Other than being able to add properties 
    after creating the initial object, is there a real benefit?*/

    /*When you define a property this way, you can do much more than just define a setter or getter. 
    You may also pass following keys:*/

    /*configurable (false by default): if this is true, the property’s configuration will be modifiable in future.
    enumerable (false by default): if true, the property will appear when looping over the object (for (var key in obj)).
    We can also define properties that don’t have explicit getters or setters:*/

    Object.defineProperty(person, 'age', {
        value: 42
    });

    /*This will create person.age, and set it to the value 42. It’s important to note that this property isn’t 
    writable. Calling person.age = 99 will have no effect. In this way you can create read-only properties. 
    If a property has a value key set, it cannot have a getter or setter. Properties can have values or accessors, not both.*/

    /*Not only that, but because the enumerable property defaults to false, this property will not appear when we 
    loop over the object’s keys.*/

    //If we wanted to make a property writable, we would need to set the writable property:

    Object.defineProperty(person, 'age', {
        value: 42,
        writable: true
    });

    //Now, person.age = 99; will have the desired effect.

    /*Accessor properties are defined as one or two functions whose name is the same as the property
    name, and with the function keyword replaced with get and/or set.*/

    //Mainly, this allows you to just call a property rather than a method on an object or class:
    let person = {
        name: "Mitch",
        get fullName() {
            return this.name
        },
        set fullName(value) {
            return person.name = value
        }
    }

    //To call one of these, you would do the following:
    person.fullName 
    
    //whereas, if these weren't getters, you'd have to call it like a method rather than a property
    let person = {
        name: "Mitch",
        getFullName: function() {
            return this.name
        },
        fullName: function() {
            return person.name = value
        }
    }

    //To call one of these, you would do the following:
    person.fullName 

    //Accessor properties are inherited just as data properties are
    //So you can use

//6.7 Property Attributes   
    /*In addition to a name and value, properties have attributes that specify whether they can be 
    written, enumerated, and configured.*/
    //In ECMAScript 3, there was no way to change these attributes
    //With ECMAScript 5, an API was added to allow for this.
    //This is Object.defineProperty(). Refer back to this section if you ever see a need for it

//6.8 Object Attributes
    //Every object has assocaited prototype, class, and extensible attributes
//6.8.1 The prototype Attribute
    //An object's prototype attribute specifies the object from which it inherits properties.
    /*The prototype attribute is set when an object is created. Recall from 6.1.3 that objects created
    from object literals use Object.prototype as their prototype*/
    /*Objects created with 'new' use the value of the prototype property of their constructor 
    function as their prototype.*/
    /*Objects created with Object.create() use the first argument to that function, which 
    may be null as their prototype*/

    //You can query the prototype of any object by passing it to Object.getPrototypeOf();

    /*Objects created with a new expression usually inherit a constructor property that refers to
    the constructor function used to create the object. Constructor functions have a prototype 
    property that specifies the prototype for objects created using that constructor*/

    //Just use isPrototypeOf() method to determine if an object is the prototype of another.
    //Just go up the chain:
    let p = {x:1};
    let o = Object.create(p);
    p.isPrototypeOf(o); //true: o inherits from p
    Object.isPrototypeOf(p); //true: p inherits from Object.prototype

    /*Mozilla's implementation of JS has (since the early days of Netscape) exposed the prototype
    attribute through the specially named __proto__ property, and you can use this property to directly
    query or set the prototype of any object.*/

    //Mozilla documentation warns that the above feature has been deprecated.
    //They recommend sticking to and using Object.getPrototypeOf().

//6.8.2 The class Attribute
    //An object's class attribute is a string that provides information about the type of the object.
    /*Since JS is a prototype-based language and not a class one like Java, there is no counterpart 
    to getClass(), which is common in Java. You can use toString() which returns a string of the form:*/
    
    //The tricky part though is that many objects inherit the other more useful toString() methods
    //You must do so indirectly as follows:
    function classof(o) {
        if (o === null) return "Null";
        if (o === undefined) return "Undefined";
        return Object.prototype.toString.call(o).slice(8, -1);
    }

    classof(Object); //returns "Object"
    classof(val); //returns "Number", if val equals an integer
    classof(new Array); //returns "Array" b/c it is a built-in constructor the name will match the constructor
    classof(new Date); //returns "Date" b/c it is a built-in constructor the name will match the constructor
    classof(/./); //returns "Regexp"

    //Any object you yourself create will always have the class attribute of "Object"

//6.8.3 The extensible Attribute
    //The extensible attribute of an object specifies whether or not new properties can be added to an object.
    /*The purpose of the extensible attribute is to be able to lock down objects into a known state
    and prevent outside tampering. The extensible object attribute is often used in conjunction with
    the configurable and writable property attributes, and ECMAScript 5 defines functions that make it
    easy to set these attributes together*/

    Object.seal() //works like .preventExtension() by making it nonextensible and making own obj props nonextensible
    Object.freeze() //locks objects down even more tightly. Same as .seal() but also makes own obj props read only

    //The above methods affect only the object to which they're passed.
    //They have no effect on the prototype of that object.

//6.9 Serializing Objects
    //Object serialization is the process of converting an obj's state to string from which it can later be restored.
    JSON.stringify();
    JSON.parse();
    //JSON syntax is a subset of JS syntax, and it cannot represent all JS values.
    //Object, arrays, strings, finite numbers, true, false, and null can all be serialized.
    //NaN, Infinity, and -Infinity are serialized to null.
    //Function, RegExp, and Error objects and undefined values cannot be serialized or restored
    //JSON.stringify() serializes only the enumerable own properties of an object.

//6.10 Object Methods
    //As discussed, all JS objects inherit properties from Object.prototype.
    //These inherited properties are primarily methods.

    //6.10.1 The toString() Method
        //The toString() method takes no arguments
        //It returns a string that somehow represents the value of the object
        //The default toString() method is not very informative.
        //For example, the following line of code simply evaluates to the string "[object Object]":
            let s = { x:1, y:1}.toString();
        /*B/c this default method does not display much useful info, many classes defined their 
        own versions of toString().*/

        //As noted, this is the default serialization of an object. 
            //But why is it [object Object] and not just [object]?

            //That is because there are different types of objects in Javascript!

            //Function objects:
            stringify(function (){}) //-> [object Function]
            //Array objects:
            stringify([]) //-> [object Array]
            //RegExp objects
            stringify(/x/) //-> [object RegExp]
            //Date objects
            stringify(new Date) //-> [object Date]
            /*… several more …
            and Object objects!*/
            stringify({}) //-> [object Object]
            
            /*That's because the constructor function is called Object (with a capital "O"), and the 
            term "object" (with small "o") refers to the structural nature of the thingy.*/

            /*Usually, when you're talking about "objects" in Javascript, you actually mean "Object 
            objects", and not the other types.*/

            //where stringify should look like this:

            function stringify (x) {
                console.log(Object.prototype.toString.call(x));
            }
    
    //6.10.2 The toLocaleString() Method
        //The purpose of this method is to return a localized string repsentation of the object.
        //The default toLocaleString() method defined by Object doesn't do any localization itself
            //It simply calls toString() and returns that value.

    //6.10.3 The toJSON() Method
        //Object.prototype does not actually define a toJSON() method
        //But the JSON.stringify() method looks for a toJSON() method on any object it is asked to serialize
    
    //6.10.4 The valueOf() Method
        //Used when JS needs to convert an object to some primitive type other than a string.
        //This is typically used to convert it to a number.
        //It is automatically called in the context of when an obj is used where a primitive value is expected
        

    