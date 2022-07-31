// @author Tamar Cohen

import axios from "axios";
import { useEffect, useState } from "react";

function Ex8_2Movie(props) {
  return (
    <div style={{ width: "300px", border: "5px solid blue" }}>
      Name : {props.movie.name}
      <br />
      <br />
      <img src={props.movie.image.medium} />
      {console.log(props.movie)}
    </div>
  );
}

export default Ex8_2Movie;

// @author Tamar Cohen
