module.exports = function (sequelize, dataTypes){
    let alias = "Order"; //Nombre que vamos a usar para llamar a esta tabla en el código

    //Detalle de las columnas que tiene nuestra tabla en la base de datos
    let cols = {
        idorders: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_id: {
            type: dataTypes.INTEGER
        },
        amount: {
            type: dataTypes.DECIMAL
        },
        date: {
            type: dataTypes.DATE
        },
        status: {
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName: "orders",
        timestamps: false
    }
    
    //Definimos la tabla
    let order = sequelize.define (alias, cols, config);

    //Definimos las asociaciones
    order.associate = function(models){
        order.hasMany(models.orderDetail, {
            as: 'orderDetail',
            foreignKey: 'order_id'
        });
    }

    return order;
}