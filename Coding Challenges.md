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

Steps to solving most any coding challenge:
  1 Understand the Problem
    Important questions to ask in order to ensure you understand the problem:
      1. Can you restate the problem in your own words?
      2. What are the inputs that should go into the problem?
      3. What are the outputs that should come from the solution?
      4. Can the outputs be determined from the inputs? In other words, do I have enough information to solve the problem?
      5. How should I label the important pieces of data that are a part of the problem?

      An example problem: Write a function which takes two numbers and returns their sum.

      1. Create a function that will take two number arguments and return the total of the sum of the two
      2. ints? floats? what about strings or added arguments?
      3. ints? floats?
      4. It depends

  2 Explore Concrete Examples
    Coming up with examples help you understand problems better
    They provide sanity checks

    Steps to exploring examples:
      1. Start with simple examples
      2. Then progress to more complex examples
      3. Explore examples with empty inputs
      4. Explore examples with invalid inputs

  3 Break It Down
    Pseudo code or explicitly write out the steps you need to take. This forces you to think about the code you'll write before you write it, and helps you catch any lingering conceptual issues or misunderstandings before you dive in and have to worry about details.

  4 Solve/Simplify
    If you can't solve the problem. Solve a simpler version of the problem. This means ignoring the part that is giving you a really hard time. This at least shows progress in what you're trying to do.

    The steps would be as follows:
      -Find the core difficulty in what you're trying to do
      -Temporarily ignore that difficulty
      -Write a simplified solution
      -Then incorporate that difficulty back in 

  5 Look Back and Refactor
    Always important to reflect on how the code could be improved.

    Some important questions to ask after you've solved the problem:
      Can you check the result?
      Can you deive the result differently?
      Can you understand it at a glance?
      Can you use the result or method for some other problem?
      Can you thing of other ways to refactor?
      How have other people solved the problem?


Next we'll go over patterns that you can follow or Problem Solving Patterns that often help in solving coding challenges:



FREQUENCY COUNTERS PATTERN: This pattern uses objects or sets to collect values/frequencies of values. This can often avoid the need for nested loops or O(N^2) operations with arrays/strings.

Example: Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

You solved this, but thinking of Big O, two things. First, you were using just the arrays and looping over one array and comparing it to the other. Objects are usually faster to work with than arrays. Second, always avoid nested loops. Two separate loops are always faster than a nested loop.

So again. USE OBJECTS with FREQUENCY COUNTER questions/challenges to break down the data. Recall the anagram challenge where this applies.

```JS
const anagramCheck = (a,b) => {
  //Convert each string into key/value pair object
  if (a.length !== b.length) {
    return false
  }

  let firstAnagram = {};
  for (let str of a) {
  firstAnagram[str] = firstAnagram[str] + 1 || 1
  }

  let secondAnagram = {};
  for (let str of b) {
  secondAnagram[str] = secondAnagram[str] + 1 || 1
  }

  //Loop over one object and determine if same key exists
  //In same loop, determine if same value exists
  for (let key in firstAnagram) {
    if (firstAnagram[key] !== secondAnagram[key]) {
      return false
    }

    if (!key in secondAnagram) {
      return false
    }
  }
  //Return true if yes, and false if no
  return true
}
console.log(anagramCheck('disney', 'yensid'));

```

MULTIPLE POINTERS PATTERN: is creating pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition. Very efficient for solving problems with minimal complexity.

Example: Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

So the multiple pointers recipe to follow would be the following:

```JS
  const sumZero = (arr) => {
    let left = 0;
    let right = arr.length - 1;
    console.log(right);

    while (left < right) {
      let sum = arr[left] + arr[right];
      if (sum == 0) {
        return [arr[left], arr[right]]
      } else if (sum > 0) {
        right--
      } else {
        left++
      }
    }

    return false
  }

  console.log(sumZero([-5,-4,-3,-2,-1,0,1,2,3,10,11]));
```

So we see how this can work with other challenges, where we have two pointers, but also, do not need to start at the beginning and end

example: Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

```JS
  const countUniqueValues = (arr) => {
    let obj = {}
    
    for (let num of arr) {
      obj[num] = obj[num] + 1 || 1
    }

    return Object.keys(obj).length;
  }

const performance = require('perf_hooks').performance;
const t0 = performance.now();
 console.log(countUniqueValues([1,1,1,3,3,3,4,5,6,9,9,9,9,11,12,13]));
const t1 = performance.now();
console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);

const otherCountUniqueValues = (arr) => {
  let i = 0;
  let j = 1;
  let count = 0;

  while (j < arr.length) {
    if (arr[i] !== arr[j]) {
      count++;
      i = j;
      j++
    } else {
      j++
    }
  }

  return count + 1;
}

const performance = require('perf_hooks').performance;
const t0 = performance.now();
console.log(otherCountUniqueValues([1,2,3,4,4,4,7,7,12,12,13]));
const t1 = performance.now();
console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);
```

SLIDING WINDOW PATTERNS: This pattern involves creating a window which can either be an array or number from one position to another. Depending on a certain condition, the window either increases or closes (and a new window is created). Very useful for keeping track of a subset of data in an array/string.

example: Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.

```JS
  const maxSubarraySum = (arr,n) => {

    if (n > arr.length) {
      return null;
    }

    //Create max variable. Set to infinity in case all numbers are negative, b/c they'll be greater than -Infinity
    let max = -Infinity

    //Create nested loop to go over array
    for (let i = 0; i < arr.length - n + 1; i++) {
      temp = 0;
      //note j loops number of times n is on one iteration of i
      for (let j = 0; j < n; j++) {
        console.log(j);
        temp += arr[i + j];
      }

      //Compare window to max var to see which is more
      //Save the one that is more to max window
       if (temp > max) {
         max = temp;
       }
    }
    return max;
  }

  console.log(maxSubarraySum([1,2,5,2,8,1,5,9,3,4],3));
```

Lets say we have a million items though. This becomes inefficient when we consider Big 0. The above is not technically a sliding window either.

Sliding Window:

```JS
  const maxSubarraySum = (arr, num) => {
    let maxSum = 0, tempSum = 0;

    if (num > arr.length) {
      return null
    }

    for (let i = 0; i < num; i++) {
      maxSum += arr[i];
      console.log(maxSum)
    }
    tempSum = maxSum;

    //Slide the window one place; minus front of array, add to end of array
    for (let i = num; i < arr.length; i++) {
      tempSum = tempSum - arr[i - num] + arr[i];
      maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
  }

  maxSubarraySum([2,6,9,2,1,8,5,6,3], 3);

function maxSubarraySum(arr, num){
  // add whatever parameters you deem necessary - good luck!
  let maxSum = 0, tempSum = 0;

  if (arr.length < num) {
    return null
  }

  for (let i = 0; i < num; i++) {
    maxSum += arr[i]
  }
  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    console.log(arr[i]);
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }

  return maxSum;
}

maxSubarraySum([100,200,300,400], 2); //700
maxSubarraySum([1,4,2,10,23,3,1,0,20], 4); //39
maxSubarraySum([-3,4,0,-2,6,-1], 2); //5
maxSubarraySum([2,3], 3); //null

//or finding the longest substring of different characters in a string:

function findLongestSubstring(str) {
 
  let longest = 0, start = 0, seen = {};

    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (seen[char]) {
        start = Math.max(start, seen[char])
      }

      longest = Math.max(longest, i - start + 1);
      seen[char] = i + 1
    }
    return longest;

}

findLongestSubstring('rithmschool');
```

DIVIDE AND CONQUER Patterns: This pattern involves dividing a data set into smaller chunks and then repeating a process with a subset of data. This pattern can tremendously decrease time complexity

RECURSION Patterns: A process (a function in our case) that calls itself.

  Two things that must always be present with a recursive function:
    1. Different Input - invoke the same function over and over, but with different data to test the function output.
    2. Base Case - has to be a stopping point though, or the base case, if all pieces of data are tested.

    classic example:

    ```JS
      const factorial = (num) => {
        if (num === 1) return 1
        
        return num * factorial(num - 1);
      }
    ```

  Common Recursive pitfalls
    -no or wrong base case
    -not returning anything from the base case
    -stack overflow, or infinite call stack

  
  Recursion examples to review and understand: 

  Recursion function that mimics Math.pow(); function should accept a base and an exponent (power(2,3) equals 8):
  ```JS
    function power(b,e) {
     
      if (e === 0) return b;

      return b * power(b, e - 1);
    }

    console.log(power(2,3))
  ```
  Product of Array:
  ```JS
  function productOfArray(arr) {
    if (arr.length === 0) return 1
    
    return arr[0] * productOfArray(arr.slice(1))
  }

  console.log(productOfArray([1,2,3]))
  ```

  Add up all numbers from zero to number:
  ```JS
  function recursiveRange(n){
    if (n === 1) return 1
    
    return n + recursiveRange(n-1)
  }

  console.log(recursiveRange(8))
  ```

  Find Fibonacci number based on nth number provided:
  ```JS
  function fib(n) {
    if (n <= 2) return 1;

    return fib(n-1) + fib(n-2)
  }

  console.log(fib(10));
  ```

  Palindrome:
  ```JS
  function isPalindrome(str){
    //First, we know that the string should be considered a palindrome if it contains just one character. Hence, a reasonable terminal condition would be when the string length is equal to 1.
    console.log(str)
    if(str.length === 1) return true;
    //Second, we know that if the first and last characters do not match for a start, the string cannot be considered a palindrome.
    if(str.length === 2) return str[0] === str[1];
    //
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
    return false;
}
console.log(isPalindrome('noon'))
  ```
  

Now HELPER METHOD RECURSION patter is where you have two functions. A helper function on the outside, and the recursion function on the inside.




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

