// @author Tamar Cohen

import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Ex9_3s1() {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const next = () => {
    sessionStorage["name"] = name;
    navigate("/s2");
  };

  return (
    <div style={{ backgroundColor: "orange" }}>
      <h1>Welcome page</h1>
      Name : <input type="text" onChange={(e) => setName(e.target.value)} />
      <br />
      <input type="button" value="Start" onClick={next} />
    </div>
  );
}

export default Ex9_3s1;

// @author Tamar Cohen
