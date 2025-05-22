const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  telegramId: { type: String, required: true, unique: true },
  isPremium: { type: Boolean, default: false },
  premiumTill: { type: Date, default: null },
  razorpayOrderId: String,
  razorpayPaymentId: String,
});

module.exports = mongoose.model("User", userSchema);
