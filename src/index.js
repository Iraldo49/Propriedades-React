import {createRoot} from "react-dom/client";
import App from './App'

const pacote = document.getElementById('root');
const root = createRoot(pacote);
root.render(<App/>);