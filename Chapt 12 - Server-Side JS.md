Chapter 12 - Server-side Javascript

  Know that server-side can be taken to mean anything outside of the web browser. Node can run JS programs that manipulate files the way shell scripts do.

  A shell script is a text file that contains a sequence of commands for a UNIX-based operating system. It is called a shell script because it combines a sequence of commands, that would otherwise have to be typed into the keyboard one at a time, into a single script. The shell is the operating system's command-line interface (CLI) and interpreter for the set of commands that are used to communicate with the system.

  Node is a C++ based intepreter designed to work with files, network sockets, http client and server APIs, etc.

  Except for some specifically synchronous methods, Node's bindings are all asynchronous, and by default, Node's programs never block, which means that they typcially scale well and handle high loads effectively.

  Because the APIs are asynchronous, Node relies on even handlers, which are often implemented using nested functions and closures. Node also supports the client-side timer functions like setTimeout(), setInterval(), clearTimeout(), and clearInterval().

  Node defines other important globals under the 'process' namespace. These are some of the properties of that object:

  process.version - Node version string
  process.argv - command-ling args as an array argv[0] is 'node'
  process.env - environment variables as an object
  process.cwd() - return current working directory
  process.exit() - Quit after running shutdown hooks

  Again, b/c Node's functions are methods are asynchronous, they do not block while waiting for operations to complete.

  The return value of a nonblocking method cannot return a result of an asynchronous operation to you.

  If you need to obtain results, or just need to know when an operation is complete, this is when you can use a callback function, or a call like setTimeout().

  Node's filesystem API is in the "fs" module:

  ```JS
  const fs = require("fs");
  ```

  This module provides synchronous versions of most of its methods.

  Here are two examples of a synchronous file reading and then an asynchronous file reading:

  ```JS
  let text = fs.readFileSync("config.json", "utf8");

  fs.readFile("image.png", (err, buffer) => { if (err) throw err; process(buffer); })
  ```

  HTTP Server - Node

  A simple HTTP server in Node serves files from the current directory and also implements two special-purpose URLs that is handles specially. It uses Node 'http' module and also uses the file and stream APIs

  Asynchronous programming - as we know now in JavaScript - can only be achieved with functions being first-class citizens of the language: they can be passed around like any other variables to other functions. Functions that can take other functions as arguments are called higher-order functions.

  One of the easiest example for higher order functions:

  ```JS
  const numbers = [2,4,1,5,4]
  function isBiggerThanTwo (num) {
    return num > 2
  }

  numbers.filter(isBiggerThanTwo)
  ```

  In the example above we pass in a function to the filter function. This way we can define the filtering logic.

  This is how callbacks were born: if you pass a function to another function as a parameter, you can call it within the function when you are finished with your job. No need to return values, only calling another function with the values.

  These so-called error-first callbacks are in the heart of Node.js itself - the core modules are using it as well as most of the modules found on NPM.
  ```JS
  const fs = require('fs')
    fs.readFile('file.md', 'utf-8', function (err, content) {
      if (err) {
        return console.log(err)
    }
    console.log(content)
  })
  ```

  Things to notice here:
  error-handling: instead of a try-catch block you have to check for errors in the callback
  no return value: async functions don't return values, but values will be passed to the callbacks

  How is asynchronous programming possible in Node?

  The event loop is in the heart of Node.js / Javascript - it is responsible for scheduling asynchronous operations.
  
  Before diving deeper, let's make sure we understand what event-driven programming is.
  Event-driven programming is a programming paradigm in which the flow of the program is determined by events such as user actions (mouse clicks, key presses), sensor outputs, or messages from other programs/threads.







