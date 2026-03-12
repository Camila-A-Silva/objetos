/* CONTRUTOR: É o primeiro método executado quando fazemos 'new Senai()'.
 Ele serve para "exibir" ods dados necessários logo na criação. */

class Senai {
    constructor(codigo, cidade, ano) {
        this.codigo = codigo;
        this.cidade = cidade;
    }
    
    /* Método para exibir informações formatadas */
    dadosEscola() {
        console.log(`Unidade: ${this.cidade} | Código Interno: ${this.codigo}`);
    }
}

/* A criação agora é feita em apenas uma linha, passando os
 valores como argumentos para o contrutor. */

const escolaA = new Senai(603, 'Araraquara');
const escolaB = new Senai(145, 'São Carlos');
const escolaC = new Senai(545, 'Américo Brasiliense');

escolaA.dadosEscola();
escolaB.dadosEscola();
escolaC.dadosEscola();