const db = require("../../database/models");
const Op = db.sequelize.Op;

const productsApiController = {
  //Creamos el metodo LIST para mostrar todos los productos de la base de datos
  list: async (req, res) => {
    //definimos la paginación
   /*  const limit = 10;
    let page = 1; */
    //buscamos las brands y calculamos cuántos productos tiene cada brand
    const brands = await db.Brand.findAll({
      include: ["products"],
      attributes: ["name"],
    });
    let brandsList = brands.map((brand) => {
      return [{ name: brand.name, quantity: brand.products.length }];
    });
    //buscamos todos los productos, paginamos y le agregamos la url que nos lleva al detalle del producto
    db.Product.findAll({
    /*   limit: limit,
      offset: (page - 1) * limit, */
      include: [{ association: "brand" }],
      order: [["idproducts", "ASC"]]
    }).then((products) => {
      products.forEach((products) => {
        products.dataValues.detail = `http://localhost:3001/api/products/${products.idproducts}`;
      });
    //contamos la cantidad de productos
   let count = 0;
    for (let i = 0; i < brandsList.length; i++) {
      count += brandsList[i][0].quantity;
    } 
    //definimos la variable para el total de páginas
    /* const totalPages = Math.ceil(count / limit); */
    //retornamos el JSON con todos los datos solicitados
    return res.json({
      data: products,
      count: count,
      countByBrand: brandsList,
     /*  totalPages,
      currentPage: page,
        next:
          page < totalPages && page > 0
            ? `http://localhost:3001/api/productslist/?page=${page + 1}`: undefined,
        previous:
          page > 1 && page <= totalPages
            ? `http://localhost:3001/api/productslist/?page=${page - 1}`: undefined, */
      status: 200
      });
    });
  },
  //Creamos el metodo DETAIL para mostrar el productos por ID
  detail: (req, res) => {
    //buscamos el producto a través de la ID que nos viene en la URL
    db.Product.findByPk(req.params.id).then((product) => {
      //le agregamos la URL a la imagen de producto correspondiente
      product.dataValues.image = `/images/productos/${product.image}`;
      //retornamos el JSON con el detalle del producto
      return res.json({
        data: product,
        status: 200
      });
    });
  },
  //Creamos el metodo LASTPRODUCT para mostrar el último producto cargado a la base de datos
  lastProduct: async (req, res) => {
    try {
      //buscamos todos los productos de la base de datos
      const products = await db.Product.findAll({});
      //listamos los productos con todos los datos de cada uno
      let productsList = products.map((array) => {
        return [
          array.idproducts,
          array.name,
          array.brand_id,
          array.taste,
          array.weight,
          array.price,
          array.quantity,
          array.category_id,
          array.utility,
          array.purpose,
          array.image,
        ];
      });
      //mediante el método POP guardamos en la variable el último producto cargado
      let lastProduct = productsList.pop();
      //definimos una variable y le asignamos el valor de la URL de la imagen del producto
      let image_url = `http://localhost:3001/images/Productos/${lastProduct[0]}`;
      //definimos una variable y le asignamos el valor de la URL del detalle del producto
      let detail = `http://localhost:3001/api/products/${lastProduct[0]}`;
      //agregamos las variables anteriores al array con los datos del producto
      lastProduct.push(image_url);
      lastProduct.push(detail);
      //retornamos el JSON con el detalle del producto
      res.status(200).json({
        product: lastProduct,
      });
    } catch (e) {
      res.status(500).json({
        meta: {
          status: "error",
        },
        error: "Product not found",
      });
    }
  },
};
// API END

module.exports = productsApiController;