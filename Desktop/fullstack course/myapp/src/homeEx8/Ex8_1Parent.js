// @author Tamar Cohen

import axios from "axios";
import { useEffect, useState } from "react";
import Ex8_1C from "./Ex8_1Child";

function Ex8_1P(props) {
  const [id, setId] = useState(0);

  return (
    <div>
      User ID : <input type="text" onChange={(e) => setId(e.target.value)} />
      <Ex8_1C userId={id} />
    </div>
  );
}

export default Ex8_1P;

// @author Tamar Cohen
