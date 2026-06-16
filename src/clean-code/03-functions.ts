(() => {
    // 1. Obtener información de una película por ID
    function getMovieById(id: string) {
        console.log({ id });
    }

    // 2. Obtener información de los actores de una película por ID
    function getMovieCastById(id: string) {
        console.log({ id });
    }

    // 3. Obtener la biografía del actor por ID
    function getActorBioById(id: string) {
        console.log({ id });
    }

    // 4. Crear una película utilizando una interfaz
    interface Movie {
        title: string;
        description: string;
        rating: number;
        cast: string[];
    }

    function createMovie({ title, description, rating, cast }: Movie) {
        console.log({ title, description, rating, cast });
    }

    // 5. Crear un nuevo actor
    function createActor(fullName: string, birthdate: Date): boolean {
        // Tarea asíncrona para verificar nombre ficticia
        if (fullName === 'fernando') return false;

        console.log('Crear actor');
        return true;
    }

    // 6. Calcular el monto a pagar (Uso de retornos tempranos)
    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }): number => {
        if (isDead) return 1500;
        if (isSeparated) return 2500;
        
        return isRetired ? 3000 : 4000;
    }
})();