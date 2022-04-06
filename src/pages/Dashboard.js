import React, { useContext, useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom';
import Modal from '../components/ModalAlerta';
import NavBar from '../components/NavBar';
import AuthContext from '../context/AuthContext';

const Dashboard = () => {

    const [repos, setRepos] = useState([]);
    const [favoritos, setFavoritos] = useState([]);
    const [show, setShow] = useState(false);
    const [alert, setAlert] = useState({ mensaje: "", text:"", button:"" });

    const handleClose = () => setShow(false);

    const { handleLogOut } = useContext(AuthContext);
    const { handleToken } = useContext(AuthContext);

    useEffect(() => {
        handleToken().then(data => {
            setRepos(data)
        }).catch(err => { throw err });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleSalir = () => {
        handleLogOut();
    }

    const handleAñadirFavoritos = (objRepo) => {
        let array = favoritos.filter((e) => e.id === objRepo.id);
        if (array.length > 0) {
            setShow(true);
            setAlert({ mensaje: 'El Repositorio Ya Existe En Favoritos', text: "text-danger", button: "outline-danger" });
            setTimeout(()=>{ setShow(false); setAlert({mensaje: "", text:"", button:"" })}, 1500);
        } else {
            setFavoritos([...favoritos, objRepo]);
            setShow(true);
            setAlert({ mensaje: 'Repositorio Agregado a Favoritos', text: "text-success", button: "outline-success" });
            setTimeout(()=>{ setShow(false); setAlert({mensaje: "", text:"", button:"" })}, 1500);

        }
    }

    const handleEliminarFavoritos = (Favorito) => {
        let array = favoritos.filter((e) => e.id !== Favorito.id);
        setFavoritos(array);
    }

    return (
        <>
            <NavBar handleSalir={handleSalir} />
            <Outlet context={{ repos, handleAñadirFavoritos, favoritos, handleEliminarFavoritos }} />
            <Modal show={show} handleClose={handleClose} alert={alert}/>
        </>
    )
}

export default Dashboard;
