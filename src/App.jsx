import { useEffect, useMemo, useState } from "react";
import "./App.css";

/* =========================================================
   SKILLBRIDGE - COURSE DATA
========================================================= */

const courseData = {
  "Web Development": {
    description:
      "Learn web development from absolute beginner level and gradually build real websites.",
    lessons: [
      {
        title: "HTML & CSS Basics",
        level: "BEGINNER",
        duration: "60 min",

        overview:
          "Learn how websites are structured and designed using HTML and CSS from the ground up.",

        sections: [
          {
            title: "1. What is Web Development?",
            text: `Web development is the process of creating websites and web applications.

A website is mainly built using HTML, CSS and JavaScript.

HTML provides structure.
CSS controls appearance.
JavaScript adds behavior and interaction.

Think of a house. HTML is the structure, CSS is the design and JavaScript is what makes things work.`
          },

          {
            title: "2. Understanding HTML",
            text: `HTML stands for HyperText Markup Language.

HTML is a markup language used to structure content.

HTML uses elements such as headings, paragraphs, links, images, lists and forms.

Example:

<h1>Hello World</h1>

The h1 element represents a heading.`
          },

          {
            title: "3. Understanding CSS",
            text: `CSS stands for Cascading Style Sheets.

CSS controls the visual appearance of HTML elements.

You can use CSS to control:

• Colors
• Fonts
• Spacing
• Borders
• Layout
• Width and height
• Responsive design`
          },

          {
            title: "4. The CSS Box Model",
            text: `Every HTML element can be treated as a rectangular box.

The box model contains:

Content
Padding
Border
Margin

Content is the actual information.

Padding creates space around the content.

Border surrounds the element.

Margin creates space outside the element.`
          }
        ],

        code: `<!DOCTYPE html>
<html>
<head>
  <title>My Website</title>

  <style>
    body {
      font-family: Arial;
      background: #f4f4f4;
    }

    h1 {
      color: #4f46e5;
    }

    p {
      font-size: 18px;
    }
  </style>
</head>

<body>

  <h1>Hello SkillBridge</h1>

  <p>
    I am learning web development.
  </p>

</body>
</html>`,

        practiceCode: `<!DOCTYPE html>
<html>

<head>
  <title>Student Profile</title>

  <style>
    body {
      font-family: Arial;
    }

    .card {
      width: 300px;
      padding: 20px;
      border-radius: 15px;
      background: #eeeeee;
    }

    /* YOUR TASK
       1. Change the heading color
       2. Add a border
       3. Center the card
       4. Change the paragraph size
    */
  </style>
</head>

<body>

  <div class="card">

    <h1>Sai Bhagirath</h1>

    <p>
      Computer Science Student
    </p>

    <p>
      Learning Web Development
    </p>

  </div>

</body>

</html>`,

        algorithm: [
          "Create the HTML document.",
          "Add meaningful HTML elements.",
          "Create CSS selectors.",
          "Add styling properties.",
          "Open the page in a browser.",
          "Modify the CSS and observe the result."
        ],

        problems: [
          "Create a personal profile page.",
          "Create a navigation bar.",
          "Create a course card.",
          "Create a student portfolio.",
          "Create a responsive landing page."
        ],

        tests: [
          {
            input: "Open the HTML file",
            expected: "The webpage should appear in the browser."
          },
          {
            input: "Change h1 color to red",
            expected: "The heading should become red."
          }
        ],

        quiz: [
          {
            question: "What is HTML mainly responsible for?",
            options: [
              "Website structure",
              "Database management",
              "Server hosting",
              "Operating systems"
            ],
            answer: "Website structure",
            explanation:
              "HTML defines the structure and meaning of webpage content."
          },
          {
            question: "What does CSS control?",
            options: [
              "Website appearance",
              "Database records",
              "CPU operations",
              "File compression"
            ],
            answer: "Website appearance",
            explanation:
              "CSS controls the appearance and layout of webpages."
          }
        ]
      },

      {
        title: "JavaScript Fundamentals",
        level: "BEGINNER",
        duration: "75 min",

        overview:
          "Learn variables, data types, conditions and loops and understand how JavaScript adds logic to websites.",

        sections: [
          {
            title: "1. What is JavaScript?",
            text: `JavaScript is a programming language used to add logic and interaction to websites.

JavaScript can respond to button clicks, validate forms, perform calculations, modify webpage content and communicate with servers.`
          },

          {
            title: "2. Variables",
            text: `Variables allow programs to store information.

JavaScript commonly uses let and const.

let can be reassigned.

const should not be reassigned.

Example:

let age = 20;
const name = "Sai";`
          },

          {
            title: "3. Conditions",
            text: `Programs often need to make decisions.

For example:

If marks are greater than or equal to 40, the student passes.

Otherwise, the student fails.

JavaScript uses if, else if and else for this.`
          },

          {
            title: "4. Loops",
            text: `Loops allow a program to repeat code.

The for loop is commonly used when we know how many times an operation should happen.

The while loop repeats while a condition is true.`
          }
        ],

        code: `const name = "Sai";

let marks = 75;

console.log("Student:", name);

if (marks >= 40) {
  console.log("Pass");
} else {
  console.log("Fail");
}

for (let i = 1; i <= 5; i++) {
  console.log(i);
}`,

        practiceCode: `/*
  JAVASCRIPT PRACTICE

  Task 1:
  Change the student's marks.

  Task 2:
  Make the program print:
  "Excellent" if marks >= 90

  Task 3:
  Print numbers from 1 to 10.

  Task 4:
  Check whether the student passed.
*/

const student = "Sai";

let marks = 75;

// Write your code below


`,

        algorithm: [
          "Create the required variables.",
          "Store the input values.",
          "Check the condition.",
          "Use if and else for decisions.",
          "Use loops for repetition.",
          "Print the final result."
        ],

        problems: [
          "Check whether a number is positive or negative.",
          "Check whether a number is even or odd.",
          "Print numbers from 1 to 100.",
          "Find the sum from 1 to N.",
          "Print a multiplication table."
        ],

        tests: [
          {
            input: "marks = 75",
            expected: "Pass"
          },
          {
            input: "marks = 30",
            expected: "Fail"
          }
        ],

        quiz: [
          {
            question: "Which keyword creates a variable that can be reassigned?",
            options: ["const", "let", "fixed", "static"],
            answer: "let",
            explanation:
              "let creates a variable whose value can later be changed."
          },
          {
            question: "What is a loop used for?",
            options: [
              "Repeating operations",
              "Creating CSS",
              "Deleting variables",
              "Creating hardware"
            ],
            answer: "Repeating operations",
            explanation:
              "Loops allow a program to repeat a block of code."
          }
        ]
      },

      {
        title: "DOM & Events",
        level: "INTERMEDIATE",
        duration: "70 min",

        overview:
          "Learn how JavaScript interacts with HTML using the DOM and event listeners.",

        sections: [
          {
            title: "1. What is the DOM?",
            text: `DOM stands for Document Object Model.

The browser converts an HTML document into a tree-like structure.

JavaScript can use the DOM to find elements, change text, change styles and create new elements.`
          },

          {
            title: "2. Selecting Elements",
            text: `JavaScript provides methods such as:

querySelector()
querySelectorAll()
getElementById()

These allow JavaScript to access HTML elements.`
          },

          {
            title: "3. Events",
            text: `An event is something that happens on a webpage.

Examples include:

click
submit
input
keydown
mouseover

JavaScript can listen for these events and execute code when they occur.`
          }
        ],

        code: `const button =
  document.querySelector("#button");

const title =
  document.querySelector("#title");

button.addEventListener("click", () => {

  title.textContent =
    "Welcome to SkillBridge!";

});`,

        practiceCode: `<!DOCTYPE html>
<html>

<body>

  <h1 id="title">
    Hello
  </h1>

  <button id="button">
    Click Me
  </button>

  <script>

    const button =
      document.querySelector("#button");

    const title =
      document.querySelector("#title");

    // PRACTICE

    // 1. Change the heading
    // when the button is clicked.

    // 2. Change its color.

    // 3. Change the button text.

  </script>

</body>

</html>`,

        algorithm: [
          "Create the HTML elements.",
          "Give important elements an id or class.",
          "Select the elements using JavaScript.",
          "Attach an event listener.",
          "Write the action that should happen.",
          "Test the interaction."
        ],

        problems: [
          "Create a button that changes a heading.",
          "Create a counter.",
          "Create a dark-mode button.",
          "Create form validation.",
          "Create a to-do list."
        ],

        tests: [
          {
            input: "Click the button",
            expected: "Heading changes."
          }
        ],

        quiz: [
          {
            question: "What does DOM stand for?",
            options: [
              "Document Object Model",
              "Data Object Method",
              "Digital Object Model",
              "Document Oriented Method"
            ],
            answer: "Document Object Model",
            explanation:
              "DOM stands for Document Object Model."
          }
        ]
      },

      {
        title: "React Basics",
        level: "INTERMEDIATE",
        duration: "90 min",

        overview:
          "Learn components, state and events and understand the foundation of React applications.",

        sections: [
          {
            title: "1. What is React?",
            text: `React is a JavaScript library for building user interfaces.

React applications are divided into reusable components.

For example:

Navbar
CourseCard
Lesson
Quiz
Footer

Each can be represented as a component.`
          },

          {
            title: "2. Components",
            text: `A React component is commonly a JavaScript function that returns JSX.

Example:

function Welcome() {
  return <h1>Hello</h1>;
}

Components allow large applications to be divided into smaller pieces.`
          },

          {
            title: "3. State",
            text: `State represents information that can change.

React provides useState to manage component state.

When state changes, React updates the relevant part of the interface.`
          }
        ],

        code: `import { useState } from "react";

function Counter() {

  const [count, setCount] =
    useState(0);

  return (
    <div>

      <h2>{count}</h2>

      <button
        onClick={() =>
          setCount(count + 1)
        }
      >
        Add
      </button>

    </div>
  );
}

export default Counter;`,

        practiceCode: `import { useState } from "react";

function Counter() {

  const [count, setCount] =
    useState(0);

  return (
    <div>

      <h1>{count}</h1>

      <button>
        Add
      </button>

      <button>
        Reset
      </button>

      {/*
        PRACTICE

        1. Make Add increase count.

        2. Make Reset set count to 0.

        3. Add a Decrease button.

        4. Do not allow count below 0.
      */}

    </div>
  );
}

export default Counter;`,

        algorithm: [
          "Create a React component.",
          "Create state using useState.",
          "Display the state.",
          "Create buttons or events.",
          "Update the state when an event happens.",
          "React automatically updates the UI."
        ],

        problems: [
          "Create a counter.",
          "Create a show/hide component.",
          "Create a student profile card.",
          "Create a course card.",
          "Create a React to-do app."
        ],

        tests: [
          {
            input: "Click Add once",
            expected: "Count increases by 1."
          },
          {
            input: "Click Reset",
            expected: "Count becomes 0."
          }
        ],

        quiz: [
          {
            question: "What is React mainly used for?",
            options: [
              "Building user interfaces",
              "Managing databases",
              "Creating hardware",
              "Writing operating systems"
            ],
            answer: "Building user interfaces",
            explanation:
              "React is a JavaScript library for building user interfaces."
          }
        ]
      },

      {
        title: "Build a Website",
        level: "PROJECT",
        duration: "120 min",

        overview:
          "Combine HTML, CSS and JavaScript to build a complete responsive website.",

        sections: [
          {
            title: "1. Planning",
            text: `Before coding, decide what the website should contain.

For example:

Header
Navigation
Hero
About
Courses
Contact
Footer

Planning gives your project structure.`
          },

          {
            title: "2. Building",
            text: `Start with HTML structure.

Then use CSS to create the visual design.

Finally use JavaScript to add interaction.`
          }
        ],

        code: `const button =
  document.querySelector("#menuButton");

const menu =
  document.querySelector("#menu");

button.addEventListener("click", () => {

  menu.classList.toggle("active");

});`,

        practiceCode: `<!DOCTYPE html>
<html>

<head>

  <style>

    body {
      font-family: Arial;
    }

    .menu {
      display: none;
    }

    .menu.active {
      display: block;
    }

  </style>

</head>

<body>

  <button id="menuButton">
    Open Menu
  </button>

  <div id="menu" class="menu">

    <p>Home</p>
    <p>Courses</p>
    <p>About</p>

  </div>

  <script>

    // PRACTICE

    // Select the button.
    // Select the menu.
    // Add a click event.
    // Toggle the "active" class.

  </script>

</body>

</html>`,

        algorithm: [
          "Plan the website.",
          "Create HTML structure.",
          "Style the website using CSS.",
          "Add JavaScript interactions.",
          "Test desktop layout.",
          "Test mobile layout.",
          "Fix bugs and improve the design."
        ],

        problems: [
          "Build a personal portfolio.",
          "Build a student dashboard.",
          "Build a course website.",
          "Build a restaurant website.",
          "Build a SkillBridge landing page."
        ],

        tests: [
          {
            input: "Open website",
            expected: "All sections appear correctly."
          },
          {
            input: "Open on mobile",
            expected: "Layout adapts to the screen."
          }
        ],

        quiz: [
          {
            question: "What should normally happen before building a large website?",
            options: [
              "Plan the structure",
              "Add random animations",
              "Delete the HTML",
              "Install a database"
            ],
            answer: "Plan the structure",
            explanation:
              "Planning makes development more organized."
          }
        ]
      }
    ]
  },

  Python: {
    description:
      "Learn Python from absolute beginner level to practical programming.",

    lessons: [
      {
        title: "Python Basics",
        level: "BEGINNER",
        duration: "60 min",

        overview:
          "Start Python from zero and learn syntax, output, input and basic programming concepts.",

        sections: [
          {
            title: "1. What is Python?",
            text: `Python is a high-level programming language.

It is widely used for automation, web development, data science, artificial intelligence and many other areas.

Python is popular with beginners because its syntax is relatively easy to read.`
          },

          {
            title: "2. print()",
            text: `The print() function displays output.

Example:

print("Hello World")

You can print text, numbers and variables.`
          },

          {
            title: "3. input()",
            text: `The input() function allows a program to receive information from the user.

Remember that input() normally returns text.

Use int() or float() when numerical input is required.`
          }
        ],

        code: `print("Welcome to SkillBridge")

name = input("Enter your name: ")

age = int(
    input("Enter your age: ")
)

print("Name:", name)
print("Age:", age)`,

        practiceCode: `# PYTHON PRACTICE

name = input(
    "Enter your name: "
)

age = int(
    input("Enter your age: ")
)

# PRACTICE

# 1. Print the name.

# 2. Print the age.

# 3. Print:
# "You are an adult"
# when age >= 18.

# 4. Print the year
# in which the student
# will turn 25.
`,

        algorithm: [
          "Read the input.",
          "Convert the input if required.",
          "Store values in variables.",
          "Perform the required calculation.",
          "Display the result."
        ],

        problems: [
          "Print your name and age.",
          "Add two numbers.",
          "Calculate the area of a circle.",
          "Convert Celsius to Fahrenheit.",
          "Calculate simple interest."
        ],

        tests: [
          {
            input: "10 and 20",
            expected: "30"
          }
        ],

        quiz: [
          {
            question: "Which function displays output?",
            options: [
              "print()",
              "input()",
              "display()",
              "output()"
            ],
            answer: "print()",
            explanation:
              "print() displays information."
          }
        ]
      },

      {
        title: "Python Variables & Data Types",
        level: "BEGINNER",
        duration: "70 min",

        overview:
          "Learn variables, strings, integers, floats and booleans.",

        sections: [
          {
            title: "1. Variables",
            text: `A variable is a name that refers to a value.

Example:

age = 20

Python automatically determines the type of the assigned value.`
          },

          {
            title: "2. Data Types",
            text: `Important Python data types include:

int
float
str
bool

Example:

age = 20
price = 99.5
name = "Sai"
passed = True`
          }
        ],

        code: `name = "Sai"
age = 20
cgpa = 8.2
passed = True

print(name)
print(age)
print(cgpa)
print(passed)`,

        practiceCode: `# PYTHON DATA TYPE PRACTICE

name = "Sai"
age = 20

# PRACTICE

# Create a variable for:
# 1. Your college
# 2. Your CGPA
# 3. Whether you passed
# 4. Your graduation year

# Then print all values.
`,

        algorithm: [
          "Identify the information.",
          "Create variables.",
          "Choose suitable data types.",
          "Perform operations.",
          "Display the result."
        ],

        problems: [
          "Store student information.",
          "Calculate average marks.",
          "Create a bill calculator.",
          "Convert temperature.",
          "Calculate age."
        ],

        tests: [
          {
            input: "age = 20",
            expected: "20"
          }
        ],

        quiz: [
          {
            question: "Which type stores whole numbers?",
            options: [
              "str",
              "int",
              "bool",
              "float"
            ],
            answer: "int",
            explanation:
              "int stores whole numbers."
          }
        ]
      },

      {
        title: "Conditions & Loops",
        level: "BEGINNER",
        duration: "90 min",

        overview:
          "Learn decision making and repetition using if statements and loops.",

        sections: [
          {
            title: "1. Conditions",
            text: `Conditions allow programs to make decisions.

Example:

if marks >= 40:
    print("Pass")

else:
    print("Fail")`
          },

          {
            title: "2. Loops",
            text: `Loops repeat code.

A for loop is useful when iterating over a sequence.

A while loop continues while a condition remains true.`
          }
        ],

        code: `marks = int(
    input("Marks: ")
)

if marks >= 40:
    print("Pass")
else:
    print("Fail")

for i in range(1, 6):
    print(i)`,

        practiceCode: `marks = int(
    input("Enter marks: ")
)

# PRACTICE

# 1. Print "Excellent"
# if marks >= 90.

# 2. Print "Pass"
# if marks >= 40.

# 3. Otherwise print
# "Fail".

# 4. Print numbers
# from 1 to 10.
`,

        algorithm: [
          "Read the input.",
          "Create the required conditions.",
          "Check each condition.",
          "Use loops for repetition.",
          "Print the result."
        ],

        problems: [
          "Check even or odd.",
          "Find the largest of three numbers.",
          "Print 1 to N.",
          "Find sum from 1 to N.",
          "Print even numbers."
        ],

        tests: [
          {
            input: "marks = 90",
            expected: "Excellent"
          }
        ],

        quiz: [
          {
            question: "Which keyword checks a condition?",
            options: [
              "if",
              "for",
              "loop",
              "check"
            ],
            answer: "if",
            explanation:
              "if is used for conditional execution."
          }
        ]
      },

      {
        title: "Python Functions",
        level: "INTERMEDIATE",
        duration: "90 min",

        overview:
          "Learn how functions make Python programs reusable and organized.",

        sections: [
          {
            title: "1. Functions",
            text: `A function is a reusable block of code.

Example:

def add(a, b):
    return a + b

Functions allow us to break large problems into smaller pieces.`
          },

          {
            title: "2. Parameters and Return",
            text: `Parameters allow functions to receive information.

return sends a result back to the calling code.

This makes functions useful for calculations and reusable logic.`
          }
        ],

        code: `def add(a, b):
    return a + b

def is_even(number):
    return number % 2 == 0

print(add(10, 20))
print(is_even(8))`,

        practiceCode: `def add(a, b):

    # PRACTICE
    # Return the sum
    # of a and b

    pass


def is_even(number):

    # PRACTICE
    # Return True when
    # number is even

    pass


print(add(10, 20))

print(is_even(8))`,

        algorithm: [
          "Identify the task.",
          "Create a function.",
          "Define parameters.",
          "Write the logic.",
          "Return the result.",
          "Test the function."
        ],

        problems: [
          "Create a factorial function.",
          "Create a prime function.",
          "Reverse a string.",
          "Find maximum of two numbers.",
          "Build a calculator."
        ],

        tests: [
          {
            input: "add(10, 20)",
            expected: "30"
          }
        ],

        quiz: [
          {
            question: "Why are functions useful?",
            options: [
              "Code reuse",
              "Deleting code",
              "Creating hardware",
              "Only printing"
            ],
            answer: "Code reuse",
            explanation:
              "Functions allow code to be reused."
          }
        ]
      },

      {
        title: "Build a Mini Project",
        level: "PROJECT",
        duration: "120 min",

        overview:
          "Build a student grade calculator using Python fundamentals.",

        sections: [
          {
            title: "1. Project",
            text: `Create a program that accepts marks, calculates the total and average, and determines the grade.

This project combines variables, lists, functions and conditions.`
          }
        ],

        code: `def average(marks):
    return sum(marks) / len(marks)

marks = [80, 75, 90, 85]

avg = average(marks)

print("Average:", avg)`,

        practiceCode: `def calculate_average(marks):

    # PRACTICE
    # Calculate and return
    # the average

    pass


def grade(average):

    # PRACTICE

    # 90+ -> A
    # 75+ -> B
    # 60+ -> C
    # 40+ -> D
    # Otherwise -> F

    pass


marks = [80, 75, 90, 85]

average = calculate_average(marks)

print("Average:", average)

print("Grade:", grade(average))`,

        algorithm: [
          "Collect marks.",
          "Calculate total.",
          "Calculate average.",
          "Determine grade.",
          "Display the result."
        ],

        problems: [
          "Add student names.",
          "Add five subjects.",
          "Add pass/fail.",
          "Add grades.",
          "Find the topper."
        ],

        tests: [
          {
            input: "[80, 75, 90, 85]",
            expected: "Average = 82.5"
          }
        ],

        quiz: [
          {
            question: "Why should input be validated?",
            options: [
              "To handle invalid data",
              "To make code longer",
              "To remove functions",
              "To stop output"
            ],
            answer: "To handle invalid data",
            explanation:
              "Validation prevents unexpected input from causing problems."
          }
        ]
      }
    ]
  }
};

/* =========================================================
   DATA STRUCTURES
========================================================= */

courseData["Data Structures"] = {
  description:
    "Learn arrays, linked lists, stacks, queues, trees and graphs.",

  lessons: [
    {
      title: "Arrays",
      level: "BEGINNER",
      duration: "90 min",

      overview:
        "Understand arrays, indexing, traversal, searching and common array problems.",

      sections: [
        {
          title: "1. What is an Array?",
          text: `An array stores multiple values under one name.

Example:

int numbers[5] = {
  10, 20, 30, 40, 50
};

Array indexes usually start at 0.

Therefore:

numbers[0] = 10
numbers[1] = 20
numbers[4] = 50`
        },

        {
          title: "2. Traversal",
          text: `Traversal means visiting every element of an array.

A loop is normally used.

If there are n elements, traversal takes O(n) time because every element may need to be visited.`
        }
      ],

      code: `#include <stdio.h>

int main() {

    int numbers[] = {
        10, 20, 30, 40, 50
    };

    int n = 5;

    for(int i = 0; i < n; i++) {
        printf("%d ", numbers[i]);
    }

    return 0;
}`,

      practiceCode: `#include <stdio.h>

int main() {

    int numbers[] = {
        10, 20, 5, 40, 25
    };

    int n = 5;

    int largest = numbers[0];

    // PRACTICE

    // Find the largest
    // element in the array.

    // Then print:
    // Largest = ...

    return 0;
}`,

      algorithm: [
        "Start from the first element.",
        "Assume it is the largest.",
        "Compare every remaining element.",
        "Update largest when a bigger value is found.",
        "Print the largest value."
      ],

      problems: [
        "Find largest element.",
        "Find smallest element.",
        "Calculate array sum.",
        "Reverse an array.",
        "Search for a value."
      ],

      tests: [
        {
          input: "[10, 20, 30, 40]",
          expected: "Largest = 40"
        }
      ],

      quiz: [
        {
          question: "What is the first index of a zero-based array?",
          options: ["0", "1", "-1", "2"],
          answer: "0",
          explanation:
            "Zero-based indexing starts at 0."
        }
      ]
    },

    {
      title: "Linked Lists",
      level: "INTERMEDIATE",
      duration: "100 min",

      overview:
        "Learn nodes, pointers, traversal and linked-list operations.",

      sections: [
        {
          title: "1. What is a Linked List?",
          text: `A linked list consists of nodes.

Each node stores data and a pointer to another node.

A simple list looks like:

10 -> 20 -> 30 -> NULL`
        },

        {
          title: "2. Traversal",
          text: `Start from the head.

Print the current node.

Move to the next node.

Continue until the pointer becomes NULL.`
        }
      ],

      code: `struct Node {

    int data;

    struct Node* next;
};`,

      practiceCode: `#include <stdio.h>
#include <stdlib.h>

struct Node {

    int data;

    struct Node* next;
};

int main() {

    struct Node* first =
        malloc(sizeof(struct Node));

    first->data = 10;

    first->next = NULL;

    // PRACTICE

    // Create a second node.

    // Store 20 in it.

    // Connect first -> second.

    return 0;
}`,

      algorithm: [
        "Create a node.",
        "Allocate memory.",
        "Store data.",
        "Connect nodes using pointers.",
        "Traverse until NULL."
      ],

      problems: [
        "Create a linked list.",
        "Insert at beginning.",
        "Insert at end.",
        "Delete a node.",
        "Search for a value."
      ],

      tests: [
        {
          input: "10 -> 20 -> 30",
          expected: "10 20 30"
        }
      ],

      quiz: [
        {
          question: "What does a linked-list node contain?",
          options: [
            "Data and a link",
            "Only data",
            "Only an index",
            "Only CSS"
          ],
          answer: "Data and a link",
          explanation:
            "A node normally stores data and a pointer/reference."
        }
      ]
    },

    {
      title: "Stacks & Queues",
      level: "INTERMEDIATE",
      duration: "90 min",

      overview:
        "Understand LIFO stacks and FIFO queues and learn their common applications.",

      sections: [
        {
          title: "1. Stack",
          text: `A stack follows LIFO.

LIFO means Last In, First Out.

Common operations:

push
pop
peek`
        },

        {
          title: "2. Queue",
          text: `A queue follows FIFO.

FIFO means First In, First Out.

Common operations:

enqueue
dequeue
front`
        }
      ],

      code: `Stack:

10
20
30 <- TOP

push(40)

10
20
30
40 <- TOP`,

      practiceCode: `#include <stdio.h>

#define SIZE 5

int stack[SIZE];

int top = -1;

void push(int value) {

    // PRACTICE

    // Add value to stack

}

void pop() {

    // PRACTICE

    // Remove top value

}

int main() {

    push(10);
    push(20);
    push(30);

    pop();

    return 0;
}`,

      algorithm: [
        "Initialize top as -1.",
        "For push, increase top.",
        "Store the value.",
        "For pop, decrease top.",
        "Check overflow and underflow."
      ],

      problems: [
        "Implement stack.",
        "Implement queue.",
        "Reverse a string.",
        "Check balanced parentheses.",
        "Implement circular queue."
      ],

      tests: [
        {
          input: "push(10), push(20), pop()",
          expected: "10 remains"
        }
      ],

      quiz: [
        {
          question: "Which principle does a stack follow?",
          options: [
            "FIFO",
            "LIFO",
            "Random",
            "Priority"
          ],
          answer: "LIFO",
          explanation:
            "Stack follows Last In, First Out."
        }
      ]
    },

    {
      title: "Trees",
      level: "INTERMEDIATE",
      duration: "110 min",

      overview:
        "Learn tree terminology, binary trees and tree traversal.",

      sections: [
        {
          title: "1. Tree Basics",
          text: `A tree is a hierarchical data structure.

Important terms:

Root
Parent
Child
Leaf
Edge
Height

The root is the topmost node.`
        },

        {
          title: "2. Binary Trees",
          text: `A binary tree is a tree where each node can have at most two children.

They are commonly called left and right children.`
        }
      ],

      code: `struct Node {

    int data;

    struct Node* left;

    struct Node* right;
};`,

      practiceCode: `struct Node {

    int data;

    struct Node* left;

    struct Node* right;
};

// PRACTICE

// Create a node with value 10.

// Create left child 5.

// Create right child 15.

// Your tree should become:
//
//       10
//      /  \\
//     5    15
`,

      algorithm: [
        "Create the root.",
        "Create child nodes.",
        "Connect left and right pointers.",
        "Traverse the tree.",
        "Process every node."
      ],

      problems: [
        "Create a binary tree.",
        "Preorder traversal.",
        "Inorder traversal.",
        "Postorder traversal.",
        "Find tree height."
      ],

      tests: [
        {
          input: "Root 10, left 5, right 15",
          expected: "Preorder = 10 5 15"
        }
      ],

      quiz: [
        {
          question: "What is the topmost node called?",
          options: [
            "Leaf",
            "Root",
            "Edge",
            "Child"
          ],
          answer: "Root",
          explanation:
            "The topmost node is called the root."
        }
      ]
    },

    {
      title: "Graphs",
      level: "ADVANCED",
      duration: "120 min",

      overview:
        "Learn vertices, edges, graph representation and the foundation of BFS and DFS.",

      sections: [
        {
          title: "1. What is a Graph?",
          text: `A graph represents relationships.

A graph consists of:

Vertices
Edges

For example, cities can be vertices and roads can be edges.`
        },

        {
          title: "2. BFS and DFS",
          text: `BFS means Breadth First Search.

DFS means Depth First Search.

BFS explores level by level.

DFS explores as deeply as possible before backtracking.`
        }
      ],

      code: `void dfs(int node) {

    visited[node] = 1;

    printf("%d ", node);

    for(int i = 0; i < n; i++) {

        if(graph[node][i] &&
           !visited[i]) {

            dfs(i);
        }
    }
}`,

      practiceCode: `#include <stdio.h>

int graph[5][5];

int visited[5];

// PRACTICE

void dfs(int node) {

    // 1. Mark node visited.

    // 2. Print node.

    // 3. Visit every
    // unvisited neighbour.

}

int main() {

    // Create a small graph.

    // Call dfs(0).

    return 0;
}`,

      algorithm: [
        "Choose the starting vertex.",
        "Mark it as visited.",
        "Process the vertex.",
        "Find unvisited neighbors.",
        "Continue recursively for DFS."
      ],

      problems: [
        "Implement DFS.",
        "Implement BFS.",
        "Represent a graph.",
        "Count connected components.",
        "Check whether a path exists."
      ],

      tests: [
        {
          input: "A-B, B-C",
          expected: "Starting A can reach B and C"
        }
      ],

      quiz: [
        {
          question: "What are the main components of a graph?",
          options: [
            "Vertices and edges",
            "Roots and leaves",
            "Arrays and pointers",
            "Stacks and queues"
          ],
          answer: "Vertices and edges",
          explanation:
            "Graphs consist of vertices connected by edges."
        }
      ]
    }
  ]
};

/* =========================================================
   JAVASCRIPT
========================================================= */

courseData.JavaScript = {
  description:
    "Master JavaScript from fundamentals to arrays, objects, functions and projects.",

  lessons: [
    {
      title: "JavaScript Basics",
      level: "BEGINNER",
      duration: "60 min",

      overview:
        "Learn JavaScript syntax and understand how it brings webpages to life.",

      sections: [
        {
          title: "1. JavaScript",
          text: `JavaScript adds logic and interaction to webpages.

It can respond to clicks, perform calculations, change content, validate forms and communicate with servers.`
        }
      ],

      code: `console.log("Hello World");

let name = "Sai";

let age = 20;

console.log(name);
console.log(age);`,

      practiceCode: `console.log("SkillBridge");

// PRACTICE

// 1. Create your name.

// 2. Create your age.

// 3. Create your college.

// 4. Print all three.

// 5. Calculate your age
// after 5 years.`,

      algorithm: [
        "Create variables.",
        "Assign values.",
        "Perform operations.",
        "Display the results."
      ],

      problems: [
        "Print your name.",
        "Add two numbers.",
        "Calculate rectangle area.",
        "Convert minutes to seconds.",
        "Calculate simple interest."
      ],

      tests: [
        {
          input: "10 + 20",
          expected: "30"
        }
      ],

      quiz: [
        {
          question: "Which function prints information?",
          options: [
            "console.log()",
            "print()",
            "echo()",
            "display()"
          ],
          answer: "console.log()",
          explanation:
            "console.log() prints information to the browser console."
        }
      ]
    },

    {
      title: "JavaScript Variables & Data Types",
      level: "BEGINNER",
      duration: "70 min",

      overview:
        "Learn variables, strings, numbers and booleans.",

      sections: [
        {
          title: "1. Variables",
          text: `JavaScript commonly uses let and const.

let allows reassignment.

const prevents reassignment of the variable binding.`
        }
      ],

      code: `const name = "Sai";

let age = 20;

let cgpa = 8.2;

let passed = true;`,

      practiceCode: `const name = "Sai";

let age = 20;

// PRACTICE

// Create:

// college
// branch
// semester
// cgpa

// Then print all values.`,

      algorithm: [
        "Identify the data.",
        "Choose variable names.",
        "Choose let or const.",
        "Store the values.",
        "Print the result."
      ],

      problems: [
        "Create student information.",
        "Calculate average marks.",
        "Create a bill calculator.",
        "Calculate age.",
        "Convert temperature."
      ],

      tests: [
        {
          input: "age = 20",
          expected: "20"
        }
      ],

      quiz: [
        {
          question: "Which keyword is commonly used for a value that should not be reassigned?",
          options: [
            "const",
            "let",
            "fixed",
            "change"
          ],
          answer: "const",
          explanation:
            "const prevents reassignment."
        }
      ]
    },

    {
      title: "JavaScript Functions",
      level: "INTERMEDIATE",
      duration: "80 min",

      overview:
        "Learn functions, parameters, arguments, return values and arrow functions.",

      sections: [
        {
          title: "1. Functions",
          text: `Functions group reusable logic.

They help make programs easier to read, test and maintain.

A function can receive parameters and return a value.`
        }
      ],

      code: `function add(a, b) {

  return a + b;

}

console.log(
  add(10, 20)
);`,

      practiceCode: `function add(a, b) {

  // PRACTICE

  // Return a + b

}


function multiply(a, b) {

  // PRACTICE

  // Return a * b

}


console.log(add(10, 20));

console.log(
  multiply(5, 4)
);`,

      algorithm: [
        "Identify the task.",
        "Create the function.",
        "Add parameters.",
        "Write the logic.",
        "Return the result.",
        "Test the function."
      ],

      problems: [
        "Create addition function.",
        "Create factorial function.",
        "Check prime numbers.",
        "Reverse a string.",
        "Build a calculator."
      ],

      tests: [
        {
          input: "add(10,20)",
          expected: "30"
        }
      ],

      quiz: [
        {
          question: "What does return do?",
          options: [
            "Sends a value back",
            "Deletes a function",
            "Creates HTML",
            "Stops JavaScript"
          ],
          answer: "Sends a value back",
          explanation:
            "return sends a value back to the caller."
        }
      ]
    },

    {
      title: "Arrays & Objects",
      level: "INTERMEDIATE",
      duration: "100 min",

      overview:
        "Learn how JavaScript stores collections and structured information.",

      sections: [
        {
          title: "1. Arrays",
          text: `Arrays store ordered collections.

Example:

const fruits = [
  "Apple",
  "Mango",
  "Orange"
];

Arrays use zero-based indexing.`
        },

        {
          title: "2. Objects",
          text: `Objects store information using key-value pairs.

Example:

const student = {
  name: "Sai",
  age: 20
};`
        }
      ],

      code: `const students = [
  {
    name: "Sai",
    marks: 85
  },

  {
    name: "Rahul",
    marks: 72
  }
];

const passed =
  students.filter(
    student => student.marks >= 40
  );`,

      practiceCode: `const students = [

  {
    name: "Sai",
    marks: 85
  },

  {
    name: "Rahul",
    marks: 32
  },

  {
    name: "Anu",
    marks: 91
  }

];

// PRACTICE

// 1. Find students who passed.

// 2. Create an array
// containing only names.

// 3. Find the highest marks.`,

      algorithm: [
        "Create the data structure.",
        "Choose the required array method.",
        "Process the data.",
        "Store the result.",
        "Display the result."
      ],

      problems: [
        "Find largest number.",
        "Filter passing students.",
        "Create names array.",
        "Find a student.",
        "Calculate average marks."
      ],

      tests: [
        {
          input: "[10,20,30]",
          expected: "Average = 20"
        }
      ],

      quiz: [
        {
          question: "Which method transforms array elements?",
          options: [
            "map()",
            "pop()",
            "push()",
            "find()"
          ],
          answer: "map()",
          explanation:
            "map() creates a new array from transformed elements."
        }
      ]
    },

    {
      title: "Build a JavaScript Project",
      level: "PROJECT",
      duration: "150 min",

      overview:
        "Build a practical task manager using JavaScript.",

      sections: [
        {
          title: "1. Project",
          text: `The task manager allows users to add, complete and delete tasks.

Each task can be represented as an object.

The tasks can be stored inside an array.`
        }
      ],

      code: `let tasks = [];

function addTask(title) {

  const task = {

    id: Date.now(),

    title: title,

    completed: false

  };

  tasks.push(task);
}`,

      practiceCode: `let tasks = [];

function addTask(title) {

  // PRACTICE

  // Create a task object.

  // Add it to tasks.

}


function deleteTask(id) {

  // PRACTICE

  // Remove the task
  // with this id.

}


function completeTask(id) {

  // PRACTICE

  // Mark the task
  // as completed.

}`,

      algorithm: [
        "Create an empty tasks array.",
        "Read task input.",
        "Create a task object.",
        "Add it to the array.",
        "Update tasks when completed.",
        "Delete tasks when requested.",
        "Render the updated list."
      ],

      problems: [
        "Add task priority.",
        "Add categories.",
        "Add search.",
        "Add completed counter.",
        "Save tasks using localStorage."
      ],

      tests: [
        {
          input: "Add Learn JavaScript",
          expected: "Task appears."
        },
        {
          input: "Complete task",
          expected: "Task becomes completed."
        }
      ],

      quiz: [
        {
          question: "What should happen after adding a task?",
          options: [
            "Update the application data and UI",
            "Close the browser",
            "Delete all tasks",
            "Stop JavaScript"
          ],
          answer:
            "Update the application data and UI",
          explanation:
            "Interactive applications update their data and interface."
        }
      ]
    }
  ]
};

/* =========================================================
   CHATBOX
========================================================= */

function ChatBox({ lesson }) {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi! 👋 I'm SkillBridge AI.\n\nAsk me anything about coding, maths, science, engineering, projects, or your current lesson.",
    },
  ]);

  async function sendMessage() {
    const question = input.trim();

    if (!question || loading) return;

    const userMessage = {
      role: "user",
      content: question,
    };

    setMessages((previous) => [...previous, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("https://skillbridge-backend-topaz.vercel.app/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: question,
          lesson: lesson || null,
          history: messages.map((message) => ({
            role: message.role,
            content: message.content,
          })),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "AI request failed");
      }

      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          content: data.answer,
        },
      ]);
    } catch (error) {
      console.error("Chat error:", error);

      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          content:
            "⚠️ I couldn't connect to SkillBridge AI. Please make sure the SkillBridge backend is running.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  }

  return (
    <>
      <button
        className="chat-floating-button"
        onClick={() => setOpen((previous) => !previous)}
      >
        💬
      </button>

      {open && (
        <div className="chat-window">
          <div className="chat-header">
            <div>
              <strong>SkillBridge AI</strong>
              <small>AI Learning Assistant</small>
            </div>

            <button onClick={() => setOpen(false)}>×</button>
          </div>

          <div className="chat-messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={
                  message.role === "user"
                    ? "chat-message user"
                    : "chat-message bot"
                }
              >
                {message.content}
              </div>
            ))}

            {loading && (
              <div className="chat-message bot">Thinking...</div>
            )}
          </div>

          <div className="chat-quick-actions">
            <button
              onClick={() =>
                setInput("Explain this topic to me like a beginner")
              }
            >
              Explain
            </button>

            <button onClick={() => setInput("Give me a simple example")}>
              Example
            </button>

            <button onClick={() => setInput("Give me practice problems")}>
              Practice
            </button>

            <button onClick={() => setInput("Explain this step by step")}>
              Step by step
            </button>
          </div>

          <div className="chat-input-area">
            <textarea
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask SkillBridge AI anything..."
              rows="1"
            />

            <button onClick={sendMessage} disabled={loading}>
              {loading ? "..." : "➤"}
            </button>
          </div>
        </div>
      )}
    </>
  );
}

/* =========================================================
   HOME AI TUTOR
========================================================= */

function HomeAIChat() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text:
        "Hola! 👋 I'm your SkillBridge AI Tutor. Ask me anything about programming, DSA, Python, JavaScript, Web Development, projects or your learning roadmap.",
    },
  ]);

  async function sendMessage(text = input) {
    const question = text.trim();
    if (!question || loading) return;

    setMessages((previous) => [
      ...previous,
      { role: "user", text: question },
    ]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("https://skillbridge-backend-topaz.vercel.app/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: question,
          lesson: null,
          history: messages.map((message) => ({
            role: message.role,
            content: message.text,
          })),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "AI request failed");
      }

      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          text: data.answer || "I didn't receive an answer from the AI.",
        },
      ]);
    } catch (error) {
      console.error("SkillBridge AI error:", error);
      setMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          text:
            "⚠️ I couldn't connect to SkillBridge AI. Make sure your backend is running on port 5001.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(event) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  }

  return (
    <section className="home-ai-section">
      <div className="home-ai-card">
        <div className="home-ai-heading">
          <div>
            <span className="home-ai-label">SKILLBRIDGE AI</span>
            <h2>Your AI Learning Tutor</h2>
            <p>
              Ask questions, get explanations, practice code and plan what to
              learn next.
            </p>
          </div>

          <div className="home-ai-status">
            <span />
            AI ONLINE
          </div>
        </div>

        <div className="home-ai-messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`home-ai-message-row ${message.role}`}
            >
              <div className={`home-ai-message ${message.role}`}>
                {message.text}
              </div>
            </div>
          ))}

          {loading && (
            <div className="home-ai-message-row assistant">
              <div className="home-ai-message assistant ai-thinking">
                Thinking<span>.</span><span>.</span><span>.</span>
              </div>
            </div>
          )}
        </div>

        <div className="home-ai-quick-actions">
          {[
            "Explain DSA simply",
            "Give me Python practice",
            "What should I learn next?",
          ].map((prompt) => (
            <button
              key={prompt}
              onClick={() => sendMessage(prompt)}
              disabled={loading}
            >
              {prompt}
            </button>
          ))}
        </div>

        <div className="home-ai-input-wrap">
          <textarea
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask your AI tutor anything..."
            rows="1"
          />

          <button onClick={() => sendMessage()} disabled={loading}>
            {loading ? "…" : "➤"}
          </button>
        </div>

        <small className="home-ai-hint">
          Press Enter to ask · Shift + Enter for a new line
        </small>
      </div>
    </section>
  );
}

/* =========================================================
   MAIN APP
========================================================= */

function App() {

  const [selectedSkill, setSelectedSkill] =
    useState("");

  const [selectedLesson, setSelectedLesson] =
    useState("");

  const [selectedOption, setSelectedOption] =
    useState("");

  const [answerResult, setAnswerResult] =
    useState("");

  const [completedLessons, setCompletedLessons] =
    useState(() => {

      const saved =
        localStorage.getItem(
          "skillbridge-progress"
        );

      return saved
        ? JSON.parse(saved)
        : [];
    });

  const [quizIndex, setQuizIndex] =
    useState(0);

  const [lessonSearch, setLessonSearch] =
    useState("");

  useEffect(() => {

    localStorage.setItem(
      "skillbridge-progress",
      JSON.stringify(completedLessons)
    );

  }, [completedLessons]);

  const skills = Object.keys(courseData);

  const currentCourse =
    courseData[selectedSkill];

  const currentLesson =
    currentCourse?.lessons.find(
      lesson =>
        lesson.title === selectedLesson
    );

  const totalLessons =
    useMemo(() => {

      return skills.reduce(
        (total, skill) =>
          total +
          courseData[skill].lessons.length,
        0
      );

    }, [skills]);

  const overallProgress =
    Math.round(
      (completedLessons.length /
        totalLessons) *
        100
    );

  function selectSkill(skill) {

    setSelectedSkill(skill);

    setSelectedLesson("");

    setSelectedOption("");

    setAnswerResult("");

    setQuizIndex(0);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  function selectLesson(lesson) {

    setSelectedLesson(
      lesson.title
    );

    setSelectedOption("");

    setAnswerResult("");

    setQuizIndex(0);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  function completeLesson() {

    if (
      selectedLesson &&
      !completedLessons.includes(
        selectedLesson
      )
    ) {

      setCompletedLessons(prev => [
        ...prev,
        selectedLesson
      ]);
    }
  }

  function checkAnswer() {

    if (!selectedOption) {

      setAnswerResult(
        "⚠️ Please select an option."
      );

      return;
    }

    const quiz =
      currentLesson.quiz[quizIndex];

    if (
      selectedOption === quiz.answer
    ) {

      setAnswerResult(
        `Correct! 🎉 ${quiz.explanation}`
      );

      completeLesson();

    } else {

      setAnswerResult(
        "❌ Not quite. Try again."
      );
    }
  }

  function nextLesson() {

    const index =
      currentCourse.lessons.findIndex(
        lesson =>
          lesson.title === selectedLesson
      );

    if (
      index <
      currentCourse.lessons.length - 1
    ) {

      selectLesson(
        currentCourse.lessons[index + 1]
      );

    } else {

      setSelectedLesson("");
    }
  }

  const completedCount =
    currentCourse
      ? currentCourse.lessons.filter(
          lesson =>
            completedLessons.includes(
              lesson.title
            )
        ).length
      : 0;

  const courseProgress =
    currentCourse
      ? Math.round(
          (completedCount /
            currentCourse.lessons.length) *
            100
        )
      : 0;

  /* =====================================================
     LESSON PAGE
  ===================================================== */

  if (
    currentCourse &&
    currentLesson
  ) {

    const lessonIndex =
      currentCourse.lessons.findIndex(
        lesson =>
          lesson.title === selectedLesson
      );

    const quiz =
      currentLesson.quiz[quizIndex];

    return (
      <div className="app">

        <header className="top-navigation">

          <button
            className="brand-button"
            onClick={() => {
              setSelectedSkill("");
              setSelectedLesson("");
            }}
          >
            SkillBridge
          </button>

          <button
            className="back-button"
            onClick={() =>
              setSelectedLesson("")
            }
          >
            ← Roadmap
          </button>

        </header>

        <main className="learning-container">

          <div className="lesson-header">

            <span className="lesson-badge">
              {currentLesson.level}
            </span>

            <span className="lesson-duration">
              ⏱ {currentLesson.duration}
            </span>

            <p className="chapter-label">
              {selectedSkill} · Chapter{" "}
              {lessonIndex + 1}
            </p>

            <h1>
              {currentLesson.title}
            </h1>

            <p className="lesson-overview">
              {currentLesson.overview}
            </p>

          </div>

          <div className="chapter-progress">

            <div className="chapter-progress-top">

              <span>
                Course Progress
              </span>

              <strong>
                {courseProgress}%
              </strong>

            </div>

            <div className="chapter-progress-track">

              <div
                style={{
                  width:
                    `${courseProgress}%`
                }}
              />

            </div>

          </div>

          <div className="textbook-layout">

            <article className="textbook">

              <div className="chapter-introduction">

                <span>
                  CHAPTER INTRODUCTION
                </span>

                <p>
                  {currentLesson.overview}
                </p>

              </div>

              {/* THEORY */}

              {currentLesson.sections.map(
                (section, index) => (

                  <section
                    className="textbook-section"
                    key={section.title}
                  >

                    <div className="section-number">
                      {String(
                        index + 1
                      ).padStart(2, "0")}
                    </div>

                    <div>

                      <h2>
                        {section.title}
                      </h2>

                      {section.text
                        .split("\n\n")
                        .map(
                          (paragraph, i) => (
                            <p key={i}>
                              {paragraph}
                            </p>
                          )
                        )}

                    </div>

                  </section>

                )
              )}

              {/* IMPORTANT CODE */}

              <section className="textbook-section">

                <div className="section-number">
                  💻
                </div>

                <div>

                  <h2>
                    Important Code
                  </h2>

                  <p>
                    Study this example carefully.
                    Try understanding every line
                    before moving on.
                  </p>

                  <pre className="code-block">
                    <code>
                      {currentLesson.code}
                    </code>
                  </pre>

                </div>

              </section>

              {/* PRACTICE CODE */}

              <section className="practice-code-section">

                <div className="practice-code-header">

                  <div>

                    <span>
                      💻 HANDS-ON PRACTICE
                    </span>

                    <h2>
                      Practice Code
                    </h2>

                    <p>
                      Don't just read the code.
                      Try completing it yourself.
                    </p>

                  </div>

                  <div className="practice-code-badge">
                    YOUR TURN
                  </div>

                </div>

                <pre className="practice-code-block">
                  <code>
                    {currentLesson.practiceCode}
                  </code>
                </pre>

                <div className="practice-instruction">

                  <strong>
                    💡 Challenge
                  </strong>

                  <p>
                    Copy this code into your editor,
                    complete the parts marked
                    <strong> PRACTICE</strong>, and
                    run the program yourself.
                  </p>

                </div>

              </section>

              {/* ALGORITHM */}

              <section className="textbook-section">

                <div className="section-number">
                  🧠
                </div>

                <div>

                  <h2>
                    Algorithm / Approach
                  </h2>

                  <p>
                    Before writing a solution,
                    understand the steps required
                    to solve the problem.
                  </p>

                  <ol className="algorithm-list">

                    {currentLesson.algorithm.map(
                      (step, index) => (

                        <li key={index}>

                          <span>
                            {index + 1}
                          </span>

                          {step}

                        </li>

                      )
                    )}

                  </ol>

                </div>

              </section>

              {/* PROBLEMS */}

              <section className="practice-section">

                <div className="practice-heading">

                  <span>
                    🎯 PRACTICE
                  </span>

                  <h2>
                    Practice Problems
                  </h2>

                  <p>
                    Try solving these without
                    looking at the solution.
                  </p>

                </div>

                <div className="problem-grid">

                  {currentLesson.problems.map(
                    (problem, index) => (

                      <div
                        className="problem-card"
                        key={index}
                      >

                        <span>
                          Problem{" "}
                          {String(
                            index + 1
                          ).padStart(2, "0")}
                        </span>

                        <p>
                          {problem}
                        </p>

                      </div>

                    )
                  )}

                </div>

              </section>

              {/* TEST CASES */}

              <section className="tests-section">

                <div className="practice-heading">

                  <span>
                    🧪 TESTING
                  </span>

                  <h2>
                    Test Cases
                  </h2>

                  <p>
                    Check whether your solution
                    produces the expected result.
                  </p>

                </div>

                <div className="test-grid">

                  {currentLesson.tests.map(
                    (test, index) => (

                      <div
                        className="test-card"
                        key={index}
                      >

                        <strong>
                          Test Case{" "}
                          {index + 1}
                        </strong>

                        <div>

                          <span>
                            INPUT
                          </span>

                          <code>
                            {test.input}
                          </code>

                        </div>

                        <div>

                          <span>
                            EXPECTED
                          </span>

                          <code>
                            {test.expected}
                          </code>

                        </div>

                      </div>

                    )
                  )}

                </div>

              </section>

              {/* QUIZ */}

              <section className="quiz-section-new">

                <div className="quiz-top">

                  <span>
                    QUICK CHECK · QUESTION{" "}
                    {quizIndex + 1}/
                    {currentLesson.quiz.length}
                  </span>

                  <h2>
                    Test Your Understanding
                  </h2>

                </div>

                <h3>
                  {quiz.question}
                </h3>

                <div className="quiz-options-new">

                  {quiz.options.map(
                    (option, index) => (

                      <button
                        key={option}
                        className={
                          selectedOption === option
                            ? "quiz-selected"
                            : ""
                        }
                        onClick={() => {
                          setSelectedOption(
                            option
                          );

                          setAnswerResult("");
                        }}
                      >

                        <span>
                          {String.fromCharCode(
                            65 + index
                          )}
                        </span>

                        {option}

                      </button>

                    )
                  )}

                </div>

                <div className="quiz-actions">

                  <button
                    className="primary-button"
                    onClick={checkAnswer}
                  >
                    Check Answer
                  </button>

                  {quizIndex <
                    currentLesson.quiz.length -
                      1 && (

                    <button
                      className="secondary-button"
                      onClick={() => {

                        setQuizIndex(
                          quizIndex + 1
                        );

                        setSelectedOption("");

                        setAnswerResult("");

                      }}
                    >
                      Next Question →
                    </button>

                  )}

                </div>

                {answerResult && (

                  <div
                    className={
                      answerResult.includes(
                        "Correct"
                      )
                        ? "answer-success"
                        : "answer-error"
                    }
                  >
                    {answerResult}
                  </div>

                )}

              </section>

              {/* COMPLETION */}

              <div className="lesson-completion-area">

                {completedLessons.includes(
                  selectedLesson
                ) ? (

                  <div className="completed-message">
                    ✓ Chapter Completed
                  </div>

                ) : (

                  <button
                    className="complete-button"
                    onClick={completeLesson}
                  >
                    ✓ Mark Chapter Complete
                  </button>

                )}

                <button
                  className="next-chapter-button"
                  onClick={nextLesson}
                >
                  {lessonIndex ===
                  currentCourse.lessons.length - 1
                    ? "Finish Course →"
                    : "Next Chapter →"}
                </button>

              </div>

            </article>

            {/* SIDEBAR */}

            <aside className="textbook-sidebar">

              <h3>
                📖 {selectedSkill}
              </h3>

              {currentCourse.lessons.map(
                (lesson, index) => (

                  <button
                    key={lesson.title}
                    className={
                      lesson.title === selectedLesson
                        ? "sidebar-lesson active"
                        : "sidebar-lesson"
                    }
                    onClick={() =>
                      selectLesson(lesson)
                    }
                  >

                    <span>
                      {completedLessons.includes(
                        lesson.title
                      )
                        ? "✓"
                        : String(
                            index + 1
                          ).padStart(2, "0")}
                    </span>

                    <div>

                      <strong>
                        {lesson.title}
                      </strong>

                      <small>
                        {lesson.duration}
                      </small>

                    </div>

                  </button>

                )
              )}

            </aside>

          </div>

        </main>

        {/* CHATBOX */}

        <ChatBox
          lesson={currentLesson}
        />

      </div>
    );
  }

  /* =====================================================
     COURSE ROADMAP
  ===================================================== */

  if (currentCourse) {

    const filteredLessons =
      currentCourse.lessons.filter(
        lesson =>
          lesson.title
            .toLowerCase()
            .includes(
              lessonSearch.toLowerCase()
            )
      );

    return (
      <div className="app">

        <header className="top-navigation">

          <button
            className="brand-button"
            onClick={() =>
              setSelectedSkill("")
            }
          >
            SkillBridge
          </button>

          <button
            className="back-button"
            onClick={() =>
              setSelectedSkill("")
            }
          >
            ← Dashboard
          </button>

        </header>

        <main className="course-page">

          <div className="course-hero">

            <span>
              {currentCourse.lessons.length}
              {" "}CHAPTERS
            </span>

            <h1>
              {selectedSkill}
            </h1>

            <p>
              {currentCourse.description}
            </p>

            <div className="course-progress-large">

              <div>

                <strong>
                  {completedCount}/
                  {currentCourse.lessons.length}
                  {" "}completed
                </strong>

                <strong>
                  {courseProgress}%
                </strong>

              </div>

              <div>

                <div
                  style={{
                    width:
                      `${courseProgress}%`
                  }}
                />

              </div>

            </div>

          </div>

          <div className="roadmap-tools">

            <input
              value={lessonSearch}
              onChange={e =>
                setLessonSearch(
                  e.target.value
                )
              }
              placeholder="Search chapters..."
            />

          </div>

          <div className="chapter-list">

            {filteredLessons.map(
              (lesson, index) => {

                const originalIndex =
                  currentCourse.lessons.findIndex(
                    item =>
                      item.title ===
                      lesson.title
                  );

                const completed =
                  completedLessons.includes(
                    lesson.title
                  );

                const previousLesson =
                  currentCourse.lessons[
                    originalIndex - 1
                  ];

                const unlocked =
                  originalIndex === 0 ||
                  completedLessons.includes(
                    previousLesson?.title
                  );

                return (

                  <button
                    key={lesson.title}
                    disabled={!unlocked}
                    className={
                      unlocked
                        ? "chapter-card"
                        : "chapter-card locked"
                    }
                    onClick={() =>
                      selectLesson(lesson)
                    }
                  >

                    <div className="chapter-number">
                      {completed
                        ? "✓"
                        : String(
                            index + 1
                          ).padStart(2, "0")}
                    </div>

                    <div className="chapter-info">

                      <span>
                        {lesson.level}
                      </span>

                      <h2>
                        {lesson.title}
                      </h2>

                      <p>
                        {lesson.overview}
                      </p>

                      <small>
                        ⏱ {lesson.duration}
                        {" · "}
                        {lesson.problems.length}
                        {" "}practice problems
                      </small>

                    </div>

                    <div className="chapter-status">

                      {completed
                        ? "✓ Completed"
                        : unlocked
                        ? "Start →"
                        : "🔒 Locked"}

                    </div>

                  </button>

                );
              }
            )}

          </div>

        </main>

      </div>
    );
  }

  /* =====================================================
     DASHBOARD
  ===================================================== */

  return (
    <div className="app">

      <header className="hero-new">

        <div className="hero-content">

          <span className="brand-label">
            SKILLBRIDGE
          </span>

          <h1 className="hero-title">
            <span>Learn.</span>
            <span>Build.</span>
            <span className="grow-text">Grow.</span>
            <small>~Sai Bhagirath</small>
          </h1>

          <p>
            Learn programming like a textbook,
            practice like a developer and build
            real projects.
          </p>

        </div>

      </header>

      <HomeAIChat />

      <main className="dashboard-new">

        <section className="dashboard-overview">

          <div>

            <span>
              YOUR LEARNING JOURNEY
            </span>

            <h2>
              {overallProgress}% Complete
            </h2>

            <p>
              {completedLessons.length} of{" "}
              {totalLessons} chapters completed
            </p>

          </div>

          <div className="overall-circle">

            <strong>
              {overallProgress}%
            </strong>

          </div>

        </section>

        <section>

          <div className="section-title">

            <span>
              01 · LEARNING PATHS
            </span>

            <h2>
              Choose Your Skill
            </h2>

            <p>
              Start from the fundamentals and
              progress chapter by chapter.
            </p>

          </div>

          <div className="skill-grid-new">

            {skills.map(
              (skill, index) => {

                const course =
                  courseData[skill];

                const completed =
                  course.lessons.filter(
                    lesson =>
                      completedLessons.includes(
                        lesson.title
                      )
                  ).length;

                const progress =
                  Math.round(
                    (completed /
                      course.lessons.length) *
                      100
                  );

                return (

                  <button
                    className="skill-card-new"
                    key={skill}
                    onClick={() =>
                      selectSkill(skill)
                    }
                  >

                    <span className="skill-index">
                      0{index + 1}
                    </span>

                    <div className="skill-card-content">

                      <h3>
                        {skill}
                      </h3>

                      <p>
                        {course.description}
                      </p>

                      <div className="skill-meta">

                        <span>
                          {course.lessons.length}
                          {" "}chapters
                        </span>

                        <span>
                          {progress}% complete
                        </span>

                      </div>

                      <div className="skill-bar">

                        <div
                          style={{
                            width:
                              `${progress}%`
                          }}
                        />

                      </div>

                      <strong>
                        Start Learning →
                      </strong>

                    </div>

                  </button>

                );
              }
            )}

          </div>

        </section>

      </main>

    </div>
  );
}

export default App;