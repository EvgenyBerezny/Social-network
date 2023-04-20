import style from "./Users.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import defaultUserPhoto from "../../images/photo.jpg"

let User = ({user, followingInProgress, unfollow, follow}) => {
    return (
        <div className={style.main_cont}>
            <span>
                <div>
                    <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.small != null ? user.photos.small : defaultUserPhoto}
                             className={style.ava} alt={"UserPhoto"}/>
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            unfollow(user.id)
                        }}>Unfollow</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            follow(user.id)
                        }}>Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>
                        {user.name}
                    </div>
                    <div>
                        {user.status}
                    </div>
                </span>
                <span>
                    <div>
                        {"user.location.country"}
                    </div>
                    <div>
                        {"user.location.city"}
                    </div>
                </span>
            </span>
        </div>
    )
}

export default User;