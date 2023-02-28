import { SelectionMateriasProvider } from "./context/SelectionMateriasContext";
import { SelectionAdicionProvider } from "./context/SelectionAdiccion";
import RouterApp from "./Router";

function App() {

    return (
        <SelectionMateriasProvider>
            <SelectionAdicionProvider>
                <RouterApp />
            </SelectionAdicionProvider>
        </SelectionMateriasProvider>
    );

}

export default App;