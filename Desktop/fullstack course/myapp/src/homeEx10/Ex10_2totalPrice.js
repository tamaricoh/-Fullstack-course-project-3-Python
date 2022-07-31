// @author Tamar Cohen

import { useSelector } from "react-redux";
import { useState } from "react";

function Ex10_2TP() {
  const totalCost = useSelector((state) => state.total);

  return (
    <div style={{ border: "3px solid red" }}>Total Price : {totalCost}</div>
  );
}

export default Ex10_2TP;

// @author Tamar Cohen
