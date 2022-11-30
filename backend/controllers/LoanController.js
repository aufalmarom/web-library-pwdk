const db = require('../models');
const Model = db.loans
const Books = db.books

Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

const create = async (req, res) => {
    try {
        const { userId, bookId} = req.body
        const maxReturnDate = new Date().addDays(5);
        await Model.create({
            user_id: userId,
            book_id: bookId,
            max_return_date: maxReturnDate
        })
        res.sendStatus(201);
    } catch (error) {
        res.status(500).json(error);
    }
}
const update = async (req, res) => {
    try {
        await Model.update({
            return_date: Date.now()
        },{
            where:{
                id: req.params.id
            }
        });
        const data = await Model.findAll({
            where:{
                user_id:req.params.userId
            },
            include: [{
                model: Books,
                as: 'book'
            }],
        })
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
}
const getAll = async (req, res) => {
    try {
        const data = await Model.findAll({
            where:{
                user_id :  req.body.userId
            },
            include: [{
                model: Books,
                as: 'book'
            }],
        })
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
}
module.exports = {
    create,
    getAll,
    update
}