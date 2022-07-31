// @author Tamar Cohen

import { useState } from "react";

function Ex3_4() {
  const [data, setData] = useState([
    { name: "Dana", age: 20, city: "Haifa" },
    { name: "Ron", age: 22, city: "Tel Aviv" },
    { name: "Dov", age: 31, city: "Ashdod" },
    { name: "Vered", age: 19, city: "Eilat" },
  ]);
  const txtStyle = {
    float: "left",
  };
  return (
    <div className="App" style={txtStyle}>
      {data.map((x, index) => {
        return (
          <ul key={index}>
            <li>{x.name}</li>

            <ul>
              <li>Age : {x.age}</li>
              <li>City : {x.city}</li>
            </ul>
          </ul>
        );
      })}
    </div>
  );
}
export default Ex3_4;

// @author Tamar Cohen
