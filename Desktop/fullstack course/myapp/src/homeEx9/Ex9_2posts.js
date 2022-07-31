// @author Tamar Cohen

import { useParams, Link, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Ex9_2posts() {
  const [posts, setPosts] = useState([]);
  const id = [...useParams().id];

  useEffect(() => {
    const getData = async () => {
      let resp = await axios.get(
        "https://jsonplaceholder.typicode.com/posts?userId=" + id[0]
      );
      setPosts(resp.data);
    };
    getData();
  }, id);
  return (
    <div style={{ backgroundColor: "red", width: "200px" }}>
      <ul>
        {posts.map((item) => {
          return <li key={item.id}>{item.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default Ex9_2posts;

// @author Tamar Cohen
