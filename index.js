import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import mongoose from "mongoose";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// ✅ Define Contact Schema
const contactSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now },
});

const Contact = mongoose.model("Contact", contactSchema);

// ✅ Default route
app.get("/", (req, res) => {
  res.send("🚀 Portfolio Backend is running successfully!");
});

// ✅ Contact route (Save to MongoDB + Send Email)
app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "All fields are required." });
  }

  try {
    // Save message in MongoDB
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    // Send email notification
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `📩 New Contact Message from ${name}`,
      html: `
        <h3>New Message Received</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log("✅ Email sent successfully from:", email);

    res.json({ success: true, message: "Message sent and saved successfully!" });
  } catch (error) {
    console.error("❌ Error:", error);
    res.status(500).json({ success: false, message: "Error sending message." });
  }
});

// ✅ Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
