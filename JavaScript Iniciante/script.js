
//var meuArray= ["A","B","C"];
var palpite ;
var numRandom;



//gera numero
function gerarNumero(){
    numRandom = Math.floor(Math.random()*100);
    document.getElementById("numRandomId").value = numRandom;
}

function conferirNumero(){
    palpite = document.getElementById("palpiteId").value
    if(palpite==numRandom){
        document.getElementById("mensagemId").innerHTML = "Igual";
    }else
    document.getElementById("mensagemId").innerHTML = "Diferente";

}

// Adiciona uma Li em uma lista Ul
function executarOperacao(operacao){
 var infoUm = parseInt(document.getElementById("inputIdUm").value);
 var infoDois = parseInt(document.getElementById("inputIdDois").value);
 
switch(operacao){
    case 1: 
    document.getElementById("listaId").innerHTML += "<li>"+(infoUm+" + "+infoDois+" = ")+(infoUm+infoDois)+"</li>";
    break;

    case 2:     
    document.getElementById("listaId").innerHTML += "<li>"+(infoUm+" - "+infoDois+" = ")+(infoUm-infoDois)+"</li>";
    break;

    case 3: 
    document.getElementById("listaId").innerHTML += "<li>"+(infoUm+" X "+infoDois+" = ")+(infoUm*infoDois)+"</li>";
    break;

    case 4: 
    document.getElementById("listaId").innerHTML += "<li>"+(infoUm+" / "+infoDois+" = ")+(infoUm/infoDois)+"</li>";
    break;
    default:
        alert("Default Case");
        break;
}
}

  
      // Adiciona uma Li em uma lista Ul
function limparUl(){
    document.getElementById("listaId").innerHTML = "";
   }

  

//Comentário.
//var nome=prompt("Nome");
//document.write(nome);

/** function fazerAcao(){
    var meuH1 = document.getElementById("h1Id");
    var textoDigitado = prompt("Texto para H1?"); 
    meuH1.innerHTML=textoDigitado;
}*/