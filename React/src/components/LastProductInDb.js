import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

function LastProductInDb(props) {
  const [product, setProduct] = useState();

  useEffect(() => {
    const getInfo = async () => {
      let resProduct = await fetch(`http://localhost:3001/api/lastProduct`);
      let productSaved = await resProduct.json();
      console.log(productSaved);

      let lastProduct = productSaved;
      console.log(lastProduct);

      setProduct(lastProduct);
    };
    getInfo();
  }, []);

  return (
    <React.Fragment>
      <div className="col-lg-6 mb-4">
        <div className="card shadow mb-4">
          <div className="card-header py-3">
            <h5 className="m-0 font-weight-bold text-gray-800">
              Last product in Data Base
            </h5>
          </div>
          {product && (
            <div className="card-body">
              <div className="text-center">
                <img
                  className="img-fluid px-3 px-sm-4 mt-3 mb-4"
                  style={{ width: 20 + "rem" }}
                  src={`http://localhost:3001/images/productos/${product.product[10]}`}
                  alt=" Last product "
                />
              </div>
              <p>{product.product[1]}</p>
              <p style={{ color: "red" }}>${product.product[5]}</p>

              <Link
                className="btn btn-danger"
                rel="nofollow"
                to="/ProductDetail"
              >
                View product detail
              </Link>
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

export default LastProductInDb;
