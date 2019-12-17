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
