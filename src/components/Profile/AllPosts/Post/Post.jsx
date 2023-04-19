import style from './Post.module.css';

const Post = (props) => {
    return (
        <div>
            <div className={style.post}>
                <img className={style.ava} src="img/photo.jpg" alt="Avatar"/>
                <div>{props.message}</div>
                <div className={style.likes}>
                    {props.likeCount}
                    <img className={style.like} src="img/like.png" alt="Like"/>
                </div>
            </div>
        </div>
    )
}

export default Post;