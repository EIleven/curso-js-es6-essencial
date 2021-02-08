var test = 'example'; //ESCOPO GLOBAL

(() => {
    var test;
    console.log('Valor dentro da função "test"' );

    if (true) {
        test = 'example'; // aqui está a variável
        console.log('Valor dentro do if "test"' );
    }

    console.log('Valor após a execução do if "test"' );
})();
