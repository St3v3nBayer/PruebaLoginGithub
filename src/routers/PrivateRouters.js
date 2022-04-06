import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Favoritos from '../components/Favoritos';
import Repositorios from '../components/Repositorios';
import Dashboard from '../pages/Dashboard';

const PrivateRouters = () => {
    return (
        <Routes>
            <Route path="/*" element={<Dashboard />}>
                <Route index element={<Repositorios />} />
                <Route path="favoritos" element={<Favoritos />} />
            </Route>
        </Routes>
    )
}

export default PrivateRouters;
