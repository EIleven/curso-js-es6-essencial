let user = {
 name: 'Breno',
};

// Alterando a propriedade de um objeto
console.log(user);

user.name = 'Outro nome 1'
console.log(user);
user['name'] = 'Outro nome 2'

console.log(user);
const prop = 'name'
user[prop] = 'Outro nome 3'

console.log(user);

// Criando uma propriedade
lastName = 'César de Barros'
console.log(lastName);

//Deletando uma propriedade
delete user.name