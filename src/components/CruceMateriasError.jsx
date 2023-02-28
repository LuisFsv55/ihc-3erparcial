const CruceMateriasError = ({ conflictoDataCruce }) => {
    return ( 
        <div
            style={{
                backgroundColor: 'red',
                padding: '0.3rem 0',
                borderRadius: '1rem',
                marginBottom: '1rem'
            }}
        >
            <p style={{
                textAlign:'center',
                color: 'white',
                fontWeight: 'bold'
            }}>Hay Conflicto de Cruce de Materias </p>
            <p style={{
                textAlign:'center',
                color: 'white',
                fontWeight: 'bold'
            }}>Materia: { conflictoDataCruce.union.subject }</p>
            <p style={{
                textAlign:'center',
                color: 'white',
                fontWeight: 'bold'
            }}>Horario: { conflictoDataCruce.horario }</p>
            <p style={{
                textAlign:'center',
                color: 'white',
                fontWeight: 'bold'
            }}>Hora: { conflictoDataCruce.hora }</p>
        </div>
    );
}
 
export default CruceMateriasError;