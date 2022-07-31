// @author Tamar Cohen

import axios from "axios";
import { useState, useEffect } from "react";

function Ex8_1C(props) {
  const [todo, setTodo] = useState([]);

  useEffect(() => {
    {
      async function getData() {
        let resp = await axios.get(
          "https://jsonplaceholder.typicode.com/todos?userId=" + props.userId
        );
        let todos = resp.data.splice(0, 3).map((x) => x.title);
        setTodo(todos);
      }
      getData();
    }
  }, [props.userId]);

  const getTodos = async () => {
    let resp = await axios.get(
      "https://jsonplaceholder.typicode.com/todos?userId=" + props.userId
    );
    setTodo([resp.data]);
  };

  return (
    <div>
      <ul>
        {todo.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default Ex8_1C;

// @author Tamar Cohen
