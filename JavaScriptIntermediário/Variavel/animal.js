class Animal {

    constructor(tipo, pernas) {
        this.tipo = tipo;
        this.perna = pernas;
    }

    falar(som = 'Som qualquer') {
        return som;
    }

    get dados() {
        return 'tipo: $(this.tipo), Pernas: ${this.pernas}';
    }

}

export class Gato extends Animal{

    
}