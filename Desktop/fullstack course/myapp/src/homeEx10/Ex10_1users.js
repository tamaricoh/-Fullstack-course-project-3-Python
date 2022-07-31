// @author Tamar Cohen

import { useState } from "react";
import { useSelector } from "react-redux";
import Ex10_1Adult from "./Ex10_1AdultUsers";

function Ex10_1users() {
  const storeData = useSelector((state) => state);

  return (
    <div style={{ border: "3px solid green", textAlign: "left" }}>
      <h2>All Users</h2>
      <table border="1">
        <tbody>
          {storeData.users.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.fname}</td>
                <td>{item.lname}</td>
                <td>{item.age}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
      <Ex10_1Adult />
    </div>
  );
}

export default Ex10_1users;

// @author Tamar Cohen
