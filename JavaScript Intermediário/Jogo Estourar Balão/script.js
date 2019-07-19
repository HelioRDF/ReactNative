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
function apertouTecla(event){
    console.log("Apertou Tecla: "+event.keyCode);
    contador=document.getElementById("inputId").value.length;
    document.getElementById("contadorId").innerHTML=contador;    
}

function soltouTecla(event){
    console.log("soltou Tecla: "+event.keyCode);
}

function pressionouTecla(event){
    console.log("Pressionou Tecla: "+event.keyCode);
}

function pressionouTeclaEspecial(event){
    console.log("Shift: "+event.shiftKey);
    console.log("CTRL: "+event.ctrlKey);
    console.log("Alt: "+event.altKey);
    console.log("Meta: "+event.altKey);
}

function carregamentoPagina(event){
    console.log("Página Carregada.");
}

function caixaSelecao(objeto){
     console.log("Objeto: "+objeto.value);
}

function focou(){
    console.log("Focou");
}

function perdeuFocu(){
    console.log("Perdeu o focu");
}

function submitAtivado(){
    console.log("Submit Ativado");
}

