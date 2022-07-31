import { useState } from "react";
import Ex4_2ChildComp from "./Ex4_2Child";

function Ex4_2ParentComp(props) {
  const [datas, setDatas] = useState([]);

  return (
    <div style={{ background: "yellow" }}>
      <h1>Parent Component</h1>

      <ul>
        {datas.map((item, index) => {
          return (
            <li key={index}>
              {item.name} is {item.age} years old, lives in {item.city} and He
              is {item.Adult ? " an adult" : " not an adult"}
            </li>
          );
        })}
      </ul>
      <Ex4_2ChildComp callback={(data) => setDatas([...datas, data])} />
    </div>
  );
}

export default Ex4_2ParentComp;
