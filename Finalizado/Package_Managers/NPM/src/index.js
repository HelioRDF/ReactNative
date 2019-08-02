const momento = require('moment');
momento.locale('pt_br');
let dia = momento().format('dddd');
console.log("Dia da Semana: "+dia);