// @author Tamar Cohen

import { useState } from "react";

function Ex3_1() {
  const [txtStyle, setTxtStyle] = useState({
    background: "blue",
  });

  return (
    <div>
      <input
        style={txtStyle}
        type="text"
        onChange={(e) => {
          e.target.value.length > 4
            ? setTxtStyle({ background: "red" })
            : setTxtStyle({ background: "blue" });
        }}
      />
    </div>
  );
}

export default Ex3_1;

// @author Tamar Cohen
