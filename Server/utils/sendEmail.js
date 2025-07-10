// server/utils/sendEmail.js
import nodemailer from 'nodemailer';

const sendEmail = async ({ to, subject, html }) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,     // Your Gmail ID
        pass: process.env.EMAIL_PASS,     // Gmail App Password
      },
    });

    const mailOptions = {
      from: `Pixxly Clone <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html,
    };

    await transporter.sendMail(mailOptions);
    console.log(`Email sent to ${to}`);
  } catch (err) {
    console.error('Email sending failed:', err.message);
    throw new Error('Email could not be sent');
  }
};

export default sendEmail;
