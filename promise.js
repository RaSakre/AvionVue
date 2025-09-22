// const response = fetch('https://dummyjson.com/products/1');

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const result = Math.random(0, 1);
    if (result === 1) {
      resolve(result.data);
    } else {
      reject('error');
    }
  }, 1000);
});


const response = await promise.then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
});


