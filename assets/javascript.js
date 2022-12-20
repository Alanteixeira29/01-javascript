var nota = prompt("Qual a nota do aluno?");

nota = parseInt(nota)

switch( nota ){
    case 10 :
        console.log("Parabéns"); break;
    case 7 :
        console.log("Muito bem, conseguiu passar"); break;
    case 6 :
        console.log("Não foi desta vez, você precisa estudaer mais"); break;
    default : console.log("Nota não registrada");
}

// ESTRUTURA DE REPETIÇÃO -FOR e WHILE

var nome = ["joão","josé","maria","cráudia","miguelito"];
console.log(nome.lenght);
var numero = 5;
for (var i = 0 ; i < numero ; i++){
    console.log("Índice " + i + " - " + nome[i])
}

console.log("Acabou, acabooouu, é pentaaaaaa")