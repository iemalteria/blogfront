import { useContext, useState } from "react"
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";

export default function LoginPage() {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const {setUserInfo} = useContext(UserContext);
    async function login(ev) {
        ev.preventDefault();
        const response = await fetch('https://iemalteria-back.vercel.applogin', {
            method: 'POST',
            body: JSON.stringify({username,password}),
            headers: {'Content-type': 'application/json'},
            credentials: 'include',
        })
        if (response.ok) {
            response.json().then(userInfo => {
                setUserInfo(userInfo);
                setRedirect(true);
            });
        } else {
            alert('Credenciales Incorrectas')
        }
    }

    if (redirect){
        return <Navigate to={'/'}/>
    }
    return(
        <form className="login" onSubmit={login}>
            <h1>Iniciar Sesión</h1>
            <input type="text" 
                placeholder="Nombre de Usuario" 
                value={username} 
                onChange={ev => setUsername(ev.target.value)}/>
            <input type="password" 
                placeholder="Contraseña" 
                value={password} 
                onChange={ev => setPassword(ev.target.value)}/>
            <button>Iniciar Sesión</button>
        </form>
    )
}
