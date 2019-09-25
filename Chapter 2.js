//Javascript: Definitive Guide Notes
//Chapter 2: Lexical Scope

//Remember that the semicolon is used to separate statements

//You can usually omit the semicolon if those statements are written on separate lines:
a = 3;
b = 4;

//The semicolons would be required in this case:
a = 3; b = 4;

//Note though that JS treats breaks as semicolons only if it can't parse the code without semicolons.
//It treats a line break as a semicolon if the next nonspace character cannot be interpreted as a continuation of the current statement:
var a 
a = 
3
console.log(a)

//The above code would be interpreted as follows:
var a; a = 3; console.log(a);

//There are two exceptions to this rule:
  //1 - The words return, break, and continue often stand alone.
    //If a line break appears after any of these words, JS will always intepret that line break as a semicolon:
    return 
    true;
  //JS assumes you meant:
  return; true; //This is what leads to an error if you place return on a separate line.

  //2 - operators like ++ and -- can be prefix or postfix operators that must appear on the same line:
  x 
  ++
  y
  //This would be intepreted as x; ++y; not as x++; y;