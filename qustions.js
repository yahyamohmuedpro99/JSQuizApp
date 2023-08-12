const jsQuestions = [
    {
      question: "What will be the output of the following code?",
      code: `
        var x = 5;
        console.log(x + "5");
      `,
      options: ["55", "10", "5", "undefined"],
      correctAnswer: 0,
    },
    {
      question: "What will be the result?",
      code: `
        var age = 17;
        if (age >= 18) {
          console.log("You are an adult");
        } else {
          console.log("You are not an adult");
        }
      `,
      options: ["You are an adult", "You are not an adult", "undefined", "Error"],
      correctAnswer: 1,
    },
    {
      question: "What will be logged to the console?",
      code: `
        var colors = ["red", "green", "blue"];
        for (var color of colors) {
          console.log(color);
        }
      `,
      options: [
        "red green blue",
        "red\ngreen\nblue",
        "'red', 'green', 'blue'",
        "['red', 'green', 'blue']",
      ],
      correctAnswer: 0,
    },
    {
      question: "What is the output of this function?",
      code: `
        function greet(name) {
          console.log("Hello, " + name);
        }
        greet("Alice");
      `,
      options: ["Hello, Alice", "Hello, undefined", "Hello, null", "Error"],
      correctAnswer: 0,
    },
    {
      question: "What will be the result of the expression?",
      code: `
        var a = 5;
        var b = "10";
        console.log(a + b);
      `,
      options: ["510", "15", "Error", "undefined"],
      correctAnswer: 0,
    },
    {
      question: "What is the value of the variable?",
      code: `
        var x = 15;
        var y = 7;
        console.log(x % y);
      `,
      options: ["1", "2", "0.42857142857142855", "8"],
      correctAnswer: 0,
    },
    {
      question: "What will be displayed in the console?",
      code: `
        var person = {
          name: "John",
          age: 30
        };
        console.log(person.name);
      `,
      options: ["John", "name", "30", "undefined"],
      correctAnswer: 0,
    },
    {
      question: "What will be the output?",
      code: `
        var i = 0;
        while (i < 5) {
          console.log(i);
          i++;
        }
      `,
      options: ["0 1 2 3 4", "5", "1 2 3 4 5", "0 1 2 3"],
      correctAnswer: 0,
    },
    {
      question: "What will be logged to the console?",
      code: `
        var fruits = ["apple", "banana", "orange"];
        for (var fruit of fruits) {
          if (fruit === "banana") {
            continue;
          }
          console.log(fruit);
        }
      `,
      options: ["apple orange", "apple", "banana orange", "Error"],
      correctAnswer: 0,
    },
    {
      question: "What is the output?",
      code: `
        var numbers = [2, 4, 6, 8];
        for (var index in numbers) {
          if (index == 2) {
            break;
          }
          console.log(numbers[index]);
        }
      `,
      options: ["2 4", "2", "2 4 6", "Error"],
      correctAnswer: 0,
    },
    {
      question: "What will be the result of the expression?",
      code: `
        var a = 5;
        var b = 2;
        console.log(a - b);
      `,
      options: ["3", "2", "-3", "7"],
      correctAnswer: 0,
    },
    // Question 22
    {
      question: "What will be the output?",
      code: `
        var person = {
          name: "Alice",
          age: 25
        };
        for (var key in person) {
          console.log(key + ": " + person[key]);
        }
      `,
      options: ["name: Alice age: 25", "name\nAlice age\n25", "Alice\n25", "person[name]\nperson[age]"],
      correctAnswer: 0,
    },
    // Question 23
    {
      question: "What will be the output of this code?",
      code: `
        var x = 1;
        while (x <= 10) {
          console.log(x);
          x += 2;
        }
      `,
      options: ["1 3 5 7 9", "2 4 6 8 10", "1 2 3 4 5", "10 9 8 7 6"],
      correctAnswer: 0,
    },
    // Question 24
    {
      question: "What is the value of z after this loop?",
      code: `
        var z = 4;
        while (z < 10) {
          z += 3;
        }
        console.log(z);
      `,
      options: ["4", "7", "10", "12"],
      correctAnswer: 3,
    },
    // Question 25
    {
      question: "What will be displayed in the console?",
      code: `
        var fruits = ["apple", "banana", "orange"];
        for (var i = 0; i < fruits.length; i++) {
          if (fruits[i] === "banana") {
            continue;
          }
          console.log(fruits[i]);
        }
      `,
      options: ["apple orange", "apple", "banana orange", "Error"],
      correctAnswer: 0,
    },
    // Question 26
    {
      question: "What will be logged to the console?",
      code: `
        var numbers = [1, 2, 3, 4, 5];
        for (var index in numbers) {
          if (index == 2) {
            continue;
          }
          console.log(numbers[index]);
        }
      `,
      options: ["1 2 3 4 5", "1 3 4 5", "1 2 4 5", "1 3 5"],
      correctAnswer: 1,
    },
    // Question 27
    {
      question: "What is the output?",
      code: `
        var i = 0;
        while (i <= 5) {
          console.log(i);
          i += 2;
        }
      `,
      options: ["0 1 2", "1 3 5", "0 2 4 6", "1 2 3"],
      correctAnswer: 1,
    },
    // Question 28
    {
      question: "What will be the value of x after this code?",
      code: `
        var x = 0;
        for (var j = 0; j < 3; j++) {
          x += j;
        }
        console.log(x);
      `,
      options: ["0", "1", "3", "6"],
      correctAnswer: 2,
    },
    // Question 29
    {
      question: "What will be the output?",
      code: `
        var n = 5;
        do {
          console.log(n);
          n--;
        } while (n > 0);
      `,
      options: ["5 4 3 2 1", "0", "1 2 3 4 5", "5"],
      correctAnswer: 0,
    },
    // Question 30
    {
      question: "What will be logged to the console?",
      code: `
        var person = {
          name: "Bob",
          age: 30
        };
        for (var prop in person) {
          if (prop === "age") {
            break;
          }
          console.log(person[prop]);
        }
      `,
      options: ["Bob", "30", "Bob 30", "Error"],
      correctAnswer: 0,
    },
      {
        question: "What will be the output?",
        code: `
          var x = 1;
          while (x <= 5) {
            console.log(x);
            x += 2;
          }
        `,
        options: ["1 3 5", "2 4 6", "1 2 3 4 5", "5"],
        correctAnswer: 0,
      },
      // Question 32
      {
        question: "What will be the result of the expression?",
        code: `
          var a = 3;
          var b = 2;
          console.log(a * b);
        `,
        options: ["6", "5", "9", "1"],
        correctAnswer: 0,
      },
      // Question 33
      {
        question: "What is the value of z after this loop?",
        code: `
          var z = 8;
          while (z > 5) {
            z -= 2;
          }
          console.log(z);
        `,
        options: ["8", "6", "5", "3"],
        correctAnswer: 2,
      },
      // Question 34
      {
        question: "What will be displayed in the console?",
        code: `
          var colors = ["red", "green", "blue"];
          for (var i = 0; i < colors.length; i++) {
            if (i === 1) {
              continue;
            }
            console.log(colors[i]);
          }
        `,
        options: ["red blue", "red", "green blue", "Error"],
        correctAnswer: 0,
      },
      // Question 35
      {
        question: "What will be logged to the console?",
        code: `
          var numbers = [5, 10, 15, 20];
          for (var value of numbers) {
            if (value === 15) {
              break;
            }
            console.log(value);
          }
        `,
        options: ["5 10", "5", "10", "Error"],
        correctAnswer: 0,
      },
      // Question 36
      {
        question: "What is the output?",
        code: `
          var i = 2;
          do {
            console.log(i);
            i += 3;
          } while (i <= 10);
        `,
        options: ["2 5 8", "2 5 10", "5 10", "2"],
        correctAnswer: 0,
      },
      // Question 37
      {
        question: "What will be the value of x after this code?",
        code: `
          var x = 0;
          for (var j = 1; j <= 4; j++) {
            x += j;
          }
          console.log(x);
        `,
        options: ["10", "4", "5", "6"],
        correctAnswer: 0,
      },
      // Question 38
      {
        question: "What will be the output?",
        code: `
          var n = 3;
          while (n > 0) {
            console.log(n);
            n--;
          }
        `,
        options: ["3 2 1", "1 2 3", "0", "3"],
        correctAnswer: 0,
      },
      // Question 39
      {
        question: "What will be logged to the console?",
        code: `
          var person = {
            name: "Alice",
            age: 28
          };
          for (var prop in person) {
            if (prop === "age") {
              continue;
            }
            console.log(person[prop]);
          }
        `,
        options: ["Alice 28", "Alice", "28", "Error"],
        correctAnswer: 1,
      },
      // Question 40
      {
        question: "What is the output?",
        code: `
          var m = 5;
          while (m <= 10) {
            console.log(m);
            m++;
          }
        `,
        options: ["5 6 7 8 9 10", "6 7 8 9 10", "5", "10"],
        correctAnswer: 0,
      },
        {
          question: "What will be the output?",
          code: `
            var x = 10;
            while (x >= 5) {
              console.log(x);
              x -= 2;
            }
          `,
          options: ["10 8 6", "9 7 5", "10 7 4", "5"],
          correctAnswer: 0,
        },
        // Question 42
        {
          question: "What will be the result of the expression?",
          code: `
            var a = 8;
            var b = 2;
            console.log(a / b);
          `,
          options: ["4", "3", "0.25", "10"],
          correctAnswer: 0,
        },
        // Question 43
        {
          question: "What is the value of z after this loop?",
          code: `
            var z = 7;
            while (z > 3) {
              z--;
            }
            console.log(z);
          `,
          options: ["7", "6", "5", "3"],
          correctAnswer: 1,
        },
        // Question 44
        {
          question: "What will be displayed in the console?",
          code: `
            var animals = ["dog", "cat", "elephant"];
            for (var i = 0; i < animals.length; i++) {
              if (animals[i] === "cat") {
                break;
              }
              console.log(animals[i]);
            }
          `,
          options: ["dog", "dog cat", "elephant", "Error"],
          correctAnswer: 0,
        },
        // Question 45
        {
          question: "What will be logged to the console?",
          code: `
            var values = [1, 2, 3, 4, 5];
            for (var value of values) {
              if (value === 3) {
                continue;
              }
              console.log(value);
            }
          `,
          options: ["1 2 4 5", "1 2 4", "1 2 3 4 5", "Error"],
          correctAnswer: 0,
        },
        // Question 46
        {
          question: "What is the output?",
          code: `
            var i = 4;
            do {
              console.log(i);
              i -= 2;
            } while (i >= 0);
          `,
          options: ["4 2 0", "2 0", "4", "Error"],
          correctAnswer: 0,
        },
        // Question 47
        {
          question: "What will be the value of x after this code?",
          code: `
            var x = 0;
            for (var j = 0; j < 5; j++) {
              x += j;
            }
            console.log(x);
          `,
          options: ["6", "4", "10", "Error"],
          correctAnswer: 1,
        },
        // Question 48
        {
          question: "What will be the output?",
          code: `
            var n = 4;
            while (n > 0) {
              console.log(n);
              n -= 1.5;
            }
          `,
          options: ["4 2.5 1", "4 2.5", "0", "4"],
          correctAnswer: 0,
        },
        // Question 49
        {
          question: "What will be logged to the console?",
          code: `
            var person = {
              name: "Charlie",
              age: 22
            };
            for (var prop in person) {
              console.log(person[prop]);
            }
          `,
          options: ["Charlie 22", "Charlie\n22", "22", "person[name] person[age]"],
          correctAnswer: 0,
        },
        // Question 50
        {
          question: "What is the output?",
          code: `
            var m = 1;
            while (m <= 3) {
              console.log(m);
              m++;
            }
          `,
          options: ["1 2 3", "2 3", "1", "3"],
          correctAnswer: 0,
        },
        // ... continue with more questions ...

          {
            question: "In JavaScript, what does the 'let' keyword primarily represent?",
            options: ["Null variables", "Block-scoped variables", "Undefined variables", "Function-scoped variables"],
            correctAnswer: 1,
          },
          {
            question: "Event bubbling is a behavior in JavaScript where an event that is triggered on a child element of a parent element will also trigger on the parent element and any other ancestors of the child element.",
            options: ["True", "False"],
            correctAnswer: 0,
          },
          {
            question: "What is the output of the following code?",
            code: `
              function sum(a, b, c) {
                return a + b + c;
              }
              const numbers = [1, 2, 3];
              const result = sum(...numbers);
              console.log(result);
            `,
            options: ["7", "9", "8", "None of the above"],
            correctAnswer: 1,
          },
          {
            question: "The 'document' object in JavaScript represents the HTML document that is displayed in the browser window.",
            options: ["True", "False"],
            correctAnswer: 0,
          },
          {
            question: "Can constant variables be reassigned in JavaScript?",
            options: ["Yes", "No"],
            correctAnswer: 1,
          },
          {
            question: "In JavaScript, what does the keyword 'this' primarily refer to?",
            options: ["Function declaration", "Closure", "The caller object", "None of the above"],
            correctAnswer: 2,
          },
          {
            question: "Is 'null === undefined' true in JavaScript?",
            options: ["Yes", "No"],
            correctAnswer: 1,
          },
          {
            question: "What is the output of the following code?",
            code: `
              const arr1 = [1, 2, 3];
              const arr2 = [4, 5, 6];
              const arr3 = [...arr1, ...arr2];
              console.log(arr3);
            `,
            options: ["[1, 2, 3, 4, 5, 6]", "[[1, 2, 3],[ 4, 5, 6]]", "[1, 2, 3][4, 5, 6]", "[[1, 2, 3, 4, 5, 6]]"],
            correctAnswer: 0,
          },
          {
            question: "The 'array.push(value)' function adds a new element at the start of the array.",
            options: ["True", "False"],
            correctAnswer: 1,
          },
          {
            question: "What is the output of the following code?",
            code: `
              function sum() {
                let total = 0;
                for (let i = 0; i < arguments.length; i++) {
                  total += arguments[i];
                }
                return total;
              }
              console.log(sum(1, 2, 3));
            `,
            options: ["5", "7", "9", "6"],
            correctAnswer: 1,
          },
          {
            question: "In JavaScript, can a function be passed as a value of a variable?",
            options: ["Yes", "No"],
            correctAnswer: 0,
          },
          {
            question: "The '__proto__' refers to the _____ of the object.",
            options: ["Methods", "Name", "Prototype", "Properties"],
            correctAnswer: 2,
          },
          {
            question: "In CSS, which property is used to change the space between an element and its border?",
            options: ["display", "margin", "padding", "border-box"],
            correctAnswer: 2,
          },
          {
            question: "What does the 'a:hover' CSS rule indicate?",
            options: ["Change background-color on click", "Change font color on hover", "Change font size on click", "Change text-decoration on hover"],
            correctAnswer: 1,
          },
            {
              question: "What will the following code output?",
              code: `
                const num = 5;
                console.log(num + "5");
              `,
              options: ["55", "10", "105", "TypeError"],
              correctAnswer: 0,
            },
            {
              question: "Which of the following methods is used to remove the last element from an array?",
              options: ["pop()", "shift()", "splice()", "removeLast()"],
              correctAnswer: 0,
            },
            {
              question: "What is the result of '3' + 2 in JavaScript?",
              options: ["5", "32", "6", "Invalid operation"],
              correctAnswer: 1,
            },
            {
              question: "What does the Array.isArray() function return for a regular JavaScript array?",
              options: ["true", "false", "null", "undefined"],
              correctAnswer: 0,
            },
            {
              question: "What is the output of the following code snippet?",
              code: `
                const arr = [10, 20, 30];
                arr[5] = 60;
                console.log(arr.length);
              `,
              options: ["3", "4", "5", "6"],
              correctAnswer: 3,
            },
            {
              question: "In JavaScript, what does the '===' operator check for?",
              options: ["Value equality", "Reference equality", "Type equality", "Both value and type equality"],
              correctAnswer: 3,
            },
            {
              question: "What is the purpose of the 'new' keyword in JavaScript?",
              options: ["Creating a new variable", "Declaring a new function", "Initializing a loop", "Creating an instance of an object"],
              correctAnswer: 3,
            },
            {
              question: "What will the following code output?",
              code: `
                const x = 10;
                if (x > 5) {
                  let result = "x is greater than 5";
                }
                console.log(result);
              `,
              options: ["10", "undefined", "x is greater than 5", "ReferenceError"],
              correctAnswer: 3,
            },
            {
              question: "Which of the following is not a valid way to declare a variable in JavaScript?",
              options: ["const myVar;", "let myVar = 5;", "myVar = 10;", "var myVar = 7;"],
              correctAnswer: 0,
            },
            {
              question: "What is the result of the following expression?",
              code: `
                5 + "5" - 2
              `,
              options: ["8", "10", "55", "3"],
              correctAnswer: 3,
            },
            // Add more questions here
              {
                question: "What will the following code output?",
                code: `
                  console.log([] == []);
                `,
                options: ["true", "false", "undefined", "TypeError"],
                correctAnswer: 1,
              },
              {
                question: "What does the 'NaN' stand for in JavaScript?",
                options: ["Not a Node", "Null and None", "No Available Number", "Not-a-Number"],
                correctAnswer: 3,
              },
              {
                question: "What is the output of the following code snippet?",
                code: `
                  const arr = [10, 20, 30];
                  arr[5] = 60;
                  console.log(arr.length);
                `,
                options: ["3", "4", "5", "6"],
                correctAnswer: 3,
              },
              {
                question: "What is the result of '5' - 3 in JavaScript?",
                options: ["2", "8", "NaN", "Invalid operation"],
                correctAnswer: 0,
              },
              {
                question: "What will the following code output?",
                code: `
                  console.log(0.1 + 0.2 === 0.3);
                `,
                options: ["true", "false", "NaN", "TypeError"],
                correctAnswer: 1,
              },
              {
                question: "What is the value of '2' > '12' in JavaScript?",
                options: ["true", "false", "undefined", "NaN"],
                correctAnswer: 0,
              },
              {
                question: "What will the following code output?",
                code: `
                  console.log(typeof null);
                `,
                options: ["number", "object", "null", "undefined"],
                correctAnswer: 1,
              },
              {
                question: "What is the output of the following code snippet?",
                code: `
                  function foo() {
                    console.log(a);
                    var a = 5;
                  }
                  foo();
                `,
                options: ["undefined", "null", "5", "ReferenceError"],
                correctAnswer: 0,
              },
              {
                question: "What will the following code output?",
                code: `
                  console.log(typeof typeof 1);
                `,
                options: ["number", "string", "undefined", "NaN"],
                correctAnswer: 1,
              },
              {
                question: "What does the following expression return?",
                code: `
                  "5" + 3 + 4
                `,
                options: ["534", "12", "8", "NaN"],
                correctAnswer: 0,
              },
              {
                question: "What is the output of the following code snippet?",
                code: `
                  console.log(typeof []);
                `,
                options: ["array", "object", "null", "undefined"],
                correctAnswer: 1,
              },
              // Add more questions here
            ];
            
          
        
      
  
  

export default jsQuestions;