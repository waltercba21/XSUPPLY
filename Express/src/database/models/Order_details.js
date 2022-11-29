module.exports = function (sequelize, dataTypes){
    let alias = "orderDetail"; //Nombre que vamos a usar para llamar a esta tabla en el código

    //Detalle de las columnas que tiene nuestra tabla en la base de datos
    let cols = {
        idorder_details: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        order_id: {
            type: dataTypes.INTEGER
        },
        product_id: {
            type: dataTypes.INTEGER
        },
        price: {
            type: dataTypes.DECIMAL
        },
        quantity: {
            type: dataTypes.INTEGER
        }
    }

    let config = {
        tableName: "order_details",
        timestamps: false
    }
    
    //Definimos la tabla
    let orderDetail = sequelize.define (alias, cols, config);

    return orderDetail;
}