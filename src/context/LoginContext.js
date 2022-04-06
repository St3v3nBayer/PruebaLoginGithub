import { createContext } from "react";

const LoginContext = createContext();

const LoginProvider = ({ children }) => {

    

    const data = { };

    return <LoginContext.Provider value={data}>{children}</LoginContext.Provider>
}

export { LoginProvider };
export default LoginContext;