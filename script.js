document.getElementById('convert-btn').addEventListener('click', function() {
  const numberInput = document.getElementById('number').value;
  const number = parseInt(numberInput);
  const output = document.getElementById('output');

  if (isNaN(number)) {
      output.innerText = "Please enter a valid number";
  } else if (number < 1) {
      output.innerText = "Please enter a number greater than or equal to 1";
  } else if (number >= 4000) {
      output.innerText = "Please enter a number less than or equal to 3999";
  } else {
      const result = toRoman(number);
      output.innerText = result;
  }
});

function toRoman(num) {
  const numerals = [
      ['M', 1000],
      ['CM', 900],
      ['D', 500],
      ['CD', 400],
      ['C', 100],
      ['XC', 90],
      ['L', 50],
      ['XL', 40],
      ['X', 10],
      ['IX', 9],
      ['V', 5],
      ['IV', 4],
      ['I', 1]
  ];

  let roman = '';
  for (const [letter, value] of numerals) {
      while (num >= value) {
          roman += letter;
          num -= value;
      }
  }
  return roman;
}
