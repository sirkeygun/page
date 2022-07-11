const nodemailer = require('nodemailer');

module.exports = (req, res) => {
    console.log(req.body);

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
                user: process.env.EMAIL,
                pass: process.env.PASS
        }
    });

    const mailOptions = {
        from: req.body.email,
        to: process.env.EMAIL,
        body: req.body.name,
        subject: `Message from ${req.body.name}: ${req.body.subject}`,
        text:` ${req.body.message},
            Customer email ${req.body.email}`
    }

    transporter.sendMail(mailOptions, (err, info) =>{
        if (err) {
            console.log(err);
            res.send('error');
        } else {
            // res.send('success');
            res.redirect('/')
        }
    });
}
