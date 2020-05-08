//A Regular Expression is an object that describes a pattern of characters.
//RegExp can be created with the RegExp() constructor
//They are more often created though with a special literal syntax:
let pattern = /s$/

//This line creates a new RegExp object and assigns it to the variable pattern
//This matches any string that ends in the letter 's'
//The above could've been written with the RegExp() as follows:
let pattern = new RegExp('s$');
//The $ is a metacharacter that matches the end of a string.
//Thus, the RegExp matches any string ending with an s

//Special characters to know with RegExp:
  // ^ $ . * + ? = ! : | \ / () [] {}
  //As a general rule, to use any of these literals, they must be used with \ character

//10.1.2 Character Classes
  //these are created with [] brackets
  //A character class matches any one character that is contained within.
  /[abc]/

  //Negated characters use the carrot
  /[^abc]/

  //hyphens can be used for ranges
  /[a-z]/

  [...] - any one character between the brackets
  [^...] - any one character not between the brackets
  . Any character except newline or another unicode line terminator
  \w Any ASCII word character. Equivalent to [a-zA-Z0-9_]
  \W Any character that is not an ASCII word character. Equivalent to [^a-zA-Z0-9_]
  \s Any white space character
  \S duh
  \d Any digit
  \D duh
  {n,m} match the previous item at least n time but no more than m times
  {n,} Match the previous item n or more times
  {n} Match exactly n occurrences of the previous item
  ? Match zero or one occurrences of the previous items. Equivalent to {0,1}
  + Match one or more occurences of the previous item.
  * Match zero or more occurrences of the previous item

  /\d{2,4}/ matches between two and four digits
  /\w{3/\d?/ matches exactly three word characters and an optional digit 

  Match position expressions
  ^ match the beginning of the string
  $ match the end of the string
  \b match a word boundary. That is, match the position between a \w character

  Flags are high-level pattern-matching rules
  Unlike the rest of regular-expression syntax, flags are specified outside the slashes
  i - specifies the pattern should be case sensitive
  g - pattern matching should be global
  m - matching with multiline mode

  10.2 String Methods for Pattern Matching
    Strings support four methods that use regular expressions
      1. .search() - If argument is not a regex, it will converted to one by the RegExp constructor
      2. .replace() - performs a search and replace operation. Takes a regex as a first argument and then a string as its second. Searches the string on whichs its called for matches and then replaces them. If g flag is included then it replaces all instances of matches. The second argument can also be a function that dynamically computes the replacement string.
      3. .match() - takes a regexp as its only argument and returns an array that contains the results of the match. If g flag is used, it will return all matches in an array.
      4. .split() - this breaks the string on which it is called into an array of substrings, using the argument as the separator
        '123,456,789'.split(",") - ["123","456","789"]

  10.3 The RegExp Object
    As mentioned earlier in the chapter, regular expressions are represented as the RegExp object.

    In this constructor, the RegExp objects support three methods and a number of properties

    It has 5 properties:
      1. source - a read only string that contains the text of the regular expression
      2. global - property is a read-only boolean value that specifies whether the regular expression has the g flag
      3. ignoreCase - read-only boolean that specifies whether the regex has the i flag
      4. multiline property - read-only boolean specifies whether the m flag is present
      5. lastIndex - read/write integer. This property stores the position of the string at which the next search is to begin.

    Methods:
      1. exec() - pattern-matching method, that behaves similar to the string method of match(). Unlike match(), exec() returns the same kind of array whether or not the regexp has the global g flag. When called, exec() will set the lastIndex property to the last character after the match. If called again, exec() will pick up where it left off.
      2. test() - is equivalent to calling exec() and returning true if the return value is not null. It behaves like the exec() method as described above.
      3. search() - 


