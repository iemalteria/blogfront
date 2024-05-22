import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";
import './Header.css'

export default function Header() {
    const { setUserInfo, userInfo } = useContext(UserContext);

    useEffect(() => {
        /* fetch('https://iemalteria-of.vercel.app/profile', {
            credentials: 'include',
        }).then(response => {
            response.json().then(userInfo => {
                setUserInfo(userInfo);
            });
        }); */
    }, [setUserInfo]);

    function logout() {
        fetch('https://iemalteria-back.vercel.app/logout', {
            credentials: 'include',
            method: 'POST',
        });
        setUserInfo(null);
    }

    const username = userInfo?.username;

    return (
        <header>
            <nav className="navbar">
                <Link className="logo" to="/">
                    <img src="https://iemalteria-back.vercel.app/uploads/logo.png" alt="Logo" className="institution-logo" />
                    I. E. Malteria
                </Link>
                <Link className="nav-bar-element" to="/blog">Blog</Link>
                {username && (
                    <>
                        <Link className="nav-bar-element" to="/create">Nueva Publicación</Link>
                        <Link className="nav-bar-element" to="/" onClick={logout}>Cerrar Sesión</Link>
                    </>
                )}
                {!username && (
                    <>
                        <Link className="nav-bar-element" to="/login">Iniciar Sesión</Link>
                        <Link className="nav-bar-element" to="/register">Registrarse</Link>
                    </>
                )}
            </nav>
        </header>
    );
}
