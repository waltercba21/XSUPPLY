module.exports = function (sequelize, dataTypes){
    let alias = "User"; //Nombre que vamos a usar para llamar a esta tabla en el código

    //Detalle de las columnas que tiene nuestra tabla en la base de datos
    let cols = {
        idusers: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        },
        lastname: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        address: {
            type: dataTypes.STRING
        },
        phone: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        image: {
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName: "users",
        timestamps: false
    }
    
    //Definimos la tabla
    let user = sequelize.define (alias, cols, config);

    //Definimos las asociaciones
    user.associate = function(models){
        user.hasMany(models.Order, {
            as: 'orders',
            foreignKey: 'user_id'
        });
    }

    return user;
}