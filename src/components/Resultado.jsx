import { useContext } from 'react';
import SelectionMateriasContext from '../context/SelectionMateriasContext';
import '../styles/Resultado.css';
import CruceMateriasError from './CruceMateriasError';

const Resultado = () => {
    const { checkGroupSelectionArray, handleSubmitInscricion, conflictoCruceMaterias, conflictoDataCruce, handleClickQuitarMateria } = useContext( SelectionMateriasContext );
    return ( 
        <div className='resultado'>
            <div className='resultado-inscribir'>
                <p className='title-grupos-materias'>Materias Seleccionadas a Inscribir:</p>
                {
                    conflictoCruceMaterias && <CruceMateriasError conflictoDataCruce={ conflictoDataCruce } />
                }
                {
                    checkGroupSelectionArray.length > 0 ? (checkGroupSelectionArray.map( (da, index) => (
                        <div className='resultado-inscribir-grupo' key={ index }>
                            <div className='resultado-inscribir-parrafos'>
                                <p>Materia: { da.union.subject }</p>
                                <p>Grupo: { da.group }</p>
                                <p>Docente: { da.docente }</p>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-1 h-1 svg-exit" onClick={ e => handleClickQuitarMateria(da.id) } style={{ cursor: 'pointer' }}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                    ))) : null
                }
                {
                    checkGroupSelectionArray.length > 0 ? (
                        <button className='btn-inscribir' onClick={ handleSubmitInscricion }>Inscribir Materias</button>
                    ) : null
                }
            </div>
            {
                checkGroupSelectionArray.length > 0 ? (
                    <table className='resultado-table'>
                        <thead>
                            <tr>
                                <th>Horario</th>
                                <th>Lunes</th>
                                <th>Martes</th>
                                <th>Miércoles</th>
                                <th>Jueves</th>
                                <th>Viernes</th>
                                <th>Sábado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                checkGroupSelectionArray.length > 0 ? checkGroupSelectionArray.map( ( d, index ) => (
                                    <tr key={ index }>
                                        <td>{ d.hora }</td>
                                        <td>{ d.dia.lunes ? d.union.subject : '' } </td>
                                        <td>{ d.dia.martes ? d.union.subject : '' } </td>
                                        <td>{ d.dia.miercoles ? d.union.subject : '' } </td>
                                        <td>{ d.dia.jueves ? d.union.subject : '' } </td>
                                        <td>{ d.dia.viernes ? d.union.subject : '' } </td>
                                        <td>{ d.dia.sabado ? d.union.subject : '' } </td>
                                    </tr>
                                )): null
                            }
                        </tbody>
                    </table>

                ): <h4 className='tabla-nada'>No hay materias a inscribir</h4>
            }
           

        </div>
    );
}
 
export default Resultado;