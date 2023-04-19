import style from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({profile, status, updateStatus}) => {
    if (!profile) {
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img className={style.photo} src={!profile.photos.large ? "img/photo.jpg" : profile.photos.large} alt="Avatar"/>
            </div>
            <div>
                <p>{profile.fullName}</p>
                <ProfileStatusWithHooks status={status}
                               updateStatus={updateStatus}/>
                <p>About Me:</p>
                <p>{profile.aboutMe}</p>
                <p>{profile.lookingForAJob ? "В поиске работы" :"Не ищу работы"}</p>
                <p>{profile.lookingForAJobDescription}</p>
            </div>
            <div>
                <div>
                    vk: {profile.contacts.vk}
                </div>
                <div>
                    youtube: {profile.contacts.youtube ? "profile.contacts.youtube" : "Нет аккаунта"}
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;