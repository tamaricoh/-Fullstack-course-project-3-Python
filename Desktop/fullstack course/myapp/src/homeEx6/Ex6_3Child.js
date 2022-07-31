// @author Tamar Cohen

import axios from "axios";
import { useState } from "react";
import Ex6_3T from "./Ex6_3Tasks";

function Ex6_3C(props) {
  const [True, setTrue] = useState(false);
  const [Tasks, setTasks] = useState([]);

  return (
    <div style={{ border: "1px solid black" }}>
      User ID : {props.userInfo.id}
      <br />
      Name : {props.userInfo.name}
      <br />
      Email : {props.userInfo.email}
      <br />
      <input
        type="button"
        value="Tasks"
        onClick={async () => {
          let resp = await axios.get(
            "https://jsonplaceholder.typicode.com/todos?userId=" +
              props.userInfo.id
          );
          setTasks(resp.data);
        }}
      />
      {Tasks.length > 0 ? <Ex6_3T taskInfo={Tasks.splice(0, 3)} /> : null}
    </div>
  );
}

export default Ex6_3C;

// @author Tamar Cohen
