// 1) Faça um algoritmo que leia os valores A, B, C e imprima na tela se a soma de A + B é menor que C.

function somaMaior() {
    let a = Number(prompt("Digite um número:"));
    let b = Number(prompt("Digite outro número:"));
    let c = Number(prompt("Digite mais um número:"));
    let soma = a + b;
    
    if (soma < c) {
        alert("A soma de a + b é menor que c.");
    } else {
        console.log("Fim!");
    }
}

// 2) Faça um algoritmo que leia o nome, o sexo e o estado civil de uma pessoa. Caso sexo seja “F” e estado civil seja “CASADA”, solicitar o tempo de casada (anos).
function tempoCasamento() {
    let nome = String(prompt("Digite o seu nome:"));
    let sexo = String(prompt("Digite o seu sexto (M/F):")).toUpperCase();
    let estadoCivil = String(prompt("Digite o seu estado civil:")).toUpperCase();
    
    if ( sexo == "F" || sexo =="FEMININO" && estadoCivil == "CASADA") {
        let tempoCasorio=Number(prompt("Qual o tempo de casamento (anos)?"));
        alert(`======== Dados da pessoa: ========
            Nome: "${nome},
            Sexo: ${sexo},
            Estado Civil: ${estadoCivil}`);
        } else {
        alert(nome + ", Parabéns!");
    }
}

// 3) Faça um algoritmo para receber um número qualquer e informar na tela se é par ou ímpar.
function imparPar() {
    let numero = Number(prompt("Digite um número:"));
    
    if (numero % 2 === 0) {
        alert("O número é par.")
    } else if (numero % 2 === 1) {
        alert("O número é impar");
    } else {
        alert("O caractére é inválido!");
        imparPar(); //Repete a função quando houver erro no caso do caractére inválido.
    }
}

// 4) Faça um algoritmo que leia dois valores inteiros A e B se os valores forem iguais deverá se somar os dois, caso contrário multiplique A por B. Ao final de qualquer um dos cálculos deve-se atribuir o resultado para uma variável C e mostrar seu conteúdo na tela.
function valoresIguais() {
    let valorA = parseInt(prompt("Digite um número inteiro:")); // Força a inserção de um número inteiro
    let valorB = parseInt(prompt("Digite outro número inteiro:"));
    let valorC;
    let soma = valorA + valorA;
    let multiply = valorA * valorB;

    if (valorA === valorB) {
        let valorC = soma
        alert("O resultado é: "+valorC);
    } else {
        let valorC = multiply
        alert("O resultado é: "+valorC);
    }
}

// 5) Encontrar o dobro de um número caso ele seja positivo e o seu triplo caso seja negativo, imprimindo o resultado.
function valorPositivoNegativo() {
    let num1 = Number(prompt("Digite um número:"));
    let positivo = num1*2
    let negativo = num1*3
    
    if (num1 >= 0){
        alert("O número é positivo, o dobro de "+ num1 + " é: "+ positivo);
    } else {
        alert("O número é negativo, o triplo de " + num1 + " é: "+ negativo)
    }
}

// 6) Escreva um algoritmo que lê dois valores booleanos (lógicos) e então determina se ambos são VERDADEIROS ou FALSOS.

function valorBooleano() {
    // 1. Lemos o texto do utilizador e transformamos tudo em letras minúsculas
    let resposta1 = prompt("Digite o primeiro valor ('true' ou 'false'):").toLowerCase();
    let resposta2 = prompt("Digite o segundo valor ('true' ou 'false'):").toLowerCase(); 

    // 2. Convertemos o texto "true" ou "false" num valor booleano real
    let item1 = (resposta1 === "true");
    let item2 = (resposta2 === "true");

    // 3. Verificamos se ambos são verdadeiros ou se ambos são falsos
    if (item1 && item2) {
        console.log("Ambos os valores são VERDADEIROS.");
        alert("Ambos os valores são VERDADEIROS.");
    } else if (!item1 && !item2) {
        console.log("Ambos os valores são FALSOS.");
        alert("Ambos os valores são FALSOS.");
    } else {
        console.log("Os valores são mistos (um verdadeiro e outro falso).");
        alert("Os valores são mistos (um verdadeiro e outro falso).");
    }
    // if (item1 === true && item2 === true) {
    //  
    // }
    //
}

// 7) Faça um algoritmo que leia uma variável e some 5 caso seja par ou some 8 caso seja ímpar, imprimir o resultado desta operação.

function lerVariaveis() {
    let num = Number(prompt("Dgite um valor numérico:"));
    
    if (num % 2 === 0) {
        alert("O número é par, somado +5 = " + num+5);
    } else if (num % 2 !== 0) {
        alert("O número é ímpar, somado a 8, o resultado é: "+ num+8);
    }
}


// 8) Escreva um algoritmo que leia três valores inteiros e diferentes e mostre-os em ordem
// decrescente.

function ordenarDecrescente() {
    let valA = parseInt(prompt("Dgite um número:"))
    let valB = parseInt(prompt("Dgite outro número:"))
    let valC = parseInt(prompt("Dgite o último número:"))

   if (valA > valB && valA > valC) {
        if (valB > valC) {
            alert(`${valA}, ${valB}, ${valC}`);
        } else {
            alert(`${valA}, ${valC}, ${valB}`);
        }
    } else if (valB > valA && valB > valC) {
        if (valC > valA) {
            alert(`${valB}, ${valC}, ${valA}`);
        } else {
            alert(`${valB}, ${valA}, ${valC}`);
        }
    } else {
        if (valB > valA) {
            alert(`${valC}, ${valB}, ${valA}`);
        } else {
            alert(`${valC}, ${valA}, ${valB}`);
        }
    }
}

// 9) Tendo como dados de entrada a altura e o sexo de uma pessoa, construa um algoritmo que
// calcule seu peso ideal, utilizando as seguintes fórmulas:
// ● para homens: (72.7 * h) – 58;
// ● para mulheres: (62.1 * h) – 44.7.

function pesoIdeal() {
    let altura = parseFloat(prompt("Digite sua altura: (Ex.: 1.80)"));
    let genero = prompt("Digite o seu Genero: (Ex.: M ou F)").toUpperCase();
    let pesoIdeal;

    switch (genero) {
        case "M":
            pesoIdeal = (72.7 * altura) - 58;
            break;
        case "F":
            pesoIdeal = (62.1 * altura) - 44.7;
            break;
        default:
            alert("Gênero informado é inválido!");
            return;
    }
    alert(`O peso ideal é ${pesoIdeal.toFixed(2)} kg.`)
}

// 10) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar
// uma indicação sobre a condição de peso de uma pessoa adulta. A fórmula é IMC = peso / ( altura )². Elabore um algoritmo que leia o peso e a altura de um adulto e mostre sua condição de acordo com a tabela abaixo.
// - IMC em adultos Condição
// - Abaixo de 18,5 Abaixo do peso
// - Entre 18,5 e 25 Peso normal
// - Entre 25 e 30 Acima do peso
// - Acima de 30 obeso

function descobrirImc() {
    let peso = parseFloat(prompt("Digite seu peso: (Ex.: 72.5)"));
    let altura = parseFloat(prompt("Digite sua altura: (Ex.:1.75)"));
    const imc = peso / (altura ** 2);
    let condicao;

    switch (true) {
        case imc < 18.5:
            condicao = "Abaixo do peso";
            break;
        case imc >= 18.5 && imc < 25:
            condicao = "Peso Normal";
            break;
        case imc >= 25 && imc < 30:
            condicao = "Acima do peso";
            break;
        case imc >= 30:
            condicao = "Obeso";
            break;
        default:
            alert("Impossível de calcular o IMC com os dados fornecidos!");
            return;
    }
    alert(`
        IMC: ${imc.toFixed(2)}
        Condição: ${condicao}
    `);
}

// 11) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal deetiqueta e a escolha da condição de pagamento. Utilize os códigos da tabela a seguir para ler qual acondição de pagamento escolhida e efetuar o cálculo adequado.
// Código Condição de pagamento:
// 1) À vista em dinheiro ou cheque, recebe 10% de desconto
// 2) À vista no cartão de crédito, recebe 15% de desconto
// 3) Em duas vezes, preço normal de etiqueta sem juros
// 4) Em duas vezes, preço normal de etiqueta mais juros de 10%

function verDesconto() {
    let preco = parseFloat(prompt("Digite o preço sem desconto: "));
    let codigo = parseInt(prompt(`
        Escolha uma das opções disponíveis:

        1 - Dinheiro ou cheque (Desconto de 10%)
        2 - Crédito à vista (Desconto de 15%)
        3 - 2x sem juros
        4 - 2x com juros de 10%
        `));
    let total;
    
    switch (codigo) {
        case 1:
            total = preco * 0.9;
            break;
        case 2:
            total = preco * 0.85;
            break;
        case 3:
            total = preco;
            break;
        case 4:
            total = preco * 1.1;
            break;
        default:
            alert("Código informado é inválido");
            return;
    }
        (codigo >=3) 
        ? alert(`Duas parcelas de R$ ${(total / 2).toFixed(2)}`) 
        : alert("Total a pagar: R$ " + total.toFixed(2));
}


//12) Escreva um algoritmo que leia o número de identificação, as 3 notas obtidas por um aluno nas 3 verificações e a média dos exercícios que fazem parte da avaliação, e calcule a média de aproveitamento, usando a fórmula: MA := (nota1 + nota 2 * 2 + nota 3 * 3 + ME)/7.
// A atribuição dos conceitos obedece a tabela abaixo. O algoritmo deve escrever o número do aluno, suas notas, a média dos exercícios, a média de aproveitamento, o conceito correspondente e a mensagem 'Aprovado' se o conceito for A, B ou C, e 'Reprovado' se o conceito for D ou E.
// Média de aproveitamento Conceito:
// >= 90 A
// >= 75 e < 90 B
// >= 60 e < 75 C
// >= 40 e < 60 D
// < 40 E

function verificarMedia() {
    let id = prompt("Digite o identificador do aluno:");
    let nota01 = parseFloat(prompt("Digite a nota da 1ª verificação:"));
    let nota02 = parseFloat(prompt("Digite a nota da 2ª verificação:"));
    let nota03 = parseFloat(prompt("Digite a nota da 3ª verificação:"));
    let mediaExercicios = parseFloat(prompt("Digite a Média dos Exercícios:"));
    const mediaAproveitamento = ((nota01 + (nota02 * 2) + (nota03 * 3) + mediaExercicios) / 7) * 10;
    let conceito;

    switch (true) {
        case mediaAproveitamento >= 90:
            conceito = "A";
            break;
        case mediaAproveitamento >= 75 && mediaAproveitamento < 90:
            conceito = "B";
            break;
        case mediaAproveitamento >= 60 && mediaAproveitamento < 75:
            conceito = "C";
            break;
        case mediaAproveitamento >= 40 && mediaAproveitamento < 60:
            conceito = "D";
            break;
        case mediaAproveitamento < 40:
            conceito = "E";
            break;
        default:
            alert("Impossível de obter a média de aproveitamento!");
            return;
    }

    let resultado = ["A", "B", "C"].includes(conceito) ? "Aprovado" : "Reprovado";
    alert(`
            Id do Aluno: ${id}
            Notas: {
                verificação 01: ${nota01.toFixed(2)},
                verificação 02: ${nota02.toFixed(2)},
                verificação 03: ${nota03.toFixed(2)}
            }
            Média dos exercícios: ${mediaExercicios.toFixed(2)}
            Média de aproveitamento: ${mediaAproveitamento.toFixed(2)}
            Conceito: ${conceito} => ${resultado}
        `);
}