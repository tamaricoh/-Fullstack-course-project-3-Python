// @author Tamar Cohen

import { useSelector } from "react-redux";

function Ex10_1Adult() {
  const storeData = useSelector((state) => state);
  return (
    <div style={{ border: "3px solid blue", textAlign: "left" }}>
      <h2>Adult Users</h2>
      <table border="1">
        <tbody>
          {storeData.users.map((item) => {
            if (item.age > 18)
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
    </div>
  );
}

export default Ex10_1Adult;

// @author Tamar Cohen
