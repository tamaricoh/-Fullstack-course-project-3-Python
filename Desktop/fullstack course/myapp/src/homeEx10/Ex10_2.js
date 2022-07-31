// @author Tamar Cohen

import Ex10_2totalPrice from "./Ex10_2totalPrice";
import Ex10_2addProduct from "./Ex10_2addProduct";
import Ex10_2productPresenr from "./Ex10_2productPresent";

function Ex10_2() {
  return (
    <div>
      <div style={{ float: "left", width: "50%" }}>
        <Ex10_2totalPrice />
        <br />
        <Ex10_2addProduct />
      </div>
      <div style={{ float: "right", width: "50%" }}>
        <Ex10_2productPresenr />
      </div>
    </div>
  );
}

export default Ex10_2;

// @author Tamar Cohen
