var prompt = require("prompt-sync")();

function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if (new Date().getTime() - start > milliseconds) {
      break;
    }
  }
}

console.log(
  "Leonardo está cursando FullStack da Blue EdTech, e após um ano de curso"
);
sleep(500);
console.log("ele chegará num momento decisivo da sua carreira.");
sleep(500);
console.log(
  "Durante esse período, vários fatores serão analisados tanto para a aprovação."
);
sleep(500);
console.log(
  "no curso, tanto quanto para uma possível inserção no mercado de trabalho."
);
sleep(500);
console.log(
  "As cinco perguntas abaixo serão cruciais na sua carreira de desenvolvedor"
);

let answerY = 0;
sleep(1000);
do {
  var question1 = prompt("Ele teve presença superior a 70%? ");
  var qLower1 = question1.toLowerCase();
  var qFinal1 = qLower1.replace("ã", "a");
  if (qFinal1 !== "sim" && qFinal1 !== "nao") {
    console.log("Resposta inválida");
  }
} while (qFinal1 !== "sim" && qFinal1 !== "nao");

if (qFinal1 == "sim") {
  answerY++;
}
sleep(500);
do {
  var question2 = prompt("Ele entregou todos os projetos propostos? ");
  var qLower2 = question2.toLowerCase();
  var qFinal2 = qLower2.replace("ã", "a");
  if (qFinal2 !== "sim" && qFinal2 !== "nao") {
    console.log("Resposta inválida");
  }
} while (qFinal2 !== "sim" && qFinal2 !== "nao");

if (qFinal2 == "sim") {
  answerY++;
}
sleep(500);
do {
  var question3 = prompt(
    "Ele participou de todas as palestras de terças-feiras? "
  );
  var qLower3 = question3.toLowerCase();
  var qFinal3 = qLower3.replace("ã", "a");
  if (qFinal3 !== "sim" && qFinal3 !== "nao") {
    console.log("Resposta inválida");
  }
} while (qFinal3 !== "sim" && qFinal3 !== "nao");

if (qFinal3 == "sim") {
  answerY++;
}
sleep(500);
do {
  var question4 = prompt("Ele teve boa performance no bootcamp? ");
  var qLower4 = question4.toLowerCase();
  var qFinal4 = qLower4.replace("ã", "a");
  if (qFinal4 !== "sim" && qFinal4 !== "nao") {
    console.log("Resposta inválida");
  }
} while (qFinal4 !== "sim" && qFinal4 !== "nao");

if (qFinal4 == "sim") {
  answerY++;
}
sleep(500);
do {
  var question5 = prompt(
    "Ele tem um bom portfólio no Github e um Linkedin bem montado? "
  );
  var qLower5 = question5.toLowerCase();
  var qFinal5 = qLower5.replace("ã", "a");
  if (qFinal5 !== "sim" && qFinal5 !== "nao") {
    console.log("Resposta inválida");
  }
} while (qFinal5 !== "sim" && qFinal5 !== "nao");

if (qFinal5 == "sim") {
  answerY++;
}
sleep(1000);
if (answerY == 0) {
  console.log("Leonardo foi expulso do curso.");
} else if (answerY == 1 || answerY == 2) {
  console.log("Leonardo reprovou e terá que fazer o módulo novamente");
} else if (answerY == 3) {
  console.log("Leonardo foi aprovado mas não conseguiu uma vaga de trabalho");
} else if (answerY == 4) {
  console.log("Leonardo foi aprovado e conseguiu uma vaga de trabalho");
} else if (answerY == 5) {
  console.log(
    "Leonardo foi aprovado no curso e conseguiu uma excelente vaga no mercado de trabalho."
  );
}
