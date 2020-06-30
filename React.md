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
