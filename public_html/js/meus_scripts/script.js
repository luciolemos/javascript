/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function media1(){
    N1 = parseFloat(prompt("Nota 1"));
            N2 = parseFloat(prompt("Nota 2"));
            N3 = parseFloat(prompt("Nota 3"));

            M = (N1 + N2 + N3)/3;

            if (M >= 7) {
                alert("Sua média foi " +M.toFixed(2)+ " e o Sr. está Aprovado!");
                }else if (M < 3) {
                alert("Sua média foi " +M.toFixed(2)+ " e o Sr. está Reprovado!");
            } else {
                N4 = parseFloat(prompt("Nota 4"));
                M = (M + N4) / 2;
                if (M >= 5) {
                    alert("Sua média foi " + M.toFixed(2) + " e o Sr. está Aprovado!");
                } else {
                    alert("Sua média foi " + M.toFixed(2) + " e o Sr. está Reprovado!");
                }

            }
}

function vogal() {
    var escolha = prompt("Digite uma letra");
    escolha = escolha.toUpperCase();//toUpperCase Transforma as letras em maiusculas
    switch (escolha) {
        case "A":
        case "E":
        case "I":
        case "O":
        case "U":
            alert("Você digitou uma vogal");
            break;

        default:
            alert("Você digitou uma consoante");
    }

}
function somaNumeros() {
    /* 
     n1 = parseInt(prompt("Digite o 1º número"));
     n2 = parseInt(prompt("Digite o 2º número"));
     n3 = parseInt(prompt("Digite o 3º número"));
     n4 = parseInt(prompt("Digite o 4º número"));
     n5 = parseInt(prompt("Digite o 5º número"));
     
     soma = n1 + n2 + n3 + n4 + n5;
     alert("A soma dos 5 números é " + soma);
     
     */
    s = 0;
    for (var a = 0; a < 5; a++) {
        n = parseInt(prompt("Digite o " + (a + 1) + "º número"));
        s += n;
    }
    alert("a soma é " + s);
}
function somadoisnumeros() {
    x = prompt("Informe o primeiro número");
    y = prompt("Informe o segundo número");
    soma = parseInt(x) + parseInt(y);
    alert("A soma dos dois números informados é " + soma);
}
function showmaior() {
    //Faça um Programa que peça dois números e imprima o maior deles.
    num1 = parseInt(prompt("Digite o primeiro numaro"));
    num2 = parseInt(prompt("Digite o segundo numero"));
    if (num1 > num2) {
        alert("O primeiro número é maior " + num1);
    } else {
        alert("O segundo número é maior " + num2);
    }
}
function salario() {
    h = prompt("Quanto você ganha por hora?");
    m = prompt("Informe a carga horária diária de trabalho.");
    alert("Seu salário mensal é de: R$" + (h * m) * 30);
}

function precoProduto() {

    alert("Digite os preços dos produtos");
    pr01 = parseFloat(prompt("Digite o preço do 1º produto"));
    pr02 = parseFloat(prompt("Digite o preço do 2º produto"));
    pr03 = parseFloat(prompt("Digite o preço do 3º produto"));

    if (pr01 < pr02 && pr03 > pr01) {
        alert("Você deve comprar o 1º produto, ele é o mais barato: " + pr01);
    } else if (pr02 < pr01 && pr03 > pr02) {
        alert("Você deve comprar o 2º produto, ele é o mais barato: " + pr02);
    } else if (pr03 < pr01 && pr02 > pr03) {
        alert("Você deve comprar o 3º produto, ele é o mais barato: " + pr03);
    }

}
function positivoNegativo() {

    //Faça um Programa que peça um valor e mostre na tela se o valor é 
    //positivo ou negativo.
    num01 = parseInt(prompt("digite um numero"));
    if (num01 >= 0) {
        alert("Número positivo " + "(" + num01 + ")");
    } else {
        alert("Número negativo " + "(" + num01 + ")");
    }

}
function menorNumero() {
    n1 = parseInt(prompt("Digite o primeiro número"));
    n2 = parseInt(prompt("Digite o segundo número"));
    n3 = parseInt(prompt("Digite o terceiro número"));

    if (n1 > n2) {
        aux = n1;
        n1 = n2;
        n2 = aux;
    }
    if (n2 > n3) {
        aux = n2;
        n2 = n3;
        n3 = aux;
    }
    if (n1 > n2) {
        aux = n1;
        n1 = n2;
        n2 = aux;
    }
    alert(" - " + n1 + " - " + n2 + " - " + n3);

}
function quatronumeros() {
    A = parseFloat(prompt("Nota 1º Bimestre"));
    B = parseFloat(prompt("Nota 2º Bimestre"));
    C = parseFloat(prompt("Nota 3º Bimestre"));
    D = parseFloat(prompt("Nota 4º Bimestre"));
    M = (A + B + C + D) / 4;

    alert("Sua média final é " + M.toFixed(2));

}
function masculinoFeminino() {

    //Faça um Programa que verifique se uma letra digitada é "F" ou "M".
    //Conforme a letra escrever: F - Feminino, M - Masculino, Sexo Inválido.
    var m = prompt("Digite seu sexo - M/F");
    if (m == "m" || m == "M") {
        alert("Masculino");
    } else if (m == "f" || m == "F") {
        alert("Feminino");
    } else {
        alert("Opção invalida");
    }
}

function maiorMenor() {
    n1 = parseInt(prompt("Digite o 1º número"));
    n2 = parseInt(prompt("Digite o 2º número"));
    n3 = parseInt(prompt("Digite o 3º número"));

    if (n1 > n2 && n3 < n1) {
        alert("O 1º número é maior");
    } else if (n2 > n1 && n3 < n2) {
        alert("O 2º número é maior");
    } else if (n3 > n1 && n2 < n3) {
        alert("O 3º número é maior");
    }
//para colocar em ordem do menor para o maior    
    /*    if(a > b) {
     aux = a;
     a = b;
     b = aux;
     }
     if(b > c) {
     aux = b;
     b = c;
     c = aux;
     }
     if(a > b) {
     aux = a;
     a = b;
     b = aux;
     }
     */
}
function infonumero() {
    n = (prompt("Digite um número"));
    alert("O número informado foi " + n);
}

function conversor() {
    metros = parseFloat(prompt("Digite quantos metros você deseja converter"));
    convert = metros * 100;
    alert(metros + " metro(s) equivalem a " + convert + " centimetros");

}
function conversor() {
    m = prompt("Informe a medida (m) a converter");
    alert("A medida informada corresponde a " + m * 100 + "cm");

}

function areacircunferencia() {
    r = prompt("Informe o raio da circunferência.");
    alert("A área da circunferência de raio " + r + "uc é: " + 3.14 * Math.pow(r, 2) + "ua");
}

function areaquadrado() {
    l = prompt("Informe o lado do quadrado.");
    alert("O dobro da área do quadrado de lado L=" + l + " é " + 2 * Math.pow(l, 2) + "ua");
}

function contador() {
    alert("Contador de números pares menores que 12.");
    for (var i = 0; i <= 10; i += 2) {
        alert(i);
    }
}


function media() {
    N1 = parseFloat(prompt("Nota 1"));
    N2 = parseFloat(prompt("Nota 2"));
    N3 = parseFloat(prompt("Nota 3"));
    M = (N1 * 4 + N2 * 5 + N3 * 6) / 15;
    if (M >= 7) {
        alert("Sua média foi " + M.toFixed(2) + " e o Sr. está Aprovado!");
    }
    if (M < 3) {
        alert("Sua média foi " + M.toFixed(2) + " e o Sr. está REPROVADO!");
    } else {
        alert("Sua média foi " + M.toFixed(2) + " e o Sr. está na 4ª PROVA!");
    }
}

function helloword() {
    alert("Olá!\nSeja bem vindo!\nEsse é meu primeiro script.");
}


function eleicao() {
    escolha = prompt("Escolha seu candidato digitando de 1 a 3, ou vote nulo.");
    switch (escolha) {
        case "1":
            alert("Lula presidente!");
            break;
        case "2":
            alert("Bolsonaro presidente!");
            break;
        case "3":
            alert("Aécio presidente!");
            break;
        default:
            alert("Voto nulo");
    }
}


function repeticao() {
    s = 0;
    for (var i = 0; i < 5; i++) {
        n = parseFloat(prompt("Digite o " + (i + 1) + "° número"));
        s += n;
    }
    alert("A soma dos  números informados é " + s);
}



function exercicio1() {
    nota = parseInt(prompt("Informe uma nota entre 0 e 10"));
    if (nota <= 10) {
        alert(nota + " está no intervalo desejado.");
    } else {
        alert(nota + " não está no intervalo desejado.\n Digite novamente.");
        nota = parseInt(prompt("Informe uma nota entre 0 e 10"));
    }

}


function comwhile() {
    var resposta = "não";
    while (resposta !== "sim") {
        resposta = prompt("o cabra é bonito?");
    }
    alert("Parabéns,o cabra é bonito");
}

function exfor() {
    for (var i = 2; i <= 8; i += 2) {
        alert("Os Números pares entre 0 e 10 são:\n");
        alert(+i);
    }
}

function exfor1() {
    if (i % 2 === 0) {
        alert("Números pares " + i);
    }
}

function exercicio03() {
    for (i = 1; i < 2; i++) {
        for (a = 1; a < 50; a++) {
            nome = prompt("digite seu nome");
            if (nome.length > 3) {
                break;
            } else {
                alert("Nome invalido");
            }
        }
        for (a = 1; a < 50; a++) {
            idade = parseInt(prompt("Digite sua idade"));
            if (idade > 0 && idade < 150) {
                break;
            } else {
                alert("Idade invalida tente denovo");
            }
        }
        for (a = 1; a < 50; a++) {
            salario = parseFloat(prompt("Digite seu salario"));
            if (salario > 0) {
                break;
            } else {
                alert("Salario não pode ser zero ou menos");
            }
        }
        for (a = 1; a < 50; a++) {
            sexo = prompt("Digite o sexo m/f");
            if (sexo === "m" || sexo === "M") {
                sexo = "Masculino";
                break;
            } else if (sexo === "f" || sexo === "F") {
                sexo = "Feminino";
                break;
            } else {
                alert("Sexo invalido digite m/f");
            }
        }
        for (a = 1; a < 50; a++) {
            estado = prompt("Estado civil - s / c / v / d");
            if (estado === "s" || estado === "S") {
                estado = "Solteiro(a)";
                break;
            } else if (estado === "c" || estado === "C") {
                estado = "Casado(a)";
                break;
            } else if (estado === "v" || estado === "V") {
                estado = "Viuvo(a)";
                break;
            } else if (estado === "d" || estado === "D") {
                estado = "Divorciado(a)";
                break;
            } else {
                alert("Opção invalida tente denovo ");
            }
        }

        alert("Bem vindo cadastro feito com sucesso");
        alert("Nome " + nome + "\n Idade " + idade + " anos \n Salario " + salario.toFixed(2) + "\n Sexo " + sexo + "\n Estsdo cívil " + estado);
    }
}

