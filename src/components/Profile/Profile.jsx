import style from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import AllPostsContainer from "./AllPosts/AllPostsContainer";

const Profile = (props) => {
    return (
        <div className={style.main_cont}>
            <ProfileInfo profile={props.profile} status={props.status}
                         isOwner={props.isOwner}
                         savePhoto={props.savePhoto}
                         saveProfile={props.saveProfile}
                         updateStatus={props.updateStatus}/>
            <AllPostsContainer />
        </div>
    )
}

export default Profile;