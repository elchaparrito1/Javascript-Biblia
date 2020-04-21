/*Always remember that callbacks are synchronous by default and promises are 
asynchronous by default.*/

//Blocking vs Non-Blocking.

//You can think of Blocking as synchronous

//And therefore Non-Blocking as asynchronous

//For a long time, the main solution for writing performant code was multi-threaded programming.

//They are hard to get right. Race conditions can occur.

/*Race condition: is an undesirable situation that occurs when a device or system attempts to 
perform two or more operations at the same time, but because of the nature of the device or 
system, the operations must be done in the proper sequence to be done correctly.*/

//So how Node, V8 engine, and other JS programs do asynchronous code is through event-driven programming.

//Node abstracts all I/O operations into events that are handled on an implicit eventloop.

/*I/O - input/output. Short for input/output (pronounced "eye-oh"). The term I/O is used to 
describe any program, operation or device that transfers data to or from a computer and to 
or from a peripheral device. Every transfer is an output from one device and an input into 
another.*/

//Node, like JS, is single threaded.

/*People will say that node is multi-threaded, but Asim says that the JS you write is 
single threaded and will only ever run on one thread.*/

/*Node does run some threads, it has to to communicate with low-level OS features, but 
your code is single threaded so you'll never have to deal with locks or anything like that.*/

/*Lets look at the setTimeout window obj method, which is available in JS and node, 
but isn't not the V8 engine.*/

//This is b/c to actually implement setTimout, you need to use more than one thread.

/*But, as you recall, and picture with the event loop, it goes to this other thread, 
but then comes back to the main thread, once the alotted time for the setTimeout method has 
passed.*/

/*Main takeaway: Node does use threads, but there is only the one main thread using 
events to sync the state.*/