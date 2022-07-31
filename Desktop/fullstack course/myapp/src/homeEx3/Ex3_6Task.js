// @author Tamar Cohen

import { useState } from "react";

function Ex3_6T(props) {
  const [tasksList, setTasksList] = useState(props.data.Tasks);
  return (
    <div className="App" style={{ width: "300px", border: "10px solid blue" }}>
      <h4>Title : {props.data.title}</h4>
      <h4>Completed : {props.data.completed.toString()}</h4>
    </div>
  );
}
export default Ex3_6T;

// @author Tamar Cohen
