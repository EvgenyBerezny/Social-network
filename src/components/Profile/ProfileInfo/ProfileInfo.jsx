import style from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import defaultUserPhoto from "../../../images/photo.jpg"
import {useState} from "react";
// import Contact from "../ProfileDataForm/Contacts";
import ProfileReduxForm from "../ProfileDataForm/ProfileDataForm";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);


    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        )

    }

    return (<>
            <div>
                <img className={style.photo} src={profile.photos.large || defaultUserPhoto} alt="mainPhoto"/>
                {isOwner &&
                    <input type={"file"} name="avatar" accept="image/png, image/jpeg" onChange={onMainPhotoSelected}/>}
            </div>
            <ProfileStatusWithHooks status={status}
                                    updateStatus={updateStatus}/>

            { editMode
                ? <ProfileReduxForm  profile={profile} initialValues={profile} onSubmit={onSubmit}/>
                : <ProfileData toEditMode={() => setEditMode(true)} profile={profile} isOwner={isOwner}/>}

    </>

    )
}



const ProfileData = ({profile, isOwner,toEditMode}) => {
    return <div>
        { isOwner && <div><button onClick={toEditMode}>edit</button></div>}
        <div>
            <div><b>Full name: </b> {profile.fullName}</div>

            <div><b>About Me:</b></div>
            <div>{profile.aboutMe}</div>
            <div><b>Looking for a job: </b>{profile.lookingForAJob ? "Yes" : "No"}</div>
            <div>
                <b>My skills:</b>
            </div>
            <div>{profile.lookingForAJobDescription}</div>
        </div>
        <div>
            <b>Contacts: </b> {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>

    </div>
}

const Contact = ({contactTitle, contactValue}) => {
    return <div className={style.contact}><b>{contactTitle} :</b> {contactValue}</div>
}


export default ProfileInfo;