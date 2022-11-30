const e = require("express");
const { Op } = require("sequelize");
const db = require('../models');
const Model = db.books

const getAll = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 0;
        const limit = 10;
        const search = req.query.searchCategory || '';
        const criteria = req.query.searchSortCriteria || 'title';
        const method = req.query.searchSortMethod || 'ASC';
        const offset = limit * page;
        let totalRows, totalPage, data;
        if(search !== ''){
            totalRows = await Model.count({
                where:{
                    category_id: search
                }
            }); 
            totalPage = Math.ceil(totalRows / limit);
            data = await Model.findAll({
                where:{
                    category_id: search
                },
                offset: offset,
                limit: limit,
                order:[
                    [criteria, method]
                ]
            });
        }else{
            totalRows = await Model.count(); 
            totalPage = Math.ceil(totalRows / limit);
            data = await Model.findAll({
                offset: offset,
                limit: limit,
                order:[
                    [criteria, method]
                ]
            });
        }
        
        res.status(200).json({
            data,
            page,
            limit,
            totalRows,
            totalPage
        });
    } catch (error) {
        res.status(500).json(error);
    }
}
const getImage = async (req, res) => {
    try {
        res.download('./images/'+req.params.path)
    } catch (error) {
        res.status(500).json(error);
    }
}
const getOne = async (req, res) => {
    try {
        const data =  await Model.findByPk(req.params.id);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json(error);
    }
}
module.exports = {
    getAll,
    getImage,
    getOne
}