// @author Tamar Cohen

import { useState } from "react";

function Ex3() {
  const [name, setNsme] = useState("");
  const [age, setAge] = useState(0);
  const [swap, setSwap] = useState(false);
  return (
    <div>
      Name :{" "}
      <input
        type="text"
        onChange={(e) => {
          if (e.target.value.length > 4) {
            setSwap(!swap);
          }
          setNsme(e.target.value);
        }}
      />
      <br />
      Age :{" "}
      <input
        type="number"
        onChange={(e) => {
          if (e.target.value.length > 4) {
            setSwap(!swap);
          }
          setAge(e.target.value);
        }}
      />
      <br />
      {swap ? <span>Name : {name}</span> : <span>Age : {age}</span>}
      <br />
      {!swap ? <span>Name : {name}</span> : <span>Age : {age}</span>}
      <br />
      <button
        onClick={() => {
          setSwap(!swap);
        }}
      >
        Click
      </button>
    </div>
  );
}

export default Ex3;

// @author Tamar Cohen
