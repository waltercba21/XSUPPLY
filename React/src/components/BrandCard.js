import React, { useState, useEffect } from "react";
import BrandsInDb from "./BrandsInDb";

function BrandCard() {
  const [brands, setBrands] = useState();

  useEffect(() => {
    const allInfo = async () => {
      let resBrands = await fetch("http://localhost:3001/api/productsList");
      let brandsSaved = await resBrands.json();
      console.log(brandsSaved);
      // title.push("Total de productos");
      // setTitle(title);
      // color.push("warning");
      // setColor(color);
      //   return products;

      setBrands({
        brandsSaved,
      });
    };

    allInfo();
  }, []);

  return (
    <div className="row">
      {brands?.brandsSaved?.countByBrand &&
        Object.values(brands.brandsSaved.countByBrand).map((brands, i) => {
          return <BrandsInDb {...brands} key={i} />;
        })}
    </div>
  );
}

export default BrandCard;
