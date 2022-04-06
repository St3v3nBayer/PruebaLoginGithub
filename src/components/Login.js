import React, { useContext, useState } from 'react';
import { Badge, Button, Form, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import imgGitHub from '../assets/GitHub2.png';
import url from '../url/UrlGithub';

const objUser = {
    usuario: '',
    contraseña: ''
}

const Login = () => {
    //Estados
    const [form, setForm] = useState(objUser);
    const [show, setShow] = useState(false);

    // Contextos
    const { handleVerify } = useContext(AuthContext);

    //Manejadores de Eventos
    const handleForm = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!handleVerify(form)) {
            setShow(true);
            setTimeout(() => { setShow(false) }, 3000);
        }
        setForm(objUser);
    }

    return (
        <>
            <br />
            <Badge bg="dark w-100" pill>
                <h2>Login</h2>
            </Badge>
            <Form onSubmit={handleSubmit} className="p-5">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label><b>Usuario</b></Form.Label>
                    <Form.Control value={form.usuario} onChange={handleForm} name="usuario" type="text" placeholder="Ingrese Usuario" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label><b>Contraseña</b></Form.Label>
                    <Form.Control value={form.contraseña} onChange={handleForm} name="contraseña" type="password" placeholder="Ingrese Contraseña" required />
                </Form.Group>
                <Button variant="success" type="submit" size="lg" className="mb-3">
                    Ingresar
                </Button>
                <br />
                <Link to="/registro">Registrarse</Link>
                {" "}ó Ingresar con{" "}
                <Button href={url} variant="ligth" className="shadow-lg p-2 mb-2 bg-body rounded">
                    <img src={imgGitHub} width="30" height="30" alt="" />{" "}
                    <b>GitHub</b>
                </Button>
                <Alert show={show} variant="danger" onClose={() => setShow(false)} dismissible>
                    <Alert.Heading><h6>¡Credenciales Invalidas!</h6></Alert.Heading>
                </Alert>
            </Form>
        </>
    )
}

export default Login;