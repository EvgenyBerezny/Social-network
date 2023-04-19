import style from "./Users.module.css";
import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({totalUsersCount, pageSize, currentPage ,onPageChanged, users, follow, unfollow, followingInProgress}) => {
    return (
        <div className={style.main_cont}>
            <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                       itemsTotalCount={totalUsersCount} pageSize={pageSize}/>
            {users.map(u => <User user={u} key={u.id} unfollow={unfollow}
                                  followingInProgress={followingInProgress}
                                  follow={follow}/>)
            }
        </div>
    )
}

export default Users;