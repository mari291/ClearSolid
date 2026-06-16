(() => {

    // 1. Resolver sin la triple condicional dentro del if
    function isRedFruit( fruit: string ): boolean {
        const redFruits = ['manzana', 'cereza', 'ciruela'];
        return redFruits.includes(fruit);
    }

    // 2. Simplificar esta función usando un Literal de Objeto
    function getFruitsByColor( color: string ): string[] {
        const fruitsByColor: { [key: string]: string[] } = {
            red:    ['manzana', 'fresa'],
            yellow: ['piña', 'banana'],
            purple: ['moras', 'uvas']
        };

        if ( !Object.keys(fruitsByColor).includes(color) ) {
            throw Error('the color must be: red, yellow, purple');
        }

        return fruitsByColor[color];
    }

    // 3. Simplificar esta función usando Retornos Tempranos
    let isFirstStepWorking  = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking  = true;
    let isFourthStepWorking = true;

    function workingSteps() {
        if ( !isFirstStepWorking ) return 'First step broken.';
        if ( !isSecondStepWorking ) return 'Second step broken.';
        if ( !isThirdStepWorking ) return 'Third step broken.';
        if ( !isFourthStepWorking ) return 'Fourth step broken.';
        
        return 'Working properly!';
    }

    // Pruebas en Consola 
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); 
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' });     
    console.log({ redFruits: getFruitsByColor('red') });       
    console.log({ workingSteps: workingSteps() }); 

})();
