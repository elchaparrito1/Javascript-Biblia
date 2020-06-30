13.1 Client-Side Javascript
  The window object is the main entry point to all client-side Javascript features and APIs.

  It represents a web browser window or frame. The Window object defines properties like location, which refers to a Location object that specifies the URL currently displayed in the window and allows a script to load a new URL window:

  ```JS
  window.location = "http://www.oreilly.com/"
  ```
  The above sets the location property to navigate to a new page

  The window object also defines methods like alert()and setTimeout():

  ```JS
  setTiemout(function() {alert("hello world");}, 2000)
  ```

  Notice that the code above does not explicitly use the window property. In client-side JS, the WIndow object is also the global object, so its at the top of the scope chain.

  One of the most important properties of the Window object is document: it refers to a Document object that represents the content displayed in the window. The Document object has important methods such as getElementById()

  Another set of important properties on Window, Document and Element objects are the event handler properties.

  These allow scripts to specify functions that should be invoked asynchronously when certain events occur. Event handlers allow JS code to alter the behavior of windows, of documents and of the elements that make up those documents.

  One of the most important event handlers is the onload handler of the Window object. It is triggered when the content of the document displayed in the window is stable and ready to be manipulated.

13.1.2 Javascript in Web Applications
  With what web browsers have evolved to, from being not just about reading documents, but todisplaying icons, folders, having toolbars, bookmarks and so forth, browsers really shouldbe thought of as mini operating systems.

  Know that JS is more central to web applications than it is to web documents. JS enhancesweb documents, but a well-designed document will continue to work with JS disabled.

13.2 Embedding JS in HTML
  Client-side JS code is embedded within HTML documents in four ways:
    1. Inline, between a pair of script tags
    2. From an external file specified by the src attribute of a script tag.
    3. In an HTML event handler attribute, such as onclick
    4. In a URL that uses the special JS protocol

  Javascript was the original scripting language for thw eb and script elements are, by default, assumed to contain or to reference JS code. If you want to use a nonstandard scripting language, such as Microsoft's VBScript, you must use the type attribute to specify the MIME type

  ```JS
  <script type="text/vbscript">
  'VBScript code here
  </script>
  ```

  The default value of the type attribute is "text/javascript". You can define this explicitly, but its not necessary.

  Older browsers used a language attribute, but this has been deprecated.

13.2.4 Event Handlers in HTML

JavaScript code in a script as executor once: when the HTML file that contains it is loaded into the web browser. In order to be interactive, a JavaScript program us to find event handlers these are JavaScript functions that are registered with the web browser and then it folks by the web browser in response to events.

there is no formal definition of a program for Safeway and client-side JavaScript. We can say that a JavaScript program consists of the JavaScript code in a web page ien line scripts HTML event handlers and so forth along with external Javascript code reference with the source attributes of a script tag. all the separate bits of kosher a single global window object that means that they all see the same document object in a share the same set of global functions and variables.

That said, JavaScript execution of a program occurs in two phases:

In the first phase, the document content is loaded in the code from the script elements (both inline Scripts and external Scripts) is run. Scripps generally run the order in which they appear in the document the JavaScript code within any single script is run from top to bottom in the order that it appears, subject, of course, to Java scripts conditionals, loops, and other control statements.

Once the document is loaded and all scripts have rendered, JavaScript execution enters its second phase. this phase is asynchronous and event-driven. During this event driven phase the web browser invokes event handler functions in response to events that occur asynchronously. Event handlers are most commonly involved in response to user input but they may also trigger based on network activity or errors.

One of the first events that occurs during the event driven phase is the load event, which indicates the document is fully loaded and ready to be manipulated.

the loading phase of a JavaScript program is relatively short, typically last seen only a second or two. Once a document is loaded The Avengers phase lasts for as long as the documents displayed by the web browser. Because this phase is a synchronous any Venturian there may be a long periods of inactivity were no JavaScript was executed, punctuated by burst of activity triggered by a user or network evetne

when JavaScript was first added to web browsers, there was no API for traversing in manipulating the structure and content of a document. Anyway the JavaScript could affect the content of documents to generate that content on the fly with document was loading. It did this using the document.write() method.

13.3.2 Event-Driven Javascript
  You have a good idea of event-driven programming. This is of course how you bring asynchronous programming into JS.

  Events have a target object attached to them. When we speak of an event, we must specify both the event type (the name) and the target: a click event on an HTMLButtonElement object, for instance, an event on a AJAX request

  If we want the program to respond to an event. We write what is called an event handler, event listener, or just some callback.

  The best practice for this should be to register an event handler with a javascript function being assigned to a property of the target object like so:

  ```JS
  window.onload = function() {...}
  document.getElementById("button1").onclick = function() {...}
  ```

  Notice that there are not function invocations above. What you're doing here is assigning the function to those properties. The browser will perform those invocations asynchronously when the events occur.

  In most browsers, for most kinds of events, event handlers are passed an object as an argument, and the properties of this object provide details about the event. The object passed to a click event, for example, would have a property that specified which mouse button was clicked.

  The return value of an event handler is sometimes used to indicate whether the function has sufficiently handled the event and to prevent the browser from performing whatever default action it would otherwise take.

  Events whose targets are elements in a document often propagate up the document tree in a process known as bubbling. If the user clicks the mouse on a <button> element, for example, a click event is fired on the button. If that event is not handled by a function registered on the button, the event bubbles up to whatever element the button is nested within, and any click event handler registered on that container element will be invoked.

  Also, the set timeout and set interval functions trigger the invocation of a specified function after a specified amount of time. The functions passed to set timeout I register differently than true event handlers, and they are usually called call backs instead of handlers but they are asynchronous just as event handlers are.


13.3.3 Client-side JavaScript Threading

the JavaScript language does not contain any threading mechanism and client-side JavaScript has traditionally not to find any either.

JavaScript still behaves as if it is strictly single-threaded. Even when concurrent execution is possible client-side JavaScript cannot ever detect the fact that it is occurring. Single-threaded execution makes for a much simpler scripting meaning you can write code with the assurance that two events will never run at the same time. You can manipulate document content knowing that no other threat is attempting to modify it at the same time and you never need to worry about locks deadlock or race conditions when writing JavaScript

This does mean though that single-threaded execution I'll stop responding to user input while scripts and event handlers are executing. It's places the burden on the programmer meaning Java scripts and event handlers must not run for too long if your application must perform enough computation to cause a noticeable delay you should allow the document to load fully before performing at computation and you should be sure to notify the user that computation is underway and that the browser is not hung. If it is possible to break your computation down into discrete subtasks you can't use methods such as set timeout and set interval to run the subtasks in the background while updating a progress indicator that displays feedback to the user.

HTML5 to find the control form of concurrency called a web worker and web worker is a background thread for performing computationally intensive tasks without freezing the user interface the code that runs in a web worker thread does not have access to document content does not share any state with the main thread or with other workers and can only communicate with the main thread and other workers through asynchronous events, so the concurrency is not detectable to the main thread.

13.3.4 Client-Side JavaScript Timeline

We've already seen that JavaScript programs begin in a script execution phase and then transition to an event handling phase. this section explains the timeline of JavaScript program execution in more detail:

First. the web browser creates a document object and begins parsing the webpage, adding element objects and text nodes to the document as it parses HTML elements.

Second. when the HTML parser encounters script elements that have neither the a synced nor defer attributes, it adds those elements to the document and then executes the inline or external script. These scripts are executed synchronously, and the parser pauses while the script downloads and runs.

Third. when the parser does encounter a script element that has the async attribute set, it begins downloading the script text and continues parsing the document. The script will be executed as soon as possible after it has downloaded but the partial or does not stop and wait for it to download.

Fourth. When the document is completely parsed, the document. Ready State property changes to interactive.

Fifth. any scripts that had the defer attribute set or executed in the order in which they appeared in the document. Async scripts may also be executed at this time

Sixth. the browser then fires a domcontentloaded event on the document object. This marks the transition from synchronous script execution phase to the asynchronous event-driven phase of program execution.

Seventh. the document is completely parsed at this point but the browser may still be waiting for additional content, such as images, to load when all such content finishes loading oh, the document. Ready State property changes to complete.

Eighth. from this point on, event handlers are invoked asynchronously in response to user input events, generic events, timer expirations, and so on.