import Message from '../models/message.model.js';
import { errorHandler } from '../utils/error.js';
import nodemailer from 'nodemailer';

// Create email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

/**
 * @swagger
 * components:
 *   schemas:
 *     Message:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           format: email
 *           description: The email address of the sender.
 *         phone:
 *           type: string
 *           description: The phone number of the sender.
 *         message:
 *           type: string
 *           description: The content of the message being sent.
 *       required:
 *         - email
 *         - phone
 *         - message
 */
export const sendMessage = async (req, res, next) => {


  // Validation
  if (!email || !phone || !message || email === '' || phone === '' || message === '') {
    return next(errorHandler(400, 'All fields are required'));
  }

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!emailRegex.test(email)) {
    return next(errorHandler(400, 'Please enter a valid email address'));
  }

  try {
    // Save message to database
    const newMessage = await Message.create({ email, phone, message });

    // Send email notification
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: 'New Contact Message',
      text: `You have a new message from:
Email: ${email}
Phone: ${phone}
Message: ${message}`
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({
      success: true,
      message: 'Message sent successfully',
      data: newMessage
    });
  } catch (error) {
    next(error);
  }
};
