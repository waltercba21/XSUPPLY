const bcryptjs = require("bcryptjs");
const { validationResult } = require("express-validator");

let db = require("../database/models");

const usersController = {
  register: (req, res) => {
    db.User.findAll().then(function (users) {
      res.render("./users/register", { users: users });
    });
  },
  processRegister: async (req, res) => {
    const resultValidation = validationResult(req);
    if (resultValidation.errors.length > 0) {
      return res.render("./users/register", {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }
    //Este metodo permite que no se registren dos veces con el mismo email.
    let userInDB = await db.User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (userInDB) {
      return res.render("./users/register", {
        errors: {
          email: {
            msg: "El usuario ya se encuentra en la base de datos",
          },
        },
        oldData: req.body,
      });
    }
    db.User.create({
      name: req.body.name,
      lastname: req.body.lastname,
      email: req.body.email,
      address: req.body.address,
      phone: req.body.phone,
      password: bcryptjs.hashSync(req.body.password, 10),
      image: req.file.filename,
    }).then(function () {
      res.redirect("./login");
    });
  },

  login: (req, res) => {
    db.User.findAll().then(function (users) {
      res.render("./users/login", { users: users });
    });
  },

  loginProcess: async (req, res) => {
    let userToLogin = await db.User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (!userToLogin) {
      return res.render("./users/login", {
        errors: {
          email: {
            msg: "Credenciales inválidas",
          },
        },
      });
    } else {
      if (userToLogin) {
        let passOk = bcryptjs.compareSync(
          req.body.password,
          userToLogin.password
        );
        if (!passOk) {
          return res.render("./users/login", {
            errors: {
              email: {
                msg: "Credenciales inválidas",
              },
            },
          });

        } else {
          delete userToLogin.password;
          req.session.userLogged = userToLogin;
          return res.redirect("./profile/" + userToLogin.idusers);
        }
      }
    }
  },

  profile: (req, res) => {
    db.User.findByPk(req.params.id).then(function (users) {
      res.render("./users/profile", { users: users });
    });
    console.log(req.session.userLogged);
  },

  list: (req, res) => {
    db.User.findAll().then(function (users) {
      res.render("./users/users", { users: users });
    });
  },

  editUser: (req, res) => {
    db.User.findByPk(req.params.id).then(function (user) {
      res.render("./users/editUser", { user: user });
    });
  },

  modifUser: (req, res) => {
    let image;
    if (req.files[0] != undefined) {
      image = req.files[0].filename;
    } else {
      image = req.files.image;
    }
    db.User.update(
      {
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        address: req.body.address,
        phone: req.body.phone,
        image: image,
      },
      {
        where: {
          idusers: req.params.id,
        },
      }
    ).then(function () {
      res.redirect("/users/profile/" + req.params.id);
    });
  },
};

module.exports = usersController;
