import React, { Component } from 'react';
import { useRoutes } from 'react-router-dom';
import routes from './routes';


export default function App() {
    const elements = useRoutes(routes);
    return (
        <div className='app'>
            {elements}
        </div>
    );
}