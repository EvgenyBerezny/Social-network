import {profileAPI, usersAPI} from "../api/api";

const ADD_POST = 'app-test/profile/ADD-POST';
const SET_USER_PROFILE = 'app-test/profile/SET_USER_PROFILE';
const SET_STATUS = 'app-test/profile/SET_STATUS';
const DELETE_POST = 'app-test/profile/DELETE_POST';


let initialState = {
    postData: [
        {id: '1', message: 'Well done', likeCount:'3'},
        {id: '2', message: 'It\'s me Mario', likeCount:'4'}
    ],
    profile: null,
    status: ''
}
export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostText,
                likeCount: 1
            }
            return {...state,
                postData: [...state.postData, newPost],
                newPostText: ''};

        }
        case SET_USER_PROFILE:{
            return {...state,
                profile: action.profile
            };
        }
        case SET_STATUS:{
            return {...state,
                status: action.status
            };
        }
        case DELETE_POST:{
            return {...state,
                postData: state.postData.filter(p => p.id != action.postId)
            };
        }
        default: return state;
    }
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const setStatus = (status) => ({type: SET_STATUS, status})

export const deletePost = (postId) => ({type: DELETE_POST, postId})

export const getProfile = (userId) => async(dispatch) => {
    let response = await usersAPI.getUserId(userId);
    dispatch(setUserProfile(response.data))
    // return (dispatch) => {
    //     usersAPI.getUserId(userId).then(data => {
    //         dispatch(setUserProfile(data));
    //     });
    // }
}

export const getStatus = (userId) => async(dispatch) => {
    // return (dispatch) => {
    //     profileAPI.getStatus(userId).then(data => {
    //         dispatch(setStatus(data));
    //     });
    // }
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}

export const updateStatus = (status) => async(dispatch) => {
    let response = await profileAPI.updateStatus(status);
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
}
export default profileReducer;