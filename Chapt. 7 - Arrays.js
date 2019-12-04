//An array is an ordered collection of values.
//Each value is called an element, and each element has a numeric position (index);

//JS arrays are untyped: an array element may be of any type.
//And different elements of the same array may be of all types.
//JS arrays are zero-based and use 32-bit indexes.
//Index of the first element is zero
//Highest array index is 4294967294 (2^32-2)

//Arrays are dynamic: they grow and shrink as needed
//They are also sparse: the elements need not have a contiguous index, there may be gaps.

//7.1 Creating Arrays
    //The easiest way to create an array is with an array literal:
    let arr = [];
    let arrTwo = [2,3,"seven", true];

    //Array literals can contain object literals or other array literals:
    let arr = [[1, {x:2, y:2}], [2, {x:3,y:4}]];

    //If you omit a value from an array literal, the omitted element is undefined:
    let arr = [1,,3]; //three elements and the middle is undefined

    //Arrays allow for optional trailing commas, so:
    let arr = [,,] //has two elements and not three, set to undefined.

    //Another way to create arrays is with the array constructor.
        //You can invoke this constructor in three different ways:
            //1 - Call it with no arguments
            let a = new Array() // same as 'let arr = [];'
            //2 - Call it with a single numeric argument, which specifies length:
            let a = new Array(10);
            //3 - Call it explicitly defining the elements:
            let a = new Array(2,3,4,5,1,"testing",true);

//7.2 Reading and Writing Array Elements
    //You can access an element of an array using the bracket operator.
    //These are all proper JS syntax:
    let a = ["world"];
    let value = a[0];
    a[1] = 3.14; //appends another element equalling 3.14
    i = 2;
    a[i] = 3;
    a[i + 1] = "hello";
    a[a[i]] = a[0]; //Read elements 0 and 2, write element 3

    //Remember that arrays are a specialized kind of object.
    /*The square brackets used to access array elements work just like the 
    square brackets used on objects*/
    /*JS converts the numeric array index you specify to a string (index 1 becomes "1") then uses
    the string as a property name. Nothing special to this. You can do it with regular objects: */
    o = {};
    o[1] = "one";

    /*What is special about arrays is that when you use property names that are non-negative
    integers less than 2^32, the array automatically maintains that value of the length property:*/
    a.length //4

    /*The fact that array indexes are simply a special type of object property name means that JS
    arrays have no notion of an "out of bounds" error. When you try to query a nonexistent property
    of any object, you don't get an error, you simply get undefined. This is just as true for 
    arrays as it is for objects:*/
    a = [true, false];
    a[2] //undefined. No element at this index
    a[-1] //undefined. No property with this name

    //Since arrays are objects, they can inherit elements from their prototype.

//7.3 Sparse Arrays
    //A sparse array is one in which the elements do not have contiguous indexes starting at 0.
    //Normally, the length property of an array specifies the number of elements in the array.
    //If the array is sparse, the value of the length property is greater than the number of elements.
    a = new Array(5); //No elements, but a.length is 5.
    a[1000] = 0; //Assignment adds one element but sets length to 1001.
        //everything in between, say, the first 5 elements and the 1000th one would be undefined.

    //Note that when you omit value in an array literal, you are not creating a sparse array.
    //The omitted element exists in the array and has the value undefined.
    //This is subtly different than array elements that do not exist at all.
    //You can detect the difference with the "in" operator:
    let a1 = [,,,];
    let a2 = new Array(3);
    0 in a1 //true: a1 has an element with index of 0;
    0 in a2 //false: a2 has not element with index of 0;

    //The difference is also apparent when you use a for/in loop.

//7.4 Array Length
    //Every array has a length property, and this property makes arrays different from regular objects.
    //For arrays that are dense, i.e. not sparse, the length property specifies the number of elements.
    //Its value is one more than the highest index in the array:
    [].length; //0: the array has no elements;
    [1,2,3].length //3: highest index is 2, length is 3

    //Again, when an array is sparse, the value of the length property is greater than the number of elements.
    /*Put another way, an array (sparse or not) will never have an element whose index is greater 
    than or equal to its length*/

    //In order to maintain this invariant, arrays have to special behaviors:
        /*1) As already described above, iff you assign a value to an array whose index i >= array's 
        current length, the length is set to i+1*/
        /*2) If you set the length property to a non-negative integer n smaller than the current value, 
        any array elements whose index is >= n are deleted from the array:*/
        a = [1,2,3,4,5];
        a.length = 3; //a is now [1,2,3];
        a.length = 0; //a is not [];
        a.length = 5; //as is not [,,,,];
