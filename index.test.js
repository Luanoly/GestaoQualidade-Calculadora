const { calcularINSS, calcularIRPF, calcularSalarioLiquido } = require("./index.js");
const assert = require('assert');

// Teste para verificar erros na função calcularINSS
const salarioBruto1000 = 1000;
const resultado1000 = `INSS ${calcularINSS(salarioBruto1000)}`;
assert.strictEqual(resultado1000, 'INSS 75', 'Teste falhou para 1000.');

const salarioBruto2000 = 2000;
const resultado2000 = `INSS ${calcularINSS(salarioBruto2000)}`;
assert.strictEqual(resultado2000, 'INSS 160,20', 'Teste falhou para 2000.');

// Teste para verificar erros na função calcularIRPF
const salarioBrutoMil = 1000;
const resultadoMil = `IRPF ${calcularIRPF(salarioBrutoMil)}`;
assert.strictEqual(resultadoMil, 'IFPF insento.', 'Teste falhou para 1000.');

const salarioBruto2Mil = 2000;
const resultado2Mil = `IRPF ${calcularIRPF(salarioBruto2Mil)}`;
assert.strictEqual(resultado2Mil, 'IRPF insento.', 'Teste falhou para 2000.');



// Teste para verificar erros na função calcularSalarioLiquido
const salarioBruto10000 = 10000;
const resultado10000 = `Salário liquído ${calcularSalarioLiquido(salarioBruto10000)}`;
assert.strictEqual(resultado10000, 'Salário liquído de 9329.12.', 'Teste falhou para 10000.');

const salarioBruto15000 = 15000;
const resultado15000 = `Salário liquído ${calcularSalarioLiquido(salarioBruto15000)}`;
assert.strictEqual(resultado15000, ' Salário liquído de 9329.12.', 'Teste falhou para 15000.');

console.log('Todos os testes passaram.');
