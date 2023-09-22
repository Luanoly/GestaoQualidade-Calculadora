document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("calcularINSS").addEventListener("click", calcularINSS);
    document.getElementById("calcularIRPF").addEventListener("click", calcularIRPF);
    document.getElementById("calcularSalarioLiquido").addEventListener("click", calcularSalarioLiquido);
});

// Imprimindo o valor
function calcularINSS() {
    const salarioBruto = parseFloat(document.getElementById('salarioBruto').value);

    let inss = 0;

    if (salarioBruto <= 1320) {
        inss = salarioBruto * 0.075;
    } else if (salarioBruto <= 2571.29) {
        inss = salarioBruto * 0.09;
    } else if (salarioBruto <= 3856.94) {
        inss = salarioBruto * 0.12;
    } else if (salarioBruto <= 7507.48) {
        inss = salarioBruto * 0.14;
    } else {
        inss = 7507.49;
    }

    document.getElementById('resultado').innerHTML = `INSS a ser pago: R$ ${inss.toFixed(2)}`;
}

// Retornando o valor
function inss(salarioBruto) {

    //INSS aqui
    let inss = 0

    if (salarioBruto <= 1320) {
        inss = salarioBruto * 0.075;
    } else if (salarioBruto <= 2571.29) {
        inss = salarioBruto * 0.09;
    } else if (salarioBruto <= 3856.94) {
        inss = salarioBruto * 0.12;
    } else if (salarioBruto <= 7507.48) {
        inss = salarioBruto * 0.14;
    } else {
        inss = 7507.49;
    }
    return inss;
}


function calcularIRPF() {
    const salarioBruto = parseFloat(document.getElementById('salarioBruto').value);
    let irpf;
    let baseCalculoIrpf = salarioBruto - inss(salarioBruto);

    //IRPF calculo aqui
    if (baseCalculoIrpf <= 1903.98) {
        irpf = 0;
    } else if (baseCalculoIrpf <= 2826.65) {
        irpf = (salarioBruto) * 0.075 - 158.40;
    } else if (baseCalculoIrpf <= 3751.05) {
        irpf = (salarioBruto) * 0.015 - 370.40;
    } else if (baseCalculoIrpf <= 4664.68) {
        irpf = (salarioBruto) * 0.225 - 651.73;
    } else {
        irpf = (baseCalculoIrpf) * 0.275 - 884.96;
    }

    document.getElementById('resultado').innerHTML = `IRPF a ser pago: R$ ${irpf.toFixed(2)}`;
}

// Calculo do Sálario Liquido

function calcularSalarioLiquido() {
    const salarioBruto = parseFloat(document.getElementById('salarioBruto').value);
    let inss, irpf;

    //Cauculo  INSS
    if (salarioBruto <= 1751.81) {
        inss = salarioBruto * 0.08;
    } else if (salarioBruto <= 2919.72) {
        inss = salarioBruto * 0.09;
    } else if (salarioBruto <= 5839.45) {
        inss = salarioBruto * 0.11;
    } else {
        inss = 5839.45 * 0.11;
    }

    //Calculo IRPF 
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