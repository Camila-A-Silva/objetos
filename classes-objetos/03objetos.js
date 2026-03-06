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
const lados = 10;
const quadrado2 = {
    lados: 4,
    area(lado){
        return lado * lado
    },
    perimetro(lado){
        return this.lados * lado
    }
};

// Criar um objeto SENAI 
const senai = {
    codigo: 603,
    cidade: 'Araraquara'
};

console.log('------------------');


senai.telefone = 1633035252
senai.rua = "Hugo Negrini"
senai.telefone = 1732158968
delete senai.rua;

senai.endereco = {rua: 'Hugo Negrini', bairro: 'Quitandinha', numero: 60}
senai.alunos = ['SESI', 'EEBA', 'comunidade']



senai.endereco.numero = 62;
senai.alunos[2] = 'Tecnico';

console.log(senai);