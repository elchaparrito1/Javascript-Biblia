//Asynchrounous basics:

//Well what is a callback?
//def: A function that executes after another function has executed
//Tall tale signs of a callback is where a function is passed as a param

/*Remember a callback is essentially a function that is to be executed after another function
has finished executing*/

    /*Aside: Because JavaScript is a synchronous language by design, and because the event loop 
    is implemented in the JavaScript engines that are part of browsers and application servers, 
    all of the asynchronous functionality in JavaScript is implemented in external libraries. 
    In fact, even commonly used asynchronous functions like setTimeout() are provided by 
    libraries and interfaces.*/

    //Main thing to keep in mind is that not all callbacks are asynchronous.
    //But all async functions have callbacks.

  //The most basic examples of a callback:

  function add (x, y) {
    return x + y
  }

  function addFive (x, addReference) {
    return addReference(x, 5) // 15 - Press the button, run the machine.
  }
  addFive(10, add) // 15


  function doHomework(subject, callback) {
    console.log(`Starting my ${subject} homework.`);
    callback();
  }
  
  doHomework('math', function() {
    console.log('Finished my homework');
  });

  //Callbacks don't always have to be in the function call though:
  function doMoreHomework(subject, callback) {
    console.log(`Starting my ${subject} homework.`);
    callback();
  }

  function alertFinished() {
    console.log('Finished my homework');
  }

  doMoreHomework('math', alertFinished);

  //Remember what these are called though in reference:

  //Any function that receives another function as an argument is:
    //Higher Order Function
  
  //And any function passed in as that argument is:
    //Callback function

  function higherOrderFunction(x, callback) {
    return callback()
  }

  //Common example of callbacks:
    //.map
    //setTimeout
    //Click events
      /*This is b/c a callback says not to continue on the synchronous
      thread of JS until something gets resolved. So something like a 
      click events says, don't do this other thing until someone clicks a 
      certain button.*/

  //A traditional, async callback from JQUERY's getJSON method looks like this:
    const id = 'tylermcginnis'

    $.getJSON({
      url: `https://api.github.com/users/${id}`,
      success: updateUI,
      error: showError,
    });

    //Note how there are two paths that make it an async callback:
      //success: if the api call is successful follow that path.
      //error: if there is an error, follow that path.

  //Callbacks though of course can have issues such as callback hell:
      const id = 'tylermcginnis'

      $("#btn").on("click", () => {
        $.getJSON({
          url: `https://api.github.com/users/${id}`,
          success: (user) => {
            $.getJSON({
              url: getLocationURL(user.location.split(',')),
              success (weather) {
                updateUI({
                  user,
                  weather: weather.query.results
                })
              },
              error: showError,
            })
          },
          error: showError
        })
      })

    //Our brains think sequentially. 
    //So asynchronous callbacks become very difficult for our brains to follow

    //That is where Promises come in, which make more sense to our brains.
    /*This is b/c, again, the callbacks above happen asynchronously, which
    makes it tough for our brains to follow because it bounces from callback
    to callback. Promises on the other hand are always in one of three states
    that are easy for our brains to manage:*/
      //Pending
      //Fulfilled
      //Rejected

    //When you make an asynchronous request with a promise, the status is pending
    //If successful, status becomes fulfilled and rejected if it fails.

    //Template:
    const promise = new Promise((resolve, reject) => {
      resolve();
      reject();
    }); //create a new instance of Promise constructor
        //It will either be resolved, or rejected

    //Example:
    function onSuccess () {
      console.log('Success!')
    }
    
    function onError () {
      console.log('💩')
    }
    
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve() //changed Promise status to fufilled on line 123
      }, 2000)
    })
    
    promise.then(onSuccess)
    promise.catch(onError)

    //Promises effectively use chaining.
    getPromise()
      .then(logA)
      .then(logB);

    //This is how fetch works:
    fetch('api/user.json')
      .then((response) => response.json())
      .then((user) => user)

    //Now lets look at the callback hell example but using promises.
    //We can use the power of Promise chaining to:
      //make an async call for a user
      //make an async call to get weather based on user location
      //Update the UI

        function showError(e) {
          console.warn("Error", e);
        }

        function updateUI(info) {
          $("#app").text(JSON.stringify(info));
        }

        function getLocationURL([city, state]) {
          return `https://api.openweathermap.org/data/2.5/forecast?q=${city},${state}&APPID=7c748e66ec4489f390a888a83eb4a0f4`;
        }

        function getUser(id) {
          return new Promise((resolve, reject) => {
            $.getJSON({
              url: `https://api.github.com/users/${id}`,
              success: resolve,
                //line above is having resolve pass the data in the chain
              error: reject
            });
          });
        }

        function getWeather(user) {
          return new Promise((resolve, reject) => {
            $.getJSON({
              url: getLocationURL(user.location.split(",")),
              success(weather) {
                resolve({ user, weather: weather.city });
                //line above is having resolve pass certain data in the chain
                //default here would just be the returned data from the getWeather
                //We need to pass user down the chain, so change the default data
                //resolve gets invoked itself by you, but you manually pass user, and weather
              },
              error: reject
            });
          });
        }

        $("#btn").on("click", () => {
          getUser("tylermcginnis")
            .then(getWeather) /*User data gets passed successfully 
                              here b/c again chaining is being used
                              and the data is being passed in through
                              the resolve function in the previous promise
                              in the chain*/
            .then(data => {
              updateUI(data);
            })
            .catch(showError);
        });
  
  //You can see that one drawback to promises was having to drill data down
  
  //Async/Await
  //async functions return a promise
  /*Now that you’ve seen the benefit of Async/Await, let’s discuss some 
  smaller details that are important to know. First, anytime you add async 
  to a function, that function is going to implicitly return a promise.*/

  async function getPromise(){}

  const promise = getPromise()

  /*Even though getPromise is literally empty, it’ll still return a promise 
  since it was an async function.*/

  /*If the async function returns a value, that value will also get wrapped 
  in a promise. That means you’ll have to use .then to access it.*/

    async function add (x, y) {
      return x + y
    }

    add(2,3).then((result) => {
      console.log(result) // 5
    })

  //So the example above, would really just become:

  $("#btn").on("click", async () => {
    try {
      const user = await getUser('tylermcginnis')
      const weather = await getWeather(user.location)
  
      updateUI({
        user,
        weather,
      })
    } catch (e) {
      showError(e)
    }
  })

  //Note that error handling is absent from async/await patterns.
  //We still need to follow that promise model:
    //Pending
    //Fulfilled
    //Rejected
  //So we use a try/catch like you see above



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

/*Looking at initial example, we have a function that we would need to apply a callback 
to in order to declare the message:*/
  function doAsyncTask(cb) {
    cb();
  }
  doAsyncTask(_ => console.log(message));
  let message = "Callback Called";
  //becomes
  function doAsyncTask(cb) {
    process.nextTick(() => {
      console.log("Async Task Calling Callback");
      cb();
    });
  }
  doAsyncTask(() => console.log(message));
  let message = "Callback Called";

  //Like setTimeout, we set immediate to get the callback to work.
  //Is this asynchronous callbacks?
  //This was a trick question.
  /*Callbacks are not async by default, this was a sync call so the message var was 
  not defined by the time the callback was called. To make this work we need to wrap 
  our call to `cb` in either a `setImmediate*/

  /*So with callbacks, to make them truly async, could we use try/catch? 
  try..catch doesn't work as you expect with asynchronous code, it only really works 
  with synchronous code. By the time the callback throws the error we have moved on 
  from the try..catch, the throw happens in the root scope and will just cause the 
  program to exit.*/

    const fs = require("fs");
    function readFileThenDo(next) {
      fs.readFile("./blah.nofile", (err, data) => {
        if (err) throw err;
        next(null, data);
      });
    }
    try {
      readFileThenDo((_, data) => console.log(data)); //This is async, and nodejs doesn't wait for this line to run. It simply moves on to line 71.
    } catch (err) {
      console.error(err);
    }

  //So try/catch can't be used with asynchronous calls, only synchronous js.

  //Talking about promises again, here is the most basic example:
      function doAsyncTask() {
        const promise = new Promise((resolve, reject) => {
          setTimeout(() => {
            console.log("This worked");
            resolve("hi");
          }, 1000)
        })
        return promise;
      }

    /*We can get notified when a promise 'resolves' by attaching a success handler to its
    'then' function like so:*/

      doAsyncTask().then(result => { //this would be the callback function that gets called
        console.log(result); //logs hi
      })