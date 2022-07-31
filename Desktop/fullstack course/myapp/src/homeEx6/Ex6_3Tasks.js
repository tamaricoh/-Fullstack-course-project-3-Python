// @author Tamar Cohen

function Ex6_3T(props) {
  return (
    <div style={{ border: "1px solid black", width: 300 }}>
      <ul>
        {props.taskInfo.map((x) => {
          return <li>{x.title}</li>;
        })}
      </ul>
    </div>
  );
}

export default Ex6_3T;

// @author Tamar Cohen
