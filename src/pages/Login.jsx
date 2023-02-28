import { Link } from "react-router-dom";

const Login = () => {
    return ( 
        <>
            <Link to="/inscription">Inscripción</Link>
            <Link to="/addiction">Adiccion</Link>
            <Link to="/levantamiento">Levantamiento</Link>
        </>
    );
}
 
export default Login;