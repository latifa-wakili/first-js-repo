Idocument.getElementById('check-btn').addEventListener('click', () => {
  const textInput = document.getElementById('text-input').value.trim();
  const resultElement = document.getElementById('result');

  if (!textInput) {
    alert('Please input a value');
    return;
  }

  const cleanedInput = textInput.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedInput = cleanedInput.split('').reverse().join('');

  if (cleanedInput === reversedInput) {
    resultDiv.innerText = userInput + ' is a palindrome';
  } else {
    resultDiv.innerText = userInput + ' is not a palindrome';
  }
});