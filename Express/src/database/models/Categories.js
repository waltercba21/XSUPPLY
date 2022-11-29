module.exports = function (sequelize, dataTypes){
    let alias = "Category"; //Nombre que vamos a usar para llamar a esta tabla en el código

    //Detalle de las columnas que tiene nuestra tabla en la base de datos
    let cols = {
        idcategories: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName: "categories",
        timestamps: false
    }
    
    //Definimos la tabla
    let category = sequelize.define (alias, cols, config);

    //Definimos las asociaciones
    category.associate = function(models){
        category.belongsToMany(models.Product, {
            as: 'products',
            through: 'product_categories',
            foreignKey: 'category_id',
            otherKey: 'product_id',
            timestamps: false
        });
    }

    return category;
}