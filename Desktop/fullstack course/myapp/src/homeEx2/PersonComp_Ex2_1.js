// @author Tamar Cohen

import { useState } from "react";

function PersonComp() {
  const [data, setData] = useState({ name: "Tamar", age: 22 });
  const [isSwap, setIsSwap] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setIsSwap(!isSwap);
        }}
      >
        Swap
      </button>
      <br />
      Name : <br />
      {!isSwap ? <span> {data.name} </span> : <span>{data.age} </span>}
      <br />
      <br />
      Age : <br />
      {isSwap ? <span>{data.name} </span> : <span>{data.age} </span>}
    </div>
  );
}

export default PersonComp;

// @author Tamar Cohen
