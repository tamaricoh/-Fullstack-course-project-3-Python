// @author Tamar Cohen

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Ex9_2todos() {
  const [todos, setTodos] = useState([]);
  const id = [...useParams().id];

  useEffect(() => {
    const getData = async () => {
      let resp = await axios.get(
        "https://jsonplaceholder.typicode.com/todos?userId=" + id[0]
      );
      setTodos(resp.data);
    };
    getData();
  }, []);
  return (
    <div style={{ backgroundColor: "orange", width: "200px" }}>
      <ul>
        {todos.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default Ex9_2todos;

// @author Tamar Cohen
