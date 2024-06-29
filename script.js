document.getElementById('check-btn').addEventListener('click', () => {
  const textInput = document.getElementById('text-input').value.trim();
  const resultElement = document.getElementById('result');

  if (!textInput) {
    alert('Please input a value');
    return;
  }

  const cleanedInput = textInput.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedInput = cleanedInput.split('').reverse().join('');

  if (cleanedInput === reversedInput) {
    resultElement.innerText = textInput + ' is a palindrome';
  } else {
    resultElement.innerText = textInput + ' is not a palindrome';
  }
});