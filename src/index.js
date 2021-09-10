import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Currency from './services/currency';

function clearFields() {
  $("#currencyAmount, #currencyOne, #currencyTwo, #invalidInput, #currencyOutput, #error").empty();
}

function conversionOutput(response, currencyOne, currencyTwo, currencyAmount) {
  if (currencyAmount <= 0) {
    $("#invalidInput").text("Please enter an amount greater than 0.00");
  } else if (response.result === "success") {
    $("#currencyOutput").text(`Your ${currencyAmount} ${currencyOne} converts to ${response.conversion_result} ${currencyTwo} at a rate of 1 ${currencyOne} to ${response.conversion_rate} ${currencyTwo}. `);
  } else {
    $("#error").text(`There was an error: ${response.result} ${response.error_type}`);
  }
}


async function makeApiCall(currencyOne, currencyTwo, currencyAmount) {
  const response = await Currency.conversionRate(currencyOne, currencyTwo, currencyAmount);
  conversionOutput(response, currencyOne, currencyTwo, currencyAmount);
}

$(function () {
  $("form#exchange").on("submit", function (event) {
    event.preventDefault();
    clearFields();
    let currencyAmount = $("#currencyAmount").val();
    let currencyOne = $("#currencyFrom option:selected").val();
    let currencyTwo = $("#currencyTo option:selected").val();
    makeApiCall(currencyOne, currencyTwo, currencyAmount);
    console.log(currencyOne, currencyTwo, currencyAmount);
  });
});
