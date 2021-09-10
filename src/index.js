import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Currency from './services/currency';

function clearFields() {
  $(".REPLACE").empty();
  // etc., etc.
}

async function makeApiCall(currencyOne, currencyTwo, currencyAmount) {
  const response = await Currency.conversionRate(currencyOne, currencyTwo, currencyAmount);
}
