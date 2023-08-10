const cheerio = require("cheerio");
const axios = require("axios");

const getDovizComCurrencyRates = async () => {
  const axiosRes = await axios.get("https://www.doviz.com");
  const $ = cheerio.load(axiosRes.data);
  const items = $(".market-data .item");
  const data = [];

  items.each((index, element) => {
    const name = $(element).find(".name").text().trim();
    const value = $(element).find(".value").text().trim();
    const changeRate = $(element).find(".change-rate").text().trim();
    const changeAmount = $(element).find(".change-amount span").text().trim();

    data.push({
      name,
      value,
      changeRate,
      changeAmount,
    });
  });
  return data;
};

module.exports = {
  getDovizComCurrencyRates,
};
