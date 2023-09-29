// Função para calcular o INSS
function calcularINSS(salarioBruto) {
    let inss = 0;

    if (salarioBruto <= 1320) {
        inss = salarioBruto * 0.075;
    } else if (salarioBruto <= 2571.29) {
        inss = (salarioBruto * 0.09) - 19.80;
    } else if (salarioBruto <= 3856.94) {
        inss = (salarioBruto * 0.12) - 96.94;
    } else if (salarioBruto <= 7507.48) {
        inss = (salarioBruto * 0.14) - 174.08;
    } else {
        inss = 7507.49;
    }

    return inss;
}

// Função para calcular o IRPF
function calcularIRPF(salarioBruto) {
    let irpf;
    let baseCalculoIrpf = salarioBruto - calcularINSS(salarioBruto);

    // Cálculo do IRPF aqui
    if (baseCalculoIrpf <= 1903.98) {
        irpf = 0;
    } else if (baseCalculoIrpf <= 2826.65) {
        irpf = (baseCalculoIrpf * 0.075) - 158.40;
    } else if (baseCalculoIrpf <= 3751.05) {
        irpf = (baseCalculoIrpf * 0.15) - 354.80;
    } else {
        irpf = (baseCalculoIrpf * 0.225) - 636.13;
    }

    return irpf;
}

// Função para calcular o salário líquido
function calcularSalarioLiquido(salarioBruto) {
    let inss = calcularINSS(salarioBruto);
    let irpf = calcularIRPF(salarioBruto);

    const salarioLiquido = salarioBruto - inss - irpf;
    return salarioLiquido;
}

module.exports = {
    calcularINSS,
    calcularIRPF,
    calcularSalarioLiquido,
};
