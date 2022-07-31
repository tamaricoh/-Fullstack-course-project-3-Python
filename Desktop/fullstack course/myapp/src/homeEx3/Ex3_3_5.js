// @author Tamar Cohen

import { useState } from "react";

function Ex3_3_5() {
  const [data, setData] = useState([
    { name: "Dana", age: 20, city: "Haifa" },
    { name: "Ron", age: 22, city: "Tel Aviv" },
    { name: "Dov", age: 31, city: "Ashdod" },
    { name: "Vered", age: 19, city: "Eilat" },
  ]);

  const [tempName, setTempName] = useState();
  const [tempAge, setTempAge] = useState();
  const [tempCity, setTempCity] = useState();

  const addToTable = () => {
    setData([...data, { name: tempName, age: tempAge, city: tempCity }]);
  };

  return (
    <div className="App">
      <table border={1}>
        <tr>
          <td>Name</td>
          <td>Age</td>
          <td>City</td>
        </tr>
        {data.map((x, index) => {
          return (
            <tr key={index}>
              <td>{x.name}</td>
              <td>{x.age}</td>
              <td>{x.city}</td>
            </tr>
          );
        })}
      </table>
      Name :
      <br />
      <input type="text" onChange={(e) => setTempName(e.target.value)} />
      <br />
      <br />
      Age :
      <br />
      <input
        type="number"
        onChange={(e) => setTempAge(parseInt(e.target.value))}
      />
      <br />
      <br />
      City :
      <br />
      <input type="text" onChange={(e) => setTempCity(e.target.value)} />
      <br />
      <br />
      <button onClick={addToTable}>Add</button>
    </div>
  );
}
export default Ex3_3_5;

// @author Tamar Cohen
