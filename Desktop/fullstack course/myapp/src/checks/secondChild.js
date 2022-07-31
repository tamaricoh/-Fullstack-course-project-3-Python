import { Link } from "react-router-dom";

function SecondChild() {
  return (
    <div style={{ backgroundColor: "yellow" }}>
      second
      <br />
      <Link to="/first">go to first</Link>
    </div>
  );
}

export default SecondChild;
