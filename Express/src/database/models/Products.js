module.exports = function (sequelize, dataTypes){
    let alias = "Product"; //Nombre que vamos a usar para llamar a esta tabla en el código

    //Detalle de las columnas que tiene nuestra tabla en la base de datos  
    let cols = {
        idproducts: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        },
        brand_id: {
            type: dataTypes.INTEGER
        },
        taste: {
            type: dataTypes.STRING
        },
        weight: {
            type: dataTypes.DECIMAL
        },
        price: {
            type: dataTypes.DECIMAL
        },
        quantity: {
            type: dataTypes.INTEGER
        },
        category_id: {
            type: dataTypes.INTEGER
        },
        utility: {
            type: dataTypes.STRING
        },
        purpose: {
            type: dataTypes.STRING
        },
        image: {
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName: "products",
        timestamps: false
    }
    
    //Definimos la tabla
    let product = sequelize.define (alias, cols, config);

    //Definimos las asociaciones
    product.associate = function(models){
        product.belongsTo(models.Brand, {
            as: 'brand',
            foreignKey: 'brand_id'
        });
        product.belongsTo(models.Category, {
            as: 'category',
            foreignKey: 'category_id',
        });
        product.hasMany(models.orderDetail, {
            as: 'orderDetail',
            foreignKey: 'product_id'
        });
    }

    return product;
}