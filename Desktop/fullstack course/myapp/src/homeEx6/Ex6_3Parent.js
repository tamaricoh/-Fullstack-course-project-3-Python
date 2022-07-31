// @author Tamar Cohen

import axios from "axios";
import { useState } from "react";
import Ex6_3C from "./Ex6_3Child";

function Ex6_3P() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    let resp = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUsers(resp.data);
  };
  return (
    <div>
      <h3> Click to get Data</h3>
      <button onClick={getUsers}>Click</button>
      {users.map((e, index) => {
        return <Ex6_3C key={index} userInfo={e} />;
      })}
    </div>
  );
}

export default Ex6_3P;

// @author Tamar Cohen
