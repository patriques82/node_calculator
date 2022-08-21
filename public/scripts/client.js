var operator;
var symbol;
var numOne = "";
var numTwo = "";

$(document).ready(function() {
  addEventListeners();
});

function displayResult(result) {
  $('.results').empty();
  $('.results').append('<p>Result: ' + result + '</p>');
}

function postCalculate(calculation) {
  $.ajax({
    type: 'POST',
    url: '/calculator',
    data: calculation,
    success: function(res) {
      displayResult(res)
      setNumOne(res);
    }
  });
} 

function addEventListeners() {
  $('.operators').on('click', 'button', function() {
    if (numOne === "") {
      alert('Please enter a number before choosing a mathematical operator. Thank you, kindly.');
    } else if (numTwo === "") { 
      setOperation(this.name, $(this).text());
      changeHighlighting();
      $('.calculatorDisplay').empty();
      $('.calculatorDisplay').append('<span>' + numOne + ' ' + symbol + ' </span>');
    } else { 
      var calculation = {
        numOne: numOne,
        numTwo: numTwo,
        operator: operator
      };
      postCalculate(calculation);
      setOperation(this.name, $(this).text());
      changeHighlighting();
    }
  });

  $('#calculator').on('submit', function(e) {
    e.preventDefault();
    var calculation = {
      numOne: numOne,
      numTwo: numTwo,
      operator: operator
    };
    postCalculate(calculation);
  });

  $('#clear').on('click', function() {
    numOne = '';
    numTwo = '';
    operator = undefined;
    symbol = undefined;
    $('button').removeClass('highlight');
    $('.results').empty();
    $('.calculatorDisplay').empty();
  });

  $('.numbers').on('click', 'button', function() {
    if (operator === undefined) {
      numOne += $(this).text();
      console.log('numOne', numOne);
      $('.calculatorDisplay').empty();
      $('.calculatorDisplay').append('<span>' + numOne + '</span>');
    } else {
      numTwo += $(this).text();
      $('.calculatorDisplay').empty();
      $('.calculatorDisplay').append('<span>' + numOne + ' ' + symbol + ' ' + numTwo + '</span>');
      console.log('numTwo', numTwo);
    }
  });
}

function changeHighlighting() {
  $('button').removeClass('highlight');
  $('#' + operator).addClass('highlight');
}

function setOperation(operand, mathOperator) {
  operator = operand;
  symbol = mathOperator;
}

function setNumOne(num) {
  numOne = num;
}
function setNumTwo(num) {
  numTwo = num;
}
