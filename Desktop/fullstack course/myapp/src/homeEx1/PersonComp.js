import PhoneComp from "./PhonesComp";

function PersonComp(props) {
  return (
    <div>
      <h1>Test comp 1 </h1>

      <PhoneComp data={{ home: "07", mobile: "050", fax: "077" }} />
      <h1>test comp 1 END </h1>
    </div>
  );
}

export default PersonComp;
