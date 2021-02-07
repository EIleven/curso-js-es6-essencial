const myNumber = 12.4032;

// Transformar número para string
const numberAsString = myNumber.toString();
console.log('Número transformado em string: ', typeof numberAsString); // typeof é um operador que retorna o tipo da variável

//Retorna número com um número de casas decimais
const fixedTwoDecimals = myNumber.toFixed(2);
console.log('\nNúmero com duas casas decimais: ', fixedTwoDecimals);

// Transforma uma string em float
console.log('\nString passada para float: ', typeof parseFloat('13.22'));

// Trasforma uma string em int
console.log('\nString passada para inteiro: ', typeof parseInt('13.20'));