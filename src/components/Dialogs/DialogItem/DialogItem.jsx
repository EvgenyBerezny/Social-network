import style from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";
import {activeNavLink} from "../../Navbar/Navbar";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={style.dialogItem}>
            <NavLink to={path} className={activeNavLink}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;