const db = require('../models');
const Model = db.categories

const getAll = async (req, res) => {
    try {
        const data = await Model.findAll()
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
}
module.exports = {
    getAll
}