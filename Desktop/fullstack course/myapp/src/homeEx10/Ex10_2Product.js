// @author Tamar Cohen

import { useDispatch } from "react-redux";
import { useState } from "react";

function Ex10_2P(props) {
  const dispatach = useDispatch();
  return (
    <div style={{ border: "3px solid green" }}>
      Product Date
      <br />
      Name : {props.prodData.name}
      <br />
      Price : {props.prodData.price}
      <br />
      <input
        type="button"
        value="Remove"
        onClick={() =>
          dispatach({ type: "REMOVE", payload: props.prodData.name })
        }
      />
    </div>
  );
}

export default Ex10_2P;

// @author Tamar Cohen
