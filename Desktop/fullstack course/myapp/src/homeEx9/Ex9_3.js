// @author Tamar Cohen

import { Routes, Route } from "react-router-dom";
import Ex9_3s1 from "./Ex9_3s1";
import Ex9_3s2 from "./Ex9_3s2";
import Ex9_3s3 from "./Ex9_3s3";
import Ex9_3s4 from "./Ex9_3s4";

function Ex9_3() {
  return (
    <div style={{ backgroundColor: "grey" }}>
      <h2>Web</h2>

      <Routes>
        <Route path="/" element={<Ex9_3s1 />} />
        <Route path="/s2" element={<Ex9_3s2 />} />
        <Route path="/s3" element={<Ex9_3s3 />} />
        <Route path="/s4" element={<Ex9_3s4 />} />
      </Routes>
    </div>
  );
}

export default Ex9_3;

// @author Tamar Cohen
