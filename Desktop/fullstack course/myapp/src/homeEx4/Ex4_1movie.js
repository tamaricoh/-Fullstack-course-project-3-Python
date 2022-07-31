import { useState } from "react";

function Ex4_1(props) {
  const [data, setData] = useState();

  return (
    <div style={{ width: "300px", border: "10px solid blue" }}>
      <h4>Name : {props.data.name}</h4>
      <img src={props.data.pic} />
    </div>
  );
}

export default Ex4_1;
