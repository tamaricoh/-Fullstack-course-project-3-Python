// @author Tamar Cohen

import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Ex9_3s3() {
  const navigate = useNavigate();
  const [city, setCity] = useState("");

  const next = () => {
    sessionStorage["city"] = city;
    navigate("/s4");
  };
  return (
    <div style={{ backgroundColor: "blue" }}>
      <select name="city" onChange={(e) => setCity(e.target.value)}>
        <option selected="selected" value=""></option>
        <option value="Tel Aviv">Tel Aviv</option>
        <option value="Jerusalem">Jerusalem</option>
      </select>
      <input type="button" value="Next" onClick={next} />
    </div>
  );
}

export default Ex9_3s3;

// @author Tamar Cohen
