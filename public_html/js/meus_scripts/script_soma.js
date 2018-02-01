/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function somar(valor1, valor2) {
    return valor1 + valor2;
}

function exemplo1() {
    var a = document.getElementById('valor1').value;
    var b = document.getElementById('valor2').value;
    var o = document.getElementById('op').value;
    if (a == "" || b == "" || isNaN(a) || isNaN(b)) {
        alert("Algo não está correto.");
        return;
    }
    a = parseFloat(a);
    b = parseFloat(b);
    o = parseInt(o);
    var result = 0;
    switch (o){
    case 1:
            result = somar(a, b);
            break;
            
    case 2:
            result = a - b;
            break;
            
    case 3:
            result = a * b;
            break;
            
    case 4:
            result = a / b;
            break;
    }
    document.getElementById('resultado').value = result;
}