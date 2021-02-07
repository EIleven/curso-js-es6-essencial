const user = {
 name: 'Breno',
 lastName: 'César de Barros Ramos'
}

// Recupera as chaves do objeto
//console.log('Propriedades do objeto user: ', Object.keys(user));

// Recupera os valores das chaves do objeto
//console.log('\nValores das propriedades do objeto user:', Object.values(user));

// Retorna um array de arrays contendo [ nome_prop, valor_prop ]
//console.log('\nLista de propriedades e valores: ', Object.entries(user));

// Mergear (concatenar) propriedades deobjetos
Object.assign(user, {fullName: 'Breno César de Barros Ramos'});

console.log('\nAdiciona a propriedade fullNameno objeto user', user);
console.log('\nRetorna um novo objeto mergeando dois ou mais objetos ', Object.assign({}, user, {age: 26}));