Css, as you know is a standard for specifying the visual presentation of HTML documents.

It is of some interest to client-side JS, however, because CSS styles can be scripted.

CSS Overview

There are two ways to associate a css value with HTML elements:
1) Inline style
2) Stylesheet

Recall the "C" in CSS means cascading.

This term indicates that style rules that apply to any given element in a document can come from a cascade of different sources:
  The web browser's default stylesheet
  The document's stylesheets
  The style attribute of individual HTML elements

Styles from the style attribute override styles from the stylesheets. And styles from a document's stylesheets override the browser's default styles, of course.

Nonstandard properties - When browser vendors implement nonstandard css properties (experimental things that haven't become a part of the official language yet), they prefix the property names with a vendor-specific string. 
  Firefox uses moz-
  Chrome uses -webkit-
  IE uses -ms-

Positioning with Elements:

  static - this is the default value and specifies that the element is positioned according to the normal flow of hte document content. Static positions cannot be moved with top, left, right, and other properties of this nature

  absolute - this value allows you to specify the position of an element relative to its containing element. They are positioned independently of all other elements, and are not part of the static flow

  fixed - lets you position an element with respect to the browser window. Elements with a fixed position are always visible and do not scroll. Like absolute, fixed elements are independent of the static flow

  relative - when the position property is set to relative, an element is laid out according to the normal flow, and its position is then adjusted relative to its position in the normal flow.

  Using any of these positions outside of static, allow you to use properties like left, right, top to psoition an element. 

  A common pattern used is that of left and top to specify the distance from the left edge, and from the top of the container.

  The Box Model - margin, border, padding

  Margin vs. Padding

  Margin is an element’s personal space — how much distance the element wants to keep with other elements around it.

  Padding is how much an element is away from itself — how much distance an element wants to keep with the elements inside it.

  Use padding when:
  You don’t want your content to touch the edges of the container. Example: you have a bunch of <p> elements inside a div and you don’t want the text inside <p> elements to touch the div’s border.

  You want the background of the element to be displayed in the produced gap.Example: you have a green and an orange div adjacent to each other, and you want both divs to touch each other, but don’t want their texts to touch each other.

  You want to increase the size of the element. Example: if you want to increase the size of a button.

  Use margin when:
  You want to have some space around an element, or you don’t want the element to touch other elements around it.

  You want to center an element. If you give “margin: auto” to an element with fixed width, it will center that element horizontally (and vertically too if using flexbox, check this tutorial if you are new to Flexbox):

Partial Visibility

  visible - content may overflow and be drawn outside of the element's box if necessary

  hidden - content that overflows is clipped and hidden so that no content is ever drawn outside the region.

  scroll - the element's box has permanent horizontal and vertical scrollbars. If the content exceeds the size of the box, the scrollbars allow the user to scroll to view the extra content.

  auto - scrollbars are displayed only when content exceeds the element's size rather than being permanently displayed.