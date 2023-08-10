const mongoose = require("mongoose");

const currencyRateSchema = new mongoose.Schema({
  name: String,
  value: String,
  changeRate: String,
  changeAmount: String,
});

const CurrencyRate = mongoose.model("CurrencyRate", currencyRateSchema);

module.exports = CurrencyRate;
