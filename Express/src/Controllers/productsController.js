const fs = require("fs");
let db = require("../database/models");
const path = require("path");
const { URLSearchParams } = require("url");
const Op= db.sequelize.Op;


const productsController = {
  productCart: (req, res) => {
    res.render("./products/productCart");
  },

  Cart: (req, res) => {
    db.Product.findByPk(req.params.id, {
      include: [{ association: "brand" }, { association: "category" }],
    }).then(function (product) {
      res.render("./products/Cart", { product: product });
    });
  },

  productDetail: (req, res) => {
    db.Product.findByPk(req.params.id, {
      include: [{ association: "brand" }, { association: "category" }],
    }).then(function (product) {
      res.render("./products/productDetail", { product: product });
    });
  },

  createProduct: (req, res) => {
    let brands = db.Brand.findAll();
    let category = db.Category.findAll();
    Promise.all([brands, category]).then(function ([brands, category]) {
      res.render("./products/createProduct", {
        brands: brands,
        category: category,
      });
    });
  },

  store: (req, res) => {
    let image;
    if (req.files[0] != undefined) {
      image = req.files[0].filename;
    } else {
      image = "default-image.png";
    }
    db.Product.create({
      name: req.body.name,
      brand_id: req.body.brand,
      taste: req.body.taste,
      weight: req.body.weight,
      price: req.body.price,
      quantity: req.body.quantity,
      category_id: req.body.category,
      utility: req.body.utility,
      purpose: req.body.purpose,
      image: image,
    }).then(function () {
      res.redirect("/products");
    });
  },

  editProduct: (req, res) => {
    let productToEdit = db.Product.findByPk(req.params.id);
    let brands = db.Brand.findAll();
    let category = db.Category.findAll();
    Promise.all([productToEdit, brands, category]).then(function ([
      product,
      brands,
      category,
    ]) {
      res.render("./products/editProduct", {
        product: product,
        brands: brands,
        category: category,
      });
    });
  },

  editModif: (req, res) => {
    let image;
    if (req.files[0] != undefined) {
      image = req.files[0].filename;
    } else {
      image = req.files.image;
    }
    db.Product.update(
      {
        name: req.body.name,
        brand_id: req.body.brand,
        taste: req.body.taste,
        weight: req.body.weight,
        price: req.body.price,
        quantity: req.body.quantity,
        category_id: req.body.category,
        utility: req.body.utility,
        purpose: req.body.purpose,
        image: image,
      },
      {
        where: {
          idproducts: req.params.id,
        },
      }
    ).then(function () {
      res.redirect("/products");
    });
  },

  delete: function (req, res) {
    db.Product.destroy({
      where: {
        idproducts: req.params.id,
      },
    }).then(function () {
      res.redirect("/products");
    });
  },

  list: (req, res) => {
    db.Product.findAll().then(function (products) {
      res.render("./products/products", { products: products });
    });
  },
};

module.exports = productsController;
