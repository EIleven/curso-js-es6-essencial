// Spread (...) este operador consegue interar cada intem dentro do array para outra variável específica
var partes = ['ombro', 'joelhos'];
var musica = ['cabeça', ...partes, 'e', pés];

var musica = ['cabeça', 'ombro', 'joelho', 'e', 'pés'];


function fn(x, y, z) { }
var args = [0, 1, 2];
fn(...args);
