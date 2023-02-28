import { Fragment, useContext, useEffect } from 'react';
import SelectionMateriasContext from '../context/SelectionMateriasContext';
import { DATASELECTIONGRUPOS } from '../utils/DATASELECTION';

const SelectionGroups = ({ data }) => {
    const { handleChangeGroup, checkGroupSelection } = useContext( SelectionMateriasContext );
    
    // useEffect(() => {
      
    // }, []);
    

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
                                                <span className='inscribir-grupo'>Grupo: <span>{ d.group }</span></span>
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
                                            {
                                                <span className='select-cupo'>{d.cupo}</span>
                                            }
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
 
export default SelectionGroups;