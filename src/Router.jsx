import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Inscription from "./pages/Inscription";
import Addiction from "./pages/Addiction";
import Llifting from "./pages/Llifting";


const RouterApp = () => {
    return ( 
        <Router>
            <Routes>
                <Route path="/" element={ <Login /> } />
                <Route path="/inscription" element={ <Inscription /> } />
                <Route path="/addiction" element={ <Addiction /> } />
                <Route path="/levantamiento" element={ <Llifting /> } />
            </Routes>
        </Router>
    );
}
 
export default RouterApp;