const nomes = [];
const alturas = [];

let continuar = "S";

while (continuar === "S") {
    nomes.push(prompt("Digite o nome:"));
    alturas.push(Number(prompt("Digite a altura:")));

    continuar = prompt("Deseja continuar? (S/N)")
        .toUpperCase();
}

let maiorAltura = alturas[0];
let menorAltura = alturas[0];

let pessoaMaior = nomes[0];
let pessoaMenor = nomes[0];

for (let i = 1; i < alturas.length; i++) {
    if (alturas[i] > maiorAltura) {
        maiorAltura = alturas[i];
        pessoaMaior = nomes[i];
    }

    if (alturas[i] < menorAltura) {
        menorAltura = alturas[i];
        pessoaMenor = nomes[i];
    }
}

alert(
    `Maior altura: ${maiorAltura}m (${pessoaMaior})\n` +
    `Menor altura: ${menorAltura}m (${pessoaMenor})`
);