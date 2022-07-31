// @author Tamar Cohen

import { useParams, Link, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Ex9_1user(props) {
  const [user, setUser] = useState({});
  const id = [useParams().id];

  useEffect(() => {
    const getData = async () => {
      let resp = await axios.get(
        "http://jsonplaceholder.typicode.com/users/" + id[0]
      );
      setUser(resp.data);
    };
    getData();
  }, id);
  return (
    <div style={{ backgroundColor: "yellow", width: "300px" }}>
      ID : {id[0]}
      <br />
      Name : {user.name}
      <br />
      Email : {user.email}
      <br />
      <Link to="posts">Get Posts</Link>
      <br />
      <Link to="todos">Get Todos</Link>
      <Outlet />
    </div>
  );
}

export default Ex9_1user;

// @author Tamar Cohen
