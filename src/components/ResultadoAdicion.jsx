import { useContext, useEffect, useState } from 'react';
import SelectionAdiccionContext from '../context/SelectionAdiccion';
import '../styles/Resultado.css';
import CruceMateriasError from './CruceMateriasError';

const ResultadoAdicion = () => {
    const { checkGroupSelectionArray, handleSubmitInscricion, conflictoCruceMaterias, conflictoDataCruce, handleClickQuitarMateria, materiasJSONinscritas } = useContext( SelectionAdiccionContext );
    return ( 
        <div className='resultado'>
            <div className='resultado-inscribir'>
                <p className='title-grupos-materias'>Materias Seleccionadas a Inscribir:</p>
                {
                    conflictoCruceMaterias && <CruceMateriasError conflictoDataCruce={ conflictoDataCruce } />
                }
                {
                    checkGroupSelectionArray.map( (da, index) => (
                        <div className='resultado-inscribir-grupo adiccionadas' key={ index }>
                            <div className='resultado-inscribir-parrafos'>
                                <p>Materia: { da.union.subject }</p>
                                <p>Grupo: { da.group }</p>
                                <p>Docente: { da.docente }</p>
                            </div>
                            
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-1 h-1 svg-exit">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className='adiccionadas-span'>Addicionada</span>
                        </div>
                    ))
                }
                {
                    checkGroupSelectionArray.length > 0 ? (
                        <button className='btn-inscribir' onClick={ handleSubmitInscricion }>Addicionar Materias</button>
                    ) : null
                }
            </div>
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
                        materiasJSONinscritas.length > 0 ? materiasJSONinscritas.map( (d, index) => (
                            <tr key={ index }>
                                <td align='center'>
                                    <p>{ d.hora } -  Grupo: { d.group }</p>
                                    <p>{ d.docente }</p>
                                </td>
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
        </div>
    );
}
 
export default ResultadoAdicion;