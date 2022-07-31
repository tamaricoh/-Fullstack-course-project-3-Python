import { useState } from "react";

function Ex4_2ChildComp(props) {
  const [data, setData] = useState({
    name: "",
    age: 0,
    city: "",
    Adult: "",
  });
  return (
    <div style={{ background: "grey" }}>
      Name :{" "}
      <input
        type="text"
        onChange={(e) => {
          setData({ ...data, name: e.target.value });
        }}
      />
      <br />
      Age :{" "}
      <input
        type="number"
        onChange={(e) => {
          setData({ ...data, age: e.target.value });
        }}
      />
      <br />
      City :{" "}
      <select
        onChange={(e) => {
          setData({ ...data, city: e.target.value });
        }}
      >
        <option value="Haifa">Haifa</option>
        <option value="Beer sheva">Beer sheva</option>
      </select>
      <br />
      Is Adult :{" "}
      <input
        type="checkbox"
        onChange={(e) => {
          setData({ ...data, Adult: e.target.checked });
          console.log(e.target.checked);
        }}
      />
      <br />
      <input type="button" value="Add" onClick={() => props.callback(data)} />
    </div>
  );
}

export default Ex4_2ChildComp;
