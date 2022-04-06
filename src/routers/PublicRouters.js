import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from '../components/Login';
import SignIn from '../components/SignIn';
import LoginRegister from '../pages/LoginRegister';

const PublicRouters = () => {


    return (
        <Routes>
            <Route path="/*" element={<LoginRegister />}>
                <Route index element={<Login />} />
                <Route path="registro" element={<SignIn />} />
                <Route path="*" element={<Navigate replace to='/' />}/>
            </Route>
        </Routes>
    )
}

export default PublicRouters;
