const { salarioBruto } = require("./index");
var assert = require('assert');

// Verificação de valor negativo
assert(salarioBruto(Number < 0)) == "negativo", "Valor negativo, verifique."
assert(salarioBruto(Number > 0)) == "positivo", "Valor positivo."

const{salarioBruto} = require("./index");