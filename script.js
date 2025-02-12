const convertBtn = document.getElementById('convert-btn');
const userInput = document.getElementById('user-input');
const lengthOutput = document.getElementById('length-output');
const volumeOutput = document.getElementById('volume-output');
const massOutput = document.getElementById('mass-output');

function convertLength(input) {
  const units = input;
  const oneMeterInFoot = 3.28084;
  const oneFootInMeter = 0.3048;

  const meterConversion = (units * oneFootInMeter).toFixed(3);
  const footConversion = (units * oneMeterInFoot).toFixed(3);

  const displayStr = `${units} meters = ${meterConversion} feet | ${units} feet = ${footConversion} meters`;
  lengthOutput.textContent = displayStr;
}

function convertVolume(input) {
  const units = input;
  const oneGallonInLiter = 3.78541;
  const oneLiterInGallon = 0.264172;

  const gallonConversion = (units * oneGallonInLiter).toFixed(3);
  const literConversion = (units * oneLiterInGallon).toFixed(3);

  const displayStr = `${units} liters = ${gallonConversion} gallons | ${units} gallons = ${literConversion} liters`;
  volumeOutput.textContent = displayStr;
}

function convertMass(input) {
  const units = input;
  const oneKGinLB = 2.20462;
  const oneLBinKG = 0.453592;

  const kgConversion = (units * oneKGinLB).toFixed(3);
  const lbConversion = (units * oneLBinKG).toFixed(3);

  const displayStr = `${units} kilos = ${kgConversion} pounds | ${units} pounds = ${lbConversion} kilos`;
  massOutput.textContent = displayStr;
}

function convert() {
  const units = userInput.value;
  convertLength(units);
  convertVolume(units);
  convertMass(units);
}

convertBtn.addEventListener('click', convert);
userInput.addEventListener('focus', function () {
  this.placeholder = '';
});

userInput.addEventListener('blur', function () {
  if (!this.value) {
    this.placeholder = '0';
  }
});
