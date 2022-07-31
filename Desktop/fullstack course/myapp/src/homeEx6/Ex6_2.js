// @author Tamar Cohen

import { useState } from "react";
import utils from "./Ex6_2utils";

function Ex6_2() {
  const [id, setId] = useState(0);
  const [info, setInfo] = useState({ Todos: [] });
  const getInfo = async () => {
    let resp = await utils.getNameAndEmail(id);
    let infoTemp = { Name: resp.data.name, Email: resp.data.email };
    resp = await utils.getTodos(id);
    let titles = resp.data;
    titles = titles.map((e) => e.title);
    titles = titles.splice(0, 5);
    infoTemp = {
      ...infoTemp,
      Todos: titles,
    };
    console.log(titles);
    resp = await utils.getPosts(id);
    infoTemp = { ...infoTemp, Post: resp.data[0].title };
    setInfo(infoTemp);
  };

  return (
    <div>
      <input type="text" onChange={(e) => setId(e.target.value)} />
      <br />
      <button onClick={getInfo}>Click</button>
      <br />
      <br />
      Name : <br /> {info.Name}
      <br />
      <br />
      Email : <br /> {info.Email}
      <br />
      <br />
      Todos :{" "}
      <ul>
        {info.Todos.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
      <br />
      Post : <br /> {info.Post}
    </div>
  );
}

export default Ex6_2;

// @author Tamar Cohen
