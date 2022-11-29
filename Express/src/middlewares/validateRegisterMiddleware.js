const {body} = require ('express-validator');
const path = require ('path');      


const validation = [
    body('name').notEmpty().withMessage('Tienes que escribir un nombre'),
    body('lastname').notEmpty().withMessage('Tienes que escribir un apellido'),
    body('email').notEmpty().withMessage('Tienes que escribir un correo electronico').bail()
    .isEmail().withMessage('Debes escribir un formato de correo válido'),
    body('password').notEmpty().withMessage('Tienes que escribir una contraseña'),
    body('image').custom((value, {req}) => {
        let file = req.file;
        let acceptedExtension = ['.jpg', '.png', '.gif'];

        if (!file){
            throw new Error ('Tienes que subir una imagen ');
        } else {
            let fileExtension = path.extname (file.originalname);
            if (!acceptedExtension.includes (fileExtension)){
                throw new Error ( 'Las extensiones de archivo permitidas son ${acceptedExtension.join (',')}');
            }
        }
        return true 
    }) 
] 

module.exports = validation;
