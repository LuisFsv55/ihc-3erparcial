import { DATASUBJECTS } from "../utils/data";

const TableInscripcion = () => {
    return (
        DATASUBJECTS.map( (sub, index) => (
            <tr key={ index }>
                <td>
                    <div className='td-left'>
                        <div className='td-left-check'>
                            <input type="checkbox" />
                        </div>
                        <div className='td-left-span'>
                            <span className='td-left-span-1'>{ sub.subject }</span>
                            <span>Nivel: { sub.id }</span>
                        </div>
                    </div>
                </td>
                <td>
                    <p>{ sub.sigla }</p>
                </td>
            </tr>
        ))
    );
}
 
export default TableInscripcion;