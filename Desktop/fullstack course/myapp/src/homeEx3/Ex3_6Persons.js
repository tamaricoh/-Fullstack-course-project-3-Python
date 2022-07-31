// @author Tamar Cohen

import { useState } from "react";
import Ex3_6 from "./Ex3_6Person";

function Ex3_6P() {
  const [data] = useState([
    {
      name: "Avi",
      Tasks: [
        { title: "Task A", completed: true },
        { title: "Task B", completed: false },
      ],
    },
    {
      name: "Dana",
      Tasks: [
        { title: "Task C", completed: false },
        { title: "Task D", completed: true },
      ],
    },
  ]);

  return (
    <div className="App" style={{ width: "500px", border: "10px solid green" }}>
      <h2>Persond List :</h2>
      {data.map((item, index) => {
        return <Ex3_6 key={index} data={item} />;
      })}
    </div>
  );
}
export default Ex3_6P;

// @author Tamar Cohen
