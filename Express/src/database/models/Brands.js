module.exports = function (sequelize, dataTypes){
    let alias = "Brand"; //Nombre que vamos a usar para llamar a esta tabla en el código

    //Detalle de las columnas que tiene nuestra tabla en la base de datos
    let cols = {
        idbrands: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName: "brands",
        timestamps: false
    }
    
    //Definimos la tabla
    let brand = sequelize.define (alias, cols, config);

    //Definimos las asociaciones
    brand.associate = function(models){
        brand.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'brand_id'
        });
    }

    return brand;
}