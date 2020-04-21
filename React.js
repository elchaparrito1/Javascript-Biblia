//Create-react-app file structure:
  //Package-lock.json just locks in the versions of the dependencies that we're using.
  //ASIDE on lock files:

  /*Before you can understand the package-lock and even package.json, you have to understand 
  semantic versioning (semver). It's the genius behind npm, and what has made it more successful. 
  In a nutshell, if you are building an application with which other applications interface, 
  you should communicate how the changes that you make will affect the third party's ability 
  to interact with your application. This is done via semantic versioning. A version is made 
  up of three parts: X,Y,Z where those are major, minor and patch versions respectively. An 
  example would be 1.2.3, or major version 1, minor version 2, patch 3. A change in patch 
  represents a bugfix that doesn't break anything. A change in minor version represents a 
  new functionality that doesn't break anything. A change in major version represents a 
  large change that breaks compatibility. If users don't adapt to a major version change, 
  stuff won't work.*/

  /*npm exists to make managing packages easy. Your projects might have hundreds of 
  dependencies, each of those with a hundred others.*/

  /*By default, npm installs the latest version, and prepends a caret e.g. “^1.2.12”. This 
  signifies that at a minimum, version 1.2.12 should be used, but any version higher than 
  that is OK, as long as it has the same major version, 1*/

  /*The real benefit to having dependencies defined like this in package.json, is that anybody 
  who has access to the package.json could create a dependency folder that contains the modules 
  needed to run your application.*/

  /*The purpose of the package-lock is to avoid the situation described above, where installing 
  modules from the same package.json results in two different installs. Package-lock.json was 
  added in npm version 5.x.x, so if you are using major version 5 or higher, you will see it 
  generated unless you disabled it.*/

  /*Package-lock is a large list of each dependency listed in your package.json, the specific 
  version that should be installed, the location of the module (URI), a hash that verifies 
  the integrity of the module, the list of packages it requires, and a list of dependencies.*/

  /*The idea then becomes that instead of using package.json to resolve and install modules, 
  npm will use the package-lock.json. Because the package-lock specifies a version, location 
  and integrity hash for every module and each of its dependencies, the install it creates 
  will be the same, every single time. */


//Node Modules actually holds all of the dependencies

//Public folder: root folder that gets served by the server in the end

//It only holds the files we can edit.

/*manifest.json: This is part of create-react-app, which is just giving us a progressive 
web app right out of the box.*/

//Don't forget that really all JSX gets compiled down to JS like so:
return (
    <div className="App">
     <h1>Hi</h1>
    </div>
  );
  return React.createElement('div', {className: 'App'}, React.createElement('h1', Hi))