import { useContext } from 'react';
import './App.css';
import AuthContext from './context/AuthContext';
import { LoginProvider } from './context/LoginContext';
import PrivateRouters from './routers/PrivateRouters';
import PublicRouters from './routers/PublicRouters';

function App() {
  const { auth } = useContext(AuthContext);
  return (
    <LoginProvider>
      <div className="App">
        {auth ? <PrivateRouters /> : <PublicRouters />}
      </div>
    </LoginProvider>
  );
}

export default App;
