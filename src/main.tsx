import React from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {App} from './App';
import './style.css';
import './cyberpunk.css';
import './project-flows.css';
import './disclosure.css';
// Static HTML keeps all narratives readable without JavaScript. Mount the interactive
// application once loaded; it owns routing and explanatory controls from this point.
createRoot(document.getElementById('root')!).render(<BrowserRouter basename={import.meta.env.BASE_URL}><App/></BrowserRouter>);
