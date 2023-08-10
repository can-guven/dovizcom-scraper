const mongoose = require("mongoose");
const CurrencyRate = require("../schemas/currency-rate.schema");
const { connectionString } = require("../contants");

const initalizeDb = async () => {
  await mongoose.connect(connectionString);
};

const bulkUpdateCurrencyRates = async (data) => {
  const bulkUpdateOperations = data.map((item) => ({
    updateOne: {
      filter: { name: item.name },
      update: {
        $set: {
          value: item.value,
          changeRate: item.changeRate,
          changeAmount: item.changeAmount,
        },
      },
      upsert: true,
    },
  }));

  const result = await CurrencyRate.bulkWrite(bulkUpdateOperations);

  console.log("Toplu güncelleme tamamlandı:", result);
};

module.exports = {
  bulkUpdateCurrencyRates,
  initalizeDb,
};
