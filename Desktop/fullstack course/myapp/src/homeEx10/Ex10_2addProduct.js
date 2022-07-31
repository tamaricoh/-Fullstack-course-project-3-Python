// @author Tamar Cohen

import { useDispatch } from "react-redux";
import { useState } from "react";

function Ex10_2AP() {
  const dispatach = useDispatch();
  const [product, setProduct] = useState({ name: "", price: 0 });

  return (
    <div style={{ border: "3px solid red" }}>
      Order New Product
      <br />
      Name :{" "}
      <input
        type="text"
        onChange={(e) => setProduct({ ...product, name: e.target.value })}
      />
      <br />
      Price :{" "}
      <input
        type="text"
        onChange={(e) => setProduct({ ...product, price: +e.target.value })}
      />
      <br />
      <input
        type="button"
        value="Add"
        onClick={() => dispatach({ type: "ADD", payload: product })}
      />
    </div>
  );
}

export default Ex10_2AP;

// @author Tamar Cohen
