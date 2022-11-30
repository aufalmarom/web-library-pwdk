const dbConfig = require('../config/dbConfig.js');
const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: 0,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle
        }
    }
)

// sequelize.authenticate()
// .then(() => {
//     console.log('connected..')
// })
// .catch(err => {
//     console.log('Error'+ err)
// })

const db = {}

db.sequelize = sequelize

db.users = require('./UserModel.js')(sequelize, DataTypes);
db.books = require('./BookModel')(sequelize, DataTypes);
db.categories = require('./CategoryModel')(sequelize, DataTypes);
db.carts = require('./CartModel')(sequelize, DataTypes);
db.loans = require('./LoanModel')(sequelize, DataTypes);

db.sequelize.sync({ force: false })
.then(() => {
    console.log('yes re-sync done!')
})



// 1 to Many Relation

// db.products.hasMany(db.reviews, {
//     foreignKey: 'product_id',
//     as: 'review'
// })

// db.reviews.belongsTo(db.products, {
//     foreignKey: 'product_id',
//     as: 'product'
// })
db.carts.belongsTo(db.books, {
    foreignKey: 'book_id',
    as: 'book'
});
db.loans.belongsTo(db.books, {
    foreignKey: 'book_id',
    as: 'book'
})

module.exports = db
