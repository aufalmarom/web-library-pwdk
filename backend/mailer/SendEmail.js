const nodemailer = require("nodemailer");

module.exports = {
    SendEmail: async function(string, email){
        let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        requireTLS :true,
        secure: false, 
        auth: {
          user: "anantashop1990@gmail.com",
          pass: "jyrxtjstpdlrqnzv",
            },
          });

        return await transporter.sendMail({
        from : "Web Library",
        to : email,
        subject : "User Activation",
        text: "Hello word?", // plain text body
        html : `<p>silakan klik link dibawah ini untuk melakukan a</p>
                <p>http://localhost:3000/activateAccount/${string}</p>`
        })
    },
}