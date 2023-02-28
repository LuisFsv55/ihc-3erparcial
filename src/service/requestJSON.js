const url = 'http://localhost:4000/inscritas';
export const inscribirMaterias = async materias => {
    try {
        await fetch( url, {
            method: 'POST',
            body: JSON.stringify( materias ),
            headers: {
                'Content-Type': 'Application/json'
            }
        } );
    } catch (error) {
        console.log( error );
    }
};
export const getMateriasInscritas = async() => {
    try {
        const resultado = await fetch( url );
        const materias = await resultado.json();
        console.log(materias);
        return materias;
    } catch (error) {
        console.log( error );
    }
}