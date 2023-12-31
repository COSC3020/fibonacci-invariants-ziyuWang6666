[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11861570&assignment_repo_type=AssignmentRepo)
# Fibonacci Invariants

Recall the definition of the Fibonacci series: the first number is 0, the second
1, and each subsequent number is the sum of the two numbers preceding it.
Implement a function that computes the Fibonacci numbers recursively, storing
the results in an array.

For example, the return value of `fib(7)` is the following array:

| index |  0  |  1  |  2  |  3  |  4  |  5  |  6  |  7  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- |
| value |  0  |  1  |  1  |  2  |  3  |  5  |  8  |  13 |

Add your code in `code.js`. Test your new function; I've provided some basic
testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

## Invariant
What is a good invariant for your recursive implementation of `fib()`
i.e. something that is always true at the beginning of the recursive call?

Hint: Think about what the "state of the world" is here and what you can say
about it at the start of each recursive call.

Describe your reasoning and the conclusion you've come to. Your reasoning is the
most important part. You do not need to prove that the invariant is correct. Add
your answer to this markdown file.


## Invariant Answer
At the beginning of the function, a good invariant for my implementation should be s-1, "At this point, the array contains the each element of the Fibonacci Sequence up to value s-1."

At the end of recursive of fib(), just before returning the array, the invariant is s, "At this stage, the array includes every element of the Fibonacci Sequence up to value s."


#### explain
The original Fibonacci function always takes two functions recursively executed: fib(n-1)+fib(n-2). So, asymptotically it is T(n) = T(n-1)+T(n-2)+C

Right now, we just implement one recursive function fib(n-1), and then add the two previous numbers' results as the new number in the Fibonacci series. So, asymtocially it is T(n) = T(n-1) + C. It's much faster and more efficient than the original one.

//Invariant get help from chatGPT
