import React, { useState, useEffect } from "react";
import ChartRow from "./ChartRow";

function Chart() {
  // estado productos
  const [products, setProducts] = useState();

  // componentDidMount: Al montar componente traemos productos
  useEffect(() => {
    const allInfo = async () => {
      let resProducts = await fetch(`http://localhost:3001/api/productsList`);
      let productsSaved = await resProducts.json();
      console.log(productsSaved);
      setProducts(productsSaved); //products=productsSaved
    };
    allInfo();
  }, []);

  return (
    /* <!-- DataTales Example --> */
    <div className="card shadow mb-4">
      <div className="card-header py-3">
        <h5 className="m-0 font-weight-bold text-gray-800">
          Listado de productos
        </h5>
      </div>
      <div className="card-body">
        <div className="table-responsive">
          <table
            className="table table-bordered"
            id="dataTable"
            width="100%"
            cellSpacing="0"
          >
            <thead>
              <tr>
                <th>Imagen</th>
                <th>Marca</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Sabor</th>
                <th>Cantidad en Stock</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>Imagen</th>
                <th>Marca</th>
                <th>Nombre</th>
                <th>Precio</th>
                <th>Sabor</th>
                <th>Cantidad en Stock</th>
              </tr>
            </tfoot>
            <tbody>
              {products &&
                products.data.map((product, i) => {
                  return <ChartRow {...product} key={i} />;
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Chart;
