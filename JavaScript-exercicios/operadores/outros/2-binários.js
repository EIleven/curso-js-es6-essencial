// in
something in somethingItems

// Arrays
var arvores = new Array("pau-brasil", "Loureiro", "cedro", "carvalho", "sicômoro");
0 in arvores;              // retona true
3 in arvores;              // retorna true
6 in arvores;              // retorna false
"cedro" in arvores[2];        // retorna false  ou VOCÊ DEVE ESPECIFICAR O NÚMERO DO ÍNDICE [2], NÃO O VALOR NAQUELE ÍNDICE, como no exemplo

"length" in arvore;        // retorna true pois length é uma propriedade de Array

// Objetos predefinidos
"PI" in Math;  // retorna true
var minhaString = new String("coral");
"length" in minhaString  //retorna true

// Objetos personalizados
var meucarro = { marca: "Honda", modelo: "Accord", ano: 1998};
"marca" in meucarro;        // retorna true
"modelo" in meucarro;       // retorna true


// instanceof
objeto instanceof tipoObjeto

var dia = new Date(2021, 02, 08);

if (dia instanceof Date) {
    // code here
}