

// require('dotenv').config();
// const axios = require('axios');
// const TelegramBot = require('node-telegram-bot-api');
// const { RSI, EMA, MACD, ATR, SMA } = require('technicalindicators');

// // === CONFIG ===
// const TELEGRAM_BOT_TOKEN = '8003756443:AAHOP678U2KdAiTuVYQZVQ2DsYnT2Oq4PnE'
// const SYMBOL =  [
//   "BTCUSDT",
//   "ETHUSDT",
//   "BNBUSDT",

//   "CHZUSDT",
//   "ENJUSDT",
 
// ];
// const INTERVAL = '15m';
// const TARGET_MULTIPLIER = 1.5;
// const STOPLOSS_MULTIPLIER = 1.0;
// const VOLUME_SMA_PERIOD = 20;

// const bot = new TelegramBot(TELEGRAM_BOT_TOKEN, { polling: true });
// let USER_CHAT_IDS = [];
// let activeTrades = {}; // { chatId: { signal, entry, target, stoploss, atr } }

// // === FETCH FUNCTIONS ===
// async function fetchKlines(symbol, interval, limit = 100) {
//   try {
//     const url = `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${interval}&limit=${limit}`;
//     const res = await axios.get(url);
//     return res.data.map(c => ({
//       open: parseFloat(c[1]),
//       high: parseFloat(c[2]),
//       low: parseFloat(c[3]),
//       close: parseFloat(c[4]),
//       volume: parseFloat(c[5]),
//       time: c[0]
//     }));
//   } catch (err) {
//     console.error("Error fetching klines:", err.message);
//     return null;
//   }
// }

// async function fetchCurrentPrice(symbol) {
//   try {
//     const url = `https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`;
//     const res = await axios.get(url);
//     return parseFloat(res.data.price);
//   } catch (err) {
//     console.error("Error fetching current price:", err.message);
//     return null;
//   }
// }

// // === ANALYSIS ===
// function analyzeData(candles) {
//   const closes = candles.map(c => c.close);
//   const highs = candles.map(c => c.high);
//   const lows = candles.map(c => c.low);
//   const volumes = candles.map(c => c.volume);

//   const rsi = RSI.calculate({ values: closes, period: 14 });
//   const ema = EMA.calculate({ values: closes, period: 14 });
//   const macd = MACD.calculate({
//     values: closes,
//     fastPeriod: 12,
//     slowPeriod: 26,
//     signalPeriod: 9,
//     SimpleMAOscillator: false,
//     SimpleMASignal: false
//   });
//   const atr = ATR.calculate({ high: highs, low: lows, close: closes, period: 14 });
//   const volumeSMA = SMA.calculate({ values: volumes, period: VOLUME_SMA_PERIOD });

//   const lastClose = closes.at(-1);
//   const lastEma = ema.at(-1);
//   const lastMacd = macd.at(-1);
//   const lastRsi = rsi.at(-1);
//   const lastAtr = atr.at(-1);
//   const lastVolume = volumes.at(-1);
//   const lastVolumeSMA = volumeSMA.at(-1);

//   // Debug log to understand values
//   console.log({
//     lastClose, lastEma, lastMacd, lastRsi, lastVolume, lastVolumeSMA
//   });

//   let signal = 'HOLD';

//   // Volume check: loosened to 0.8 * avg
//   const volumeOkay = lastVolume > (0.8 * lastVolumeSMA);

//   // Relaxed signal condition
//   if (volumeOkay && lastClose > lastEma && lastMacd.MACD > lastMacd.signal && lastRsi > 45)
//     signal = 'BUY';
//   else if (volumeOkay && lastClose < lastEma && lastMacd.MACD < lastMacd.signal && lastRsi < 55)
//     signal = 'SELL';

//   let target = null, stoploss = null;
//   if (signal === 'BUY') {
//     target = lastClose + TARGET_MULTIPLIER * lastAtr;
//     stoploss = lastClose - STOPLOSS_MULTIPLIER * lastAtr;
//   } else if (signal === 'SELL') {
//     target = lastClose - TARGET_MULTIPLIER * lastAtr;
//     stoploss = lastClose + STOPLOSS_MULTIPLIER * lastAtr;
//   }

//   return {
//     signal, lastClose, lastEma, lastRsi, lastMacd,
//     lastAtr, lastVolume, lastVolumeSMA, target, stoploss
//   };
// }

// // === TRADE MANAGEMENT ===
// function checkIfHit(price, trade) {
//   if (!trade) return false;
//   if (trade.signal === 'BUY') {
//     if (price >= trade.target) return 'target';
//     if (price <= trade.stoploss) return 'stoploss';
//   } else if (trade.signal === 'SELL') {
//     if (price <= trade.target) return 'target';
//     if (price >= trade.stoploss) return 'stoploss';
//   }
//   return false;
// }

// async function sendSignal() {
//   try {
//     console.log("⏰ Checking signal...");
//     const candles = await fetchKlines(SYMBOL, INTERVAL);
//     const currentPrice = await fetchCurrentPrice(SYMBOL);
//     if (!candles || !currentPrice) return;

//     for (const chatId of USER_CHAT_IDS) {
//       const trade = activeTrades[chatId];

//       if (trade) {
//         const hit = checkIfHit(currentPrice, trade);
//         if (hit) {
//           await bot.sendMessage(chatId, `⚠️ *${trade.signal}* trade closed due to *${hit.toUpperCase()}* at ${currentPrice.toFixed(2)}`, { parse_mode: 'Markdown' });
//           delete activeTrades[chatId];
//           continue;
//         }

//         const newSL = trade.signal === 'BUY' ? currentPrice - trade.atr : currentPrice + trade.atr;
//         const shouldTrail = (
//           (trade.signal === 'BUY' && currentPrice > trade.entry + trade.atr && newSL > trade.stoploss) ||
//           (trade.signal === 'SELL' && currentPrice < trade.entry - trade.atr && newSL < trade.stoploss)
//         );
//         if (shouldTrail) {
//           trade.stoploss = newSL;
//           await bot.sendMessage(chatId, `🔁 *Trailing Stoploss Updated!*\nNew Stoploss: ${newSL.toFixed(2)}`, { parse_mode: 'Markdown' });
//         }

//       } else {
//         const analysis = analyzeData(candles);
//         if (!analysis) continue;

//         if (analysis.signal === 'HOLD') {
//           await bot.sendMessage(chatId, `⚠️ कोई नया ट्रेड सिग्नल नहीं मिला। मार्केट स्थिर है। (HOLD)\n\n📈 Price: ${currentPrice.toFixed(2)}\n📊 RSI: ${analysis.lastRsi.toFixed(2)}\n📉 EMA14: ${analysis.lastEma.toFixed(2)}\n📈 MACD: ${analysis.lastMacd.MACD.toFixed(2)}\n🟡 Signal Line: ${analysis.lastMacd.signal.toFixed(2)}`);
//           continue;
//         }

//         const msg = `
// 📡 *Crypto Signal - ${SYMBOL} (${INTERVAL})*
// 📈 Signal: *${analysis.signal}*
// 💰 Entry: ${currentPrice.toFixed(2)}
// 🎯 Target: ${analysis.target.toFixed(2)}
// 🛑 Stoploss: ${analysis.stoploss.toFixed(2)}

// 📊 RSI: ${analysis.lastRsi.toFixed(2)}
// 📉 EMA14: ${analysis.lastEma.toFixed(2)}
// 📈 MACD: ${analysis.lastMacd.MACD.toFixed(2)}
// 🟡 Signal Line: ${analysis.lastMacd.signal.toFixed(2)}
// 📊 Volume: ${analysis.lastVolume.toFixed(0)}
// 📉 Avg Vol (SMA20): ${analysis.lastVolumeSMA.toFixed(0)}
//         `;

//         await bot.sendMessage(chatId, msg, { parse_mode: 'Markdown' });

//         activeTrades[chatId] = {
//           signal: analysis.signal,
//           entry: currentPrice,
//           target: analysis.target,
//           stoploss: analysis.stoploss,
//           atr: analysis.lastAtr
//         };
//       }
//     }
//   } catch (err) {
//     console.error("🚨 sendSignal error:", err.message);
//   }
// }

// // === TELEGRAM COMMANDS ===
// bot.onText(/\/start/, (msg) => {
//   const chatId = msg.chat.id;
//   if (!USER_CHAT_IDS.includes(chatId)) USER_CHAT_IDS.push(chatId);
//   bot.sendMessage(chatId, "🤖 बॉट चालू हो गया है! हर 15 मिनट में नया सिग्नल मिलेगा।\n/status से स्थिति जानें।");
// });

// bot.onText(/\/status/, async (msg) => {
//   const chatId = msg.chat.id;
//   const trade = activeTrades[chatId];
//   if (!trade) return bot.sendMessage(chatId, "ℹ️ कोई एक्टिव ट्रेड नहीं है।");

//   const currentPrice = await fetchCurrentPrice(SYMBOL);
//   const msgText = `
// 📍 Active Trade
// 🔄 Type: ${trade.signal}
// 💰 Entry: ${trade.entry.toFixed(2)}
// 📈 Now: ${currentPrice.toFixed(2)}
// 🎯 Target: ${trade.target.toFixed(2)}
// 🛑 Stoploss: ${trade.stoploss.toFixed(2)}
//   `;
//   bot.sendMessage(chatId, msgText, { parse_mode: 'Markdown' });
// });

// // === RUN LOOP ===
// console.log("🚀 Bot started on 15m chart with relaxed filters...");
// sendSignal();
// setInterval(sendSignal, 1 * 60 * 1000);




















require('dotenv').config();
const axios = require('axios');
const TelegramBot = require('node-telegram-bot-api');
const { RSI, EMA, MACD, ATR, SMA } = require('technicalindicators');

// === CONFIG ===
const TELEGRAM_BOT_TOKEN = '8003756443:AAHOP678U2KdAiTuVYQZVQ2DsYnT2Oq4PnE';

// 50+ crypto symbols array
const SYMBOLS = [
  "BTCUSDT", "ETHUSDT", "BNBUSDT", "XRPUSDT", "ADAUSDT", "SOLUSDT", "DOGEUSDT",
  "DOTUSDT", "MATICUSDT", "LTCUSDT", "SHIBUSDT", "AVAXUSDT", "UNIUSDT", "ATOMUSDT",
  "LINKUSDT", "TRXUSDT", "ETCUSDT", "XLMUSDT", "XMRUSDT", "BCHUSDT", "ALGOUSDT",
  "VETUSDT", "FILUSDT", "ICPUSDT", "MANAUSDT", "SANDUSDT", "AXSUSDT", "EGLDUSDT",
  "AAVEUSDT", "NEOUSDT", "FTMUSDT", "GRTUSDT", "THETAUSDT", "CAKEUSDT", "QNTUSDT",
  "KSMUSDT", "ZILUSDT", "MKRUSDT", "RUNEUSDT", "BTTUSDT", "CHZUSDT", "ENJUSDT",
  "ZRXUSDT", "COMPUSDT", "KNCUSDT", "DASHUSDT", "YFIUSDT", "SNXUSDT", "BATUSDT",
  "CRVUSDT", "1INCHUSDT"
];

const INTERVAL = '15m';
const TARGET_MULTIPLIER = 1.5;
const STOPLOSS_MULTIPLIER = 1.0;
const VOLUME_SMA_PERIOD = 20;

const bot = new TelegramBot( '8003756443:AAHOP678U2KdAiTuVYQZVQ2DsYnT2Oq4PnE', { polling: true });
let USER_CHAT_IDS = [];
let activeTrades = {}; 
// Structure: { chatId: { [symbol]: { signal, entry, target, stoploss, atr } } }

// === FETCH FUNCTIONS ===
async function fetchKlines(symbol, interval, limit = 100) {
  try {
    const url = `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${interval}&limit=${limit}`;
    const res = await axios.get(url);
    return res.data.map(c => ({
      open: parseFloat(c[1]),
      high: parseFloat(c[2]),
      low: parseFloat(c[3]),
      close: parseFloat(c[4]),
      volume: parseFloat(c[5]),
      time: c[0]
    }));
  } catch (err) {
    console.error(`Error fetching klines for ${symbol}:`, err.message);
    return null;
  }
}

async function fetchCurrentPrice(symbol) {
  try {
    const url = `https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`;
    const res = await axios.get(url);
    return parseFloat(res.data.price);
  } catch (err) {
    console.error(`Error fetching current price for ${symbol}:`, err.message);
    return null;
  }
}

// === ANALYSIS ===
function analyzeData(candles) {
  if (!candles || candles.length === 0) return null;

  const closes = candles.map(c => c.close);
  const highs = candles.map(c => c.high);
  const lows = candles.map(c => c.low);
  const volumes = candles.map(c => c.volume);

  const rsi = RSI.calculate({ values: closes, period: 14 });
  const ema = EMA.calculate({ values: closes, period: 14 });
  const macd = MACD.calculate({
    values: closes,
    fastPeriod: 12,
    slowPeriod: 26,
    signalPeriod: 9,
    SimpleMAOscillator: false,
    SimpleMASignal: false
  });
  const atr = ATR.calculate({ high: highs, low: lows, close: closes, period: 14 });
  const volumeSMA = SMA.calculate({ values: volumes, period: VOLUME_SMA_PERIOD });

  if (!rsi.length || !ema.length || !macd.length || !atr.length || !volumeSMA.length) return null;

  const lastClose = closes.at(-1);
  const lastEma = ema.at(-1);
  const lastMacd = macd.at(-1);
  const lastRsi = rsi.at(-1);
  const lastAtr = atr.at(-1);
  const lastVolume = volumes.at(-1);
  const lastVolumeSMA = volumeSMA.at(-1);

  let signal = 'HOLD';
  const volumeOkay = lastVolume > (0.8 * lastVolumeSMA);

  if (volumeOkay && lastClose > lastEma && lastMacd.MACD > lastMacd.signal && lastRsi > 45)
    signal = 'BUY';
  else if (volumeOkay && lastClose < lastEma && lastMacd.MACD < lastMacd.signal && lastRsi < 55)
    signal = 'SELL';

  let target = null, stoploss = null;
  if (signal === 'BUY') {
    target = lastClose + TARGET_MULTIPLIER * lastAtr;
    stoploss = lastClose - STOPLOSS_MULTIPLIER * lastAtr;
  } else if (signal === 'SELL') {
    target = lastClose - TARGET_MULTIPLIER * lastAtr;
    stoploss = lastClose + STOPLOSS_MULTIPLIER * lastAtr;
  }

  return { signal, lastClose, lastEma, lastRsi, lastMacd, lastAtr, lastVolume, lastVolumeSMA, target, stoploss };
}

// === TRADE MANAGEMENT ===
function checkIfHit(price, trade) {
  if (!trade) return false;
  if (trade.signal === 'BUY') {
    if (price >= trade.target) return 'target';
    if (price <= trade.stoploss) return 'stoploss';
  } else if (trade.signal === 'SELL') {
    if (price <= trade.target) return 'target';
    if (price >= trade.stoploss) return 'stoploss';
  }
  return false;
}

async function sendSignal() {
  try {
    console.log("⏰ Checking signals for all symbols...");

    for (const symbol of SYMBOLS) {
      const candles = await fetchKlines(symbol, INTERVAL);
      const currentPrice = await fetchCurrentPrice(symbol);

      if (!candles || !currentPrice) {
        console.log(`Skipping ${symbol} due to data fetch error.`);
        continue;
      }

      for (const chatId of USER_CHAT_IDS) {
        if (!activeTrades[chatId]) activeTrades[chatId] = {};

        const trade = activeTrades[chatId][symbol];

        if (trade) {
          const hit = checkIfHit(currentPrice, trade);
          if (hit) {
            await bot.sendMessage(chatId, `⚠️ *${symbol}* का *${trade.signal}* ट्रेड बंद हो गया। कारण: *${hit.toUpperCase()}* @ ${currentPrice.toFixed(2)}`, { parse_mode: 'Markdown' });
            delete activeTrades[chatId][symbol];
            continue;
          }

          const newSL = trade.signal === 'BUY' ? currentPrice - trade.atr : currentPrice + trade.atr;
          const shouldTrail = (
            (trade.signal === 'BUY' && currentPrice > trade.entry + trade.atr && newSL > trade.stoploss) ||
            (trade.signal === 'SELL' && currentPrice < trade.entry - trade.atr && newSL < trade.stoploss)
          );
          if (shouldTrail) {
            trade.stoploss = newSL;
            await bot.sendMessage(chatId, `🔁 *${symbol} के लिए Trailing Stoploss अपडेट किया गया!*\nनया Stoploss: ${newSL.toFixed(2)}`, { parse_mode: 'Markdown' });
          }
        } else {
          const analysis = analyzeData(candles);
          if (!analysis) continue;

          if (analysis.signal === 'HOLD') {
            await bot.sendMessage(chatId, `⚠️ *${symbol}* के लिए कोई नया ट्रेड सिग्नल नहीं। मार्केट स्थिर है। (HOLD)\n\n📈 Price: ${currentPrice.toFixed(2)}\n📊 RSI: ${analysis.lastRsi.toFixed(2)}\n📉 EMA14: ${analysis.lastEma.toFixed(2)}\n📈 MACD: ${analysis.lastMacd.MACD.toFixed(2)}\n🟡 Signal Line: ${analysis.lastMacd.signal.toFixed(2)}`, { parse_mode: 'Markdown' });
            continue;
          }

          activeTrades[chatId][symbol] = {
            signal: analysis.signal,
            entry: analysis.lastClose,
            target: analysis.target,
            stoploss: analysis.stoploss,
            atr: analysis.lastAtr
          };

          await bot.sendMessage(chatId,
            `🚀 New Trade Signal for *${symbol}*\n` +
            `Signal: *${analysis.signal}*\n` +
            `Entry: ${analysis.lastClose.toFixed(2)}\n` +
            `Target: ${analysis.target.toFixed(2)}\n` +
            `Stoploss: ${analysis.stoploss.toFixed(2)}\n\n` +
            `🕒 Interval: ${INTERVAL}`, { parse_mode: 'Markdown' }
          );
        }
      }
    }
  } catch (error) {
    console.error('Error in sendSignal:', error);
  }
}

// === TELEGRAM BOT SETUP ===
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  if (!USER_CHAT_IDS.includes(chatId)) USER_CHAT_IDS.push(chatId);
  bot.sendMessage(chatId, "👋 Welcome! You will start receiving crypto trade signals for multiple symbols.");
});

bot.onText(/\/stop/, (msg) => {
  const chatId = msg.chat.id;
  USER_CHAT_IDS = USER_CHAT_IDS.filter(id => id !== chatId);
  delete activeTrades[chatId];
  bot.sendMessage(chatId, "🛑 You will no longer receive trade signals. To restart, send /start.");
});

// Start polling signals every 15 minutes (900,000 ms)
setInterval(sendSignal, 900000);

// For immediate start (optional)
// sendSignal();
