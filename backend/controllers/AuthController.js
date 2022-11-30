const argon2 = require("argon2");
const generateRandomString = require("randomstring");
const jwt = require("jsonwebtoken");
const { SendEmail } = require("../mailer/SendEmail.js");
const { Op } = require("sequelize");

const db = require('../models');
const User = db.users

const Login = async (req, res) => {
    try {
        const { NIM, password } = req.body.data;
        const data = await User.findOne({
            where: {
                [Op.or]: [{NIM}, {username:NIM}, {email:NIM}]
            }
          });
        if(data){
            const match = await argon2.verify(data.password, password);
            if(match){
                const username = data.username;
                const email = data.email;
                const role = data.role;
                const id = data.id;
                const status = data.email_verification;
                const accessToken = jwt.sign({username, email, password},"asdfYJNFadfjhfkasdfHKDJSFH")
                res.status(200).json({NIM, username, role, email, status, id, accessToken});
            }else{
                res.status(401).json({message:"wrong password"});    
            }
        }else{
            res.status(404).json({message:"your NIM unregistered"});
        }
    } catch (error) {
        res.status(500).json(error);
    }
}
const Register = async (req, res) => {
    try {
        const { NIM, username, email, password } = req.body.data;
        const hashPassword = await argon2.hash(password);
        const activationCode = generateRandomString.generate(100);
        const data = await User.create({
            NIM, username, email,
            password: hashPassword,
            email_verification: activationCode
        });
        const role = data.role;
        const id = data.id;
        const status = data.email_verification;
        const accessToken = jwt.sign({username, email, password},"asdfYJNFadfjhfkasdfHKDJSFH")
        SendEmail(activationCode, email);
        res.status(201).json({NIM, username, role, id, email, status, accessToken});
    } catch (error) {
        res.status(500).json(error);
    }
}
const AccountActivation = async (req, res) => {
    try {
        console.log(req.params);
        const data = await User.findOne({
            where: {
              email_verification:req.params.param
            }
          });
          if(data){
            await User.update({
                email_verification: "1"
            },{
                where:{
                    id: data.id
                }
            });
            res.status(200).json({message:"Account Activation Success."});
          }else{
            res.status(404).json({message:"Account already activated or activation link invalid"});
          }
    } catch (error) {
        res.status(500).json(error);
    }
}
module.exports = {
    Login,
    Register,
    AccountActivation
}