import { Link } from "react-router-dom";

function FirstChild() {
  return (
    <div style={{ backgroundColor: "red" }}>
      first
      <br />
      <Link to="/second">go to second</Link>
    </div>
  );
}

export default FirstChild;
