//CoderByte Challenge: Factorial

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

//CoderByte Challenge: Longest Word

    function LongestWord(sen) { 
        let arr = [];
        
          for (const word of sen.split(' ')) {  
            arr.push(word.replace(/[^\w\s]/gi, ''));
          };

          return arr.sort((a,b)=>b.length-a.length)[0]
      
        }

        // keep this function call here 
        console.log(LongestWord(readline()));
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