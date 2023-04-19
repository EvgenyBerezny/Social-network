import style from './Header.module.css';
import {NavLink} from "react-router-dom";
import React from "react";

const Header = ({isAuth, login, logout}) => {
    return (
        <header className={style.header}>
            <img className={style.logo} src="/img/logo.png" alt="Logo"/>
            <div className={style.loginBlock}>
                {isAuth ?
                    <div>{login} - <button onClick={logout}>Log out</button></div> : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}


export default Header;