const express = require("express");
const nodemailer = require('nodemailer')
const path = require("path");
const app = express();
require('dotenv').config()

let PORT = 5000;
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, "./dist")))
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./dist/index.html"))
})
app.post("/sendemail", async (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.FROM,
            pass: process.env.KEY
        }
    });
    const info = await transporter.sendMail({
        from: process.env.FROM,
        to: process.env.TO,
        subject: subject,
        html: `<h1>Name : ${name} <br /> Email id : ${email} <br /> Message : ${message} </h1>`
    });
    res.redirect("/")
})
const start = async () => {
    try {
        app.listen(PORT, () => { console.log(`Connected with port no ${PORT}`); })
    } catch (error) {

    }
}
start()