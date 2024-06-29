document.getElementById('check-btn').addEventListener('click', function() {
  const textInput = document.getElementById('text-input').value.trim();
  const resultElement = document.getElementById('result');

  if (!textInput) {
    alert('Please input a value');
    return;
  }

  const cleanedInput = textInput.toLowerCase().replace(/[^a-z0-9]/g, '');
  const reversedInput = cleanedInput.split('').reverse().join('');

  if (cleanedInput === reversedInput) {
    resultElement.textContent = $;{textInput} palindrome;
  } else {
    resultElement.textContent = $;{textInput} palindrome;
  }
});