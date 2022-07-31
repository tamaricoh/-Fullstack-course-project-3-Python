import PersonComp from "./PersonComp";

function PhoneComp(props) {
  return (
    <div>
      <h3>test comp 2 (clicking will print to console)</h3>
      Home num - {props.data.home}
      <br />
      Mobile num - {props.data.mobile}
      <br />
      Fax num - {props.data.fax}
      <br />
      <button style={{ color: "red" }} onClick={() => console.log(props.data)}>
        click
      </button>
      <h3>test comp 2 END </h3>
    </div>
  );
}

export default PhoneComp;
