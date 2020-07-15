Chapter 14

This chapter covers the properties and methods of the window object

setTimeout() and setInterval() are important global functions of client-side JavaScript and are therefore defined as methods of the window but they are general-purpose functions and don't really have anything to do with the window.

setInterval() is like set time out except that the specified function is invoked repeatedly at intervals of the number specified in milliseconds

setInterval(updateClock, 60000);

Like setTimeout(), setInterval() returns a value that can be passed to clearInterval() to cancel any future invocations of the scheduled function

Location property - The location property of the window object refers to a location object, which represents the current URL of the document displayed in the window and which also defines methods for making the windows load a new document. The location property of the document object always refers to the location of object.

The location property of a window as a reference to a location object; it represents the current URL of the document being displayed in the window.

The href property of the location object is a string that contains the complete text of the URL.

Other properties of this object include protocol, host, hostname, Port, path name, search, and hash.

The hash and search properties of the location object are interesting ones. The hash property refers to the fragment identifier portion of the URL if there is one: a hash mark followed by an element ID.

The search property is similar. It returns the portion of the URL that starts with a?; Often some sort of query string.

In general, is portion of the URL is used to parameterize the URL provide a way to embed arguments in it.

14.2.2 Loading New Documents
The assign() method of the location object makes the window load and display the document at the URL you specify. The replace() method is similar, but it removes the current document for the browsing history before loading the new document. Nscrypt unconditionally loads a new document, they replace method is often a better choice than a sign. Otherwise, the back button would take the browser back to the original document and the same script would again load the new doc.

14.3 Browsing History
The history property of the window object refers to the history object of the window.

The length property of the history object specifies the number of elements in the browsing history list, but for security reasons, the scripts are not allowed to access the stored urls, preventing scripts from snooping through your browser history.

The History object has back and forwards methods, which behave like back and forwards buttons.

14.8 Multiple Windows and Frames
A single web browser window on your desktop may contain several tabs. Each tab is an independent browsing context. Each has its own window object, and each is isolated from the others. The scripts running in one tab usually have no way of even knowing that the other tabs exist.

But windows are not always isolated from one another. A script in one window or tab can open new windows or tabs, and when a script does this, the windows can interact with one another and with one another's documents.

Since the window is the global object of client-side JS, each window or frame has a separate JS execution context. Nevertheless, JS code in one window can, subject to same-origin constraints, use the objects, properties, and methods defined in other windows.