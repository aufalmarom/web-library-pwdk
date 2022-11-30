module.exports = (sequelize, DataTypes) => {

    const Book = sequelize.define("book", {
        image: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        category_id: {
            type: DataTypes.INTEGER
        },
    
    })
    return Book

}