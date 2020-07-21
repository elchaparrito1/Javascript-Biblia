Client-side Javascript exists to turn static HTML documents into interactive web applications. Scripting the content of web pages is the central purpose of JS.

This chapter is one of the most important in the book!
This was stated at the start of the book. It is important, perhaps, to keep in mind that this chapter teaches you how to work with the DOM. That being said, there is a lot of information that you have glossed over herer, because with React, you don't do a whole lot of traversing.

The previous chapters expalined that every web browser window, tab, frame, is respresented by a Window object.

Every Window object has a document property that refers to a Document object. The Document object represents the content of the window, and it is the subject of this chapter. 

The Document object does not stand alone, but is the central object in a larger API, known as the Document Object Model, or DOM.

The DOM is the fundamental API for manipulating elements on a page.

The nested elements of an HTML document are represented in the DOM as a tree of objects. This tree contains nodes representing HTML tags or elements,

Generally, there are three types of nodes in a HTML document:
1) Document Node - Represents the entire document.
2) Element Nodes - Represent HTML elements
3) Text Nodes - Represent text (what you type inside of these tags)

Now to select these nodes, that are part of the Document Object Model, we use selectors, or methods such as document.getElementById, or document.querySelector