// @author Tamar Cohen

import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Ex9_3s2() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");

  const navigate = useNavigate();

  const next = () => {
    sessionStorage["fname"] = fName;
    sessionStorage["lname"] = lName;
    navigate("/s3");
  };

  return (
    <div style={{ backgroundColor: "pink" }}>
      <form>
        First Name : &emsp;
        <input
          type="text"
          onChange={(e) => setFName(e.target.value)}
          required
        />
        <br />
        Last Name : &emsp;
        <input type="text" onChange={(e) => setLName(e.target.value)} />
        <br />
        <input type="submit" value="Next" onClick={next} />
      </form>
    </div>
  );
}

export default Ex9_3s2;

// @author Tamar Cohen
