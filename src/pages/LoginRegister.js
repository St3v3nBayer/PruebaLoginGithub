import React from 'react'
import { Outlet } from 'react-router-dom';

const LoginRegister = () => {
    
    return (
        <div className="container w-50 mt-5 shadow p-3 mb-5 bg-body rounded">
            <h1>Bienvenido</h1>
            <Outlet />
        </div>
    )
}

export default LoginRegister
