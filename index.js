document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("calcularINSS").addEventListener("click", calcularINSS);
    document.getElementById("calcularIRPF").addEventListener("click", calcularIRPF);
    document.getElementById("calcularSalarioLiquido").addEventListener("click", calcularSalarioLiquido);
});

function calcularINSS() {
    const salarioBruto = parseFloat(document.getElementById('salarioBruto').value);
    let inss;

    // Cálculo do INSS
    if (salarioBruto <= 1751.81) {
        inss = salarioBruto * 0.08;
    } else if (salarioBruto <= 2919.72) {
        inss = salarioBruto * 0.09;
    } else if (salarioBruto <= 5839.45) {
        inss = salarioBruto * 0.11;
    } else {
        inss = 5839.45 * 0.11;
    }

    document.getElementById('resultado').innerHTML = `INSS a ser pago: R$ ${inss.toFixed(2)}`;
}

function calcularIRPF() {
    const salarioBruto = parseFloat(document.getElementById('salarioBruto').value);
    let irpf;

    // Cálculo do IRPF (exemplo simplificado)
    if (salarioBruto <= 1903.98) {
        irpf = 0;
    } else if (salarioBruto <= 2826.65) {
        irpf = (salarioBruto - 1903.98) * 0.075 - 142.80;
    } else if (salarioBruto <= 3751.05) {
        irpf = (salarioBruto - 2826.65) * 0.15 - 354.80;
    } else {
        irpf = (salarioBruto - 3751.05) * 0.225 - 636.13;
    }

    document.getElementById('resultado').innerHTML = `IRPF a ser pago: R$ ${irpf.toFixed(2)}`;
}

function calcularSalarioLiquido() {
    const salarioBruto = parseFloat(document.getElementById('salarioBruto').value);
    let inss, irpf;

    // Cálculo do INSS
    if (salarioBruto <= 1751.81) {
        inss = salarioBruto * 0.08;
    } else if (salarioBruto <= 2919.72) {
        inss = salarioBruto * 0.09;
    } else if (salarioBruto <= 5839.45) {
        inss = salarioBruto * 0.11;
    } else {
        inss = 5839.45 * 0.11;
    }

    // Cálculo do IRPF (exemplo simplificado)
    if (salarioBruto <= 1903.98) {
        irpf = 0;
    } else if (salarioBruto <= 2826.65) {
        irpf = (salarioBruto - 1903.98) * 0.075 - 142.80;
    } else if (salarioBruto <= 3751.05) {
        irpf = (salarioBruto - 2826.65) * 0.15 - 354.80;
    } else {
        irpf = (salarioBruto - 3751.05) * 0.225 - 636.13;
    }

    const salarioLiquido = salarioBruto - inss - irpf;
    document.getElementById('resultado').innerHTML = `Salário Líquido: R$ ${salarioLiquido.toFixed(2)}`;
}
