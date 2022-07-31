// @author Tamar Cohen

import axios from "axios";
import { useEffect, useState } from "react";
import Ex8_2Movie from "./Ex8_2Movie";

function Ex8_2(props) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getData() {
      let resp = await axios.get("https://api.tvmaze.com/shows");
      setMovies(resp.data.splice(0, 10));
    }
    getData();
  }, []);

  return (
    <div style={{ width: "400px", border: "10px solid red" }}>
      <h1>Movies</h1>

      {movies.map((item) => {
        return <Ex8_2Movie movie={item} key={item.id} />;
      })}
    </div>
  );
}

export default Ex8_2;

// @author Tamar Cohen
