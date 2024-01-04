const prompt = require("readline-sync");

const inIdade = Number(prompt.question("Digite sua idade: "));

const isIdadeMenor = inIdade > 0 && inIdade <= 17;
const isIdadeMaior = inIdade >= 18 && inIdade <= 105;

let mensagem;

if (isIdadeMenor) {
  mensagem = "Menor de Idade";
} else if (isIdadeMaior) {
  mensagem = "Maior de Idade";
} else {
  mensagem = "Idade inválida";
}

console.log(mensagem);
