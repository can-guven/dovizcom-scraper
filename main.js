require("dotenv").config();
const { initalizeDb, bulkUpdateCurrencyRates } = require("./src/db");
const { getDovizComCurrencyRates } = require("./src/scraper");

async function main() {
  await initalizeDb();
  const currencyRates = await getDovizComCurrencyRates();
  await bulkUpdateCurrencyRates(currencyRates);
}

try {
  main();
} catch (error) {
  console.log(error);
}
