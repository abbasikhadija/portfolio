import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {App} from './App';
import {projects} from './data/projects';
export {projects};
export function render(path:string){return renderToString(<StaticRouter location={path}><App/></StaticRouter>)}
