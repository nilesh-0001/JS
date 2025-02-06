// In this session we are gonna talk about the Event Loops which is a very Important Topic

/*
WHAT IS JAVASCRIPT?

· JavaScript is a single threaded, non blocking, asynchronous concurrent
language
· It has a call stack, an event loop and a callback queue + other APIs
· V8 is the JavaScript runtime which has a call stack and a heap
. The heap is used for memory allocation and the stack holds the execution
context
. DOM, setTimeout, XML HttpRequest don't exist in V8 source code
*/

/*
ASYNCHRONOUS  CALLBACKS
. Sometimes the JavaScript code can take a lot of time and this can block the
page re render
· JavaScript has asynchronous callbacks for non blocking behaviour
· JavaScript runtime can do only one thing at a time
. Browser gives us other things which work along with the runtime like Web
APIs.
· In node.js these are available as C++ APIs

/*
TASK QUEUE

. JavaScript can do only one thing at a time
. The rest are queued to the task queue waiting to be executed
. When we run setTimeout, webapis will run a timer and push the function
provided to setTimeout to the task queue once the timer ends
. These tasks will be pushed to the stack where they can executed

*/

/*
THE EVENT LOOP

· JavaScript has a runtime model based on an event loop, which is responsible
for executing the code, collecting and processing events, and executing queued
sub-tasks
. The event loop pushes the tasks from the task queue to the call stack
· setTimeout(func1, 0) can be used to defer a function until all the pending tasks
(so far) have been executed
. We can see how these things work in action by visiting

*/


  setTimeout(function timer() {
    console.log("You clicked the button!");
  }, 2000);
console.log("Hi!");

setTimeout(function timeout() {
  console.log("Click the button!");
}, 5000);

console.log("Welcome to loupe.");
