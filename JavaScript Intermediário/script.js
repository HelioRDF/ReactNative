function apertouMouse(){
    console.log("Apertou o mouse");
}

function soltouMouse(){
    console.log("Soltou o mouse");
}

function passouMouse(){
    console.log("Passou o mouse");
}

function tirouMouse(){
    console.log("Tirou o mouse");
}

function moveuMouse(){
    console.log("Moveu o mouse");
}

function apertouBotao(){
    console.log("Apertou o botão");
}

function menuContexto(){
    console.log("Apertou o botão direito do mouse");
    return false;
}

function doisClicks(){
    console.log("Apertou o botão 2x");
    return false;
}

function apertouMouse(){
    console.log("Apertou o mouse");
}

function soltouMouse(){
    console.log("Soltou o mouse");
}

function passouMouse(){
    console.log("Passou o mouse");
}

function tirouMouse(){
    console.log("Tirou o mouse");
}

function moveuMouse(){
    console.log("Moveu o mouse");
}

function apertouBotao(){
    console.log("Apertou o botão");
}

function menuContexto(){
    console.log("Apertou o botão direito do mouse");
    return false;
}

function doisClicks(){
    console.log("Apertou o botão 2x");
    return false;
}

var contador;
function apertouTecla(){
    console.log("Apertou Tecla");
    
    contador=document.getElementById("inputId").value.length;
    document.getElementById("contadorId").innerHTML=contador;    
    
}