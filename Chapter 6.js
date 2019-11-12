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
    