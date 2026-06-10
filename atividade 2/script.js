const nomes = [];
const sexos = [];
const salarios = [];

for (let i = 0; i < 5; i++) {
    nomes[i] = prompt(`Nome do funcionário ${i + 1}:`);
    sexos[i] = prompt(`Sexo (M/F):`).toUpperCase();
    salarios[i] = Number(prompt(`Salário:`));
}

let resultado = "Funcionárias com salário acima de R$5000:\n\n";

for (let i = 0; i < 5; i++) {
    if (sexos[i] === "F" && salarios[i] > 5000) {
        resultado += `${nomes[i]} - R$ ${salarios[i]}\n`;
    }
}

alert(resultado);