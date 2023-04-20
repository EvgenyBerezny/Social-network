import style from './Header.module.css';
import {NavLink} from "react-router-dom";
import React from "react";
import headerLogo from "../../images/logo.png";

const Header = ({isAuth, login, logout}) => {
    return (
        <header className={style.header}>
            <img className={style.logo} src={headerLogo} alt="Logo"/>
            <div className={style.loginBlock}>
                {isAuth ?
                    <div>{login} - <button className={style.btnLogin} onClick={logout}><span>Logout</span></button></div> : <NavLink to={'/login'}><span>Login</span></NavLink>}
            </div>
        </header>
    )
}


export default Header;