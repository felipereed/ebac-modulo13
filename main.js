function getAverage(form, event) {
  event.preventDefault();
  let firstValue = getNumberValue(form[0]);
  let secondValue = getNumberValue(form[1]);
  let thirdValue = getNumberValue(form[2]);

  let numbers = [firstValue, secondValue, thirdValue];
  let average = calculateAverage(numbers);
  let displayedAverage = "A média é: " + average.toFixed(2);

  document.getElementById('result').innerHTML = displayedAverage; 
}

function getNumberValue(input) {
  let value = input.value;
  let number = Number(value);

  return number;
}

function calculateAverage(numbers) {
  let total = 0;
  numbers.forEach(number => {
    total += number;
  });
  let average = total / numbers.length;
  return average;
}


