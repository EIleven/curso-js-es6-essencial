/**
switch (expressão) {
    case valor1:
        [break;]
    case valueN:
        [break;]
        
    default:
        [break;]
}

*/


const fruit = 'jaca';

switch (fruit) {
    case 'banana':
        console.log('R$ 3,00 / Kg');
        break;
    case 'mamão':
    case 'pera':
    case 'melancia':
    case 'jaca':
        console.log('R$ 2,00 / Kg');
        break;
    default:
        console.log('Produto não existe no estoque.');
        break;
}