const { default: axios } = require("axios");
const { dailyDbInsertLooper } = require("../helpers/dbInsertLooper");
// const {  } = require("../helpers/stockDataParser");

//Ticker is input into front end, posted to API, fetched by backend, set here. Ask mentor?
const apiKey = "process.env.API_KEY";
const ticker = "IBM";
const dailyUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${ticker}&apikey=${apiKey}`;
const weeklyUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=${ticker}&apikey=${apiKey}`;
const monthlyUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_MONTHLY_ADJUSTED&symbol=${ticker}&apikey=${apiKey}`;

exports.fetchStockData = () => {
  Promise.all([
    axios.get(dailyUrl),
    axios.get(weeklyUrl),
    axios.get(monthlyUrl),
  ])
    .then((res) => {
      const data = res[0].data;
      dailyDbInsertLooper(data);
    })
    .catch((error) => {
      console.log(error);
    });
};
