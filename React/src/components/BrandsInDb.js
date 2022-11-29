import React from "react";

function BrandsInDb(props) {
  console.log("hola", props[0].name);
  return (
    <div className="col-lg-4 mb-1">
      <div className="card shadow mb-3">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800"> Brands</h5>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-lg-6 mb-2">
              <div className="card bg-dark text-white shadow">
                <div className="card-body">
                  Marca: {props[0].name} <br></br>
                  <br></br>
                  Cantidad de productos: {props[0].quantity}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BrandsInDb;
