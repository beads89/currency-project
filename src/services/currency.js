export default class Currency {
  static async conversionRate(currencyOne, currencyTwo, currencyAmount) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${currencyOne}/${currencyTwo}/${currencyAmount}`);
      if (!response.ok) {
        throw new Error("Request returned status of " + response.status);
      }
      return response.json();
    }
    catch(err) {
      return err.message;
    }
  }
}