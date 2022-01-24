var prompt = require("prompt-sync")();

console.log("historia inicio");

let answerY = 0;

do {
  var question1 = prompt("Pergunta 1: ");
  var qLower1 = question1.toLowerCase();
  var qFinal1 = qLower1.replace("ã", "a");
  if (qFinal1 !== "sim" && qFinal1 !== "nao") {
    console.log("Resposta inválida");
  }
} while (qFinal1 !== "sim" && qFinal1 !== "nao");

if (qFinal1 == "sim") {
  answerY++;
}

do {
  var question2 = prompt("Pergunta 2: ");
  var qLower2 = question2.toLowerCase();
  var qFinal2 = qLower2.replace("ã", "a");
  if (qFinal2 !== "sim" && qFinal2 !== "nao") {
    console.log("Resposta inválida");
  }
} while (qFinal2 !== "sim" && qFinal2 !== "nao");

if (qFinal2 == "sim") {
  answerY++;
}

do {
  var question3 = prompt("Pergunta 3: ");
  var qLower3 = question3.toLowerCase();
  var qFinal3 = qLower3.replace("ã", "a");
  if (qFinal3 !== "sim" && qFinal3 !== "nao") {
    console.log("Resposta inválida");
  }
} while (qFinal3 !== "sim" && qFinal3 !== "nao");

if (qFinal3 == "sim") {
  answerY++;
}

do {
  var question4 = prompt("Pergunta 4: ");
  var qLower4 = question4.toLowerCase();
  var qFinal4 = qLower4.replace("ã", "a");
  if (qFinal4 !== "sim" && qFinal4 !== "nao") {
    console.log("Resposta inválida");
  }
} while (qFinal4 !== "sim" && qFinal4 !== "nao");

if (qFinal4 == "sim") {
  answerY++;
}

do {
  var question5 = prompt("Pergunta 5: ");
  var qLower5 = question5.toLowerCase();
  var qFinal5 = qLower5.replace("ã", "a");
  if (qFinal5 !== "sim" && qFinal5 !== "nao") {
    console.log("Resposta inválida");
  }
} while (qFinal5 !== "sim" && qFinal5 !== "nao");

if (qFinal5 == "sim") {
  answerY++;
}

if (answerY == 0) {
  console.log("Falhou");
} else if (answerY == 1 || answerY == 2) {
  console.log("falha mas ainda foge");
} else if (answerY == 3) {
  console.log("falha por pouco");
} else if (answerY == 4) {
  console.log("passa mas nao perfeito");
} else if (answerY == 5) {
  console.log("ok");
}

//     console.log(answerY);
