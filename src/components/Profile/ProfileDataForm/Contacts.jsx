import style from "../ProfileInfo/ProfileInfo.module.css";

const Contact = ({contactType, contactValue}) => {
    return <div className={style.contact}><b>{contactType} :</b> {contactValue}</div>
}

export default Contact;