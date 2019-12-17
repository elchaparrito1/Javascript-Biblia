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

    //You can make the length property of an array read-only with Object.defineProperty():
    a = [1,2,3];
    Object.defineProperty(a, "length", {writable: false});
    a.length = 0 //'a' length is unchanged

    /*Also, an array element can be set to nonconfigurable, which means it cannot be deleted. If it 
    cannot be deleted, then the length property cannot be set to less than the index of the element.
    You could see 6.7 Object.seal() and Object.freeze()*/

//7.5 Adding and Deleting Array Elements
    //Simplest way to add elements to an array we've already seen:
    a = [];
    a[0] = 1;
    a[1] = 2;

    //Another way is with the push method:
    a = [];
    a.push(1);
    a.push(2);

    //Push is the equivalent to:
    a[a.length] = 3;

    //unshift() will insert new element at the beginning of the array.
    //The delete keyword also works on arrays b/c they're just another object:
    a = [1,2,3];
    delete a[1];
    1 in a; //false: no array index 1 is defined;
    a.length; //3: delete does not affect array length; It simply becomes a sparse array 
        //.shift() or .pop() on the other hand would change the length


//7.6 Iterating Arrays
    //The most common way to loop through the elements of an array is with a for loop:
        let keys = Object.keys(o);
        let values = [];
        for (let i = 0; i < keys.length; i++) {
            let key = keys[i];
            values[i] = o[key];
        }
    
    /*If you have an array that may contain invalid data that we'd not want to iterate over, 
    you could build the following loop in order to skip this data:*/
    for (let i = 0; i < a.length; i++) {
        if (!a[i]) continue;
    }

    //You can also use for/in loops with sparse arrays.
    //This loop assigns enumerable property names to the loop variable.
    //Indexes that do not exist will not be iterated:
    for (let index in sparseArray) {
        let value = sparseArray[index];
        //Now do something with the index and value
        console.log(value);
    }

    /*As noted in 6.5, a for/in loop can return the names of inherited properties, such as the 
    names of methods that have been added to Array.prototype. For this reason you should not use
    a for/in loop on an array unless you include additional tests to filter out unwanted properties*/

    for (let i in a) {
        if (!a.hasOwnProperty(i)) continue;
    }

    for (let i in a) {
        if (String(Math.floor(Math.abs(Number(i)))) !== i) continue;
    }

    //If iteration order matters for you algorithm, it is probably better to use a regular loop.
    
    //forEach() method passes elements in index order to a function that is defined
    let data = [1,2,3,4,5];
    let sumOfSquares = 0;
    data.forEach((x) => {
        sumOfSquares += x*x
    })

    sumOfSquares //55 is what this would equal

//7.7 Multidimensional Arrays
    //JS does not support true multidimensional arrays, but you can approximate them with arrays of arrays.
    //To access a value in an array of arrays, simply use the [] operator twice.
    //You've seen this in your matrix code challenge example
    let table = new Array(10);
    for (let i = 0; i < table.length; i++) {
        table[i] = new Array(10);
    }

    for(let row = 0; row < table.length; row++) {
        for(col = 0; col < table[row].length; col++) {
            table[row][col] = row*col;
        }
    }

    //Use the multidimensional array to compute 5*7
    let product = table[5][7]; //35

//7.8 Array Methods
    //7.8.1 join()
        //Array.join() method converts all elements of an array to and returnrs a string
        //You can specify an optional string that separates the elements in the resulting string.
        //If no separator is specified, a comma is used.
        let a = [1,2,3];
        a.join(); //"1,2,3";
        a.join(" "); //"1 2 3";
        a.join(""); //"123"
        let b = new Array(10);
        b.join('-'); //'---------': a string of 9 hyphens

    //7.8.2 reverse()
        //Reverses the order of elements in an array.
        //It does this in place, meaning that it doesn't create a new array, simply manipulates the existing one.
        let a = [1,2,3];
        a.reverse().join() //'3,2,1'

    //7.8.3 sort()
        //sorts the elements of an array in place and returns a sorted array.
        //When it is called with no arguments, it sorts the array elements in alphabetical order.
        //If an array contains undefined elements, they are placed at the end of the array.

        /*To sort an array into some order other than alphabetical, you must pass a comparison 
        function as an argument to sort()*/

        /*This argument decides which of its two arguments should appear first in the array. If the 
        first argument should appear before the second, the comparison function returns a number less
        than zero. If the first should appear after, a number greater than zero is returned. If the two
        values are equal or equivalent, a zero is returned*/

        let a = [22, 4, 111, 3323];
        a.sort(); //alphabetical order would be [111, 22, 3323, 4]
        a.sort(function(a,b) { return a - b}); //returns [4, 22, 111, 3323]
        a.sort((a,b) => { return b - a}); //returns [3323, 111, 22, 4]

        //Similarly, we could compare case-sensitive words:
        let a = ["ant", "Cat", "Bug", "Dog"];
        a.sort((a,b) => { 
            let y = a.toLowerCase();
            let z = b.toLowerCase();
            if (y > z) return 1;
            if (y < z) return -1;
            return 0
        });
    
    //7.8.4 concat()
        /*this method creates and returns a new array that contains the elements of the original array 
        followed by each of the arguments contained in concat*/
        //Note that concat() does not recursively flatten arrays of arrays (multidimensional array).
        //Note that concat() does not modify the array on which it is invoked.
        let a = [1,2,3];
        a.concat(4,5); //returns [1,2,3,4,5];
        a.concat([4,5]); //returns [1,2,3,4,5];
        a.concat([4,5],[6,7]); //returns [1,2,3,4,5,6,7];
        a.concat(4,[5[6,7]]); //returns [1,2,3,4,5,[6,7]];

        //concat() alone can't flatten an array.
        //However, a solution using it could A solution for flattening an array could be the following:
        let multidimensionalArray = [["dude", "pog", "moon"], ["eastside", "graduation"], ["ant", "Cat", "Bug", "Dog"]];
        let flatArray = [].concat(...multidimensionalArray);
        //Again though, remember that JS doesn't have true multidimensional arrays

    //7.8.5 slice()
        //this method returns a new slice, or subarray, of the specified array
        //Its two arguments specify the start and end of the slice to be returned
        //If only one argument is specified, the returned array contains all elements to the end
        //If either argument is negative, it specifies an array element relative to the last in the array
        //An argument of -1 specifies the last element in the array, and -3 the third from last
        let a = [1,2,3,4,5];
        a.slice(0,3); //returns [1,2,3];
        a.slice(1,-1); //returns [2,3,4];
        a.slice(-3, -2); //returns [3];

    //7.8.6 splice()
        //is a general purpose method for insterting or removing elements of an array
        //Unlike slice() and concat(), splice() modifies the array on which it is invoked
        //splice() can delete elements form an array, insert new ones, or both at the same time
        //The first argument specifies the position at which the insertion/deletion should begin
        //The second argument specifies the number of elements that should be deleted from the array
        let a = [1,2,3,4,5,6,7,8];
        a.splice(4); //a becomes [1,2,3,4];
        a.splice(1,2); //a becomes [1,4,5,6,7,8];
        a.splice(1,1); //a is [1,3,4,5,6,7,8];

        //Other than the first two arguments, others can be added to specify elements to be inserted:
        let a = [1,2,3,4,5,6];
        a.splice(2,0,'a', 'b'); //a becomes [1,2,'a','b',3,4,5];
        a.splice(2,2,[1,2],3); //a becomes [1,2,[1,2],3,3,4,5];

    //7.8.7 push() and pop()
        //These allow you to work with arrays as if they were stacks.
        //Note that both methods modify the existing array rather than producing a new copy
        //These methods allow you to implement a first-in last-out stack
    
    //7.8.8 unshift() and shift()
        //These behave much like push and pop, they just add or take away from the front of the array
        //unshift() adds elements while shift() takes away
        let a = [];
        a.unshift(2); //a = [2];
        a.unshift(22); //a = [22,2];
        a.shift(); //a = [2];
        a.unshift(3,4,5); //a = [3,4,5,2];
        /*Note that this last one is interesting. unshift() adds the elements all at once if it has
        multiples. If it added them one at a time, the order would be reversed (a = [5,4,3,2])*/

    //7.8.9 toString() and toLocaleString()
        //As an object, an array has access to a toString() method
        //Whitespace is not included:
        [1,2,3].toString(); //'1,2,3';
        [1,  2,  3].toString(); //'1,2,3;
        //Note that .join() returns the same thing when it is invoked with no arguments.

        //toLocaleString() is a localized version of toString().
        /*It converts each array element to a string, and then concatenates the result into a 
        single local-specific string*/

    //7.9.1 forEach()
        //This method iterates through an array, inoking a function you specify for each element
        //You pass the the function as the first argument.
        //forEach() then invokes your function with three arguments:
            //1)The value of the array element
            //2)The index of the array element
            //3)The array itself
        //If you only care about the value of the array element, you can the func with only one parameter
        let data = [1,2,3,4,5];
        data.forEach(function(num) {
            console.log(num + 2);
        });

        /*Note that forEach() does not provide a way to terminate iteration before all elements have 
        passed through the function*/

        //Meaning that there is no equivalent for a break statement
        //In order to have a break statement, you'd have to implement a try/catch
        function foreach(a,f,t) {
            try {a.forEach(f,t); }
            catch(e) {
                if (e === foreach.break) return;
                else throw e;
            }
        }
        foreach.break = new Error("StopIteration");

    //7.9.2 map()
        //This method passes each of the array on which it is invoked to the function you specify
        //Then it returns a new array; it does not modify the existing array like forEach()
        a = [1,2,3];
        a.map((x) => {
            return x * x //1,4,9
        });

    //7.9.3 filter()
        //This method returns an array containing a subset of the elements of the array on which it is invoked
        //The function you pass to is should be predicate: a function that returns true or false
        /*If the value returned is true, then the element passed to the predicate is a member of 
        the subset to the array that will become the return value*/
        a = [5,4,3,2,1];
        smallvalues = a.filter(function(x) {return x < 3}) //[2,1]

        //Note that filter skips missing elements in sparse arrays
        //Its return value is always dense
        //To close gaps, you can do this:
        let dense = sparse.filter(() => { return x !== undefined && x != null;});

    //7.9.4 every() and some()
        //These methods are array predicates
        /*They apply a predicate function you specify to the elements of the array, and then return true 
        or false*/
        
        /*The every() method returns true if and only if your predicate function returns true for ALL 
        elements in the array*/

        a = [1,2,3,4,5];
        a.every((num) => {
            return num < 6 //true
        });

        /*some() method returns true of there exists at least one element in the array for which 
        the predicate is true*/

        a = [1,2,3,4,5];
        a.some((num) => {
            return num === 2; //true; a has some numbers
        })

        /*Note that both every() and some() stop iterating array elements as soon as they know the 
        value to return*/

        //some() returns true the first time you predicate returns true
        //It only iterates through the entire array if your predicate always returns false

        //every() is the opposit; it returns false the first time you predicate returns false
