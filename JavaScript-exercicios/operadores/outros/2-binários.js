// in
something in somethingItems

// Arrays
var arvores = new Array("pau-brasil", "Loureiro", "Cedro", "Carvalho", "Sicômoro");
0 in arvores;              // retona true
3 in arvores;              // retorna true
6 in arvores;              // retorna false
"cedro" in arvores;        // retorna false (VOCÊ DEVE ESPECIFICAR O NÚMERO DO ÍNDICE, NÃO O VALOR NAQUELE ÍNDICE)

"length" in arvore;        // retorna true pois length é uma propriedade de Array

// Objetos predefinidos
"PI" in Math;  // retorna true
var minhaString = new String("coral");
"length" in minhaString  //retorna true

// Objetos personalizados
var meucarro = { marca: "Honda", modelo: "Accord", ano: 1998};
"marca" in meucarro;        // retorna true
"modelo" in meucarro;       // retorna true