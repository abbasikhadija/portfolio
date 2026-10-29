import React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import {App} from './App';
import {projects} from './data/projects';
export {projects};
export {profile} from './data/profile';
export function render(path:string){return renderToString(<StaticRouter basename={import.meta.env.BASE_URL} location={import.meta.env.BASE_URL.replace(/\/$/, "") + path}><App/></StaticRouter>)}
