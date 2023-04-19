import {usersAPI} from "../api/api";
import {updateObjectInArray} from "../utilits/object-helper";

const FOLLOW = 'app-test/users/FOLLOW';
const UNFOLLOW = 'app-test/users/UNFOLLOW';
const SET_USERS = 'app-test/users/SET_USERS';
const SET_CURRENT_PAGE = 'app-test/users/SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'app-test/users/SET_TOTAL_USERS_COUNT';
const TOGGLE_FETHING = 'app-test/users/TOGGLE_FETHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'app-test/users/TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [
        //     {id: '1', photoUrl: 'https://img.freepik.com/free-photo/appealing-girl-smiling-indoor-photo-of-blissful-female-model-with-black-hair_197531-14063.jpg?w=1380&t=st=1675248985~exp=1675249585~hmac=c49468ed050aeb073f21e964e52b5323d4b6558fc102527d3bd9aa615272bd33',
        //         followed: true, fullName: 'Zoya', status: 'Online', location: {country: 'DDD', city: 'AAA'}},
        //     {id: '2', photoUrl: 'https://img.freepik.com/free-photo/closeup-shot-of-a-disabled-white-cat-on-white_181624-40496.jpg?w=1380&t=st=1675249013~exp=1675249613~hmac=d64a927ee27c06529cdd0c620f9c9b7bdcdb9d5c2656b865ebdc0ab591aa696a',
        //         followed: true, fullName: 'Zoy', status: 'Online', location: {country: 'DDW', city: 'AAF'}},
        //     {id: '3', photoUrl: 'https://img.freepik.com/free-photo/confident-middle-aged-man-portrait_23-2149051739.jpg?w=1380&t=st=1675249027~exp=1675249627~hmac=44ac10d89647546ed6152a6f06ca940b8914cce908525f4db5cf2405b09af888',
        //         followed: false, fullName: 'Zo', status: 'Offline', location: {country: 'WDD', city: 'ABX'}},
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
                // users: state.users.map(u => {
                //     if (u.id === action.userId) {
                //         return {
                //             ...u,
                //             followed: true
                //         }
                //     }
                //     return u;
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count}
        case TOGGLE_FETHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state, followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }

}

export const followSuccess = (userId) => ({type: FOLLOW, userId})

export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})

export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount})

export const setIsFetching = (isFetching) => ({type: TOGGLE_FETHING, isFetching})
export const setIsFollowing = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})

export const requestUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(setIsFetching(true));
        let response = await usersAPI.getUsers(currentPage, pageSize);
        dispatch(setCurrentPage(currentPage));
        dispatch(setIsFetching(false));
        dispatch(setUsers(response.data.items));
        dispatch(setTotalUsersCount(response.data.totalCount))
    };
}

const followUnfollowToggle = async(dispatch, userId, apiMethod, actionCreator) => {
    dispatch(setIsFollowing(true, userId));
    let response = await apiMethod(userId);
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(setIsFollowing(false, userId));
}

export const follow = (userId) => {
    return async (dispatch) => {
        followUnfollowToggle(dispatch, userId, usersAPI.getUnfollowUser.bind(usersAPI), followSuccess);
    }
}
export const unfollow = (userId) => {
    return async (dispatch) => {
        followUnfollowToggle(dispatch, userId, usersAPI.getFollowUser.bind(usersAPI), unfollowSuccess);
    }
}

export default usersReducer;