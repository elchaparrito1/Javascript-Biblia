React Book:

Chapter 2 - ES6

Not all web browsers support ES6, and even those that do don’t support everything. The only way to be sure that your ES6 code will work is to convert it to ES5 code before running it in the browser. This process is called transpiling. One of the most popular tools for transpiling is Babel.

In the past, the only way to use the latest JavaScript features was to wait weeks, months, or even years until browsers supported them. Now, transpiling has made it possible to use the latest features of JavaScript right away. The transpiling step makes JavaScript similar to other languages. Transpiling is not compiling: our code isn’t compiled to binary. Instead, it’s transpiled into syntax that can be interpreted by a wider range of browsers. Also, JavaScript now has source code, meaning that there will be some files that belong to your project that don’t run in the browser.

Chapter 3 - Functional Programming with JavaScript

If you are wondering where this functional trend came from, the answer is the 1930s, with the invention of lambda calculus, or λ-calculus.1 Functions have been a part of calculus since it emerged in the 17th century. Functions can be sent to functions as arguments or returned from functions as results. More complex functions, called higher-order functions, can manipulate functions and use them as either arguments or results or both. In the 1930s, Alonzo Church was at Princeton experimenting with these higher-order functions when he invented lambda calculus.

What is a lambda function you might ask?

Lambda can have different meanings depending on who you're talking to or what you're talking about. In the context of JavaScript it usually refers to an anonymous function. That is a function that doesn't get named, but is usually used as a value passed to another function in order pass a behavior as a value.

JavaScript supports functional programming because JavaScript functions are first- class citizens. This means that functions can do the same things that variables can do.

Since functions are variables, we can add them to objects:
```JS
const obj = {
  message: "They can be added to objects like variables", 
  log(message) {
    console.log(message) }
}

obj.log(obj.message);
```
They can be added to objects like variables

They can also be returned from other functions, just like variables:
```JS
var createScream = function(logger) { 
  return function(message) {
logger(message.toUpperCase() + "!!!") }
}
const scream = createScream(message => console.log(message))
    scream('functions can be returned from other functions')
    scream('createScream returns a function')
    scream('scream invokes that returned function')
```
    // FUNCTIONS CAN BE RETURNED FROM OTHER FUNCTIONS!!!
    // CREATESCREAM RETURNS A FUNCTION!!!
    // SCREAM INVOKES THAT RETURNED FUNCTION!!!
The last two examples were of higher-order functions, functions that either take or return other functions. Using ES6 syntax, we could describe the same createScream higher-order function with arrows:
```JS
const createScream = logger => message => logger(message.toUpperCase() + "!!!")
```
From here on out, we need to pay attention to the number of arrows used during function declaration. More than one arrow means that we have a higher-order function.

We can say that JavaScript is a functional language because its functions are first-class citizens. This means that functions are data. They can be saved, retrieved, or flow through your applications just like variables.

Imperative vs Declarative

Functional programming is a part of a larger programming paradigm: declarative pro‐ gramming. Declarative programming is a style of programming where applications are structured in a way that prioritizes describing what should happen over defining how it should happen.

Let’s examine an imperative approach to this task:
```JS
var string = "This is the midday show with Cheryl Waters"; 
var urlFriendly = "";

for (var i = 0; i < string.length; i++) { if (string[i] === " ") {
urlFriendly += "-"; }else{
        urlFriendly += string[i];
      }
} console.log(urlFriendly);
```
In this example, we loop through every character in the string, replacing spaces as they occur. The structure of this program is only concerned with how such a task can be achieved. We use a for loop and an if statement, and set values with an equality operator. Just looking at the code alone does not tell us much. Imperative programs require lots of comments in order to understand what is going on.
Now let’s look at a declarative approach to the same problem:
```JS
const string = "This is the mid day show with Cheryl Waters" const urlFriendly = string.replace(/ /g, "-")
console.log(urlFriendly)
```

Here we are using string.replace along with a regular expression to replace all instances of spaces with hyphens. Using string.replace is a way of describing what is supposed to happen: spaces in the string should be replaced. The details of how spaces are dealt with are abstracted away inside the replace function. In a declarative program, the syntax itself describes what should happen and the details of how things happen are abstracted away.

```JS
const { render } = ReactDOM
const Welcome = () => ( <div id="welcome">
            <h1>Hello World</h1>
        </div>
)
    render(
        <Welcome />,
document.getElementById('target') 
)
```

Now we need to introduce the core concepts of functional programming: immutability, purity, data transformation, higher-order functions, and recursion.

Immutability
To mutate is to change, so to be immutable is to be unchangeable. In a functional pro‐ gram, data is immutable. It never changes.

Let’s consider an array of color names:
```JS
letlist=[
{ title: "Rad Red"}, { title: "Lawn"},
{ title: "Party Pink"}
]
```
We could create a function that will add colors to that array using Array.push:
```JS
var addColor = function(title, colors) { colors.push({ title: title })
return colors;
}
console.log(addColor("Glam Green", list).length)
console.log(list.length)
```

However, Array.push is not an immutable function. This addColor function changes the original array by adding another field to it. In order to keep the colors array immutable, we must use Array.concat instead:
```JS
const addColor = (title, array) => array.concat({title}) console.log(addColor("Glam Green", list).length) // 4
console.log(list.length) // 3
```
Array.concat concatenates arrays. In this case, it takes a new object, with a new color
title, and adds it to a copy of the original array.

Or, you can do it the ES6 way:
```JS
const addColor = (title, list) => [...list, {title}]
```

Pure Functions
A pure function is a function that returns a value that is computed based on its argu‐ ments. Pure functions take at least one argument and always return a value or another function. They do not cause side effects, set global variables, or change any‐ thing about application state. They treat their arguments as immutable data.

Now let’s examine an impure function that mutates the DOM:
```JS
function Header(text) {
  let h1 = document.createElement('h1'); 
  h1.innerText = text; 
  document.body.appendChild(h1);
}

Header("Header() caused side effects");
```
This function is impure. It does not return a function or a value, and it causes side effects: a changed DOM.

Pure functions are another core concept of functional programming. They will make your life much easier because they will not affect your application’s state. When writing functions, try to follow these three rules:
  1. The function should take in at least one argument.
  2. The function should return a value or another function.
  3. The function should not change or mutate any of its arguments.

How does anything change in an application if the data is immutable? Functional programming is all about transforming data from one form to another. 

You do not need a special framework to understand how to produce one dataset that is based upon another. JavaScript already has the necessary tools for this task built into the language. There are two core functions that you must master in order to be proficient with functional JavaScript: Array.map and Array.reduce.

Also, Array.filter

Array.filter is a built-in JavaScript function that produces a new array from a source array. This function takes a predicate as its only argument. A predicate is a function that always returns a Boolean value: true or false. Array.filter invokes this predicate once for every item in the array. That item is passed to the predicate as an argument and the return value is used to decide if that item shall be added to the new array.

Another array function that is essential to functional programming is Array.map. Instead of a predicate, the Array.map method takes a function as its argument. This function will be invoked once for every item in the array, and whatever it returns will be added to the new array:

```JS
const highSchools = schools.map(school => `${school} High School`) 
console.log(highSchools.join("\n"))
```

So .map is a big part of pure function programming, because it takes an old array, and generates a new one, running the callback function on each iteration of an array.

If you need to transform an array into an object, you can use Array.map in conjunc‐ tion with Object.keys. Object.keys is a method that can be used to return an array of keys from an object.

Let’s say we needed to transform schools object into an array of schools:
```JS
const schools = { 
  "Yorktown": 10, 
  "Washington & Lee": 2, 
  "Wakefield": 5
}

const schoolArray = Object.keys(schools).map(key => ({
    name: key,
    wins: schools[key]
            })
) 

console.log(schoolArray);
// [ // {
    //     name: "Yorktown",
    //     wins: 10
    //   },
    //   {
    //     name: "Washington & Lee",
    //     wins: 2
    //   },
    //   {
    //     name: "Wakefield",
    //     wins: 5
    //   }
    // ]
```

The final tool in our functional programming tool belt is the reduce method. 

Reduce can be used to transform an array into any value, including a number, string, boolean, object, or even a function.

Let’s say we needed to find the maximum number in an array of numbers. We need to transform an array into a number; therefore, we can use reduce:
```JS
const ages = [21,18,42,40,64,63,34];

const maxAge = ages.reduce((max, age) => { 
  console.log(`${age} > ${max} = ${age > max}`); 
    if (age>max) {
    return age 
    } else {
      return max }
    }, 0)

  console.log('maxAge', maxAge);

    // 21 > 0 = true
    // 18 > 21 = false
    // 42 > 21 = true
    // 40 > 42 = false
    // 64 > 42 = true
    // 63 > 64 = false
    // 34 > 64 = false
    // maxAge 64
```
There is also the method reduceRight, which works the same way as Array.reduce; the dif‐ ference is that it starts reducing from the end of the array rather than the beginning.

/////////////////////////////////////////////////////////////////////////////////

Create-react-app file structure:
  Package-lock.json just locks in the versions of the dependencies that we're using.
  ASIDE on lock files:

  Before you can understand the package-lock and even package.json, you have to understand 
  semantic versioning (semver). It's the genius behind npm, and what has made it more successful. 

  In a nutshell, if you are building an application with which other applications interface, 
  you should communicate how the changes that you make will affect the third party's ability 
  to interact with your application. This is done via semantic versioning. A version is made 
  up of three parts: X,Y,Z where those are major, minor and patch versions respectively. An 
  example would be 1.2.3, or major version 1, minor version 2, patch 3. A change in patch 
  represents a bugfix that doesn't break anything. A change in minor version represents a 
  new functionality that doesn't break anything. A change in major version represents a 
  large change that breaks compatibility. If users don't adapt to a major version change, 
  stuff won't work.

  npm exists to make managing packages easy. Your projects might have hundreds of 
  dependencies, each of those with a hundred others.

  By default, npm installs the latest version, and prepends a caret e.g. “^1.2.12”. This 
  signifies that at a minimum, version 1.2.12 should be used, but any version higher than 
  that is OK, as long as it has the same major version, 1.

  The real benefit to having dependencies defined like this in package.json, is that anybody 
  who has access to the package.json could create a dependency folder that contains the modules 
  needed to run your application.

  The purpose of the package-lock is to avoid the situation described above, where installing 
  modules from the same package.json results in two different installs. Package-lock.json was 
  added in npm version 5.x.x, so if you are using major version 5 or higher, you will see it 
  generated unless you disabled it.

  Package-lock is a large list of each dependency listed in your package.json, the specific 
  version that should be installed, the location of the module (URI), a hash that verifies 
  the integrity of the module, the list of packages it requires, and a list of dependencies.

  The idea then becomes that instead of using package.json to resolve and install modules, 
  npm will use the package-lock.json. Because the package-lock specifies a version, location 
  and integrity hash for every module and each of its dependencies, the install it creates 
  will be the same, every single time.


Node Modules actually holds all of the dependencies Public folder: root folder that gets served by the server in the end

It only holds the files we can edit.

manifest.json: This is part of create-react-app, which is just giving us a progressive 
web app right out of the box.

Don't forget that really all JSX gets compiled down to JS like so:
```JS
return (
    <div className="App">
     <h1>Hi</h1>
    </div>
  );
  return React.createElement('div', {className: 'App'}, React.createElement('h1', Hi))
```

On keys:
Remember that keys are required in React because of the virtual DOM. Keys allow React to track what is changing in the virtual, and therefore, how to manipulate and render the actual DOM.

Note that indexes can be used, but are not recommended as they can affect performance. For instance, if you were, for some reason, required to re-order a list. The order of the items would change, but so too were their indexes, which could throw things off.

This is a great in-depth explanation of how keys help the recurring process in React:
https://reactjs.org/docs/reconciliation.html#recursing-on-children


Remember that application state is the data that is used throughout the lifecycle of your app, and is passed around and managed, often by exterior libraries like redux, context api, etc.

Container components or stateful components manage state. Presentation components or stateless components just deal with UI

Component lifecycle order of any component creation goes as follows in React:

```JS
constructor(props) 
```
Can set up state here, but should not do side effects here

```JS
getDerivedStateFromProps(props, state)
``` 
The above is invoked right before calling the render method, both on the initial mount and on subsequent updates. It should return an object to update the state, or null to update nothing.

render method - prepares the structure of your jsx code

Render Child Components

componentDidMount - Place to do side effects like HTTP manipulations or changes of that nature.

```JS
getSnapshotBeforeUpdate(prevProps, prevState)
```

getSnapshotBeforeUpdate() is invoked right before the most recently rendered output is committed to e.g. the DOM. It enables your component to capture some information from the DOM (e.g. scroll position) before it is potentially changed. Any value returned by this lifecycle will be passed as a parameter to componentDidUpdate().

This use case is not common, but it may occur in UIs like a chat thread that need to handle scroll position in a special way.

A snapshot value (or null) should be returned.
For example:

```JS
class ScrollingList extends React.Component {
  constructor(props) {
    super(props);
    this.listRef = React.createRef();
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // Are we adding new items to the list?
    // Capture the scroll position so we can adjust scroll later.
    if (prevProps.list.length < this.props.list.length) {
      const list = this.listRef.current;
      return list.scrollHeight - list.scrollTop;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // If we have a snapshot value, we've just added new items.
    // Adjust scroll so these new items don't push the old ones out of view.
    // (snapshot here is the value returned from getSnapshotBeforeUpdate)
    if (snapshot !== null) {
      const list = this.listRef.current;
      list.scrollTop = list.scrollHeight - snapshot;
    }
  }
  render() {
    return (
      <div ref={this.listRef}>{/* ...contents... */}</div>
    );
  }
}
```

React Under the Hood

What does React do for you?

At its core, it maintains a tree for you, or the virtual dom, which is able to perform diff computations on the tree nodes.

React allows you to effectively re-construct your DOM in JavaScript and push only those changes to the DOM which have actually occurred.

JSX is just syntactic sugar, taking things like const tag - <h1>Hello</h1> and using React.createElement() to create just plain old javascript objects. If you do createElement() in the browser, you will see an object get generated.

But, now that we have a huge object of React elements, how would say our App component make these into actual dom elements?

ReactDOM in turn, recursively creates nodes depending on their 'type' property and appends them finally to the DOM.

It should be clear at this point that why decoupling React from the renderers is actually a great move! What React does is, simply construct a tree of UI which could be used not only on web, but on environments like mobile too, given that a renderer is available which is able to communicate with the host OS.

When we say that React maintains a copy of DOM using virtual DOM in JavaScript, and it uses to diff it to any changes and apply it to real DOM, we don't want React to brute-force its way. React, in fact does very lazy reconciliation. React would make the least amount of changes possible, i.e. it would try to re-use elements, attributes, and even styles if possible!

Consider this example:
<img className="class-1" alt="stuff" />
Let's say you change this JSX expression to the below one using some condition or some state:
<img className="class-1" alt="something else" />
Now while diffing, React would see that well, the img tag makes use of the same className both in old and new trees, so why modify it. And it would just modify your alt attribute and move on.

However, there's a catch. Because we don't want React to do a lot of computation on diffing part, React would assume that if a parent has changed, its containing subtree has definitely changed. For example:
<div className="class-1">
	<p>I did not change</p>
</div>
If you change this JSX to the below using condition/state:
<p className="class-1">
	<p>I did not change</p>
</p>
Although you could see that we don't need to re-create the inner p tag, but React has no way of knowing that while traversing the tree from top (unless, of course you perform heavy tree diffing, which are much expensive algorithms than the heuristic O(n) react follows for diffing). So, React decides to destroy all children (i.e. calling their cleanup functions in useEffect, or componentWillUnmount in class based components) and re-create the children from scratch.

When adding/removing elements in a node, React would simply loop over the children in old tree and children in the new tree of the node and mark the places where it needs to perform any addition/removal. But this has a disadvantage without additional help from developer. Consider this example:
<ul>
    <li>A</li>
    <li>B</li>
</ul>

Consider this is changed to the below by condition/state:
<ul>
    <li>Z</li>
    <li>A</li>
    <li>B</li>
<ul>
Now, when React would start comparing the two lists for difference, it would find the difference at child node 1, would mutate the old A to new Z, then again at child node 2, would mutate it from the old B to new A, and then finally append the new B node.
However, a better way would've been to preserve the existing A and B nodes and just prepend the Z node. But how would React know about that? React keys would help.

Lifecycle of Components
https://mtwashburncapital.slack.com/files/UGMMHFNKY/F014RV8D4RX/image.png

Every React Component has a lifecycle of its own, lifecycle of a component can be defined as the series of methods that are invoked in different stages of the component’s existence.

A React Component can go through four stages of its life as follows.

Initialization: 
  This is the stage where the component is constructed with the given Props and default state. This is done in the constructor of a Component Class.

  Mounting: Mounting is the stage of rendering the JSX returned by the render method itself.
  Updating: Updating is the stage when the state of a component is updated and the application is repainted.

  Unmounting: As the name suggests Unmounting is the final step of the component lifecycle where the component is removed from the page.

  Little Aside b/c you wondered why render() comes before componentDidMount():

  This is happening because of how React works fundamentally. React is supposed to feel fast, fluent and snappy; the application should never get clogged up with http requests or asynchronous code. The answer is to use the lifecycle methods to control the DOM.

  What does it mean when a component mounts?

  It might be helpful to understand some of the React vocabularies a little better. When a component is mounted it is being inserted into the DOM. This is when a constructor is called. componentWillMount is pretty much synonymous with a constructor and is invoked around the same time. componentDidMount will only be called once after the first render.

  componentWillMount --> render --> componentDidMount

  How is that different than rerendering or updating?

  Now that the component is in the DOM, you want to change the data that is displayed. When calling setState or passing down new props from the parent component a component update will occur.

  componentWillRecieveProps --> shouldComponentUpdate-->componentWillUpdate
  -->render-->componentDidUpdate
  It is also good to note that http requests are usually done in componentDidMount and componentDidUpdate since these are places that we can trigger a rerender with setState.

  Functions of each Phase of Lifecycle

  Initialization: In this phase the developer has to define the props and initial state ofthe component this is generally done in the constructor of the component. The following code snippet describes the initialization process.
  ```JS
  class Clock extends React.Component { 
      constructor(props) 
      {    
          // Calling the constructor of  
          // Parent Class React.Component 
          super(props);  

          // Setting the initial state 
          this.state = { date : new Date() };  
      } 
  }
  ```

Mounting: 
  Mounting is the phase of the component lifecyle when the initialization of the component is completed and the component is mounted on the DOM and rendered for the first time in the webpage. Now React follows a default procedure in the Naming Conventions of this predefined functions where the functions containing “Will” represents before some specific phase and “Did” represents after the completion of that phase. Mounting phase consists of two such predefined functions as described below.

  componentWillMount() Function: As the name clearly suggests, this function is invoked right before the component is mounted on the DOM i.e. this function gets invoked once before the render() function is executed for the first time.

  componentDidMount() Function: Similarly as the previous one this function is invoked right after the component is mounted on the DOM i.e. this function gets invoked once after the render() function is executed for the first time.

  componentWillRecieveProps() Function: This is a Props exclusive Function and is independent of States. This function is invoked before a mounted component gets its props reassigned. The function is passed the new set of Props which may or may not be identical to the original Props. Thus checking is a mandatory step in this regards. The following code snippet shows a sample use-case.

  ```JS
  componentWillRecieveProps(newProps) 
  { 
    if (this.props !== newProps) { 
        console.log(" New Props have been assigned "); 
        // Use this.setState() to rerender the page. 
    } 
  } 
  ```

  setState() Function: This is not particularly a Lifecycle function and can be invoked explicitly at any instant. This function is used to update the State of a component. You may refer to this article for detailed information.

  shouldComponentUpdate() Function: By default, every state or props update re-render the page but this may not always be the desired outcome, sometimes it is desired that on updating the page will not be repainted. The shouldComponentUpdate() Function fulfills the requirement by letting React know whether the component’s output will be affected by the update or not. 

  shouldComponentUpdate() is invoked before rendering an already mounted component when new props or state are being received. If returned false then the subsequent steps of rendering will not be carried out. This function can’t be used in case of forceUpdate(). The Function takes the new Props and new State as the arguments and returns whether to re-render or not.

  componentWillUpdate() Function: As the name clearly suggests, this function is invoked before the component is rerendered i.e. this function gets invoked once before the render() function is executed after the updation of State or Props.

  componentDidUpdate() Function: Similarly this function is invoked after the component is rerendered i.e. this function gets invoked once after the render() function is executed after the updation of State or Props.

Unmounting: 
  This is the final phase of the lifeycle of the component that is the phase of unmounting the component from the DOM. The following function is the sole member of this phase.

  componentWillUnmount() Function: This function is invoked before the component is finally unmounted from the DOM i.e. this function gets invoked once before the component is removed from the page and this denotes the end of the lifecycle.


React Fragments:
  A common pattern in React is for a component to return multiple elements. Fragments let you group a list of children without adding extra nodes to the DOM.

  A common pattern is for a component to return a list of children. Take this example React snippet:

    ```JS
    class Table extends React.Component {
      render() {
        return (
          <table>
            <tr>
              <Columns />
            </tr>
          </table>
        );
      }
    }
    ```

    <Columns /> would need to return multiple <td> elements in order for the rendered HTML to be valid. If a parent div was used inside the render() of <Columns />, then the resulting HTML will be invalid.

    ```JS
    class Columns extends React.Component {
      render() {
        return (
          <div>
            <td>Hello</td>
            <td>World</td>
          </div>
        );
      }
    }
    ```

    results in a <Table /> output of:
  
    <table>
      <tr>
        <div>
          <td>Hello</td>
          <td>World</td>
        </div>
      </tr>
    </table>

    Fragments solve this problem.

    ```JS
    class Columns extends React.Component {
      render() {
        return (
          <>
            <td>Hello</td>
            <td>World</td>
          </>
        );
      }
    }
    ```

    which results in a correct <Table /> output of:
    
    <table>
      <tr>
        <td>Hello</td>
        <td>World</td>
      </tr>
    </table>

ComponentDidUpdate() vs React's built-in Diffing Algorithm - read this article: https://thoughtbot.com/blog/react-rendering-misconception
