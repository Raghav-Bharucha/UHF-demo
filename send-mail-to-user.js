const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "godhsip@gmail.com",
    pass: "thisismypassword",
  },
});

const mailOptions = {
  from: "godhsip@gmail.com",
  to: "17bmiit082@gmail.com",
  subject: "Welcome to UHF",
  text: `Welcome To UHF-DEMO. This is a dummy mail`,
  html: "<h1>Raghav Bharucha i hope you like this.</h1>",
};

const sendMailToUser = async (req, res, next) => {
  try {
    const mailResponse = await transporter.sendMail(mailOptions);
    console.log(mailResponse);
    let outputObj = {
      message: "Welcome To UHF-DEMO!",
    };
    res.status(200).json(outputObj);
  } catch (error) {
      res.status(502).json({
          error: error.message
      });
  }
};

module.exports = sendMailToUser;
