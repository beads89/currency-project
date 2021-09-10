export default class Currency {
  static async conversionRate(currencyOne, currencyTwo, currencyAmount) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${currencyOne}/${currencyTwo}/${currencyAmount}`);
      if (!response.ok) {
        throw Error(response.status);
      }
      return response.json();
    }
    catch(error) {
      return Error(error);
    }
  }
}

// https://v6.exchangerate-api.com/v6/YOUR-API-KEY/pair/EUR/GBP
  //Uses first currency as base and converts it to second currency.
  //Only returns the conversion rate. ie: EUR to GBP at a rate of 1 to 0.8412

// https://v6.exchangerate-api.com/v6/YOUR-API-KEY/pair/EUR/GBP/AMOUNT
  //Converts the same as above, except also converts to the AMOUNT specified

// Currencies to convert: EUR - Euro
  // JPY - Japanese Yen
  // CAD - Canadian Dollar
  // KRW - South Korean Won
  // PHP - Phillipine Peso
  // NZD - New Zealand Dollar
