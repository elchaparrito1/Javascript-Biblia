Client-side JS programs use an asynchronous event-driven programming model.

In this style of programming, the web browser generates an event whenever something interesting happens to the document or browser or to some element or object associated with it.

The word event is not itself a technical word. Rather "event type" refers to a string that specifies what kind of event occurred, such as "mouse-move", "keydown", etc. Also, the "event target" is the object on which the event occurred, or with which the event is associated.

So, when we speak of an event, we must specify both the type and the target. A load event on a Window, or a click event on a <button> for example.

An "event handler" or "event listener" is a function that handles or responds to the event. When a specified event type occurs on a target, the browser invokes the event.

An "event object" is an object that is associated with the particular event and contains details about that event. These objects are passed as an argument to the event handler function.

All event objects have a type property that specifies the event type and a target property that specifies the event target. Each event type defines a set of properties for its associated event object.

For instance, the object associated with a mouse event includes the coordinates of the mouse pointer.

This chapter does not have a specific section on the event object. Rather, it explains event object properties when describing the specific event type.

Types of Events

Event Categories - Events can be grouped into some general categories, and knowing that these categories are helps to understand the long list of events that exist:
  -Device-dependent input events: Events tied to a specific input device such as the mouse or keyboard.

  -Device-independent input events: Events not specifically tied to an input device. The click event, for example, indicates a link or button is activated. This can be done via the mouse, but could all be done via the keyboard or touch-screen gesture

  -User interface events: These include the focus event, or change event, such as changing the value in an input field

  -State-change event: Indicate some kind of lifecycle or state-related change. Most common example is when the Window object is fully loaded, this is a lifecycle change event.

  -API events: HTML5 event types like drag and drop

  -Timer and error handlers: part of the JS asynchronous programming model similar to events.

Form events
Forms were the first scriptable element. Forms fire a submit event when the form is submitted and reset events when the form is reset. Radio buttons and checkboxes fire click events when the user interacts with them. Also, forms that maintain some kind of state fire change events when the user makes changes by entering text, checking a box, etc.

Focus and blur events in a form do not bubble, but all other form events do.

Window events
These events represent occurrences related to the browser window itself. The load event is the most important of these events: it is fired when a document and all of its external resources are fully loaded and displayed to the user.

Individual document elements, such as a <img> element, can also register handlers for load and error events. These are triggered when an external resource is fully loaded, or when an error occurs that prevents it from loading.

The focus and blur events described above for form elements are also used as Window events: they are triggered on a window when that browser window receives or loses keyboard focus from the operating system. Finally, the reseize and scroll events are fired on a Window when the user resizes or scrolls the browser window.

Mouse events
These events are triggered on the most deeply nested element that the mouse pointer is over, but they bubble up through the document. The event object passed to mouse event handlers has properties set that describe the posistion and button state of the mouse and also specify whether any modifier keys were held down when the event occurred.

Aside from mouse moving events, the browser also triggers a click event. The click event was described above as a device-independent form event, but is is actually triggered on any document element, not just form elements, and it is passed an event object with all of the extra mouse-related fields described above. 

When the user moves the mouse so that it goes over a new element, the browser fires a mouseover event on that element. Then, when the mouse moves so that it is no longer over an element, the browser fires a mouseout event on that element. For these events, the event object will have a relatedTarget property that specififes the other element involved in the transition.

Key events
These events get generated every time the user presses or releases a key on the keyboard. Keyboard events are triggered on whatever document element has keyboard focus, and they bubble up to the document and window.

Keyboard event handlers are passed an event object with a keyCode field that specifies what key was pressed or released. In addition, the event object for key events also has altKey, ctrlKey, metaKey, and shiftKey that describe the state of the keyboard modifier keys.

HTML5 events


