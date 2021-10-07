import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

ReactDOM.render(
    <StrictMode>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </StrictMode>,
    document.getElementById('app')
);
