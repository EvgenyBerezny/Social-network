import React from 'react';
import style from './AllPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../../utilits/validator/validators";
import {FormsControl} from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const AddNewPostForm = (props) => {
    return (
        <form className={style.newPost} onSubmit={props.handleSubmit}>
            <Field name="newPostText" className={style.area} placeholder={"Enter your message"}
                   component={FormsControl} validate={[requiredField, maxLength10]} elementType={"textarea"}/>
            <button className={style.addPost}>Add post</button>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({
    form: 'dialogAddMessageForm'
})(AddNewPostForm);

const AllPosts = React.memo(props => {
    let postEl = props.posts.map(post => <Post message={post.message} likeCount={post.likeCount}/>)
    const onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={style.main_cont}>
            <div>
                Posts:
                <AddNewPostFormRedux onSubmit={onAddPost}/>
                <div>
                    {postEl}
                </div>
            </div>
        </div>
    )
});

export default AllPosts;