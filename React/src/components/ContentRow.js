import React, { useState, useEffect } from "react";
import SmallCard from "./SmallCard";

function ContentRow() {
  const [info, setInfo] = useState(null);
  const [products, setProducts] = useState();
  const [users, setUsers] = useState();
  const [brands, setBrands] = useState();

  useEffect(() => {
    const allInfo = async () => {
      let resProducts = await fetch("http://localhost:3001/api/productsList");
      let productsSaved = await resProducts.json();

      let resUsers = await fetch("http://localhost:3001/api/usersList");
      let usersSaved = await resUsers.json();

      let resBrands = await fetch("http://localhost:3001/api/productsList");
      let brandsSaved = await resBrands.json();
      
      setProducts({
        title: "Total de productos",
        quantity: productsSaved.count,
        color: "warning",
        icon: "fa-clipboard-list",
      });
      setUsers({
        title: "Total de usuarios",
        quantity: usersSaved.count,
        color: "primary",
        icon: "fa-users",
      });
      setBrands({
        title: "Total de Marcas",
        quantity: brandsSaved.countByBrand.length,
        color: "danger",
        icon: "fa-clipboard-list",
      });
    };

    allInfo();
  }, []);

  useEffect(() => {
    setInfo({ products, users, brands });
  }, [products, users, brands]);

  return (
    <div className="row">
      {info &&
        Object.values(info).map((category, i) => {
          return <SmallCard {...category} key={i} />;
        })}
    </div>
  );
}

export default ContentRow;