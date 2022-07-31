import { Routes, Route, Link } from "react-router-dom";
import FirstChild from "./firstChild";
import SecondChild from "./secondChild";

function Parent() {
  return (
    <div>
      <Link to="/first">first</Link>
      <br />
      <Link to="/second">second</Link>

      <Routes>
        <Route path="/first" element={<FirstChild />} />
        <Route path="/second" element={<SecondChild />} />
      </Routes>
    </div>
  );
}

export default Parent;
