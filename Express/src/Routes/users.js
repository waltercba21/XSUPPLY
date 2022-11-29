const express = require("express");
const router = express.Router();
const upload = require("../middlewares/multerMiddleware");
const validation = require("../middlewares/validateRegisterMiddleware");
const multer = require ('multer')
const path = require ('path')
const usersController = require("../Controllers/usersController");

//---------MULTER-------//
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, '../public/images/productos')
  },
  filename: (req, file, cb) => {
      const newFilename = 'product' + Date.now() + path.extname(file.originalname);
      cb(null, newFilename)
  }
});

const uploadFile = multer({storage});

//Formulario Login
router.get("/login", usersController.login);

//Procesamiento Formulario Login
router.post("/login", upload.single("image"), usersController.loginProcess);

//Formulario Registro
router.get("/register", usersController.register);

// Procesamiento del formulario de registro
router.post(
  "/register",
  upload.single("image"),
  validation,
  usersController.processRegister
);

//Perfil del Usuario
router.get("/profile/:id", usersController.profile);

//Listar Usuarios
router.get("/", usersController.list);

//Editar Usuarios
router.get('/editUser/:id', usersController.editUser);
router.put('/editUser/:id', uploadFile.any(), usersController.modifUser)

module.exports = router;
