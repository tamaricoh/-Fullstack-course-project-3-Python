// @author Tamar Cohen

import { useState } from "react";
import Ex3_6T from "./Ex3_6Task";

function Ex3_6(props) {
  const [tasksList, setTasksList] = useState(props.data.Tasks);
  return (
    <div className="App" style={{ width: "400px", border: "10px solid red" }}>
      <h2>{props.data.name}</h2>
      {tasksList.map((item, index) => (
        <Ex3_6T key={index} data={item} />
      ))}
    </div>
  );
}
export default Ex3_6;

// @author Tamar Cohen
