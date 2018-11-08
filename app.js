countdown.setLabels(
  ' millisecondo| secondo| minuto| ora| giorno| settimana| mese| anno| decade| secolo| millennio',
  ' milissecondi| secondi| minuti| ore| giorni| settimane| mesi| anni| decadi| secoli| millenni',
  ' e ',
  ', ',
  'Buon Lucca Comics!',
);

var timeUntilLucca = countdown(new Date(2019, 9, 30, 9), function(ts) {
  document.getElementById('countdown').innerHTML = 'Ancora ' + ts.toHTML('strong');
});
