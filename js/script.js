// VARIABILI
var nome, km, eta, costoBiglietto, mex ;


// Var + Stampa
var element = document.getElementById('genera');
element.addEventListener('click',
function() {

  nome = document.getElementById('nome').value;
  console.log(nome);

  km = document.getElementById('km').value;
  console.log(km);

  eta = document.getElementById('eta').value;
  console.log(eta);

  // Assegnaz. Var

  costoBiglietto = 0.21 * km;
  mex = 'Tariffa Standard';


  // Sconto costoBiglietto

  if (eta == 'Minorenne') {
    costoBiglietto = costoBiglietto * 0.8;
    mex = 'Sconto Minorenne';
  } else if (eta == 'Over65'){
    costoBiglietto = costoBiglietto * 0.6;
    mex = 'Sconto Pensionato';

  }

  document.getElementById('nome-passeggero').innerHTML = nome;

  document.getElementById('offerta').innerHTML = mex ;

  document.getElementById('carrozza').innerHTML = Math.floor(Math.random()*9) + 1;

  document.getElementById('codice').innerHTML = Math.floor(Math.random()*9000) + 90000;

  document.getElementById('costo').innerHTML = costoBiglietto.toFixed(2) + ' ' + '€';

  document.getElementById('biglietto').className = 'show';

});


// Nascondere con azzera
var annulla = document.getElementById('azzera');
annulla.addEventListener('click',
function() {

  document.getElementById('nome-passeggero').innerHTML = '';

  document.getElementById('offerta').innerHTML = '' ;

  document.getElementById('carrozza').innerHTML = '';

  document.getElementById('codice').innerHTML ='';

  document.getElementById('costo').innerHTML = '';

  nome = document.getElementById('nome').value = '';
  km = document.getElementById('km').value = '';
  eta = document.getElementById('eta').value = '';

  document.getElementById('biglietto').className = 'hidden';


});
