// import React from 'react';
import {addPostActionCreator} from "../../../redux/profile-reducer";
import AllPosts from "./AllPosts";
import {connect} from "react-redux";
// import {addMessageActionCreator, newMessageTextActionCreator} from "../../redux/dialogs-reducer";

// const AllPostsContainer = (props) => {
//     return (
//         <StoreContext.Consumer>
//             {
//             (store) => {
//                 let state = store.getState();
//
//                 const addPost = () => {
//                     store.dispatch(addPostActionCreator());
//                 }
//
//                 const onPostChange = (text) => {
//                     let action = newPostTextActionCreator(text)
//                     store.dispatch(action);
//                 }
//
//                 return <AllPosts updateNewPostText={onPostChange}
//                                  addPost={addPost}
//                                  posts={state.profileState.postData}
//                                  newPostText={state.profileState.newPostText}/>
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }

let mapStateToProps = (state) => {
    return {
        posts: state.profileState.postData,
        newPostText: state.profileState.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostText) => {
            dispatch(addPostActionCreator(newPostText));
        }
    }
}

const AllPostsContainer = connect(mapStateToProps, mapDispatchToProps)(AllPosts);
export default AllPostsContainer;