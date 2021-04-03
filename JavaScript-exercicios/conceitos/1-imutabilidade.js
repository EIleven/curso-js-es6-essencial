const user = {
    name: 'Breno',
    lastName: 'César de Barros'
};

function getUserWithFullName(user) {
    return {
        ...user,
        fullName: `${user.name} ${user.lastName}` // Este resultado de full name é o mesmo de --> fullName: user.name + '' + user.lastName. Usamos a sitaxe mais simples que é fullName: '${user.name} ${user.lastName}' , esta mão requer os sinais de + (concatenar string)
    }
}

const userWithFullName = getUserWithFullName(user);

console.log(userWithFullName, user);

// Implementações novas do ECMAScript 2018

// O primeiro é o SpeedOperator = 

// O segundo é a string literal