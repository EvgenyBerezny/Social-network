import style from './Post.module.css';
import likesPhoto from "../../../../images/like.png";
import defaultUserPhoto from "../../../../images/photo.jpg"

const Post = (props) => {
    return (
        <div>
            <div className={style.post}>
                <img className={style.ava} src={defaultUserPhoto} alt="Avatar"/>
                <div>{props.message}</div>
                <div className={style.likes}>
                    {props.likeCount}
                    <img className={style.like} src={likesPhoto} alt="Like"/>
                </div>
            </div>
        </div>
    )
}

export default Post;