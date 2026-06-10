const idades = [];

for (let i = 0; i < 4; i++) {
    idades[i] = Number(prompt(`Digite a idade da ${i + 1}ª pessoa:`));
}

let maiorIdade = idades[0];
let posicao = 0;

for (let i = 1; i < idades.length; i++) {
    if (idades[i] > maiorIdade) {
        maiorIdade = idades[i];
        posicao = i;
    }
}

alert(
    `Maior idade: ${maiorIdade}\n` +
    `Posição: ${posicao}`
);