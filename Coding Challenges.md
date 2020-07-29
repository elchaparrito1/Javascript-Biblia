Big O Notation
definition: A theoretical measure of the execution of an algorithm, usually the time or memory needed, given the problem size n, which is usually the number of items.

tough understand and determine what type of big o an algorithm is when you're looking at it. Here are some shorthands though for determining big O:
  1. Arithmetic operations are constant
  2. Variable assignment is constant
  3. Accessing elements in an array by index or object by key is constant
  4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside the loop

This all pertains to time complexity

The other consideration should be the space complexity of an algorithm.

Auxiliary Space Complexity refers to the space required by the algorithm, not including space taken up by the inputs. This is what we're talking about when we talk about space complexity.

Rules of Thumb of space complexity
  1. Most primitives (booleans, numbers, undefined, null) are constant space
  2. Strings require O(n) space (where n is the string length); so the longer the string, the more space and time it will require
  3. Reference types are generally O(n), where n is the length (for arrays) or the number of keys (for objects)

Logarithms - a quantity representing the power to which a fixed number (the base) must be raised to produce a given number.

This is the opposite of an exponential form so log^2 16 = 4. Meaning that 4 * 4 equals 16.

Most common logs we work with are log^2 or base-10.

So the logarithm of a number roughly measures the number of times you can divide that number by 2 before you get a value that's less than or equal to one.

Objects - Big O
Objects work great for big O in a few different ways:
  Insertion - O(1)
  Removal - O(1)
  Searching - O(N) - Obviously, as you add more key/value pairs to an object, the more time complexity you'll have to add on to a search algorithm.
  Access - O(1)

When you don't need any ordering, objects are an excellent choice.

Object methods for big O must also be considered:
  Object.keys - O(N)
  Object.values - O(N)
  Object.entries - O(N)
  hasOwnProperty - O(1)

Arrays - Big O
Arrays actually come at a cost to Big O:
  Insertion - It depends... If we use things like .push, it would be O(1), b/c it just goes right on the end. Methods like .shift cause O(n) b/c JS then has to change the indices of all items in the array, and the more values in the array, the longer it will take.
  Removal - It depends... Same as the above.
  Searching - O(N)
  Access - O(1)

Arrays allow you to order your data more succinctly, but this order comes at a cost.

Array methods for big O must also be considered:
  Array.push - O(1)
  Array.pop - O(1)
  Array.shift - O(N)
  Array.unshift - O(N)
  Array.concat - O(N)
  Array.splice - O(N)
  Array.slice - O(N)
  Array.sort - O(N * log N)
  Array.forEach/map/filter/reduce - O(N) 


CoderByte Challenge: Factorial
```js
    function FirstFactorial(num) { 

        if (num < 0) return;
          if (num === 0) return 1;
          return num * FirstFactorial(num - 1);
        
        }

        // keep this function call here 
        console.log(FirstFactorial(readline()));
        //Conclusion - Remember that the idea is to use recursion. 
            //So you first determine if the reduced num is less than zero
            //Then, if it has reached zero
            //Finally, you recursively call the function itself until all conditions are met
```

CoderByte Challenge: Longest Word
```js
    function LongestWord(sen) { 
        let arr = [];
        
          for (const word of sen.split(' ')) {  
            arr.push(word.replace(/[^\w\s]/gi, ''));
          };

          return arr.sort((a,b)=>b.length-a.length)[0]
      
        }

        // keep this function call here 
        console.log(LongestWord(readline()));
```
        //Note that you used for/of instead of for/in loop.
            //While arrays can use for/in loop, they should use for/of, which iterates over values
        //Regex is then used to replace on special characters with, well, nothing
        //Then we use sort method to find which string is the longest in the array
        //.sort() explanation:
        /*When you sort an array with .sort(), it assumes that you are sorting strings. When sorting 
        numbers, the default behavior will not sort them properly.*/

        /*The function that you pass tells how to sort the elements. It takes two parameters (a and b) 
        that represent any two elements from the array. How the elements will be sorted depends on 
        the function’s return value:*/

        //if it returns a negative value, the value in a will be ordered before b.
        //if it returns 0, the ordering of a and b won’t change.
        /*if it returns a positive value, the value in b will be ordered before a.
        When you pass the function (a, b) => a - b, you’re telling the .sort() function 
        to sort the numbers in ascending order.*/

//Datacourse - String Reversal
    //You of course know about the easy way to do this:
    str.split('').reverse().join('');

    //In case, however, they ask you to do this a different way:
    function strReversal(str) {
        let arr = str.split('');
        let result = [];
        for (char of arr) {
            result = char + result
        }

        return result;
    }

//Datacourse - integer Reversal
    //You figured out a complicated way to do this. A much easier way is as follows:
    reverseInt = (int) => {
        let strNum = int.toString();
        let result = parseInt(strNum.split('').reverse().join(''));
  
        return (int > 0 ? result : result * -1)
    }

//Datacourse - MaxChars
    //This is a big one. You were tasked with looking at a string to see which char appears the most
    //The secret to doing this:

    maxChars = (str) => {
        let chars = {};
        let maxChar;
        let maxVal = null;
        
        for (char of str) { //Remember that for of works directly on String object
            maxChars[char] = maxChars[char] + 1 || 1
        } //This loops through the str and creates a key/value pair for each char in the string
  
        for (prop in chars) {
          if (chars[prop] > maxVal) {
            maxVal = chars[prop];
            maxChar = prop
          } 
        } //Then we loop through the object to see which one is the highest and return maxChar
  
        return maxChar;
    }

//Datacourse - Data Chunking
    //Given an array and chunk size, divide the array into as many subarrays
    function chunk(array, size) {
        const chunked = [];
        let index = 0;
      
        while (index < array.length) {
          chunked.push(array.slice(index, index + size));
          index += size;
        }
      
        return chunked;
      }

//Datacourse - Anagrams
      //Two way of tackling this:
      function anagrams(stringA, stringB) {
        return cleanString(stringA) === cleanString(stringB);
      }
      
      function cleanString(str) {
        return str
          .replace(/[^\w]/g, '')
          .toLowerCase()
          .split('')
          .sort()
          .join('');
      }

      //Or the more complex way:
      function anagrams(stringA, stringB) {
        const aCharMap = buildCharMap(stringA);
        const bCharMap = buildCharMap(stringB);

        if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
          return false;
        }
    
        for (let char in aCharMap) {
          if (aCharMap[char] !== bCharMap[char]) {
            return false;
          }
        }
    
        return true;
      }       

      function buildCharMap(str) {
        const charMap = {};
      
        for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
          charMap[char] = charMap[char] + 1 || 1;
        }
      
        return charMap;
      }

//Printing Steps:
      /*Write a function that accepts a positive number N. The function should 
      console log a pyramid shape with N levels using the # character. Make sure 
      the pyramid has spaces on both the left *and* right hand sides*/
    // --- Examples
    //   pyramid(1)
    //       '#'
    //   pyramid(2)
    //       ' # '
    //       '###'
    //   pyramid(3)
    //       '  #  '
    //       ' ### '
    //       '#####'

    //First solution is one that you kind of thought to do with a nested for loop
    function steps(n) {
        for (let row = 0; row < n; row++) {
            let stair = ''

            for (let column = 0; column < n; column++) {
                if (column <= row) {
                    stair += '#';
                } else {
                    stair += ' ';
                }

                console.log(stair);
            } //Note it is a nested loop.
              //The key is the if/else. If column is ever <= row we get '#'
              //So in the first iteration, it would go as follows:
                //column = 0; row = 0; they are = so we get '#'
                //next iteration:
                //column = 1; row = 0; column is > so we get '# _ '
                //column = 2; row = 0; '# _ _ '
                //column = 3; row = 0; '# _ _ _'
        }
    }

    //Second solution is one that involves recursion:
    function steps(n, row = 0, stair = '') {

        if (n === row) return;
        if (n === stair.length) {
            console.log(stair);
            return steps(n, row + 1);
        };

        if (stair.length <= row) {
            stair += '#';
        } else {
            stair += ' ';
        }

        steps(n, row, stair); 
    } //makes sense, but you just need to look at this closely.

//Pyramid Steps:
function pyramid(n) {
    const midpoint = Math.floor((2 * n - 1) / 2);
        for (let row = 0; row < n; row++) {
            let level = ''

            for (let column = 0; column < n * 2 - 1; column++) {
               if (midpoint - row <= column && midpoint + row >= column) {
                 level += '#';
               } else {
                 level += ' ';
               }
            } 
          console.log(level)
        }
}

//Matrix Challenge
// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

/*This one is a doozy. The main thing to remember to with solving this is you have a startRow, 
endColumn, endRow, and startColumn. And really you have to resolve the amounts in this order*/
function matrix(n) {
    let results = [];
    
    for (let i = 0; i < n; i++) {
        results.push([])
    }
    
    let counter = 1;
    let startColumn = 0;
    let endColumn = n - 1;
    let startRow = 0;
    let endRow = n - 1;

    while (startColumn <= endColumn && startRow <= endRow) {
        //Top row
        for (let i = startColumn; i <= endColumn; i++) {
            results[startRow][i] = counter; /*[][] can be confusing. Recall though that you have an 
                                              array of arrays, so this is reflecting that, and you 
                                              toggle between arrays based on their bracket notation 
                                              values*/
            counter++;
        }
        startRow++;

        //Right column
        for (let i = startRow; i <= endRow; i++) {
            results[i][endColumn] = counter;
            counter++;
        }
        endColumn--;

        //Bottom row
        for (let i = endColumn; i >= startColumn; i--) {
            results[endRow][i] = counter;
            counter++
        }
        endRow--;

        //Left column
        for (let i = endRow; i >= startRow; i--) {
            results[i][startColumn] = counter;
            counter++;
        }
        startColumn++;
        
    }

    return results;
}

