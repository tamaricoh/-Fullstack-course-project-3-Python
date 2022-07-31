import { useState } from "react";
import Ex4_1movie from "./Ex4_1movie";

function Ex4_1() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Under the Dome",
      pic: "https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
    },
    {
      id: 2,
      name: "Person of Interest",
      pic: "https://static.tvmaze.com/uploads/images/medium_portrait/163/407679.jpg",
    },
    {
      id: 3,
      name: "Bitten",
      pic: "https://static.tvmaze.com/uploads/images/medium_portrait/0/15.jpg",
    },
  ]);
  const [chosen, setChosen] = useState();
  const selectMovie = (e) => {
    let idToSearch = e.target.value;
    let chosenMovie = data.find((x) => x.id == idToSearch);
    setChosen(chosenMovie);
  };
  return (
    <div style={{ width: "400px", border: "10px solid red" }}>
      <h3>Pick a Movie</h3>
      <select name="movie" onChange={selectMovie}>
        {data.map((item) => {
          return (
            <option value={item.id} key={item.id}>
              {item.name}
            </option>
          );
        })}
      </select>
      <br />
      <br />
      <Ex4_1movie data={chosen} />
    </div>
  );
}

export default Ex4_1;
