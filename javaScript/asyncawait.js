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
