// @author Tamar Cohen

import { useSelector } from "react-redux";
import { useState } from "react";
import Ex10_2P from "./Ex10_2Product";

function Ex10_2PP() {
  const storeData = useSelector((state) => state);
  return (
    <div style={{ border: "3px solid blue" }}>
      <h3>Current Products in Order</h3>
      {storeData.products.map((item, index) => {
        return <Ex10_2P key={index} prodData={item} />;
      })}
    </div>
  );
}

export default Ex10_2PP;

// @author Tamar Cohen
