// SEMPRE que abrimos {} criamos um escopo de bloco, seja em um if () ou em um for ()
// Ou seja, sempre que abrimos e fechamos chaves
// EX de escopo GLOBAL

if (condition) {
    //ESCOPO GLOBAl
}

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    //ESCOPO GLOBAL
}


//EX de escopo de FUNÇÃO (para não interferir em outras variáveis)
function test(params) {
    
}