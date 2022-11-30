const { Op } = require("sequelize");
const db = require('../models');
const Model = db.carts
const Books = db.books
const Loans = db.loans

const create = async (req, res) => {
    try {
        const {id, userId} = req.body;
        const data = await Model.findOne({
            where:{
                book_id: id,
                user_id: userId,
            }
        });
        const cekPinalty = await Loans.findAll({
            where:{
                return_date: null,
                user_id: userId,
                max_return_date :{
                    [Op.lt] : Date.now()
                }
            }
        });
        const dataLoan = await Loans.findOne({
            where:{
                book_id: id,
                user_id: userId,
                return_date: null
            }
        });
        if(cekPinalty.length !== 0){
            res.status(404).json({message:"You got pinalty"});
        }else if(!data && !dataLoan){
            await Model.create({
                book_id: id,
                user_id: userId
            });
            res.status(201).json({message:"Adding book to cart successfull"});
        }else{
            res.status(404).json({message:"Book already on cart or on loan"});
        }
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
const remove = async (req, res) => {
    try {
        const data = await Model.findByPk(req.params.id);
        const userId =  data.user_id;
        await Model.destroy({
            where:{
                id: req.params.id
            }
        });
        const response = await Model.findAll({
            where:{
                user_id:userId
            }
        })
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json(error);
    }
}

module.exports = {
    create,
    getAll,
    remove
}