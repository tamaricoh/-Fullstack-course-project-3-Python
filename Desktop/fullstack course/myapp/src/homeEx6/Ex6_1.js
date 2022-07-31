// @author Tamar Cohen

import axios from "axios";
import { useState } from "react";

function Ex6_1Comp(props) {
  const [user, setUser] = useState([]);
  const [id, setId] = useState(0);
  const [todosTitle, setTodosTitle] = useState([]);
  const getById = async () => {
    let resp = await axios.get(
      "https://jsonplaceholder.typicode.com/users/" + id
    );
    setUser(resp.data);

    if (resp.data.name.startsWith("E")) {
      resp = await axios.get(
        "https://jsonplaceholder.typicode.com/todos?userId=" + id
      );
      let todos = resp.data;
      setTodosTitle(todos.map((e) => e.title));
    } else setTodosTitle([]);

    console.table(todosTitle);
  };

  return (
    <div>
      <h1>Ex6_1</h1>
      ID :{" "}
      <input
        type="text"
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <br />
      <br />
      <button onClick={getById}>click</button>
      <br />
      <br />
      {user.name}
      <br />
      {user.email}
      <ul>
        {todosTitle.map((element) => {
          return <li>{element}</li>;
        })}
      </ul>
    </div>
  );
}

export default Ex6_1Comp;

// @author Tamar Cohen
