(() => {

    // 1. Obtener información de una película por ID
    function getAllMovies( movieId: string ) {
        console.log({ movieId });
    }

    // 2. Obtener información de los actores de una película por ID
    function getMovieById( id: string ) {
        console.log({ id });
    }

    // 3. Obtener la biografía del actor por ID
    function getActorBioById( id: string ) {
        console.log({ id });
    }

    // 4. Crear una película utilizando una interfaz para los argumentos
    interface Movie {
        cast:        string[];
        description: string;
        rating:      number;
        title:       string;
    }

    function createMovie({ title, description, rating, cast }: Movie ) {
        console.log({ title, description, rating, cast });
    }

    // 5. Crear un nuevo actor si no existe
    function checkFullName( fullName: string ): boolean {
        if ( fullName === 'fernando' ) return false;
        return true;
    }

    function createActor( fullName: string, birthdate: Date ): boolean {
        if ( !checkFullName(fullName) ) return false;

        console.log('Crear actor', birthdate);
        return true;
    }

    // 6. Calcular el monto a pagar (Uso de retornos tempranos)
    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }) => {
        if ( isDead ) return 1500;
        if ( isSeparated ) return 2500;
        
        return isRetired ? 3000 : 4000;
    }

})();