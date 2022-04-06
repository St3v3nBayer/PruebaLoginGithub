import { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState(false);
    useEffect(() => {
        handleVerify();
        handleToken();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleToken = async () => {
        let resp = await fetch('http://localhost:3000/auth', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await resp.json();
        console.log(data.auth, 'handletoken response');
        if (data.auth) { setAuth(true); return data.repos };
    }

    const handleSignIn = (usuario) => {
        localStorage.setItem("user", JSON.stringify(usuario));
    }

    const handleVerify = (usuario = { usuario: '', contraseña: '' }) => {
        let result = false;
        if (localStorage.getItem("user")) {
            const userStorage = JSON.parse(localStorage.getItem("user"));
            if (userStorage.usuario === usuario.usuario && userStorage.contraseña === usuario.contraseña) {
                setAuth(true);
                result = true;
                localStorage.setItem("copyUser", JSON.stringify(usuario));
            }
        }
        if (localStorage.getItem("copyUser")) {
            setAuth(true);
            result = true;
        }
        return result;
    }

    const handleLogOut = async () => {
        const resp = await fetch("http://localhost:3000/logout", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        if(resp.json===200){
            setAuth(false);
        }
        localStorage.removeItem("copyUser");
        setAuth(false);
    }

    const data = { handleVerify, handleSignIn, auth, handleLogOut, handleToken };

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>

}
export { AuthProvider };
export default AuthContext;
