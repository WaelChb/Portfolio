require("dotenv").config();

const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Configuration du transporteur SMTP avec Hotmail (Outlook)
const transporter = nodemailer.createTransport({
  host: "smtp-mail.outlook.com",
  port: 587,
  secure: false,
  auth: {
    user: "cwael2@outlook.fr",
    pass: process.env.EMAIL_PASSWORD,
  },
  tls: {
    ciphers: "SSLv3",
  },
});

app.post("/contact", (req, res) => {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: "cwael2@outlook.fr",
    to: "cwael1@hotmail.fr",
    subject: subject,
    text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  console.log(
    "Attempting to send email with the following options:",
    mailOptions
  );
  console.log(process.env.EMAIL_PASSWORD, "mdp");

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).send("Erreur lors de l'envoi du message");
    } else {
      console.log("Email sent:", info.response);
      res.status(200).send("Message envoyé avec succès");
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
