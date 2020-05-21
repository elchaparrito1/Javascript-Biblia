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