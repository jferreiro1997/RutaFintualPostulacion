class Stock {
  name = "";
  constructor(name) {
    this.name = name;
  }

  price(date) {
    const time = date.getTime();
    const timeInDays = Math.round(time / 1000 / 86400);
    //Mathematical Model
    const Model =
      10000 *
      Math.abs(
        Math.sin(Math.log2(Math.abs(Math.sin(time))) * this.name.charCodeAt(0))
      );
    return [Model, timeInDays];
  }
}

class Portfolio {
  stocks = [new Stock("MSFT"), new Stock("TSLA"), new Stock("7974")];

  //dateB > dateA
  Profit(dateA, dateB) {
    let sum = 0;
    let days = 0;
    this.stocks.forEach((stock) => {
      sum += stock.price(dateB)[0] - stock.price(dateA)[0];
      days = stock.price(dateB)[1] - stock.price(dateA)[1];
    });
    const dailyAverage = sum / days;
    const AnnualizedProfit = dailyAverage * 365;
    return [sum, AnnualizedProfit];
  }
}

const myPortfolio = new Portfolio();

const profitBetweenDates = myPortfolio.Profit(
  new Date(2019, 09, 20),
  new Date(2021, 09, 20)
);

console.log("Profit: " + String(Math.round(profitBetweenDates[0])));
console.log("Annualized Profit " + String(Math.round(profitBetweenDates[1])));
