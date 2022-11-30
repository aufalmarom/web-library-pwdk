module.exports = (sequelize, DataTypes) => {

    const Cart = sequelize.define("cart", {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        book_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    
    })
    return Cart

}