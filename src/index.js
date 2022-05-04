import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import App from './Views/app';


const rootElement = document.getElementById("root");

ReactDOM.render(
//<StrictMode> : ne marche pas avec hookrouter
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    rootElement
);

