let db = require("../../database/models");

const usersApiController = {
  //Creamos el metodo LIST para mostrar todos los usuarios de la base de datos
  list: (req, res) => {
    //buscamos todos los usuarios y le agregamos la url que nos lleva al profile
    db.User.findAll()
      .then((users) => {
        users.forEach((users) => {
          users.dataValues.detail = `http://localhost:3001/api/users/${users.idusers}`;
        });
        /* definimos la variable USERSLIST y hacemos un MAP de array que nos trajo la consulta a la base de datos
        y retornamos un nuevo array sólo con los datos solicitados */
        let usersList = users.map((array) => {
          return [
            array.idusers,
            array.name,
            array.email,
            array.dataValues.detail,
          ];
        });
        //retornamos el JSON con todos los datos solicitados
        return res.status(200).json({
          count: users.length,
          users: usersList,
          status: 200,
        });
      })
      .catch((e) => {
        console.log(e);
        return res.send(e);
      });
  },
  //Creamos el metodo PROFILE para mostrar el usuario por ID
  profile: (req, res) => {
    //buscamos el usuario a través de la ID que nos viene en la URL
    db.User.findByPk(req.params.id)
      .then((user) => {
        userToSend = user;
        //le agregamos la URL a la imagen de usuario correspondiente
        user.dataValues.image = `/images/usuarios/${user.image}`;
        //retornamos el JSON con el detalle del usuario
        return res.status(200).json({
          name: userToSend.name,
          lastName: userToSend.lastname,
          email: userToSend.email,
          image: userToSend.image,
          address: userToSend.address,
          phone: userToSend.phone,
          status: 200,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
// API END

module.exports = usersApiController;