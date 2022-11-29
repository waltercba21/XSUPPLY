let db = require("../database/models");

const mainController = {
  index: (req, res) => {
    db.Product.findAll({
      where: {
        idproducts: [1, 2, 3, 4]
      }
    }).then(function (products) {
      res.render("index", { products: products });
    });
  },
  about: (req, res) => {
    res.render("about");
  },
  recetas: (req, res) => {
    res.render("recetas");
  },
};

module.exports = mainController;
