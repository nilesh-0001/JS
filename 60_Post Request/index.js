// In this session we are gonna talk about the Post Request
const createToDo = async (todo) => {
  let Data = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(todo),
  };
  let x = await fetch("https://jsonplaceholder.typicode.com/posts", Data);
  let response = await x.json();
  return response;
};
const getTodo = async (id) => {
  let response = await fetch("https://jsonplaceholder.typicode.com/posts/" + id)
    let r = await response.json()
    return r
    
};
const mainf = async () => {
  let todo = {
    title: "NilesH",
    body: "BishT",
    userId: 170,
  };
  let todo1 = await createToDo(todo);
  console.log(todo1);
  console.log(await getTodo(45))
};

mainf();
