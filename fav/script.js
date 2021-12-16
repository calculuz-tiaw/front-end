var favBtn = document.getElementById("fav-btn");
var calcBtn = document.getElementById("calc-btn");
var cleanBtn = document.getElementById("clean-btn");
var DECIMAL_THOUSAND = 1000;
var deviceNameArr = [];
var devicePotArr = [];
var deviceHoursArr = [];
var deviceDaysArr = [];

var keyupEvent = document
  .getElementById("deviceQtd")
  .addEventListener("keyup", function (event) {
    if (event.code == "Enter" || event.code == "NumpadEnter") {
      // Cancel the default action, if needed
      event.preventDefault();
      calcBtn.click();
      favBtn.click();

      getInputValues();
    }
  });

cleanBtn.addEventListener("click", emptyInputs);
calcBtn.addEventListener("click", calcMonthlyCosts);
favBtn.addEventListener("click", addFavoritos);

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
  let deviceQtd = document.getElementById("deviceQtd");
  if (
    deviceName.value == "" ||
    devicePot.value == "" ||
    deviceDays.value == "" ||
    deviceHours.value == ""
  ) {
    alert("Os inputs não podem ser vazios, preencha todos!");
    return;
  }

  deviceNameArr.push(deviceName);
  devicePotArr.push(devicePot);
  deviceHoursArr.push(deviceHours);
  deviceDaysArr.push(deviceDays);

  calcAndFillTotalValue(
    deviceName,
    devicePot,
    deviceHours,
    deviceDays,
    deviceQtd
  );
}

function calcAndFillTotalValue(
  deviceName,
  devicePot,
  deviceHours,
  deviceDays,
  deviceQtd
) {
  let kwh;
  kwh =
    ((devicePot.value * deviceHours.value * deviceDays.value) /
      DECIMAL_THOUSAND) *
    deviceQtd.value;

  fillTotalCosts(kwh);
}

function fillTotalCosts(kwh) {
  var monthlyCostsEl = document.getElementById("value-field");
  let kwhSum = monthlyCostsEl.innerText;
  let total = Number(kwhSum) + kwh;
  monthlyCostsEl.textContent = total.toFixed(2);
}

function emptyInputs() {
  let deviceName = document.getElementById("deviceName");
  let devicePot = document.getElementById("devicePot");
  let deviceHours = document.getElementById("deviceHours");
  let deviceDays = document.getElementById("deviceDays");
  let monthlyCostsEl = document.getElementById("value-field");
  let deviceQtd = document.getElementById("deviceQtd");

  monthlyCostsEl.innerText = "00.00";
  deviceName.value = "";
  devicePot.value = "";
  deviceHours.value = "";
  deviceDays.value = "";
  deviceQtd.value = 1;
}

function addFavoritos() {
  let deviceName = document.getElementById("deviceName");
  let devicePot = document.getElementById("devicePot");
  if (deviceName.value == "" || devicePot.value == "") {
    alert("Os inputs não podem ser vazios, preencha todos!");
    return;
  }
  var tb = document.getElementById("tbFavoritos");
  var qtdLinhas = tb.rows.length;
  var linha = tb.insertRow(qtdLinhas);

  var cellCodigo = linha.insertCell(0);
  var cellName = linha.insertCell(1);
  var cellPot = linha.insertCell(2);

  cellCodigo.innerHTML = qtdLinhas - 1;
  cellName.innerHTML = deviceName.value;
  cellPot.innerHTML = devicePot.value + "w";
}
