//On IF statements

let cond = 1;

if (cond) {
  console.log("Executed!")
} else {
  console.log("Not Executed!")
}

//This would return "Executed" b/c as you know, 1 is seen as a truthy primitive value
//What if it were 2 though? This would return true as well, and 0 would be false

//But consider the following:
console.log(2 == true); //returns false
//What gives?
/*Well, JS only treats 0 as false for conditionals, and anything that doesn't equal 0 
is true as far as numeric primitives are concerned.*/
//So... cond could equal -1, -2, or even -.000003033/232322, and return true

//What about this then:

let condition = "text";

if (condition) {
  console.log("Executed!")
} else {
  console.log("Not Executed!")
}

//This still returns true. Again, its this truthy vs falsy. 
    //An empty string would indeed be false, b/c it is falsy, whereas a string containing chars is truthy

//The same as far as falsy would go for null, which would be "Not Executed!"

//JS is a dynamic typing language:
let var1 = 1;

console.log(var1); // 5

var1 = 10;

console.log(var1) // 10

//It never cares about the type either, unlike other languages:
let var1 = 1;

console.log(var1); //Variable is a number here: 5

var1 = "10";

console.log(var1) //Variable becomes a string here: "10"

//Look out for section 8.7.7 on callable objects vs true functions.

let arr = [1,2,3];

console.log(arr.slice(2)); //[2, 3]
console.log(arr); //[1, 2, 3]
console.log(arr.splice(2)); //[3]
console.log(arr); //[1, 2]

//Just remember that slice doesn't change the original array while splice does.

//Data Structures:

//Types of Data Structures:
  //Stacks: This is the callstack in the V8 engine
    //This is the first one on, first on off. Like a stack of books.
    //A more practical example is your browser's back button.
    /*So you are at Facebook.com, and you, then you go to github.com, 
    which is like saying stack.push(github.com). But, if we hit the back
    button, then it is like saying stack.pop(github.com)*/
  //The functions traditionally provided in this stack are:
  let arr = [];
  arr.push();
  arr.pop();
  arr.peek(); //returns the value at the start of an array
  arr.length();
//Looking at this, you know that you could just use an array as a stack
  let letters = []; //This is our stack!!
  let word = "dad";
  let rword = "";
  for (let i = 0; i < word.length; i++) { 
    letters.push(word[i]); //Here we are putting the words into the stack
  }
  for (let i = 0; i < word.length; i++) { 
    rword += letters.pop(word[i]); //Here we are popping the words off.
  }
  if (word === rword) {
    console.log("It is a Palindrome!!");  
  } else {
    console.log("Nope it is not a Palindrome...")
  }
//Now implementing a stack in JS:
let Stack = function() {
  this.count = 0;
  this.storage = {};
  //Adds a value onto the end of a stack
  this.push = function(value) {
    this.storage[this.count] = value;
    this.count++
  }
  //Removes and returns the value at the end of the stack
  this.pop = function() {
    if (this.count === 0) {
      return undefined
    }
    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result
  }
  this.size = function() {
    return this.count
  }
  //Returns the value at the end of the stack
  this.peek = function() {
    return this.storage[this.count-1]
  }
}
//Sets
  //Sets of data but in no particular order
  /*The Set object allows you to create a collection of unique 
  values (each value can occur only once). Sets can contain any 
  type of value (primitives or object reference). Sets store 
  elements in the insertion order.*/
  //The common use for set is to simply check for the presence of an item
  //ES6 even has a built in set object.
  //But it does not contain all the methods that are common to sets
    function mySet() {
      let collection = [];
      //This method will check for the presence of an element
      this.has = function(element) {
        return (collection.indexOf(element) !== -1)
      }
      //This method will return all of the values in the set
      this.values = function() {
        return collection;
      }
      //This method will add an element to the set
      this.add = function(element) {
        if (!this.has(element)) {
          collection.push(element);
          return true
        }
        return false
      }
      //This method will remove an element from a set
      this.remove = function(element) {
        if(this.has) {
          let index = collection.indexOf(element);
          collection.splice(index,1);
          return true;
        }
        return false;
      }
      //This method will return the size of the collection
      this.size = function() {
        return collection.length
      }
      //This method will return the union of two sets
      this.union = function(otherSet) {
        let unionSet = new mySet();
        let firstSet = this.values();
        let secondSet = otherSet.values();
        firstSet.forEach(function(e) {
          unionSet.add(e);
        });
        return unionSet;
        secondSet.forEach(function(e) {
          unionSet.add(e);
        });
        return unionSet;
      }
      //This method will return the intersection of two sets as a new set
      this.intersection = function(otherSet) {
        let intersectionSet = new mySet();
        let firstSet = this.values();
        firstSet.forEach(function(e) {
          if (otherSet.has(e)) {
              intersectionSet.add(e);
              }
        });
        return intersectionSet;
      }
      //This method will return the difference of two sets as a new set
      this.difference = function(otherSet) {
        let differenceSet = new mySet();
        let firstSet = this.values();
        firstSet.forEach(function(e) {
          if(!otherSet.has(e)) {
            differenceSet.add(e)
          }
        })
       //This method will test if the set is a subset of a different set
       this.subset = function(otherSet) {
         let firstSet = this.values();
         return firstSet.every(function(value) {
           return otherSet.has(value);
         })
       }
      }
    }

//Queue
  //The Queue data structure is a way to hold data.
  //It allows elements to be inserted from one end, called the rear or tail, and deleted from the other end.
  //The behavior is called FIFO (First in First Out).
  //It is a linear data structure.
  //It deletes only the oldest added element.
  //Queues are used whenever we need to manage objects in order starting with the first one.
    //Examples: printing documents on a printer, call center systems, etc.
  //In JS, you implement a Queue usually with an array
  function Queue () {
    collection = [];
    this.print = function() {
      console.log(collection);
    };
    this.enqueue = function(element) {
      collection.push(element);
    };
    this.dequeue = function() {
      return collection.shift();
    };
    this.front = function() {
      return elemcnt[0]
    }
    this.size = function() {
      return collection.length
    }
    this.isempty = function() {
      return collection.length === 0
    }
  }
  //There is also a priority cue, which adds elements based on a number priority:
    // User defined class 
    // to store element and its priority 
class QElement { 
    constructor(element, priority) 
    { 
        this.element = element; 
        this.priority = priority; 
    } 
} 
// PriorityQueue class 
class PriorityQueue { 
    // An array is used to implement priority 
    constructor() 
    { 
        this.items = []; 
    } 
    // functions to be implemented 
    // enqueue(item, priority) 
  // enqueue function to add element 
// to the queue as per priority 
enqueue(element, priority) 
{ 
	// creating object from queue element 
	var qElement = new QElement(element, priority); 
	var contain = false; 
	// iterating through the entire 
	// item array to add element at the 
	// correct location of the Queue 
	for (var i = 0; i < this.items.length; i++) { 
		if (this.items[i].priority > qElement.priority) { 
			// Once the correct location is found it is 
			// enqueued 
			this.items.splice(i, 0, qElement); 
			contain = true; 
			break; 
		} 
	} 
	// if the element have the highest priority 
	// it is added at the end of the queue 
	if (!contain) { 
		this.items.push(qElement); 
	} 
} 
    // dequeue() 
  // dequeue method to remove 
// element from the queue 
dequeue() 
{ 
	// return the dequeued element 
	// and remove it. 
	// if the queue is empty 
	// returns Underflow 
	if (this.isEmpty()) 
		return "Underflow"; 
	return this.items.shift(); 
} 
    // front() 
  // front function 
front() 
{ 
	// returns the highest priority element 
	// in the Priority queue without removing it. 
	if (this.isEmpty()) 
		return "No elements in Queue"; 
	return this.items[0]; 
} 
    // isEmpty() 
  // isEmpty function 
isEmpty() 
{ 
	// return true if the queue is empty. 
	return this.items.length == 0; 
} 
    // printPQueue() 
  // printQueue function 
// prints all the element of the queue 
printPQueue() 
{ 
	var str = ""; 
	for (var i = 0; i < this.items.length; i++) 
		str += this.items[i].element + " "; 
	return str; 
} 
} 

//Why would you use an algorithm or data structure like a branch rather than just the array methods?
//It had to do with time complexity.
//Big O Notation:
  /*Big-O notation is a way of converting the overall steps of an algorithm into 
  algebraic terms, then excluding lower order constants and coefficients that don't 
  have that big an impact on the overall complexity of the problem.*/
  //Regular       Big-O
  2             //O(1)   --> It's just a constant number
  2n + 10       //O(n)   --> n has the largest effect
  5n^2          //O(n^2) --> n^2 has the largest effect
  /*In short, all this example is saying is: we only look at the factor in our 
  expression that has the potential greatest impact on the value that our expression 
  will return. (This changes as the constant gets extremely large and n gets small, 
  but let's not worry about that for now).*/
  /*O(1) — Constant Time: Given an input of size n, it only takes a single step for 
  the algorithm to accomplish the task.*/
  /*O(log n) — Logarithmic time: given an input of size n, the number of steps it takes 
  to accomplish the task are decreased by some factor with each step.*/
  /*O(n) — Linear Time: Given an input of size n, the number of steps required is 
  directly related (1 to 1)*/
  /*O(n²) — Quadratic Time: Given an input of size n, the number of steps it takes to 
  accomplish a task is square of n.*/
  /*O(C^n) — Exponential Time: Given an input of size n, the number of steps it takes 
  to accomplish a task is a constant to the n power (pretty large number).*/
  //With this knowledge in hand, lets see the number of steps that each of these time complexities entails:
    let n = 16;
    O (1) = 1 step //"(awesome!)"
    O (log n) = 4 steps  //"(awesome!)" -- assumed base 2
    O (n) = 16 steps //"(pretty good!)"
    O(n^2) = 256 steps //"(uhh..we can work with this?)"
    O(2^n) = 65,536 steps //"(...)"
  //Examples:
    var friends = {
 'Mark' : true,
 'Amy' : true,
 'Carl' : false,
 'Ray' :  true,
'Laura' : false,
}
var sortedAges = [22, 24, 27, 29, 31]

//O(1) - Constant Time
  //Value look ups when you know the key (objects) or index (arrays) always take one step, and thus are constant time:
  function isFriend(name) {
    return friends[name]
  }
  isFriend("Mark");
//O(log n) - Logarithmic Time
  //If you know which side of the array to look on for an item, you save time by cutting out the other half.
  function thisOld(num, array) {
    let midPoint = Math.floor(array.length / 2);
    if (array[midPoint] === num) return true;
    if (array[midPoint] < num) //only look at the second half of the array
    if (array[midPoint] > num) //only look at the first half of the array
  }
  thisOld(29, sortedAges);
//O(n) - Linear Time
   //You have to look at every item in teh array or list to accomplish the task.
    //Single for loops are almost always linear time.
    //Also, array methods like indexOf are also linear time.
    function addAges(array) {
      let sum = 0;
      for (let i = 0; i < array.length; i++) {
        sum += array[i]
      }
      return sum
    }
//O(n^2) - Quadratic Time
   //Nested for loops are quadratic time, b/c you're running a linear operation within another linear operation.
     function addedAges(array){
        var addedAge = [];
    for (let i=0 ; i < array.length; i++){ //has to go through each value
      for(let j=i+1 ; j < array.length ; j++){ //and go through them again
        addedAge.push(array[i] + array[j]);
      }
    }
  return addedAge;
}
addedAges(sortedAges); //[ 46, 49, 51, 53, 51, 53, 55, 56, 58, 60 ]
//O(2^n) - Exponential Time
    //Usually the situations where you don't know that much and you have to try every possible combination or permutation
//Final Recap:
    //final recap:
//O(1) — Constant Time: it only takes a single step for the algorithm to accomplish the task.
//O(log n) — Logarithmic Time: The number of steps it takes to accomplish a task are decreased by some factor with each step.
//O(n) — Linear Time: The number of of steps required are directly related (1 to 1).
//O(n²) — Quadratic Time: The number of steps it takes to accomplish a task is square of n.
//O(C^n) — Exponential: The number of steps it takes to accomplish a task is a constant to the n power (pretty large number).

//Binary Search Tree
    //is a node-based binary tree data structure which has the following properties:
        //The left subtree of a node contains only nodes with keys lesser than the node's key.
        //The right subtree of a node contains only nodes with keys greater than the node's key.
        //The left and right subtree each must also be a binary search tree.
    //All data points in the tree are called nodes.
    //The top of the tree is called the root node.
    //A binary search tree can only have two branches for each node.
    //It is called a binary search b/c on average, operations are able to skip half the tree
        //This is due to the left side/right side values
        "use strict";
        class BinarySearchTree {
          constructor() {
            //initially root is null
            this.root = null;
          }
          insertNumberNode(data, left = null, right = null) {
            //creating a Node
            //data we pass will act as individual parent Node
            //left and right are subtrees
            let Node = {
              data,
              left,
              right
            };
            //suppose currentNumberNode as a parent node
            //current Num Node value decides position of next value
            //if it goes to left subtree or right subtree
            let currentNumberNode;
            if (!this.root) {
              //if its not a root make it one by passing a Node
              this.root = Node;
            } else {
              //and if its a root now, assign it to currentNumberNode
              currentNumberNode = this.root;
              while (currentNumberNode) {
                //if data is smaller than cuurent data, send it in left subtree
                if (data < currentNumberNode.data) {
                  //if current num node don't have Node properties
                  //we will assign it node properties
                  if (!currentNumberNode.left) {
                    currentNumberNode.left = Node;
                    break;
                  } else {
                    //if it has node properties and it is sent by root to left
                    //we will make it a left node because it is smaller than root node
                    currentNumberNode = currentNumberNode.left;
                  }
                  //if data is larger than cuurent data, send it in right subtree
                } else if (data > currentNumberNode.data) {
                  //if current num node don't have Node properties
                  //we will assign it node properties
                  if (!currentNumberNode.right) {
                    currentNumberNode.right = Node;
                    break;
                  } else {
                    //if it has node properties and it is sent by root to right
                    //we will make it a right node because it is larger than root node
                    currentNumberNode = currentNumberNode.right;
                  }
                } else {
                  console.log("Try Different Value");
                  break;
                }
              }
            }
          }
        }
        let BSTtest = new BinarySearchTree();
        //tests
        BSTtest.insertNumberNode(10);
        BSTtest.insertNumberNode(7);
        BSTtest.insertNumberNode(14);
        BSTtest.insertNumberNode(5);
        BSTtest.insertNumberNode(13);
        BSTtest.insertNumberNode(8);
        BSTtest.insertNumberNode(18);
        BSTtest.insertNumberNode(15);
        BSTtest.insertNumberNode(6);
        BSTtest;

//You know that primitive variables pass by value
//object variables are passed by reference
//Note though the nuances of this here:
let a = 1
funky = (a) => {
  a = 2
};
funky(a);
console.log(a); //2
let a = {a:1,b:2}
funky = (a) => {
  a.c = 3
};
funky(a);
console.log(a); //This will actually be [object Object] {a:1,b:2,c:3}

//Runtime complexities to know. There are others, but these are the ones to remember:
  /*Constant time: No matter how many elements we're working with, the algorithm will always take the
                   same amount of time*/
    1

  /*Logarithmic time: This is when if doubling the amount of elements one is iterating over will not
                      double the amount of work. Always assume that searching operations are log(n)*/
    log(n)
  
  /*Linear time: Iterating through all elements in a collection of data. If you see a for/loop spanning
                 from 0 to array.length, you probably have 'n' or linear time*/
    n

  /*Quasilinear time: You have this if doubling the number of elements you are iterating over doesn't 
                      double the amount of work. Always assume that any sort opertation is n*log(n)*/
    n*log(n)

  /*Quadratic time: Every element in a collection has to be compared to every other element. This is
                    known as the 'handshake problem'. This means that if you had a group of people in
                    a room, and a new person walked into the room, they'd have to shake everyone's 
                    hand*/
    n^2

  //Exponential time: If you add a single element to a collection, the processing power required doubles
    2^n

  //Big O Notation is another way of measuring runtime complexity
    //O(n) => linear
      //examples include: iterating over a for/loop with a single collection
    //O(1) => Constant
    //O(n^2) => Quadratic

  //Note that this question can come up in interviews about closures
  //This pertains more to a defeciency we see with the var keyword
  //With a closure like this, it only equals i
  /*It is part of the outer scope of the for/loop, which the for/loop
  runs until it reaches 10. Then the value of the closure gets analyzed
  as 10*/
    let foo = [];
    for (var i = 0; i < 10; i++) {
      foo[i] = function() { return i };
    }
    console.log(foo[0]()); //10
    console.log(foo[1]()); //10
    console.log(foo[2]()); //10
  //This of course can be fixed or rectified by simply changing var to let
  //You could also implement an IIFE on the closure to capture each value of i
    let foo = [];
    for (let i = 0; i < 10; i++) {
      foo[i] = function() { return i };
    }
    console.log(foo[0]()); //0
    console.log(foo[1]()); //1
    console.log(foo[2]()); //2

  //In great detail, let fixes a lot of problems that var caused:
  for(var i = 0; i < 10; i++) {
    console.log(i); //These all log 0-9
  }
  //Two problems arise from this though:
  //First
    //But, if you type i into the console, outside of the for/loop you get 10
    console.log(i); //10
    //So we have the global variable that has leaked into the window object
    //It should just be a placeholder value used within the for/loop
  //Second
    //This can definitely throw off asynchronous requests:
    for(var i = 0; i < 10; i++) {
      console.log(i);
      setTimeout(function() {
        console.log('The number is ' + i);
      },1000);
    }
  /*If we run this, all of them are 10. The reason that we have that is 
  because, console.log(i) will run immediately and reference whatever i 
  is.*/
  /*However, after one second, this entire loop has already gone through 
  every iteration that it needs to and the variable i here is being 
  overwritten every single time. So by the time setTimeout() runs, i is
  already at 10.*/
  //Obviously let can fix this or an IIFE:
    for(let i = 0; i < 10; i++) {
     console.log(i);
     setTimeout(function() {
       console.log('The number is ' + i);
     },1000);
    }
  /*What do we know about let? It's block-scoped. We have curly brackets 
  in the for loop. If you run it now, after a second we'll log zero 
  through nine. We're not getting 10, 10 times. We getting it as it was 
  declared each and every time.*/
  /*As a note, you couldn't use a const for this because it needs to 
  overwrite itself, and you can't assign the same variable twice. When 
  we use let, it's going to scope i to our curly brackets.*/

  //On fat arrow functions vs regular JS functions
  //While there are some similarities, some differences do exist:
  // (param1, param2, paramN) => expression
  // ES5
  var add = function(x, y) {
    return x + y;
  };
// ES6
  let add = (x, y) => { return x + y };
//The ES6 version is less code.
//It can be even shorter if only one expression exists:
  let add = (x, y) => x + y;
//arguments do not have arguments binding
/*However, they have access to the argument object of 
  the closest non-arrow parent function ... what?*/
/*Well, named and rest parameters are heavily relied upon 
  to capture the arguments passed to arrow functions*/
//In the case of a regular function:
  let myFunc = {  
   showArgs(){ 
    console.log(...arguments); 
   } 
  }; 
  myFunc.showArgs(1, 2, 3, 4); //logs and object of {0:1,1:2,2:3,3:4}
//In the case of an arrow function:
  let myFunc = {  
    showArgs : () => { 
     console.log(...arguments); 
   } 
  }; 
  myFunc.showArgs(1, 2, 3, 4); //ReferenceError: arguments is not defined
//Unlike regular functions, arrow functions do not have their own 'this'
  /*The value of this in an arrow function remains the same throughout the
    lifecycle of the function and always bound to the value of this in
    the closest non-arrow parent function.*/
  let me = { 
   name: "Ashutosh Verma", 
       thisInArrow:() => { 
     console.log("My name is " + this.name); // no 'this' binding here 
   }, 
   thisInRegular(){ 
       console.log("My name is " + this.name); // 'this' binding works here 
     } 
    };
   me.thisInArrow(); //My name is
   me.thisInRegular(); //My name is Ashutosh Verma
  //This is actually a good thing b/c it resolves the this pointer uncertainty:
  var message = "Hello World";
  function printMessage(){
   console.log(this.message);
  };
  var jsObject = {
     printMessageES5:function (){
    console.log(this.message);
   }
  };
  printMessage();               // output: Hello World
  jsObject.printMessageES5();   // output: undefined
  /*So, when our code looked for a variable named message in jsObject, 
  it couldn't find it. Let's fix the code and add the message variable 
  in our object.*/
  var message = "Hello World";
  function printMessage(){
   console.log(this.message);
  };
  var jsObject = {
    message: this.message,
    printMessageES5:function (){
      console.log(this.message);
     }
  };
  printMessage();               // output: Hello World
  jsObject.printMessageES5();   // output: Hello World
/*When we assigned a value to the internal message variable of 
jsObject, the this pointer was still pointing to the global object.
But earlier, when the same this pointer was used inside the function, 
it was pointing somewhere else, i.e. to our jsObject.*/
//Gospel by Mitch: Arrow function more carefully follows the chain, and sticks to what it is surrounded by.
/*If you are accessing the this pointer in your function and you want it to point to the surrounding 
code of the function definition, use the arrow syntax.*/
    var message = "Hello World";
    function printMessage(){
    console.log(this.message);
    };
    var jsObject = {
    message: "Hello Object",
    printMessageES5:function (){
    console.log(this.message);
    },
    printMessageES6:() => {
    console.log(this.message);
    }
    };
    printMessage();               // output: Hello World
    jsObject.printMessageES5();   // output: Hello Object
    jsObject.printMessageES6();   // output: Hello World
/*Regular functions created using function declarations or expressions are 
  constructible and callable. Since regular functions are constructible, 
  they can be called using the new keyword.*/
/*However, the arrow functions are only callable and not constructible, i.e 
  arrow functions can never be used as constructor functions. Hence, they 
  can never be invoked with the new keyword.*/
let add = (x, y) => console.log(x + y);
new add(2,3); //TypeError: add is not a constructor

//This keyword
//Good definition to remember:
  //this keyword refers to the current object that the code is being written inside of
//You know what this would reference here:
// console.log(this); //window object
//Or even this:
    let obj = {
      checkThis: function() {
        console.log(this); 
      }
    }
    obj.checkThis(); //would refer to obj; unless its an arrow function...
//So we might always assume that this always refers to the object in which it is declared
//But...
  let func = obj.checkThis;
func(); //returns window object, even as an arrow function
//this really is determined by the way in which a function is called
//So above, we call the function directly on obj (obj.checkThis)
//Therefore, obj was the reference to this
//With creating a new context with func, this gets assigned to the global object
//This is an issue:
    let objTwo = {
      checkThis: function() {
        console.log(this); //points to objTwo; arrow func would point to window obj
        function checkOther() {
          console.log(this); //points to window object; same as arrow
        }
        checkOther();
      }
    }
    objTwo.checkThis();
//The way to resolve this is not with an arrow function but as follows:
    let objThree = {
      checkThis: function() {
        let that = this;
        console.log(this); //points to objTwo; arrow func would point to window obj
        function checkOther() {
          console.log(that); //points to window object; same as arrow
        }
        checkOther();
      }
    }
    objThree.checkThis();

    //Another way to deal with this though could be using these methods:
  //call()
  //bind()
  //apply()
//As you know, functions are a type of object
//So there are lots of methods that come attached to a function object:
function asim() {
  console.log(this);
}
console.log(asim.name); //returns asim
//You can even add properties as an object:
asim.moo = 1;
//call() stabilizes the value of this. so:
asim.call(); //you can pass anything in as this
asim.call(1);
asim.call({}); //These all get assigned as this for the call in the func
//So back to the old example.
//Rather than a hacky move like let that... we can use call:
let obj = {
  checkThis: function() {
    console.log(this); //points to obj
    function checkOther() {
      console.log(this); //points to obj
    }
    checkOther.call(this);
  }
}
obj.checkThis();
//You can also pass parameters to call(). 
//Parameters will be anything after the first parameter, which determines 'this'
function a(b,c,d) {
  console.log(this); //1
  console.log(b); //2
  console.log(c); //3
  console.log(d); //4
};
a.call(1,2,3,4);

//apply() method is similar to call()
  //The one difference being that you pass any parameters as an array.
  //So with the example above, it would pass as follows:
//   a.apply(1, [2,3,4])
  //The reason to use apply() over call():
  function sum() {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
      total += arguments[1] //Did you know that arguments is a reserved word?
                            //It is an array that can be used, which all functions have
    }
    return total
  }
  let nums = [13,45,63,1,4,755];
  console.log(sum.call(null, nums)); //NaN
    //call() would still work if the listed numbers were passed directly in as arguments
  console.log(sum.apply(null, nums)); //270
    //apply() should be used when dealing with a variable that is an array
//bind() method is similar to the above, but with a little different syntax:
let b = function() {
console.log(this)
}.bind(1); //this will now return 1
console.log(b); //IMPORTANT NOTE - bind only works with function expressions:
function b() {
console.log(this)
}.bind(1); 
console.log(b); //Unexpected token error
//this happens b/c bind() is applicable to the object that created it

//Constructor pattern vs prototype pattern vs classical pattern
  //Just remember the following of each:

  //Constructor Pattern
  function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

    this.fullName = function() {
      return `My name is ${this.firstName} ${this.lastName}`
    }
  } 

  let steve = new Person("Steve", "Johnson");

  //Prototype Pattern (Prototypal Inheritance) - creates a blueprint obj that helps create any other objects
  function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  Person.prototype.fullName = function() {
    return `My name is ${this.firstName} ${this.lastName}`
  }

  let carl = Object.create(Person); 

  //Class Pattern (Classical Inheritance) - ES6 feature that is just sugar on top of prototypes
  class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
  }

  //Main take aways:
    /*Keeping in mind that functions are first-class citizens in Javascript, we can deal with them 
    just like objects, in this case we're only adding a property to an instance of a function object. 
    Thats only part of the story, you must also know that any method attached via this will get re-
    declared for every new instance we create, which could affect the memory usage of the application 
    negatively if we wish to create so many instances.*/

    /*Apart from low memory usage, the prototype approach is obviously faster in execution when creating 
    new object instances since no time is spent on re-declaring any methods. However, there will be a 
    slight decrease in the speed of invoking a method in comparison to the first approach. This is because 
    when calling getFull the Javascript runtime will check for the method on the instance of the Person it 
    won't be found there directly so it will then check the prototype of Person to find it.*/

      {
      let a = "hi";
      var b = "bye";
      }
      console.log(b); //"bye"
      console.log(a); //ReferenceError: a is not defined
      console.log(b); //Would not run

    /*What is “this” keyword in JavaScript this keyword refers to an object, that object which is executing 
    the current bit of javascript code.*/

    /*In other words, every javascript function while executing has a reference to its current execution 
    context, called this. Execution context means here is how the function is called.*/

    //Notice what this refers to here:
      function checkThis() {
        console.log(this); //window object
      }
      checkThis(); //Note the function is executed or called in the global scope, which leads to the window reference.
      
      let obj = {
        checkThis: function() {
          console.log(this); //refers to obj context
        }
      }
      
      obj.checkThis(); //"this" refers to obj b/c it is the context of the method checkThis
    
    //but what about this:
      let func = obj.checkThis;
      func(); //Now it once again points to the global object, but why?
      //B/c again look at context of execution
      //func() technically looks like this window.func().
      //So its not called as a method of the obj context, but as an assumed function within the window object
    
    //Whereas with the other call (obj.checkThis()), obj becomes the context to the left of the dot notation
      let objTwo = {
        checkThis: function() {
          console.log(this); //refers to objTwo context
          function checkThat() {
            console.log(this); //refers to window object context
          }
          checkThat();
        }
      }
    /*The reason for this is as follows: this is not part of the closure scope, it can be thought of 
    as an additional parameter to the function that is bound at the call site. If the method is not 
    called as a method (lacking the dot notation) then the global object is passed as this.*/

    //Currying:
    /*Briefly, currying is a way of constructing functions that allows partial application of a 
    function’s arguments. What this means is that you can pass all of the arguments a function 
    is expecting and get the result, or pass a subset of those arguments and get a function back 
    that’s waiting for the rest of the arguments. It really is that simple.*/

    //So this:
    const greet = function(greeting, name) {
      console.log(`${greeting}, ${name}`);
    };
    greet("Hello", "Heidi"); //"Hello, Heidi"

    //Becomes this:
    const greetCurried = function(greeting) {
      return function(name) {
        console.log(`${greeting}, ${name}`);
      };
    };

    /*This tiny adjustment to the way we wrote the function lets us create a new function for any 
    type of greeting, and pass that new function the name of the person that we want to greet:*/

      let greetHello = greetCurried("Hello");
      greetHello("Heidi"); //"Hello, Heidi"
      greetHello("Eddie"); //"Hello, Eddie"

    /*We can also call the original curried function directly, just by passing each of the 
    parameters in a separate set of parentheses, one right after the other:*/

      greetCurried("Hi there")("Howard");

    /*With curried functions you get easier reuse of more abstract functions, since you get 
    to specialize. Let's say that you have an adding function*/