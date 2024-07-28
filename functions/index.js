const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

const nodemailer = require("nodemailer");

// Configurarea transporterului Nodemailer folosind datele tale
const transporter = nodemailer.createTransport({
  host: "mail.creditemedicale.ro",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: "exclusivmd@creditemedicale.ro",
    pass: "vtn0079su8d",
    // pass: "vtn0079su8dh",
  },
});

exports.sendEmailNotification = functions.firestore
    .document("Mesaje/{messageId}")
    .onCreate(async (snap, context) => {
      const data = snap.data();
      const text = `Nume: ${data.name}
        Email: ${data.email}
        Telefon: ${data.phone}
        Mesaj: ${data.message}`;
      const mailOptions = {
        from: "exclusivmd@creditemedicale.ro", // Expeditor
        to: data.emailFirma, // Destinatarul
        subject: `Ai primit un mesaj nou de la ${data.name}`,
        text,
      };

      try {
        await transporter.sendMail(mailOptions);
        console.log("Email trimis cu succes!");
      } catch (error) {
        console.error("Eroare la trimiterea emailului:", error);
      }
    });
