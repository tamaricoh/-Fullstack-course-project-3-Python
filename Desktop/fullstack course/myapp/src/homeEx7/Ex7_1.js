// @author Tamar Cohen

import axios from "axios";
import { useState } from "react";

function Ex7_1(props) {
  const [id, setID] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const getUser = async () => {
    let resp = await axios.get(
      "https://jsonplaceholder.typicode.com/users/" + id
    );
    setName(resp.data.name);
    setEmail(resp.data.email);
  };

  const updateData = async (e) => {
    e.preventDefault();
    await axios.put("https://jsonplaceholder.typicode.com/users/" + id, {
      name: { name },
      email: { email },
    });
    alert("Updated successfully");
  };

  return (
    <div>
      <form onSubmit={(e) => updateData(e)}>
        user ID : <input type="text" onChange={(e) => setID(e.target.value)} />
        <input type="button" value="Get Data" onClick={getUser} />
        <br />
        <br />
        Name : <input type="text" value={name} readOnly />
        <br />
        Email : <input type="text" value={email} readOnly />
        <br />
        <input type="Submit" value="Update" readOnly />
      </form>
    </div>
  );
}

export default Ex7_1;

// @author Tamar Cohen
