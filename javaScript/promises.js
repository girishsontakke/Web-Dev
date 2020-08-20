asyncFunc = (work) => {
  return new Promise((resolve, reject) => {
    if (work === "") reject("Nothing");
    setTimeout(() => {
      resolve(work);
    }, 1000);
  });
};

asyncFunc("work1") // Task 1
  .then(
    (result) => {
      console.log(result);
      return asyncFunc("");
    },
    (error) => {
      console.log(error);
    }
  )
  .then(
    (result) => {
      console.log(result);
    },
    (error) => {
      console.log(error);
    }
  );
console.log("End");
