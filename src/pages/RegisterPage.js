import { useState, useContext } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [redirect, setRedirect] = useState(false);
    const { setUserInfo } = useContext(UserContext);

    async function register(ev) {
        ev.preventDefault();
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        if (!emailRegex.test(username)) {
            setErrorMessage('Correo electrónico no válido');
            return;
        }

        const response = await fetch('https://iemalteria-back.vercel.app/register', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.status !== 200) {
            alert('Fallo el registro');
        } else {
            alert('Registro exitoso');
            response.json().then(userInfo => {
                setUserInfo(userInfo);
                setRedirect(true);
            });
        }
    }

    if (redirect) {
        return <Navigate to={'/login'} />
    }

    return (
        <form className="register" onSubmit={register}>
            <h1>Registrarse</h1>
            <input
                type="text"
                placeholder="Nombre de Usuario"
                value={username}
                onChange={ev => {
                    setUsername(ev.target.value);
                    setErrorMessage(''); // Clear error message when user modifies input
                }}
            />
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={ev => setPassword(ev.target.value)}
            />
            <button>Registrarse</button>
            
        </form>
    );
}
