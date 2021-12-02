var favBtn = document.getElementById("fav-btn");
var calcBtn = document.getElementById("calc-btn");
var cleanBtn = document.getElementById("clean-btn");
var DECIMAL_THOUSAND = 1000;
var deviceNameArr = [];
var devicePotArr = [];
var deviceHoursArr = [];
var deviceDaysArr = [];

calcBtn.addEventListener("click", calcMonthlyCosts);
cleanBtn.addEventListener("click", emptyInputs);

function calcMonthlyCosts() {
  getInputValues();

  //kWh = watts x horas/dia x dias
  //      ------------------------
  //              1000
  //  http://g1.globo.com/pernambuco/especial-publicitario/celpe/desligue-o-desperdicio/noticia/2016/05/saiba-como-e-calculada-energia-que-voce-consome.html
  //  https://www.cemig.com.br/atendimento/valores-de-tarifas-e-servicos/
}

function getInputValues() {
  let deviceName = document.getElementById("deviceName");
  let devicePot = document.getElementById("devicePot");
  let deviceHours = document.getElementById("deviceHours");
  let deviceDays = document.getElementById("deviceDays");

  deviceNameArr.push(deviceName);
  devicePotArr.push(devicePot);
  deviceHoursArr.push(deviceHours);
  deviceDaysArr.push(deviceDays);

  calcAndFillTotalValue(deviceName, devicePot, deviceHours, deviceDays);
}

function calcAndFillTotalValue(deviceName, devicePot, deviceHours, deviceDays) {
  let kwh;
  kwh =
    (devicePot.value * deviceHours.value * deviceDays.value) / DECIMAL_THOUSAND;

  fillTotalCosts(kwh);
}

function fillTotalCosts(kwh) {
  var monthlyCostsEl = document.getElementById("value-field");
  let kwhSum = monthlyCostsEl.innerText;
  monthlyCostsEl.textContent = Number(kwhSum) + kwh;
}

function emptyInputs() {
  let deviceName = document.getElementById("deviceName");
  let devicePot = document.getElementById("devicePot");
  let deviceHours = document.getElementById("deviceHours");
  let deviceDays = document.getElementById("deviceDays");
  let monthlyCostsEl = document.getElementById("value-field");
  monthlyCostsEl.innerText = "00.00";
  deviceName.value = "";
  devicePot.value = "";
  deviceHours.value = "";
  deviceDays.value = "";
}
