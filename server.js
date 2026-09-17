require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet'); 
const rateLimit = require('express-rate-limit'); 
const { body, validationResult } = require('express-validator'); 

const Mailjet = require('node-mailjet');
const mailjet = Mailjet.apiConnect(
  process.env.MJ_APIKEY_PUBLIC,
  process.env.MJ_APIKEY_PRIVATE
);

const app = express();

// --- SECURITY MIDDLEWARE ---

// 1. Helmet: Sets secure HTTP headers automatically
app.use(helmet());

// 2. CORS: Allowed for all origins during local testing to prevent browser blocks
app.use(cors());

app.use(express.json());

// 3. Rate Limiting: Max 3 requests per IP per hour
const contactRateLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour in milliseconds
  max: 3, // Limit each IP to 3 requests per window
  message: { success: false, message: 'Too many requests from this IP. Please try again in an hour.' },
  standardHeaders: true, 
  legacyHeaders: false, 
});

// --- API ENDPOINTS ---

// 4. Input Sanitization: Validate data before hitting Mailjet
app.post('/api/contact', 
  contactRateLimiter, // Apply rate limiter to this specific route
  [
    // Trim whitespace, ensure it's not empty, and strip out raw HTML/scripts
    body('name').trim().notEmpty().withMessage('Name is required').escape(),
    body('email').trim().isEmail().withMessage('Valid email is required').normalizeEmail(),
    body('message').trim().notEmpty().withMessage('Message is required').escape()
  ],
  (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success: false, message: 'Invalid input data', errors: errors.array() });
    }

    const { name, email, message } = req.body;

    const request = mailjet.post('send', { version: 'v3.1' }).request({
      Messages: [
        {
          From: {
            Email: process.env.SENDER_EMAIL,
            Name: 'Portfolio Contact Form',
          },
          To: [
            {
              Email: process.env.RECIPIENT_EMAIL,
              Name: 'Portfolio Update', // Generic name for the receiver
            },
          ],
          ReplyTo: {
              Email: email,
              Name: name
          },
          Subject: `New Portfolio Message from ${name}`,
          TextPart: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
          HTMLPart: `<h3>New message from ${name} (${email})</h3><p>${message}</p>`,
        },
      ],
    });

    request
      .then(result => {
        console.log("Email sent:", result.body);
        res.status(200).json({ success: true, message: 'Email sent successfully' });
      })
      .catch(err => {
        console.log("Error:", err.statusCode, err.message);
        res.status(500).json({ success: false, message: 'Failed to send email' });
      });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Secure server running on http://localhost:${PORT}`));