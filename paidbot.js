const TelegramBot = require("node-telegram-bot-api");
const Razorpay = require("razorpay");
const User = require("./models/User");

const bot = new TelegramBot("YOUR_TELEGRAM_BOT_TOKEN", { polling: true });

const razorpay = new Razorpay({
  key_id: "YOUR_KEY_ID",
  key_secret: "YOUR_KEY_SECRET",
});

// ⏳ 1. Check if user is already premium
bot.onText(/\/start|\/subscribe/, async (msg) => {
  const chatId = msg.chat.id.toString();

  let user = await User.findOne({ telegramId: chatId });

  if (user && user.isPremium && user.premiumTill > new Date()) {
    bot.sendMessage(chatId, "✅ आप पहले से Premium Member हैं!");
    return;
  }

  // 🔁 2. Create new Razorpay Order
  const options = {
    amount: 19900, // Rs.199.00
    currency: "INR",
    receipt: `rcpt_${chatId}_${Date.now()}`,
    payment_capture: 1,
  };

  try {
    const order = await razorpay.orders.create(options);

    if (!user) {
      user = new User({
        telegramId: chatId,
        isPremium: false,
        razorpayOrderId: order.id,
      });
    } else {
      user.razorpayOrderId = order.id;
    }

    await user.save();

    const paymentLink = `https://api.razorpay.com/v1/checkout/embedded?order_id=${order.id}`;

    bot.sendMessage(chatId, `💳 Premium Access (1 महीना) के लिए ₹199 भुगतान करें:\n\n👇 क्लिक करें:\n${paymentLink}`);
  } catch (error) {
    console.error("❌ Razorpay Error:", error);
    bot.sendMessage(chatId, "❌ कुछ गड़बड़ हो गई, कृपया बाद में प्रयास करें।");
  }
});
