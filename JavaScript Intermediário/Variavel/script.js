//Operador Spread
let meuArray02 = ['A', 'B', 'C', 'D'];
let meuArray03 = [...meuArray02, 'E', 'F'];

let info = {
    nome: "helio",
    idade: 30
}

function recebeInfo(objeto){
    let objetoSpread={
        ...objeto,
        cidade:'SP'
    }
    return objetoSpread;
}

console.log(recebeInfo(info));

//Operador Rest



//Descontrução de Objetos/Arrays
let meuObjeto = {
    nome: 'Helio',
    idade: '30'
}

let { idade, nome } = meuObjeto;

let meuArray = ['A', 'B', 'C'];
let [valor1, valor2, valor3] = meuArray;


//Objeto literal

function minhaFuncao(nome, idade) {
    let objetoLiteral = {
        nome, idade
    };

    let objetoPadrao = {
        meuNome: nome, minhaIdade: idade
    };
    return objetoPadrao;
}




/*var num = 1;
const variavelConstante = 'Constante';
let nome = 'Helio';
let idade = 30;
let texto = `Meu nome é ${nome} e tenho ${idade}`

if (num == 1) {
    var variavelGlobal = 'Global';
    let variavelEscopo = 'Escopo';
    console.log(variavelGlobal);
    console.log(variavelEscopo);
    console.log(variavelConstante);
    console.log(texto);

}**/