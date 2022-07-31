// @author Tamar Cohen

import { Routes, Route, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Ex9_1user from "./Ex9_1user";
import Ex9_2posts from "./Ex9_2posts";
import Ex9_2todos from "./Ex9_2todos";

function Ex9_1users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let resp = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(resp.data);
    };
    getData();
  }, []);

  return (
    <div>
      <div style={{ float: "left", width: "50%" }}>
        <ul>
          {users.map((x) => {
            return (
              <li key={x.id} style={{ textAlign: "left" }}>
                <Link to={"/user/" + x.id}>{x.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div
        style={{
          float: "right",
          width: "45%",
          padding: "20px",
          textAlign: "left",
        }}
      >
        <Routes>
          <Route path="/user/:id" element={<Ex9_1user />}>
            <Route path="posts" element={<Ex9_2posts />} />
            <Route path="todos" element={<Ex9_2todos />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default Ex9_1users;

// @author Tamar Cohen
