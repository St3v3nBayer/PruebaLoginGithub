import React, { useContext, useState } from 'react';
import { Form, Button, Badge, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const objForm = { usuario: '', contraseña: '' };

const SignIn = () => {
    // Estados
    const [form, setForm] = useState(objForm);
    const [show, setShow] = useState(false);

    // Contextos
    const { handleSignIn } = useContext(AuthContext);

    //Manejadores de Eventos
    const handleForm = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        handleSignIn(form);
        setForm(objForm);
        setShow(true);
        setTimeout(() => { setShow(false) }, 3000);
    }

    return (
        <>
            <br />
            <Badge bg="dark w-100" pill>
                <h2>Registrarse</h2>
            </Badge>
            <Form onSubmit={handleSubmit} className="p-5">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label><b>Usuario</b></Form.Label>
                    <Form.Control value={form.usuario} onChange={handleForm} name="usuario" type="text" placeholder="Ingresar Usuario" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label><b>Contraseña</b></Form.Label>
                    <Form.Control value={form.contraseña} onChange={handleForm} name="contraseña" type="password" placeholder="Ingresar Contraseña" required />
                </Form.Group>
                <Button variant="warning" type="submit" size="lg">
                    Registrarse
                </Button>
                <br />
                <Link to="/">Iniciar Sesión</Link>
                <br />
                <Alert show={show} variant="success" onClose={() => setShow(false)} dismissible>
                    <Alert.Heading><h6>¡Registro Exitoso!</h6></Alert.Heading>
                </Alert>
            </Form>
        </>
    )
}

export default SignIn;
