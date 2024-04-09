const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.getElementById('height').value);
  const weight = parseInt(document.getElementById('weight').value);
  const results = document.getElementById('results');

  if (height === '' || height <= 0 || isNaN(height)) {
    results.innerHTML = 'Give valid height';
  } else if (weight === '' || weight <= 0 || isNaN(weight)) {
    results.innerHTML = 'Give valid weight';
  } else {
    const res = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `${res}`;
  }
});

// function calBMI() {
//   const height = document.getElementById('height').text;
//   console.log(height);
// }
