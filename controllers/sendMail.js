const nodemailer = require('nodemailer')
const sendMail = async (req, res) => {
    const from = req.body.from;
    const to = req.body.to;
    const subject = req.body.subject;
    const message = req.body.message;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "neupaneamit65@gmail.com",
            pass: "wqlwyesakihbgqhw"
        }
    });
    // var mailOptions = {
    //     from: from,
    //     to: to,
    //     subject: subject,
    //     message: message

    // }
    // transporter.sendMail(mailOptions, function (error, info) {
    //     if (error) {
    //         console.log(error);

    //     }
    //     else {
    //         console.log("Email send " + info.response);
    //     }
    //     res.redirect("/")
    // })
    const info = await transporter.sendMail({
        from: from,
        to: to,
        subject: subject,
        text: text
    });
    console.log("Message sent : %s", info.messageId);
    res.json(info);
}
module.exports = sendMail;