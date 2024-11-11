let calculation = localStorage.getItem('calculation') || '0';
const displayNumbers = document.querySelector('.js-calculation');

displayCalculation();            

function updateCalculation(value) {
  if (calculation === '0') {
    calculation = '';
  }
  calculation += value;
  displayCalculation();
  localStorage.setItem('calculation', calculation);
}
            
  function displayCalculation() {
    displayNumbers.innerHTML = calculation;
  }

  function display0() {
    displayNumbers.innerHTML = 0;
  }
  