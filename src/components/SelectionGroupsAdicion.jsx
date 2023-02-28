import { Fragment, useContext } from 'react';
import SelectionAdiccionContext from '../context/SelectionAdiccion';
import { DATASELECTIONGRUPOS } from '../utils/DATASELECTION';

const SelectionGroupsAdicion = ({ data }) => {
    const { handleChangeGroup } = useContext( SelectionAdiccionContext );
    return ( 
        <>
            {
                DATASELECTIONGRUPOS.map( (d, index) => {
                    return (
                        <Fragment key={ index }>
                            {
                                data.id === d.union.id ? (
                                    <div className='select-inscription-group-materias' key={ index }>
                                        <div className='select-inscription-group-inputs'>
                                            <div className='select-inscription-check'>
                                                <span className='data-id-materias'>{ d.id }</span>
                                                <span>Grupo: { d.group }</span>
                                                {
                                                    d.cupo > 0 ? (
                                                        <input 
                                                            type="checkbox"
                                                            className='materias-selection-input-check'
                                                            onChange={ e => handleChangeGroup( e ) }
                                                            name={ d.union.subject }
                                                            id="checked-js-materias"
                                                            // value={ checkGroupSelection }
                                                        />
                                                    ): null
                                                }
                                            </div>
                                            <span className='select-cupo'>{ d.cupo }</span>
                                        </div>
                                        <p className='select-inscription-group-para'>Horario: <span>{ d.horario } | { d.hora }</span></p>
                                        <p className='select-inscription-group-para'>Docente: <span>{ d.docente }</span></p>
                                    </div>
                                ) : null
                            }
                        </Fragment>
                    );
                })
            }
        </>
    );
}
 
export default SelectionGroupsAdicion;