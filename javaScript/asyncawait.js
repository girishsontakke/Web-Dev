urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const getData = async () => {
  const data = await Promise.all(
    urls.map(async (url) => {
      const resp = await fetch(url);
      const result = await resp.json();
      return result;
    })
  );
  data.forEach((d) => console.log(d));
};

// ES8 feature for await of
const getData2 = async () => {
  const arrayOfPromises = urls.map(async (url) => await fetch(url));
  for await (let promise of arrayOfPromises) {
    const data = await promise.json();
    console.log(data);
  }
};
