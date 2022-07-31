// @author Tamar Cohen

import { useDispatch } from "react-redux";
import { useState } from "react";
import Ex10_1users from "./Ex10_1users";

function Ex10_1user() {
  const dispatach = useDispatch();
  const [user, setUser] = useState({ id: 0, fname: "", lname: "", age: 0 });

  return (
    <div style={{ border: "3px solid orange", textAlign: "left" }}>
      ID :{" "}
      <input
        type="text"
        onChange={(e) => setUser({ ...user, id: +e.target.value })}
      />
      <br />
      First Name :{" "}
      <input
        type="text"
        onChange={(e) => setUser({ ...user, fname: e.target.value })}
      />
      <br />
      Last Name :{" "}
      <input
        type="text"
        onChange={(e) => setUser({ ...user, lname: e.target.value })}
      />
      <br />
      Age :{" "}
      <input
        type="text"
        onChange={(e) => setUser({ ...user, age: +e.target.value })}
      />
      <br />
      <input
        type="button"
        value="Add"
        onClick={() => dispatach({ type: "ADD", payload: user })}
      />
      <input
        type="button"
        value="Update"
        onClick={() => dispatach({ type: "UPDATE", payload: user })}
      />
      <input
        type="button"
        value="Delete"
        onClick={() => dispatach({ type: "DELETE", payload: user.id })}
      />
      <br />
      <br />
      <Ex10_1users />
    </div>
  );
}

export default Ex10_1user;

// @author Tamar Cohen
