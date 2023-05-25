const { readFileSync } = require('fs');
var Repositorio = require("./repositorio.js");
var ServicoCalculoFatura = require("./servico.js") ;
var gerarFaturaStr = require("./apresentacao.js");

// function gerarFaturaStr(fatura, pecas) {
//   return(
//   <html>
//   <p> Fatura UFMG </p>
//   <ul>
//   <li>  Hamlet: R$ 650,00 (55 assentos) </li>
//   <li>  As You Like It: R$ 580,00 (35 assentos) </li>
//   <li>  Othello: R$ 500,00 (40 assentos) </li>
//   </ul>
//   <p> Valor total: R$ 1.730,00 </p>
//   <p> Créditos acumulados: 47 </p>
//   </html>
//   )
// }

const faturas = JSON.parse(readFileSync('./faturas.json'));
const calc = new ServicoCalculoFatura(new Repositorio());
const faturaStr = gerarFaturaStr(faturas, calc);
console.log(faturaStr);
