import React from "react";

function ChartRow(props) {
  console.log("hola", props);
  return (
    <tr>
      <td>
        <img
          className="img-fluid px-3 px-sm-4 mt-3 mb-4"
          style={{ width: 7 + "rem" }}
          src={`http://localhost:3001/images/productos/${props.image}`}
          alt=" Last product "
        />
      </td>
      <td>{props.brand.name}</td>
      <td>{props.name}</td>
      <td>${props.price}</td>
      <td>{props.taste}</td>
      <td>{props.quantity}</td>
    </tr>
  );
}

export default ChartRow;
