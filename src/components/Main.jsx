import '../styles/Main.css';
import TableInscripcion from './TableInscripcion';
const Main = () => {
    return ( 
        <>
            <div className="contenedor buttons">
                <button className='btn-save'>Guardar Selección</button>
                <div className='search'>
                    <div className='search-inputs'>
                        <span className="search-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.2} stroke="currentColor" className="w-2 h-2 search-icon-svg">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                            </svg>
                        </span>
                        <input type="text" value="Buscar" className='search-input' />
                    </div>
                </div>
            </div>
            <table className="contenedor table">
                <thead>
                    <tr>
                        <th>Materias</th>
                        <th>Sigla</th>
                    </tr>
                </thead>
                <tbody>
                    <TableInscripcion />
                </tbody>
            </table>
        </>
    );
}
 
export default Main;