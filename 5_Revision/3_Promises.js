console.log("Promises");

//Without Promise

const fun1 = () => {
  setTimeout(() => {
    console.log("Task one");
  }, 2000);
};

const fun2 = () => {
  return () => {
    console.log("work 2");
  };
};

// Example usage:
// Replace fun1 with the result of calling fun2
fun2();

// Simulating asynchronous functions with setTimeout
function stepOne(callback) {
  setTimeout(function () {
    console.log("Step One");
    callback();
  }, 1000);
}

function stepTwo(callback) {
  setTimeout(function () {
    console.log("Step Two");
    callback();
  }, 1000);
}

function stepThree(callback) {
  setTimeout(function () {
    console.log("Step Three");
    callback();
  }, 1000);
}

// Callback hell
stepOne(function () {
  stepTwo(function () {
    stepThree(function () {
      console.log("All steps completed!");
    });
  });
});

//Promise

const PromiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve();
    reject();
  }, 2000);
});

PromiseOne.then((data) => {
  console.log("Promise is resolve");
})
  .catch((err) => {
    console.log("Promise is rejected");
  })
  .finally(() => {
    console.log("After either Promise Resolve or Rejected");
  });

new Promise((res, rej) => {
  setTimeout(() => {
    console.log("task 1");
    res();
  }, 1000);
}).then(() => {
  setTimeout(() => {
    console.log("task 2");
  }, 1000);
});

// Promise Handle by async await

const trycatchPromise = new Promise((res, rej) => {
  let err = false;
  if (err) {
    res("Resolve");
  } else {
    rej("Rejected");
  }
});

async function PromiseHandle() {
  try {
    const res = await trycatchPromise;
    console.log(res);
  } catch (error) {
    console.log("error");
  }
}

PromiseHandle();
