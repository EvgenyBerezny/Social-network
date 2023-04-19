import style from './Navbar.module.css';
import {NavLink} from "react-router-dom";

export const activeNavLink = ({isActive}) => isActive ? style.active : style.link;

const Navbar = (props) => {
    return (
        <nav className={style.nav}>
            <div>
                <NavLink to='/profile' className={activeNavLink}>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/dialogs' className={activeNavLink}>Messages</NavLink>
            </div>
            <div>
                <NavLink to='/users' className={activeNavLink}>Users</NavLink>
            </div>
            <div>
                <NavLink to='/news' className={activeNavLink}>News</NavLink>
            </div>
            <div>
                <NavLink to='/music' className={activeNavLink}>Music</NavLink>
            </div>
            <div>
                <NavLink to='/settings' className={activeNavLink}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;