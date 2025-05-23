// // // // const axios = require('axios');
// // // // const fs = require('fs');
// // // // const TelegramBot = require('node-telegram-bot-api');
// // // // const indicators = require('technicalindicators');

// // // // const {
// // // //   RSI, EMA, MACD, ATR, SMA, BollingerBands, Stochastic, ADX,
// // // //   CCI, WilliamsR, OBV, MFI, ROC, TRIX, UltimateOscillator,
// // // //   PSAR, IchimokuCloud, KST, ForceIndex, StochasticRSI, FibonacciRetracement
// // // // } = indicators;

// // // // const SYMBOLS = ['BTCUSDT', 'ETHUSDT', 'BNBUSDT'];
// // // // const INTERVAL = '1m';
// // // // const BOT = new TelegramBot('8003756443:AAHOP678U2KdAiTuVYQZVQ2DsYnT2Oq4PnE', { polling: true });
// // // // const USER_CHAT_IDS = [];
// // // // let currentSymbolIndex = 0;

// // // // async function fetchKlines(symbol, interval, limit = 100) {
// // // //   const url = `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${interval}&limit=${limit}`;
// // // //   const res = await axios.get(url);
// // // //   return res.data.map(c => ({
// // // //     time: c[0],
// // // //     open: +c[1],
// // // //     high: +c[2],
// // // //     low: +c[3],
// // // //     close: +c[4],
// // // //     volume: +c[5]
// // // //   }));
// // // // }

// // // // function extractValues(candles) {
// // // //   return {
// // // //     close: candles.map(c => c.close),
// // // //     high: candles.map(c => c.high),
// // // //     low: candles.map(c => c.low),
// // // //     volume: candles.map(c => c.volume)
// // // //   };
// // // // }

// // // // function calculateIndicators({ close, high, low, volume }) {
// // // //   return {
// // // //     rsi: RSI.calculate({ values: close, period: 14 }).at(-1),
// // // //     macd: MACD.calculate({ values: close, fastPeriod: 12, slowPeriod: 26, signalPeriod: 9 }).at(-1),
// // // //     stochastic: Stochastic.calculate({ high, low, close, period: 14, signalPeriod: 3 }).at(-1),
// // // //   };
// // // // }

// // // // function analyzeIndicators(indicators) {
// // // //   const bullish = [];
// // // //   const bearish = [];

// // // //   if (indicators.rsi < 30) bullish.push('RSI');
// // // //   else if (indicators.rsi > 70) bearish.push('RSI');

// // // //   if (indicators.macd?.histogram > 0) bullish.push('MACD');
// // // //   else if (indicators.macd?.histogram < 0) bearish.push('MACD');

// // // //   if (indicators.stochastic?.k > indicators.stochastic?.d) bullish.push('STOCH');
// // // //   else if (indicators.stochastic?.k < indicators.stochastic?.d) bearish.push('STOCH');

// // // //   const score = bullish.length - bearish.length;
// // // //   if (score >= 2) return 'BUY';
// // // //   if (score <= -2) return 'SELL';
// // // //   return 'HOLD';
// // // // }

// // // // function formatSignal(symbol, signal, indicators) {
// // // //   let text = `*${symbol} Signal*\nSignal: ${signal}`;
// // // //   for (const [key, val] of Object.entries(indicators)) {
// // // //     if (typeof val === 'object' && val !== null) {
// // // //       text += `\n${key.toUpperCase()}: ${JSON.stringify(val)}`;
// // // //     } else if (val !== undefined && !isNaN(val)) {
// // // //       text += `\n${key.toUpperCase()}: ${val.toFixed(2)}`;
// // // //     }
// // // //   }
// // // //   return text;
// // // // }

// // // // async function analyzeAndNotify(symbol, chatId) {
// // // //   try {
// // // //     const candles = await fetchKlines(symbol, INTERVAL);
// // // //     const values = extractValues(candles);
// // // //     const indicators = calculateIndicators(values);
// // // //     const signal = analyzeIndicators(indicators);
// // // //     const message = formatSignal(symbol, signal, indicators);
// // // //     BOT.sendMessage(chatId, message, { parse_mode: 'Markdown' });
// // // //   } catch (error) {
// // // //     console.error(`Error analyzing ${symbol}:`, error.message);
// // // //   }
// // // // }

// // // // BOT.onText(/\/start/, msg => {
// // // //   const chatId = msg.chat.id;
// // // //   if (!USER_CHAT_IDS.includes(chatId)) USER_CHAT_IDS.push(chatId);
// // // //   BOT.sendMessage(chatId, '✅ Bot started. Signals will be sent every minute.');
// // // // });
// // // // BOT.onText(/\/status/, (msg) => {
// // // //   const chatId = msg.chat.id;
// // // //   const currentSymbol = SYMBOLS[(currentSymbolIndex - 1 + SYMBOLS.length) % SYMBOLS.length];
// // // //   const message = `📊 *Bot Status*\n\n` +
// // // //                   `🟢 Bot is running\n` +
// // // //                   `⏱ Current interval: ${INTERVAL}\n` +
// // // //                   `💱 Last analyzed symbol: ${currentSymbol}\n` +
// // // //                   `📡 Subscribed users: ${USER_CHAT_IDS.length}`;
// // // //   BOT.sendMessage(chatId, message, { parse_mode: 'Markdown' });
// // // // });

// // // // setInterval(async () => {
// // // //   const symbol = SYMBOLS[currentSymbolIndex];
// // // //   currentSymbolIndex = (currentSymbolIndex + 1) % SYMBOLS.length;
// // // //   for (const chatId of USER_CHAT_IDS) {
// // // //     await analyzeAndNotify(symbol, chatId);
// // // //   }
// // // // }, 60 * 1000);

// // // // console.log('✅ Crypto Bot with only indicator signals running.');




















// // // // const axios = require('axios');
// // // // const fs = require('fs');
// // // // const TelegramBot = require('node-telegram-bot-api');
// // // // const indicators = require('technicalindicators');

// // // // const {
// // // //   RSI, EMA, MACD, ATR, SMA, BollingerBands, Stochastic, ADX,
// // // //   CCI, WilliamsR, OBV, MFI, ROC, TRIX, UltimateOscillator,
// // // //   PSAR, IchimokuCloud, KST, ForceIndex, StochasticRSI, FibonacciRetracement
// // // // } = indicators;

// // // // const SYMBOLS = ['BTCUSDT', 'ETHUSDT', 'BNBUSDT'];
// // // // const INTERVAL = '1m';
// // // // const BOT = new TelegramBot('8003756443:AAHOP678U2KdAiTuVYQZVQ2DsYnT2Oq4PnE', { polling: true });
// // // // const USER_CHAT_IDS = [];
// // // // let currentSymbolIndex = 0;
// // // // const activeTrades = {}; // ✅ New object to store ongoing trades

// // // // async function fetchKlines(symbol, interval, limit = 100) {
// // // //   const url = `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${interval}&limit=${limit}`;
// // // //   const res = await axios.get(url);
// // // //   return res.data.map(c => ({
// // // //     time: c[0],
// // // //     open: +c[1],
// // // //     high: +c[2],
// // // //     low: +c[3],
// // // //     close: +c[4],
// // // //     volume: +c[5]
// // // //   }));
// // // // }

// // // // function extractValues(candles) {
// // // //   return {
// // // //     close: candles.map(c => c.close),
// // // //     high: candles.map(c => c.high),
// // // //     low: candles.map(c => c.low),
// // // //     volume: candles.map(c => c.volume)
// // // //   };
// // // // }

// // // // function calculateIndicators({ close, high, low, volume }) {
// // // //   return {
// // // //     rsi: RSI.calculate({ values: close, period: 14 }).at(-1),
// // // //     macd: MACD.calculate({ values: close, fastPeriod: 12, slowPeriod: 26, signalPeriod: 9 }).at(-1),
// // // //     stochastic: Stochastic.calculate({ high, low, close, period: 14, signalPeriod: 3 }).at(-1),
// // // //   };
// // // // }

// // // // function analyzeIndicators(indicators) {
// // // //   const bullish = [];
// // // //   const bearish = [];

// // // //   if (indicators.rsi < 30) bullish.push('RSI');
// // // //   else if (indicators.rsi > 70) bearish.push('RSI');

// // // //   if (indicators.macd?.histogram > 0) bullish.push('MACD');
// // // //   else if (indicators.macd?.histogram < 0) bearish.push('MACD');

// // // //   if (indicators.stochastic?.k > indicators.stochastic?.d) bullish.push('STOCH');
// // // //   else if (indicators.stochastic?.k < indicators.stochastic?.d) bearish.push('STOCH');

// // // //   const score = bullish.length - bearish.length;
// // // //   if (score >= 2) return 'BUY';
// // // //   if (score <= -2) return 'SELL';
// // // //   return 'HOLD';
// // // // }

// // // // function formatSignal(symbol, signal, indicators) {
// // // //   let text = `*${symbol} Signal*\nSignal: ${signal}`;
// // // //   for (const [key, val] of Object.entries(indicators)) {
// // // //     if (typeof val === 'object' && val !== null) {
// // // //       text += `\n${key.toUpperCase()}: ${JSON.stringify(val)}`;
// // // //     } else if (val !== undefined && !isNaN(val)) {
// // // //       text += `\n${key.toUpperCase()}: ${val.toFixed(2)}`;
// // // //     }
// // // //   }
// // // //   return text;
// // // // }

// // // // async function analyzeAndNotify(symbol, chatId) {
// // // //   try {
// // // //     const candles = await fetchKlines(symbol, INTERVAL);
// // // //     const values = extractValues(candles);
// // // //     const indicators = calculateIndicators(values);
// // // //     const signal = analyzeIndicators(indicators);
// // // //     const message = formatSignal(symbol, signal, indicators);

// // // //     // ✅ Update active trade info if BUY or SELL
// // // //     if (signal === 'BUY' || signal === 'SELL') {
// // // //       const lastCandle = candles[candles.length - 1];
// // // //       activeTrades[symbol] = {
// // // //         side: signal,
// // // //         entry: lastCandle.close,
// // // //         time: new Date(lastCandle.time).toLocaleTimeString()
// // // //       };
// // // //     }

// // // //     BOT.sendMessage(chatId, message, { parse_mode: 'Markdown' });
// // // //   } catch (error) {
// // // //     console.error(`Error analyzing ${symbol}:`, error.message);
// // // //   }
// // // // }

// // // // BOT.onText(/\/start/, msg => {
// // // //   const chatId = msg.chat.id;
// // // //   if (!USER_CHAT_IDS.includes(chatId)) USER_CHAT_IDS.push(chatId);
// // // //   BOT.sendMessage(chatId, '✅ Bot started. Signals will be sent every minute.');
// // // // });

// // // // BOT.onText(/\/status/, (msg) => {
// // // //   const chatId = msg.chat.id;
// // // //   const currentSymbol = SYMBOLS[(currentSymbolIndex - 1 + SYMBOLS.length) % SYMBOLS.length];

// // // //   let message = `📊 *Bot Status*\n\n` +
// // // //                 `🟢 Bot is running\n` +
// // // //                 `⏱ Current interval: ${INTERVAL}\n` +
// // // //                 `💱 Last analyzed symbol: ${currentSymbol}\n` +
// // // //                 `📡 Subscribed users: ${USER_CHAT_IDS.length}\n\n`;

// // // //   if (Object.keys(activeTrades).length > 0) {
// // // //     message += `🔥 *Active Trades:*\n`;
// // // //     for (const [symbol, trade] of Object.entries(activeTrades)) {
// // // //       message += `• ${symbol}: ${trade.side} @ ${trade.entry} (⏰ ${trade.time})\n`;
// // // //     }
// // // //   } else {
// // // //     message += `📭 No active trades.`;
// // // //   }

// // // //   BOT.sendMessage(chatId, message, { parse_mode: 'Markdown' });
// // // // });

// // // // setInterval(async () => {
// // // //   const symbol = SYMBOLS[currentSymbolIndex];
// // // //   currentSymbolIndex = (currentSymbolIndex + 1) % SYMBOLS.length;
// // // //   for (const chatId of USER_CHAT_IDS) {
// // // //     await analyzeAndNotify(symbol, chatId);
// // // //   }
// // // // }, 60 * 1000);

// // // // console.log('✅ Crypto Bot with only indicator signals running.');




















// // // const axios = require('axios');
// // // const TelegramBot = require('node-telegram-bot-api');
// // // const indicators = require('technicalindicators');

// // // const {
// // //   RSI, EMA, MACD, ATR, SMA, BollingerBands, Stochastic, ADX,
// // //   CCI, WilliamsR, OBV, MFI, ROC, TRIX, UltimateOscillator,
// // //   PSAR, KST, ForceIndex, StochasticRSI
// // // } = indicators;

// // // const SYMBOLS = ['BTCUSDT', 'ETHUSDT', 'BNBUSDT'];
// // // const INTERVAL = '1m';
// // // const BOT = new TelegramBot('8003756443:AAHOP678U2KdAiTuVYQZVQ2DsYnT2Oq4PnE', { polling: true });
// // // const USER_CHAT_IDS = [];
// // // let currentSymbolIndex = 0;
// // // const activeTrades = {};

// // // async function fetchKlines(symbol, interval, limit = 100) {
// // //   const url = `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${interval}&limit=${limit}`;
// // //   const res = await axios.get(url);
// // //   return res.data.map(c => ({
// // //     time: c[0],
// // //     open: +c[1],
// // //     high: +c[2],
// // //     low: +c[3],
// // //     close: +c[4],
// // //     volume: +c[5]
// // //   }));
// // // }

// // // function extractValues(candles) {
// // //   return {
// // //     close: candles.map(c => c.close),
// // //     high: candles.map(c => c.high),
// // //     low: candles.map(c => c.low),
// // //     volume: candles.map(c => c.volume)
// // //   };
// // // }

// // // function calculateIndicators({ close, high, low, volume }) {
// // //   return {
// // //     rsi: RSI.calculate({ values: close, period: 14 }).at(-1),
// // //     macd: MACD.calculate({ values: close, fastPeriod: 12, slowPeriod: 26, signalPeriod: 9 }).at(-1),
// // //     stochastic: Stochastic.calculate({ high, low, close, period: 14, signalPeriod: 3 }).at(-1),
// // //     ema: EMA.calculate({ values: close, period: 20 }).at(-1),
// // //     sma: SMA.calculate({ values: close, period: 20 }).at(-1),
// // //     atr: ATR.calculate({ high, low, close, period: 14 }).at(-1),
// // //     cci: CCI.calculate({ high, low, close, period: 20 }).at(-1),
// // //     adx: ADX.calculate({ high, low, close, period: 14 }).at(-1),
// // //     mfi: MFI.calculate({ high, low, close, volume, period: 14 }).at(-1),
// // //     roc: ROC.calculate({ values: close, period: 12 }).at(-1),
// // //     obv: OBV.calculate({ close, volume }).at(-1),
// // //   };
// // // }

// // // function analyzeIndicators(indicators) {
// // //   const bullish = [];
// // //   const bearish = [];

// // //   if (indicators.rsi < 30) bullish.push('RSI');
// // //   else if (indicators.rsi > 70) bearish.push('RSI');

// // //   if (indicators.macd?.histogram > 0) bullish.push('MACD');
// // //   else if (indicators.macd?.histogram < 0) bearish.push('MACD');

// // //   if (indicators.stochastic?.k > indicators.stochastic?.d) bullish.push('STOCH');
// // //   else if (indicators.stochastic?.k < indicators.stochastic?.d) bearish.push('STOCH');

// // //   if (indicators.ema > indicators.sma) bullish.push('EMA>SMA');
// // //   else if (indicators.ema < indicators.sma) bearish.push('EMA<SMA');

// // //   if (indicators.cci > 100) bullish.push('CCI');
// // //   else if (indicators.cci < -100) bearish.push('CCI');

// // //   if (indicators.mfi < 20) bullish.push('MFI');
// // //   else if (indicators.mfi > 80) bearish.push('MFI');

// // //   const score = bullish.length - bearish.length;
// // //   if (score >= 3) return 'BUY';
// // //   if (score <= -3) return 'SELL';
// // //   return 'HOLD';
// // // }

// // // function formatSignal(symbol, signal, indicators, entry) {
// // //   const target = signal === 'BUY' ? entry * 1.02 : entry * 0.98;
// // //   const stoploss = signal === 'BUY' ? entry * 0.99 : entry * 1.01;

// // //   let text = `*${symbol} Signal*\n` +
// // //              `Signal: ${signal}\n` +
// // //              `Entry: ${entry.toFixed(2)}\n` +
// // //              `🎯 Target: ${target.toFixed(2)}\n` +
// // //              `🛑 Stoploss: ${stoploss.toFixed(2)}\n`;

// // //   for (const [key, val] of Object.entries(indicators)) {
// // //     if (typeof val === 'object' && val !== null) {
// // //       text += `\n${key.toUpperCase()}: ${JSON.stringify(val)}`;
// // //     } else if (val !== undefined && !isNaN(val)) {
// // //       text += `\n${key.toUpperCase()}: ${val.toFixed(2)}`;
// // //     }
// // //   }

// // //   return text;
// // // }

// // // async function analyzeAndNotify(symbol, chatId) {
// // //   try {
// // //     const candles = await fetchKlines(symbol, INTERVAL);
// // //     const values = extractValues(candles);
// // //     const indicators = calculateIndicators(values);
// // //     const signal = analyzeIndicators(indicators);
// // //     const lastCandle = candles.at(-1);
// // //     const entry = lastCandle.close;
// // //     const message = formatSignal(symbol, signal, indicators, entry);

// // //     if (signal === 'BUY' || signal === 'SELL') {
// // //       activeTrades[symbol] = {
// // //         side: signal,
// // //         entry,
// // //         time: new Date(lastCandle.time).toLocaleTimeString()
// // //       };
// // //     }

// // //     BOT.sendMessage(chatId, message, { parse_mode: 'Markdown' });
// // //   } catch (error) {
// // //     console.error(`Error analyzing ${symbol}:`, error.message);
// // //   }
// // // }

// // // BOT.onText(/\/start/, msg => {
// // //   const chatId = msg.chat.id;
// // //   if (!USER_CHAT_IDS.includes(chatId)) USER_CHAT_IDS.push(chatId);
// // //   BOT.sendMessage(chatId, '✅ Bot started. Signals will be sent every minute.');
// // // });

// // // BOT.onText(/\/status/, msg => {
// // //   const chatId = msg.chat.id;
// // //   const currentSymbol = SYMBOLS[(currentSymbolIndex - 1 + SYMBOLS.length) % SYMBOLS.length];
// // //   let message = `📊 *Bot Status*\n\n` +
// // //                 `🟢 Bot is running\n` +
// // //                 `⏱ Interval: ${INTERVAL}\n` +
// // //                 `💱 Last symbol: ${currentSymbol}\n` +
// // //                 `📡 Subscribers: ${USER_CHAT_IDS.length}\n\n`;

// // //   if (Object.keys(activeTrades).length > 0) {
// // //     message += `🔥 *Active Trades:*\n`;
// // //     for (const [symbol, trade] of Object.entries(activeTrades)) {
// // //       message += `• ${symbol}: ${trade.side} @ ${trade.entry} (⏰ ${trade.time})\n`;
// // //     }
// // //   } else {
// // //     message += `📭 No active trades.`;
// // //   }

// // //   BOT.sendMessage(chatId, message, { parse_mode: 'Markdown' });
// // // });

// // // setInterval(async () => {
// // //   const symbol = SYMBOLS[currentSymbolIndex];
// // //   currentSymbolIndex = (currentSymbolIndex + 1) % SYMBOLS.length;
// // //   for (const chatId of USER_CHAT_IDS) {
// // //     await analyzeAndNotify(symbol, chatId);
// // //   }
// // // }, 60 * 1000);

// // // console.log('✅ Crypto signal bot running...');











// // const axios = require('axios');
// // const TelegramBot = require('node-telegram-bot-api');
// // const indicators = require('technicalindicators');

// // const {
// //   RSI, EMA, MACD, ATR, SMA, Stochastic, CCI, ADX, MFI, ROC, OBV
// // } = indicators;

// // const SYMBOLS = ['BTCUSDT', 'ETHUSDT', 'BNBUSDT'];
// // const INTERVAL = '1m';
// // const BOT = new TelegramBot('8003756443:AAHOP678U2KdAiTuVYQZVQ2DsYnT2Oq4PnE', { polling: true });
// // const USER_CHAT_IDS = [];
// // let currentSymbolIndex = 0;
// // const activeTrades = {};

// // async function fetchKlines(symbol, interval, limit = 100) {
// //   const url = `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${interval}&limit=${limit}`;
// //   const res = await axios.get(url);
// //   return res.data.map(c => ({
// //     time: c[0],
// //     open: +c[1],
// //     high: +c[2],
// //     low: +c[3],
// //     close: +c[4],
// //     volume: +c[5]
// //   }));
// // }

// // function extractValues(candles) {
// //   return {
// //     close: candles.map(c => c.close),
// //     high: candles.map(c => c.high),
// //     low: candles.map(c => c.low),
// //     volume: candles.map(c => c.volume)
// //   };
// // }

// // function calculateIndicators({ close, high, low, volume }) {
// //   return {
// //     rsi: RSI.calculate({ values: close, period: 14 }).at(-1),
// //     macd: MACD.calculate({ values: close, fastPeriod: 12, slowPeriod: 26, signalPeriod: 9 }).at(-1),
// //     stochastic: Stochastic.calculate({ high, low, close, period: 14, signalPeriod: 3 }).at(-1),
// //     ema: EMA.calculate({ values: close, period: 20 }).at(-1),
// //     sma: SMA.calculate({ values: close, period: 20 }).at(-1),
// //     atr: ATR.calculate({ high, low, close, period: 14 }).at(-1),
// //     cci: CCI.calculate({ high, low, close, period: 20 }).at(-1),
// //     adx: ADX.calculate({ high, low, close, period: 14 }).at(-1),
// //     mfi: MFI.calculate({ high, low, close, volume, period: 14 }).at(-1),
// //     roc: ROC.calculate({ values: close, period: 12 }).at(-1),
// //     obv: OBV.calculate({ close, volume }).at(-1),
// //   };
// // }

// // function analyzeIndicators(indicators) {
// //   const bullish = [];
// //   const bearish = [];

// //   if (indicators.rsi < 30) bullish.push('RSI');
// //   else if (indicators.rsi > 70) bearish.push('RSI');

// //   if (indicators.macd?.histogram > 0) bullish.push('MACD');
// //   else if (indicators.macd?.histogram < 0) bearish.push('MACD');

// //   if (indicators.stochastic?.k > indicators.stochastic?.d) bullish.push('STOCH');
// //   else if (indicators.stochastic?.k < indicators.stochastic?.d) bearish.push('STOCH');

// //   if (indicators.ema > indicators.sma) bullish.push('EMA>SMA');
// //   else if (indicators.ema < indicators.sma) bearish.push('EMA<SMA');

// //   if (indicators.cci > 100) bullish.push('CCI');
// //   else if (indicators.cci < -100) bearish.push('CCI');

// //   if (indicators.mfi < 20) bullish.push('MFI');
// //   else if (indicators.mfi > 80) bearish.push('MFI');

// //   const score = bullish.length - bearish.length;
// //   if (score >= 3) return 'BUY';
// //   if (score <= -3) return 'SELL';
// //   return 'HOLD';
// // }

// // function formatSignal(symbol, signal, indicators, entry, target, stoploss) {
// //   let text = `*${symbol} Signal*\n` +
// //              `Signal: ${signal}\n` +
// //              `Entry: ${entry.toFixed(2)}\n` +
// //              `🎯 Target: ${target.toFixed(2)}\n` +
// //              `🛑 Stoploss: ${stoploss.toFixed(2)}\n`;

// //   for (const [key, val] of Object.entries(indicators)) {
// //     if (typeof val === 'object' && val !== null) {
// //       text += `\n${key.toUpperCase()}: ${JSON.stringify(val)}`;
// //     } else if (val !== undefined && !isNaN(val)) {
// //       text += `\n${key.toUpperCase()}: ${val.toFixed(2)}`;
// //     }
// //   }

// //   return text;
// // }

// // // async function analyzeAndNotify(symbol, chatId) {
// // //   try {
// // //     const candles = await fetchKlines(symbol, INTERVAL);
// // //     const values = extractValues(candles);
// // //     const indicators = calculateIndicators(values);
// // //     const signal = analyzeIndicators(indicators);
// // //     const lastCandle = candles.at(-1);
// // //     const entry = lastCandle.close;

// // //     // CHECK if active trade is open
// // //     const existing = activeTrades[symbol];
// // //     if (existing) {
// // //       const price = entry;
// // //       if (
// // //         (existing.side === 'BUY' && (price >= existing.target || price <= existing.stoploss)) ||
// // //         (existing.side === 'SELL' && (price <= existing.target || price >= existing.stoploss))
// // //       ) {
// // //         // close the trade
// // //         delete activeTrades[symbol];
// // //       } else {
// // //         return; // don't send new signal
// // //       }
// // //     }

// // //     if (signal === 'BUY' || signal === 'SELL') {
// // //       const target = signal === 'BUY' ? entry * 1.02 : entry * 0.98;
// // //       const stoploss = signal === 'BUY' ? entry * 0.99 : entry * 1.01;

// // //       activeTrades[symbol] = {
// // //         side: signal,
// // //         entry,
// // //         target,
// // //         stoploss,
// // //         time: new Date(lastCandle.time).toLocaleTimeString()
// // //       };

// // //       const message = formatSignal(symbol, signal, indicators, entry, target, stoploss);
// // //       BOT.sendMessage(chatId, message, { parse_mode: 'Markdown' });
// // //     }
// // //   } catch (error) {
// // //     console.error(`Error analyzing ${symbol}:`, error.message);
// // //   }
// // // }

// // async function analyzeAndNotify(symbol, chatId) {
// //   try {
// //     const candles = await fetchKlines(symbol, INTERVAL);
// //     const values = extractValues(candles);
// //     const indicators = calculateIndicators(values);
// //     const signal = analyzeIndicators(indicators);
// //     const lastCandle = candles.at(-1);
// //     const entry = lastCandle.close;

// //     const atr = indicators.atr; // यह ATR value (14 period)

// //     const multiplier = 1.5; // ATR multiplier, आप बदल सकते हैं

// //     // Check for existing trade
// //     const existing = activeTrades[symbol];
// //     if (existing) {
// //       const price = entry;
// //       if (
// //         (existing.side === 'BUY' && (price >= existing.target || price <= existing.stoploss)) ||
// //         (existing.side === 'SELL' && (price <= existing.target || price >= existing.stoploss))
// //       ) {
// //         // Trade closed
// //         delete activeTrades[symbol];
// //       } else {
// //         return; // पुराना trade अभी चल रहा है, नया signal नहीं भेजेंगे
// //       }
// //     }

// //     if (signal === 'BUY' || signal === 'SELL') {
// //       let target, stoploss;
// //       if (signal === 'BUY') {
// //         target = entry + (atr * multiplier);
// //         stoploss = entry - (atr * multiplier);
// //       } else {
// //         target = entry - (atr * multiplier);
// //         stoploss = entry + (atr * multiplier);
// //       }

// //       activeTrades[symbol] = {
// //         side: signal,
// //         entry,
// //         target,
// //         stoploss,
// //         time: new Date(lastCandle.time).toLocaleTimeString()
// //       };

// //       const message = formatSignal(symbol, signal, indicators, entry, target, stoploss);
// //       BOT.sendMessage(chatId, message, { parse_mode: 'Markdown' });
// //     }
// //   } catch (error) {
// //     console.error(`Error analyzing ${symbol}:`, error.message);
// //   }
// // }


// // BOT.onText(/\/start/, msg => {
// //   const chatId = msg.chat.id;
// //   if (!USER_CHAT_IDS.includes(chatId)) USER_CHAT_IDS.push(chatId);
// //   BOT.sendMessage(chatId, '✅ Bot started. Signals will be sent every minute.');
// // });

// // BOT.onText(/\/status/, msg => {
// //   const chatId = msg.chat.id;
// //   const currentSymbol = SYMBOLS[(currentSymbolIndex - 1 + SYMBOLS.length) % SYMBOLS.length];
// //   let message = `📊 *Bot Status*\n\n` +
// //                 `🟢 Bot is running\n` +
// //                 `⏱ Interval: ${INTERVAL}\n` +
// //                 `💱 Last symbol: ${currentSymbol}\n` +
// //                 `📡 Subscribers: ${USER_CHAT_IDS.length}\n\n`;

// //   if (Object.keys(activeTrades).length > 0) {
// //     message += `🔥 *Active Trades:*\n`;
// //     for (const [symbol, trade] of Object.entries(activeTrades)) {
// //       message += `• ${symbol}: ${trade.side} @ ${trade.entry} (⏰ ${trade.time})\n`;
// //     }
// //   } else {
// //     message += `📭 No active trades.`;
// //   }

// //   BOT.sendMessage(chatId, message, { parse_mode: 'Markdown' });
// // });

// // setInterval(async () => {
// //   const symbol = SYMBOLS[currentSymbolIndex];
// //   currentSymbolIndex = (currentSymbolIndex + 1) % SYMBOLS.length;
// //   for (const chatId of USER_CHAT_IDS) {
// //     await analyzeAndNotify(symbol, chatId);
// //   }
// // }, 60 * 1000);

// // console.log('✅ Crypto signal bot running...');













// const axios = require('axios');
// const TelegramBot = require('node-telegram-bot-api');
// const indicators = require('technicalindicators');

// const {
//   RSI, EMA, MACD, ATR, SMA, Stochastic, ADX,
//   CCI, MFI, ROC, OBV
// } = indicators;

// const SYMBOLS = ['BTCUSDT', 'ETHUSDT', 'BNBUSDT'];
// const INTERVAL = '1m';
// const BOT = new TelegramBot('8003756443:AAHOP678U2KdAiTuVYQZVQ2DsYnT2Oq4PnE', { polling: true });
// const USER_CHAT_IDS = [];
// let currentSymbolIndex = 0;
// const activeTrades = {};

// async function fetchKlines(symbol, interval, limit = 100) {
//   const url = `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${interval}&limit=${limit}`;
//   const res = await axios.get(url);
//   return res.data.map(c => ({
//     time: c[0],
//     open: +c[1],
//     high: +c[2],
//     low: +c[3],
//     close: +c[4],
//     volume: +c[5]
//   }));
// }

// function extractValues(candles) {
//   return {
//     close: candles.map(c => c.close),
//     high: candles.map(c => c.high),
//     low: candles.map(c => c.low),
//     volume: candles.map(c => c.volume)
//   };
// }

// function calculateIndicators({ close, high, low, volume }) {
//   return {
//     rsi: RSI.calculate({ values: close, period: 14 }).at(-1),
//     macd: MACD.calculate({ values: close, fastPeriod: 12, slowPeriod: 26, signalPeriod: 9 }).at(-1),
//     stochastic: Stochastic.calculate({ high, low, close, period: 14, signalPeriod: 3 }).at(-1),
//     ema: EMA.calculate({ values: close, period: 20 }).at(-1),
//     sma: SMA.calculate({ values: close, period: 20 }).at(-1),
//     atr: ATR.calculate({ high, low, close, period: 14 }).at(-1),
//     cci: CCI.calculate({ high, low, close, period: 20 }).at(-1),
//     adx: ADX.calculate({ high, low, close, period: 14 }).at(-1),
//     mfi: MFI.calculate({ high, low, close, volume, period: 14 }).at(-1),
//     roc: ROC.calculate({ values: close, period: 12 }).at(-1),
//     obv: OBV.calculate({ close, volume }).at(-1),
//   };
// }

// function analyzeIndicators(indicators) {
//   const bullish = [];
//   const bearish = [];

//   if (indicators.rsi < 30) bullish.push('RSI');
//   else if (indicators.rsi > 70) bearish.push('RSI');

//   if (indicators.macd?.histogram > 0) bullish.push('MACD');
//   else if (indicators.macd?.histogram < 0) bearish.push('MACD');

//   if (indicators.stochastic?.k > indicators.stochastic?.d) bullish.push('STOCH');
//   else if (indicators.stochastic?.k < indicators.stochastic?.d) bearish.push('STOCH');

//   if (indicators.ema > indicators.sma) bullish.push('EMA>SMA');
//   else if (indicators.ema < indicators.sma) bearish.push('EMA<SMA');

//   if (indicators.cci > 100) bullish.push('CCI');
//   else if (indicators.cci < -100) bearish.push('CCI');

//   if (indicators.mfi < 20) bullish.push('MFI');
//   else if (indicators.mfi > 80) bearish.push('MFI');

//   const score = bullish.length - bearish.length;
//   if (score >= 3) return 'BUY';
//   if (score <= -3) return 'SELL';
//   return 'HOLD';
// }

// function formatSignal(symbol, signal, indicators, entry, target, stoploss) {
//   let text = `*${symbol} Signal*\n` +
//              `Signal: ${signal}\n` +
//              `Entry: ${entry.toFixed(2)}\n` +
//              `🎯 Target: ${target.toFixed(2)}\n` +
//              `🛑 Stoploss: ${stoploss.toFixed(2)}\n`;

//   for (const [key, val] of Object.entries(indicators)) {
//     if (typeof val === 'object' && val !== null) {
//       text += `\n${key.toUpperCase()}: ${JSON.stringify(val)}`;
//     } else if (val !== undefined && !isNaN(val)) {
//       text += `\n${key.toUpperCase()}: ${val.toFixed(2)}`;
//     }
//   }

//   return text;
// }

// async function analyzeAndNotify(symbol, chatId) {
//   try {
//     const candles = await fetchKlines(symbol, INTERVAL);
//     const values = extractValues(candles);
//     const indicators = calculateIndicators(values);
//     const signal = analyzeIndicators(indicators);
//     const lastCandle = candles.at(-1);
//     const entry = lastCandle.close;

//     const atr = indicators.atr;
//     const multiplier = 1.5; // ATR multiplier, आप अपनी risk preference के हिसाब से बदल सकते हैं

//     // अगर कोई active trade है तो चेक करें
//     const existing = activeTrades[symbol];
//     if (existing) {
//       const price = entry;
//       if (
//         (existing.side === 'BUY' && (price >= existing.target || price <= existing.stoploss)) ||
//         (existing.side === 'SELL' && (price <= existing.target || price >= existing.stoploss))
//       ) {
//         // Trade close हो गया, हटाएं activeTrades से
//         delete activeTrades[symbol];
//       } else {
//         // Trade अभी active है, नया signal नहीं भेजेंगे
//         return;
//       }
//     }

//     if (signal === 'BUY' || signal === 'SELL') {
//       let target, stoploss;
//       if (signal === 'BUY') {
//         target = entry + (atr * multiplier);
//         stoploss = entry - (atr * multiplier);
//       } else {
//         target = entry - (atr * multiplier);
//         stoploss = entry + (atr * multiplier);
//       }

//       activeTrades[symbol] = {
//         side: signal,
//         entry,
//         target,
//         stoploss,
//         time: new Date(lastCandle.time).toLocaleTimeString()
//       };

//       const message = formatSignal(symbol, signal, indicators, entry, target, stoploss);
//       BOT.sendMessage(chatId, message, { parse_mode: 'Markdown' });
//     }
//   } catch (error) {
//     console.error(`Error analyzing ${symbol}:`, error.message);
//   }
// }

// BOT.onText(/\/start/, msg => {
//   const chatId = msg.chat.id;
//   if (!USER_CHAT_IDS.includes(chatId)) USER_CHAT_IDS.push(chatId);
//   BOT.sendMessage(chatId, '✅ Bot started. Signals will be sent every minute.');
// });

// BOT.onText(/\/status/, msg => {
//   const chatId = msg.chat.id;
//   const currentSymbol = SYMBOLS[(currentSymbolIndex - 1 + SYMBOLS.length) % SYMBOLS.length];
//   let message = `📊 *Bot Status*\n\n` +
//                 `🟢 Bot is running\n` +
//                 `⏱ Interval: ${INTERVAL}\n` +
//                 `💱 Last symbol: ${currentSymbol}\n` +
//                 `📡 Subscribers: ${USER_CHAT_IDS.length}\n\n`;

//   if (Object.keys(activeTrades).length > 0) {
//     message += `🔥 *Active Trades:*\n`;
//     for (const [symbol, trade] of Object.entries(activeTrades)) {
//       message += `• ${symbol}: ${trade.side} @ ${trade.entry.toFixed(2)} (⏰ ${trade.time})\n`;
//     }
//   } else {
//     message += `📭 No active trades.`;
//   }

//   BOT.sendMessage(chatId, message, { parse_mode: 'Markdown' });
// });

// setInterval(async () => {
//   const symbol = SYMBOLS[currentSymbolIndex];
//   currentSymbolIndex = (currentSymbolIndex + 1) % SYMBOLS.length;
//   for (const chatId of USER_CHAT_IDS) {
//     await analyzeAndNotify(symbol, chatId);
//   }
// }, 60 * 1000);

// console.log('✅ Crypto signal bot running...');











// require('dotenv').config();
// const axios = require('axios');
// const TelegramBot = require('node-telegram-bot-api');
// const { RSI, EMA, MACD, ATR, SMA } = require('technicalindicators');

// // === CONFIG ===
// const TELEGRAM_BOT_TOKEN = '8003756443:AAHOP678U2KdAiTuVYQZVQ2DsYnT2Oq4PnE';
// const SYMBOL = 'BTCUSDT';
// const INTERVAL = '1m';  // Changed from 15m to 1m
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
//   bot.sendMessage(chatId, "🤖 बॉट चालू हो गया है! हर 1 मिनट में नया सिग्नल मिलेगा।\n/status से स्थिति जानें।");
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
// console.log("🚀 Bot started on 1m chart with relaxed signals.");

// sendSignal(); // Run once immediately
// setInterval(sendSignal, 60 * 1000); // Run every 1 minute








// require('dotenv').config();
// const axios = require('axios');
// const fs = require('fs');
// const TelegramBot = require('node-telegram-bot-api');
// const { RSI, EMA, MACD, ATR, SMA } = require('technicalindicators');

// // === CONFIG FROM ENV ===

// const SYMBOL =  [
//   'BTCUSDT', 'ETHUSDT', 'BNBUSDT', 'XRPUSDT', 'ADAUSDT',
//   'SOLUSDT', 'DOGEUSDT', 'DOTUSDT', 'MATICUSDT', 'LTCUSDT',
//   'TRXUSDT', 'SHIBUSDT', 'AVAXUSDT', 'UNIUSDT', 'LINKUSDT',
//   'ATOMUSDT', 'XLMUSDT', 'VETUSDT', 'FILUSDT', 'THETAUSDT',
//   'ALGOUSDT', 'ICPUSDT', 'EOSUSDT', 'AAVEUSDT', 'KSMUSDT',
//   'GRTUSDT', 'MKRUSDT', 'ZILUSDT', 'FTMUSDT', 'NEOUSDT',
//   'BATUSDT', 'SNXUSDT', 'ENJUSDT', 'YFIUSDT', 'SUSHIUSDT',
//   'COMPUSDT', 'CRVUSDT', '1INCHUSDT', 'CHZUSDT', 'CVCUSDT',
//   'DASHUSDT', 'ZRXUSDT', 'RUNEUSDT', 'KNCUSDT', 'STORJUSDT',
//   'BALUSDT', 'OCEANUSDT', 'WAVESUSDT', 'LRCUSDT', 'CELOUSDT'
// ];
// const INTERVAL = process.env.INTERVAL || '1m';
// const TARGET_MULTIPLIER = parseFloat(process.env.TARGET_MULTIPLIER) || 1.5;
// const STOPLOSS_MULTIPLIER = parseFloat(process.env.STOPLOSS_MULTIPLIER) || 1.0;
// const VOLUME_SMA_PERIOD = parseInt(process.env.VOLUME_SMA_PERIOD) || 20;

// const USER_IDS_FILE = './user_chat_ids.json';

// // Initialize Telegram bot with polling
// const bot = new TelegramBot('8003756443:AAHOP678U2KdAiTuVYQZVQ2DsYnT2Oq4PnE'
// , { polling: true });

// let USER_CHAT_IDS = [];
// let activeTrades = {}; // { chatId: { signal, entry, target, stoploss, atr } }

// // === Load saved user chat IDs from file ===
// function loadUserChatIds() {
//   try {
//     if (fs.existsSync(USER_IDS_FILE)) {
//       const data = fs.readFileSync(USER_IDS_FILE);
//       USER_CHAT_IDS = JSON.parse(data);
//       console.log(`✅ Loaded ${USER_CHAT_IDS.length} user(s) from file.`);
//     }
//   } catch (err) {
//     console.error("❌ Error loading user chat IDs:", err.message);
//   }
// }

// // === Save user chat IDs to file ===
// function saveUserChatIds() {
//   try {
//     fs.writeFileSync(USER_IDS_FILE, JSON.stringify(USER_CHAT_IDS));
//     console.log(`💾 Saved ${USER_CHAT_IDS.length} user(s) to file.`);
//   } catch (err) {
//     console.error("❌ Error saving user chat IDs:", err.message);
//   }
// }

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

//   // Debug log for monitoring
//   console.log({
//     lastClose, lastEma, lastMacd, lastRsi, lastVolume, lastVolumeSMA
//   });

//   let signal = 'HOLD';

//   const volumeOkay = lastVolume > (0.8 * lastVolumeSMA);

//   if (volumeOkay && lastClose > lastEma && lastMacd.MACD > lastMacd.signal && lastRsi > 45) {
//     signal = 'BUY';
//   } else if (volumeOkay && lastClose < lastEma && lastMacd.MACD < lastMacd.signal && lastRsi < 55) {
//     signal = 'SELL';
//   }

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

//         // Trailing stoploss logic
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
// 📉 Avg Vol (SMA${VOLUME_SMA_PERIOD}): ${analysis.lastVolumeSMA.toFixed(0)}
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
//   if (!USER_CHAT_IDS.includes(chatId)) {
//     USER_CHAT_IDS.push(chatId);
//     saveUserChatIds();
//   }
//   bot.sendMessage(chatId, "🤖 बॉट चालू हो गया है! हर 1 मिनट में नया सिग्नल मिलेगा।\n/status से स्थिति जानें।");
// });

// bot.onText(/\/stop/, (msg) => {
//   const chatId = msg.chat.id;
//   const index = USER_CHAT_IDS.indexOf(chatId);
//   if (index !== -1) {
//     USER_CHAT_IDS.splice(index, 1);
//     delete activeTrades[chatId];
//     saveUserChatIds();
//     bot.sendMessage(chatId, "🛑 आपने बॉट को बंद कर दिया है। अब आप सिग्नल नहीं पाएंगे।");
//   } else {
//     bot.sendMessage(chatId, "ℹ️ आप पहले से ही बॉट से बंद हैं।");
//   }
// });

// bot.onText(/\/status/, async (msg) => {
//   const chatId = msg.chat.id;
//   if (!USER_CHAT_IDS.includes(chatId)) {
//     return bot.sendMessage(chatId, "ℹ️ कृपया पहले /start कमांड भेजें।");
//   }
//   const trade = activeTrades[chatId];
//   if (!trade) return bot.sendMessage(chatId, "ℹ️ कोई एक्टिव ट्रेड नहीं है।");

//   const currentPrice = await fetchCurrentPrice(SYMBOL);
//   const msgText = `
// 📍 Active Trade
// 🔄 Type: ${trade.signal}
// 💰 Entry: ${trade.entry.toFixed(2)}
// 📈 Now: ${currentPrice ? currentPrice.toFixed(2) : 'N/A'}
// 🎯 Target: ${trade.target.toFixed(2)}
// 🛑 Stoploss: ${trade.stoploss.toFixed(2)}
//   `;
//   bot.sendMessage(chatId, msgText);
// });

// // === INIT ===
// loadUserChatIds();

// // Check signal every minute
// setInterval(sendSignal, 60 * 1000);

// console.log("🤖 Telegram trading signal bot started...");














// require('dotenv').config();
// const axios = require('axios');
// const fs = require('fs');
// const TelegramBot = require('node-telegram-bot-api');
// const { RSI, EMA, MACD, ATR, SMA } = require('technicalindicators');

// // === CONFIG ===
// const SYMBOL = [ 'BTCUSDT', 'ETHUSDT', 'BNBUSDT' ]; // तुम अपनी symbols रख सकते हो
// const INTERVAL = process.env.INTERVAL || '1m';
// const TARGET_MULTIPLIER = 2.0; // ✅ Improved target
// const STOPLOSS_MULTIPLIER = 1.0;
// const VOLUME_SMA_PERIOD = 20;
// const USER_IDS_FILE = './user_chat_ids.json';

// const bot = new TelegramBot('8003756443:AAHOP678U2KdAiTuVYQZVQ2DsYnT2Oq4PnE'
// , { polling: true });

// let USER_CHAT_IDS = [];
// let activeTrades = {};

// function loadUserChatIds() {
//   try {
//     if (fs.existsSync(USER_IDS_FILE)) {
//       USER_CHAT_IDS = JSON.parse(fs.readFileSync(USER_IDS_FILE));
//     }
//   } catch (err) {
//     console.error("Load error:", err.message);
//   }
// }

// function saveUserChatIds() {
//   try {
//     fs.writeFileSync(USER_IDS_FILE, JSON.stringify(USER_CHAT_IDS));
//   } catch (err) {
//     console.error("Save error:", err.message);
//   }
// }

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
//     console.error("Kline fetch error:", err.message);
//     return null;
//   }
// }

// async function fetchCurrentPrice(symbol) {
//   try {
//     const url = `https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`;
//     const res = await axios.get(url);
//     return parseFloat(res.data.price);
//   } catch (err) {
//     console.error("Price fetch error:", err.message);
//     return null;
//   }
// }

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

//   let signal = 'HOLD';
//   const volumeOkay = lastVolume > (0.8 * lastVolumeSMA);

//   if (volumeOkay && lastClose > lastEma && lastMacd.MACD > lastMacd.signal && lastRsi > 45) {
//     signal = 'BUY';
//   } else if (volumeOkay && lastClose < lastEma && lastMacd.MACD < lastMacd.signal && lastRsi < 55) {
//     signal = 'SELL';
//   }

//   let target = null, stoploss = null;
//   if (signal === 'BUY') {
//     target = lastClose + Math.max(TARGET_MULTIPLIER * lastAtr, lastClose * 0.005); // at least 0.5%
//     stoploss = lastClose - STOPLOSS_MULTIPLIER * lastAtr;
//   } else if (signal === 'SELL') {
//     target = lastClose - Math.max(TARGET_MULTIPLIER * lastAtr, lastClose * 0.005);
//     stoploss = lastClose + STOPLOSS_MULTIPLIER * lastAtr;
//   }

//   return {
//     signal, lastClose, lastEma, lastRsi, lastMacd,
//     lastAtr, lastVolume, lastVolumeSMA, target, stoploss
//   };
// }

// function checkIfHit(price, trade) {
//   if (!trade) return false;
//   if (trade.signal === 'BUY') {
//     if (price >= trade.target) return 'target';
//     if (price <= trade.stoploss) return 'stoploss';
//   } else {
//     if (price <= trade.target) return 'target';
//     if (price >= trade.stoploss) return 'stoploss';
//   }
//   return false;
// }

// async function sendSignal() {
//   for (const symbol of SYMBOL) {
//     const candles = await fetchKlines(symbol, INTERVAL);
//     const price = await fetchCurrentPrice(symbol);
//     if (!candles || !price) continue;

//     const analysis = analyzeData(candles);
//     if (!analysis || analysis.signal === 'HOLD') continue;

//     const msg = `
// 📡 *Signal - ${symbol} (${INTERVAL})*
// 📈 Signal: *${analysis.signal}*
// 💰 Entry: ${price.toFixed(2)}
// 🎯 Target: ${analysis.target.toFixed(2)}
// 🛑 Stoploss: ${analysis.stoploss.toFixed(2)}

// 📊 RSI: ${analysis.lastRsi.toFixed(2)}
// 📉 EMA14: ${analysis.lastEma.toFixed(2)}
// 📈 MACD: ${analysis.lastMacd.MACD.toFixed(2)}
// 🟡 Signal Line: ${analysis.lastMacd.signal.toFixed(2)}
// 📊 Volume: ${analysis.lastVolume.toFixed(0)}
// 📉 SMA Volume: ${analysis.lastVolumeSMA.toFixed(0)}
//     `;

//     for (const chatId of USER_CHAT_IDS) {
//       const trade = activeTrades[chatId]?.[symbol];

//       if (trade) {
//         const hit = checkIfHit(price, trade);
//         if (hit) {
//           await bot.sendMessage(chatId, `⚠️ *${symbol} ${trade.signal}* closed due to *${hit.toUpperCase()}* at ${price.toFixed(2)}`, { parse_mode: 'Markdown' });
//           delete activeTrades[chatId][symbol];
//         }
//         continue;
//       }

//       await bot.sendMessage(chatId, msg, { parse_mode: 'Markdown' });

//       if (!activeTrades[chatId]) activeTrades[chatId] = {};
//       activeTrades[chatId][symbol] = {
//         signal: analysis.signal,
//         entry: price,
//         target: analysis.target,
//         stoploss: analysis.stoploss,
//         atr: analysis.lastAtr
//       };
//     }
//   }
// }

// // Telegram command to start
// bot.onText(/\/start/, async (msg) => {
//   const chatId = msg.chat.id;
//   if (!USER_CHAT_IDS.includes(chatId)) {
//     USER_CHAT_IDS.push(chatId);
//     saveUserChatIds();
//   }
//   bot.sendMessage(chatId, '✅ Welcome to Crypto Signal Bot. You will now receive trade alerts.');
// });

// // Start logic
// loadUserChatIds();
// setInterval(sendSignal, 60 * 1000); // Run every minute














// require('dotenv').config();
// const axios = require('axios');
// const fs = require('fs');
// const TelegramBot = require('node-telegram-bot-api');
// const { RSI, EMA, MACD, ATR, SMA } = require('technicalindicators');

// const SYMBOLS = ['BTCUSDT', 'ETHUSDT', 'BNBUSDT']; // Apne symbols yahan daalein
// const INTERVAL = process.env.INTERVAL || '1m';
// const TARGET_MULTIPLIER = 2.0;
// const STOPLOSS_MULTIPLIER = 1.0;
// const VOLUME_SMA_PERIOD = 20;
// const USER_IDS_FILE = './user_chat_ids.json';

// const bot = new TelegramBot('8003756443:AAHOP678U2KdAiTuVYQZVQ2DsYnT2Oq4PnE', { polling: true });

// let USER_CHAT_IDS = [];
// let activeTrades = {}; 
// // Structure: { chatId: { symbol: { signal, entry, target, stoploss, atr, status } } }

// let symbolIndex = 0; // Jo symbol check karna hai har baar

// // Load chat ids from file
// function loadUserChatIds() {
//   try {
//     if (fs.existsSync(USER_IDS_FILE)) {
//       USER_CHAT_IDS = JSON.parse(fs.readFileSync(USER_IDS_FILE));
//     }
//   } catch (err) {
//     console.error("Error loading user chat ids:", err.message);
//   }
// }

// // Save chat ids to file
// function saveUserChatIds() {
//   try {
//     fs.writeFileSync(USER_IDS_FILE, JSON.stringify(USER_CHAT_IDS));
//   } catch (err) {
//     console.error("Error saving user chat ids:", err.message);
//   }
// }

// // Binance klines fetch karna
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
//     console.error("Kline fetch error:", err.message);
//     return null;
//   }
// }

// // Current price fetch karna
// async function fetchCurrentPrice(symbol) {
//   try {
//     const url = `https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`;
//     const res = await axios.get(url);
//     return parseFloat(res.data.price);
//   } catch (err) {
//     console.error("Price fetch error:", err.message);
//     return null;
//   }
// }

// // Technical indicators se signal nikalna
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

//   let signal = 'HOLD';
//   const volumeOkay = lastVolume > (0.8 * lastVolumeSMA);

//   if (volumeOkay && lastClose > lastEma && lastMacd.MACD > lastMacd.signal && lastRsi > 45) {
//     signal = 'BUY';
//   } else if (volumeOkay && lastClose < lastEma && lastMacd.MACD < lastMacd.signal && lastRsi < 55) {
//     signal = 'SELL';
//   }

//   let target = null, stoploss = null;
//   if (signal === 'BUY') {
//     target = lastClose + Math.max(TARGET_MULTIPLIER * lastAtr, lastClose * 0.005);
//     stoploss = lastClose - STOPLOSS_MULTIPLIER * lastAtr;
//   } else if (signal === 'SELL') {
//     target = lastClose - Math.max(TARGET_MULTIPLIER * lastAtr, lastClose * 0.005);
//     stoploss = lastClose + STOPLOSS_MULTIPLIER * lastAtr;
//   }

//   return {
//     signal,
//     lastClose,
//     lastEma,
//     lastRsi,
//     lastMacd,
//     lastAtr,
//     lastVolume,
//     lastVolumeSMA,
//     target,
//     stoploss
//   };
// }

// // Check karo price target/stoploss hit karta hai ya nahi
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

// async function sendSignalForSymbol(symbol) {
//   const candles = await fetchKlines(symbol, INTERVAL);
//   const price = await fetchCurrentPrice(symbol);
//   if (!candles || !price) return;

//   const analysis = analyzeData(candles);
//   if (!analysis) return;

//   for (const chatId of USER_CHAT_IDS) {
//     if (!activeTrades[chatId]) activeTrades[chatId] = {};
//     const trade = activeTrades[chatId][symbol];

//     // Agar active trade chal raha hai to check karo target/stoploss hit hua?
//     if (trade && trade.status === 'active') {
//       const hit = checkIfHit(price, trade);
//       if (hit) {
//         await bot.sendMessage(chatId, `⚠️ *${symbol} ${trade.signal}* trade closed due to *${hit.toUpperCase()}* at ${price.toFixed(2)}`, { parse_mode: 'Markdown' });
//         activeTrades[chatId][symbol].status = 'closed';
//         delete activeTrades[chatId][symbol];
//       }
//       // Active trade hone par naye signals ignore karo
//       continue;
//     }

//     // Agar signal HOLD hai toh message na bhejein aur trade create na karein
//     if (analysis.signal === 'HOLD') continue;

//     // Naya trade create karo
//     const msg = `
// 📡 *Signal - ${symbol} (${INTERVAL})*
// 📈 Signal: *${analysis.signal}*
// 💰 Entry: ${price.toFixed(2)}
// 🎯 Target: ${analysis.target.toFixed(2)}
// 🛑 Stoploss: ${analysis.stoploss.toFixed(2)}

// 📊 RSI: ${analysis.lastRsi.toFixed(2)}
// 📉 EMA14: ${analysis.lastEma.toFixed(2)}
// 📈 MACD: ${analysis.lastMacd.MACD.toFixed(2)}
// 🟡 Signal Line: ${analysis.lastMacd.signal.toFixed(2)}
// 📊 Volume: ${analysis.lastVolume.toFixed(0)}
// 📉 SMA Volume: ${analysis.lastVolumeSMA.toFixed(0)}
//     `;

//     await bot.sendMessage(chatId, msg, { parse_mode: 'Markdown' });

//     activeTrades[chatId][symbol] = {
//       signal: analysis.signal,
//       entry: price,
//       target: analysis.target,
//       stoploss: analysis.stoploss,
//       atr: analysis.lastAtr,
//       status: 'active'
//     };
//   }
// }

// async function run() {
//   if (USER_CHAT_IDS.length === 0) {
//     console.log("No users subscribed yet.");
//     return;
//   }

//   const symbol = SYMBOLS[symbolIndex];
//   console.log(`Checking symbol: ${symbol}`);

//   await sendSignalForSymbol(symbol);

//   // Next time next symbol check karna hai
//   symbolIndex++;
//   if (symbolIndex >= SYMBOLS.length) symbolIndex = 0;
// }

// // Telegram command for users to subscribe
// bot.onText(/\/start/, (msg) => {
//   const chatId = msg.chat.id;
//   if (!USER_CHAT_IDS.includes(chatId)) {
//     USER_CHAT_IDS.push(chatId);
//     saveUserChatIds();
//   }
//   bot.sendMessage(chatId, '✅ Welcome! You will now receive trade signals.');
// });

// loadUserChatIds();
// setInterval(run, 60 * 1000); // Har 1 minute me ek symbol check karein













// require('dotenv').config();
// const axios = require('axios');
// const fs = require('fs');
// const TelegramBot = require('node-telegram-bot-api');
// const { RSI, EMA, MACD, ATR, SMA } = require('technicalindicators');

// const SYMBOLS = ['BTCUSDT', 'ETHUSDT', 'BNBUSDT']; // Apne symbols yahan daalein
// const INTERVAL = process.env.INTERVAL || '1m';
// const TARGET_MULTIPLIER = 2.0;
// const STOPLOSS_MULTIPLIER = 1.0;
// const VOLUME_SMA_PERIOD = 20;
// const USER_IDS_FILE = './user_chat_ids.json';

// const bot = new TelegramBot('8003756443:AAHOP678U2KdAiTuVYQZVQ2DsYnT2Oq4PnE', { polling: true });

// let USER_CHAT_IDS = [];
// let activeTrades = {}; 
// // Structure: { chatId: { symbol: { signal, entry, target, stoploss, atr, status } } }

// let lastSignalSent = {}; 
// // Structure: { chatId: { symbol: 'BUY'|'SELL'|'HOLD' } } - last signal sent to user

// let symbolIndex = 0; // Jo symbol check karna hai har baar

// // Load chat ids from file
// function loadUserChatIds() {
//   try {
//     if (fs.existsSync(USER_IDS_FILE)) {
//       USER_CHAT_IDS = JSON.parse(fs.readFileSync(USER_IDS_FILE));
//     }
//   } catch (err) {
//     console.error("Error loading user chat ids:", err.message);
//   }
// }

// // Save chat ids to file
// function saveUserChatIds() {
//   try {
//     fs.writeFileSync(USER_IDS_FILE, JSON.stringify(USER_CHAT_IDS));
//   } catch (err) {
//     console.error("Error saving user chat ids:", err.message);
//   }
// }

// // Binance klines fetch karna
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
//     console.error("Kline fetch error:", err.message);
//     return null;
//   }
// }

// // Current price fetch karna
// async function fetchCurrentPrice(symbol) {
//   try {
//     const url = `https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`;
//     const res = await axios.get(url);
//     return parseFloat(res.data.price);
//   } catch (err) {
//     console.error("Price fetch error:", err.message);
//     return null;
//   }
// }

// // Technical indicators se signal nikalna
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

//   let signal = 'HOLD';
//   const volumeOkay = lastVolume > (0.8 * lastVolumeSMA);

//   if (volumeOkay && lastClose > lastEma && lastMacd.MACD > lastMacd.signal && lastRsi > 45) {
//     signal = 'BUY';
//   } else if (volumeOkay && lastClose < lastEma && lastMacd.MACD < lastMacd.signal && lastRsi < 55) {
//     signal = 'SELL';
//   }

//   let target = null, stoploss = null;
//   if (signal === 'BUY') {
//     target = lastClose + Math.max(TARGET_MULTIPLIER * lastAtr, lastClose * 0.005);
//     stoploss = lastClose - STOPLOSS_MULTIPLIER * lastAtr;
//   } else if (signal === 'SELL') {
//     target = lastClose - Math.max(TARGET_MULTIPLIER * lastAtr, lastClose * 0.005);
//     stoploss = lastClose + STOPLOSS_MULTIPLIER * lastAtr;
//   }

//   return {
//     signal,
//     lastClose,
//     lastEma,
//     lastRsi,
//     lastMacd,
//     lastAtr,
//     lastVolume,
//     lastVolumeSMA,
//     target,
//     stoploss
//   };
// }

// // Check karo price target/stoploss hit karta hai ya nahi
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

// async function sendSignalForSymbol(symbol) {
//   const candles = await fetchKlines(symbol, INTERVAL);
//   const price = await fetchCurrentPrice(symbol);
//   if (!candles || !price) return;

//   const analysis = analyzeData(candles);
//   if (!analysis) return;

//   for (const chatId of USER_CHAT_IDS) {
//     if (!activeTrades[chatId]) activeTrades[chatId] = {};
//     if (!lastSignalSent[chatId]) lastSignalSent[chatId] = {};
//     const trade = activeTrades[chatId][symbol];
//     const lastSent = lastSignalSent[chatId][symbol];

//     // Agar active trade chal raha hai to check karo target/stoploss hit hua?
//     if (trade && trade.status === 'active') {
//       const hit = checkIfHit(price, trade);
//       if (hit) {
//         await bot.sendMessage(chatId, `⚠️ *${symbol} ${trade.signal}* trade closed due to *${hit.toUpperCase()}* at ${price.toFixed(2)}`, { parse_mode: 'Markdown' });
//         activeTrades[chatId][symbol].status = 'closed';
//         delete activeTrades[chatId][symbol];
//         lastSignalSent[chatId][symbol] = null; // Reset last sent signal on close
//       }
//       // Active trade hone par naye signals ignore karo
//       continue;
//     }

//     // Active trade nahi hai, toh signal bhejna hai chahe HOLD ho ya BUY/SELL
//     // Agar signal HOLD hai aur last sent bhi HOLD hai, toh baar baar na bheje
//     if (analysis.signal === 'HOLD') {
//       if (lastSent !== 'HOLD') {
//         await bot.sendMessage(chatId, `ℹ️ *${symbol}* ke liye abhi koi strong BUY/SELL signal nahi hai. Signal: *HOLD*`, { parse_mode: 'Markdown' });
//         lastSignalSent[chatId][symbol] = 'HOLD';
//       }
//       continue;
//     }

//     // Signal BUY ya SELL hai aur koi active trade nahi, toh naye trade create karo
//     if (lastSent !== analysis.signal) {
//       const msg = `
// 📡 *Signal - ${symbol} (${INTERVAL})*
// 📈 Signal: *${analysis.signal}*
// 💰 Entry: ${price.toFixed(2)}
// 🎯 Target: ${analysis.target.toFixed(2)}
// 🛑 Stoploss: ${analysis.stoploss.toFixed(2)}

// 📊 RSI: ${analysis.lastRsi.toFixed(2)}
// 📉 EMA14: ${analysis.lastEma.toFixed(2)}
// 📈 MACD: ${analysis.lastMacd.MACD.toFixed(2)}
// 🟡 Signal Line: ${analysis.lastMacd.signal.toFixed(2)}
// 📊 Volume: ${analysis.lastVolume.toFixed(0)}
// 📉 SMA Volume: ${analysis.lastVolumeSMA.toFixed(0)}
//       `;
//       await bot.sendMessage(chatId, msg, { parse_mode: 'Markdown' });

//       activeTrades[chatId][symbol] = {
//         signal: analysis.signal,
//         entry: price,
//         target: analysis.target,
//         stoploss: analysis.stoploss,
//         atr: analysis.lastAtr,
//         status: 'active'
//       };
//       lastSignalSent[chatId][symbol] = analysis.signal;
//     }
//   }
// }



// async function run() {
//   if (USER_CHAT_IDS.length === 0) {
//     console.log("No users subscribed yet.");
//     return;
//   }

//   const symbol = SYMBOLS[symbolIndex];
//   console.log(`Checking symbol: ${symbol}`);

//   await sendSignalForSymbol(symbol);

//   // Next time next symbol check karna hai
//   symbolIndex++;
//   if (symbolIndex >= SYMBOLS.length) symbolIndex = 0;
// }

// // Telegram command for users to subscribe
// bot.onText(/\/start/, (msg) => {
//   const chatId = msg.chat.id;
//   if (!USER_CHAT_IDS.includes(chatId)) {
//     USER_CHAT_IDS.push(chatId);
//     saveUserChatIds();
//   }
//   bot.sendMessage(chatId, '✅ Welcome! You will now receive trade signals.');
// });

// loadUserChatIds();
// setInterval(run, 60 * 1000); // Har 1 minute me ek symbol check karein








// require('dotenv').config();
// const axios = require('axios');
// const TelegramBot = require('node-telegram-bot-api');
// const { RSI, MACD, SMA, BollingerBands } = require('technicalindicators');

// // Binance API से डेटा फ़ेच करने का फंक्शन
// async function fetchBinanceData(symbol, interval = '1h', limit = 100) {
//   const url = `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${interval}&limit=${limit}`;
//   const response = await axios.get(url);
//   return response.data.map(candle => ({
//     time: candle[0],
//     open: parseFloat(candle[1]),
//     high: parseFloat(candle[2]),
//     low: parseFloat(candle[3]),
//     close: parseFloat(candle[4]),
//     volume: parseFloat(candle[5])
//   }));
// }

// // टेक्निकल इंडिकेटर्स कैलकुलेट करें
// function calculateIndicators(prices) {
//   const closes = prices.map(p => p.close);
  
//   // RSI (Relative Strength Index)
//   const rsi = RSI.calculate({ values: closes, period: 14 }).pop();
  
//   // MACD (Moving Average Convergence Divergence)
//   const macd = MACD.calculate({
//     values: closes,
//     fastPeriod: 12,
//     slowPeriod: 26,
//     signalPeriod: 9,
//     SimpleMAOscillator: false,
//     SimpleMASignal: false
//   }).pop();
  
//   // Bollinger Bands
//   const bb = BollingerBands.calculate({
//     period: 20,
//     stdDev: 2,
//     values: closes
//   }).pop();
  
//   // SMA (Simple Moving Average)
//   const sma = SMA.calculate({ period: 20, values: closes }).pop();

//   return { rsi, macd, bb, sma };
// }

// // ट्रेडिंग सिग्नल जनरेट करें
// function generateSignal(indicators) {
//   const { rsi, macd, bb, sma } = indicators;
  
//   // RSI सिग्नल (ओवरबॉट/ओवरसोल्ड)
//   const isOverbought = rsi > 70;
//   const isOversold = rsi < 30;
  
//   // MACD सिग्नल (बुलिश/बेयरिश)
//   const isBullishMACD = macd.histogram > 0 && macd.MACD > macd.signal;
//   const isBearishMACD = macd.histogram < 0 && macd.MACD < macd.signal;
  
//   // बोलिंगर बैंड्स सिग्नल
//   const lastPrice = bb.close;
//   const isAboveUpperBB = lastPrice > bb.upper;
//   const isBelowLowerBB = lastPrice < bb.lower;
  
//   // SMA सिग्नल (ट्रेंड कन्फर्मेशन)
//   const isAboveSMA = lastPrice > sma;
//   const isBelowSMA = lastPrice < sma;

//   // फाइनल सिग्नल (100% सटीक)
// if (isOversold && isBullishMACD && isBelowLowerBB) {
//   return "🚀 STRONG BUY";
// }
//   if ((isOverbought && isBearishMACD && isAboveUpperBB)) return "🔻 STRONG SELL";
//   if (isBullishMACD && isAboveSMA) return "📈 BUY";
//   if (isBearishMACD && isBelowSMA) return "📉 SELL";
  
//   return "🟡 HOLD (No Clear Signal)";
// }

// // Telegram Bot सेटअप
// const bot = new TelegramBot('8003756443:AAHOP678U2KdAiTuVYQZVQ2DsYnT2Oq4PnE', { polling: true });

// // यूजर कमांड हैंडलिंग
// bot.onText(/\/start/, (msg) => {
//   const chatId = msg.chat.id;
//   bot.sendMessage(chatId, `✅ **Crypto Trading Bot Activated!**\n\n/signal - Get Trading Signal\n/settings - Change Preferences`);
// });

// bot.onText(/\/signal/, async (msg) => {
//   const chatId = msg.chat.id;
//   bot.sendMessage(chatId, "🔄 Fetching Market Data...");
  
//   try {
//     const symbol = 'BTCUSDT'; // डिफ़ॉल्ट BTC, बदला जा सकता है
//     const candles = await fetchBinanceData(symbol, '1h', 100);
//     const indicators = calculateIndicators(candles);
//     const signal = generateSignal(indicators);
    
//     const message = `
//       🎯 **Trading Signal (${symbol})**  
//       📊 **RSI:** ${indicators.rsi.toFixed(2)}  
//       📈 **MACD:** ${indicators.macd.histogram.toFixed(4)}  
//       📉 **Bollinger Bands:**  
//         - Upper: ${indicators.bb.upper.toFixed(2)}  
//         - Lower: ${indicators.bb.lower.toFixed(2)}  
//       🚦 **SMA (20):** ${indicators.sma.toFixed(2)}  
//       ⚡ **Signal:** ${signal}  
//     `;
    
//     bot.sendMessage(chatId, message, { parse_mode: 'Markdown' });
//   } catch (error) {
//     bot.sendMessage(chatId, `❌ Error: ${error.message}`);
//   }
// });

// console.log("🤖 Telegram Trading Bot is Running...");













// require('dotenv').config();
// const axios = require('axios');
// const fs = require('fs');
// const TelegramBot = require('node-telegram-bot-api');
// const { RSI, EMA, MACD, SMA, ATR } = require('technicalindicators');

// const SYMBOLS = ['BTCUSDT', 'ETHUSDT', 'BNBUSDT'];
// const INTERVAL = '5m';
// const TARGET_PERCENT = 2.0 / 100;
// const STOPLOSS_PERCENT = 1.0 / 100;
// const VOLUME_SMA_PERIOD = 20;
// const USER_IDS_FILE = './user_chat_ids.json';

// const bot = new TelegramBot('8003756443:AAHOP678U2KdAiTuVYQZVQ2DsYnT2Oq4PnE', { polling: true });
// let USER_CHAT_IDS = [];
// let activeTrades = {}; 
// let lastSignalSent = {}; 
// let symbolIndex = 0;

// function loadUserChatIds() {
//   try {
//     if (fs.existsSync(USER_IDS_FILE)) {
//       USER_CHAT_IDS = JSON.parse(fs.readFileSync(USER_IDS_FILE));
//     }
//   } catch (err) {
//     console.error("Error loading user chat ids:", err.message);
//   }
// }

// function saveUserChatIds() {
//   try {
//     fs.writeFileSync(USER_IDS_FILE, JSON.stringify(USER_CHAT_IDS));
//   } catch (err) {
//     console.error("Error saving user chat ids:", err.message);
//   }
// }

// async function fetchKlines(symbol, interval, limit = 100) {
//   try {
//     const url = `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${interval}&limit=${limit}`
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
//     console.error("Kline fetch error:", err.message);
//     return null;
//   }
// }

// async function fetchCurrentPrice(symbol) {
//   try {
//     const url = `https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`
//     const res = await axios.get(url);
//     return parseFloat(res.data.price);
//   } catch (err) {
//     console.error("Price fetch error:", err.message);
//     return null;
//   }
// }

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

//   let signal = 'HOLD';
//   const volumeOkay = lastVolume > (0.8 * lastVolumeSMA);

//   if (volumeOkay && lastClose > lastEma && lastMacd.MACD > lastMacd.signal && lastRsi > 50) {
//     signal = 'BUY';
//   } else if (volumeOkay && lastClose < lastEma && lastMacd.MACD < lastMacd.signal && lastRsi < 50) {
//     signal = 'SELL';
//   }

//   let target = null, stoploss = null;
//   if (signal === 'BUY') {
//     target = lastClose * (1 + TARGET_PERCENT);
//     stoploss = lastClose * (1 - STOPLOSS_PERCENT);
//   } else if (signal === 'SELL') {
//     target = lastClose * (1 - TARGET_PERCENT);
//     stoploss = lastClose * (1 + STOPLOSS_PERCENT);
//   }

//   return {
//     signal,
//     lastClose,
//     lastEma,
//     lastRsi,
//     lastMacd,
//     lastAtr,
//     lastVolume,
//     lastVolumeSMA,
//     target,
//     stoploss
//   };
// }

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

// async function sendSignalForSymbol(symbol) {
//   const candles = await fetchKlines(symbol, INTERVAL);
//   const price = await fetchCurrentPrice(symbol);
//   if (!candles || !price) return;

//   const analysis = analyzeData(candles);
//   if (!analysis) return;

//   for (const chatId of USER_CHAT_IDS) {
//     if (!activeTrades[chatId]) activeTrades[chatId] = {};
//     if (!lastSignalSent[chatId]) lastSignalSent[chatId] = {};

//     const trade = activeTrades[chatId][symbol];
//     const lastSent = lastSignalSent[chatId][symbol];

//     if (trade && trade.status === 'active') {
//       const hit = checkIfHit(price, trade);
//       if (hit) {
//         await `bot.sendMessage(chatId, ⚠️ *${symbol} ${trade.signal}* trade closed due to *${hit.toUpperCase()}* at ${price.toFixed(2)}, { parse_mode: 'Markdown' })`
//         activeTrades[chatId][symbol].status = 'closed';
//         delete activeTrades[chatId][symbol];
//         lastSignalSent[chatId][symbol] = null;
//       }
//       continue;
//     }

//     if (analysis.signal === 'HOLD') {
//       if (lastSent !== 'HOLD') {
//         await `bot.sendMessage(chatId, ℹ️ *${symbol}* ka signal: *HOLD* hai. Koi strong BUY/SELL nahi hai., { parse_mode: 'Markdown' })`
//         lastSignalSent[chatId][symbol] = 'HOLD';
//       }
//       continue;
//     }

//     if (lastSent !== analysis.signal) {
//       const msg = `
// 📡 Signal - ${symbol} (${INTERVAL})
// 📈 Signal: ${analysis.signal}
// 💰 Entry: ${price.toFixed(2)}
// 🎯 Target: ${analysis.target.toFixed(2)}
// 🛑 Stoploss: ${analysis.stoploss.toFixed(2)}

// 📊 RSI: ${analysis.lastRsi.toFixed(2)}
// 📉 EMA14: ${analysis.lastEma.toFixed(2)}
// 📈 MACD: ${analysis.lastMacd.MACD.toFixed(2)}
// 🟡 Signal Line: ${analysis.lastMacd.signal.toFixed(2)}
// 📊 Volume: ${analysis.lastVolume.toFixed(0)}
// 📉 SMA Volume: ${analysis.lastVolumeSMA.toFixed(0)}
//       `;
//       await bot.sendMessage(chatId, msg, { parse_mode: 'Markdown' });

//       activeTrades[chatId][symbol] = {
//         signal: analysis.signal,
//         entry: price,
//         target: analysis.target,
//         stoploss: analysis.stoploss,
//         atr: analysis.lastAtr,
//         status: 'active'
//       };
//       lastSignalSent[chatId][symbol] = analysis.signal;
//     }
//   }
// }

// async function run() {
//   if (USER_CHAT_IDS.length === 0) {
//     console.log("No users subscribed yet.");
//     return;
//   }

//   const symbol = SYMBOLS[symbolIndex];
//   console.log`(Checking symbol: ${symbol})`
//   await sendSignalForSymbol(symbol);
//   symbolIndex = (symbolIndex + 1) % SYMBOLS.length;
// }

// bot.onText(/\/start/, (msg) => {
//   const chatId = msg.chat.id;
//   if (!USER_CHAT_IDS.includes(chatId)) {
//     USER_CHAT_IDS.push(chatId);
//     saveUserChatIds();
//   }
//   bot.sendMessage(chatId, '✅ Welcome! Aapko ab trade signals milenge.');
// });

// bot.onText(/\/active/, (msg) => {
//   const chatId = msg.chat.id;
//   const trades = activeTrades[chatId];

//   if (!trades || Object.keys(trades).length === 0) {
//     bot.sendMessage(chatId, "🚫 Koi active trade nahi hai.");
//     return;
//   }

//   let response = "📊 Aapke Active Trades:\n\n";
//   for (const symbol in trades) {
//     const t = trades[symbol];
//     response += `*${symbol}*\nSignal: ${t.signal}\nEntry: ${t.entry.toFixed(2)}\nTarget: ${t.target.toFixed(2)}\nStoploss: ${t.stoploss.toFixed(2)}\nStatus: ${t.status}\n\n;`
//   }
//   bot.sendMessage(chatId, response, { parse_mode: 'Markdown' });
// });

// bot.on('message', (msg) => {
//   const chatId = msg.chat.id;
//   if (!USER_CHAT_IDS.includes(chatId)) {
//     USER_CHAT_IDS.push(chatId);
//     saveUserChatIds();
//   }
// });

// setInterval(run, 60 * 1000);
// loadUserChatIds();
// console.log("Advanced Signal Bot Started...");