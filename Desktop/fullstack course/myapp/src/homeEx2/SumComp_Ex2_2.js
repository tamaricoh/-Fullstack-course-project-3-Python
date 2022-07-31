import { useState } from "react";

function SumComp() {
  const [sum, setSum] = useState(0);
  const [add, setAdd] = useState(0);
  return (
    <div>
      num :{" "}
      <input type="number" onChange={(e) => setAdd(parseInt(e.target.value))} />
      <br />
      <button onClick={() => setSum(sum + add)}>Add</button>
      <br />
      Sum :{sum}
    </div>
  );
}

export default SumComp;
