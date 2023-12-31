console.log("call Stack");

// function one() {
//   console.log("one");
// }

// function Two() {
//   console.log("Two");
// }

// function Three() {
//   console.log("Three");
// }

// one();
// Two();
// Three();
// Call stack is a data structure that stores the call to functions in execution order, each function invocation adds a new frame to the top of

function one() {
  console.log("one");
  Two();
}

function Two() {
  console.log("Two");
  Three();
}

function Three() {
  console.log("Three");
}

one();
Two();
Three();
