/* Declara~]ao de um objeto. Chave: valor */

/* {} = objeto
   [] = array */


//  Forma Literal
let quadrado = {
    lados: 4,
    area: function(lado){
        return lado * lado
    },
    perimetro: function(lado){
        return this.lados * lado
    }
};


//  Forma Reduzida
const quadrado2 = {
    lados: 4,
    area(lado){
        return lado * lado
    },
    perimetro(lado){
        return this.lados * lado
    }
};