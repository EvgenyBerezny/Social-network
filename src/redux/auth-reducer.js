import {authAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'app-test/auth/SET_USER_DATA';
const TOGGLE_FETHING = 'app-test/auth/TOGGLE_FETHING';


let initialState = {
    id: null,
    email: null,
    login: null,
    isFetchingAuth: false,
    isAuth: false
}
export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        case TOGGLE_FETHING:
            return {...state, isFetchingAuth: action.isFetchingAuth}
        default:
            return state;
    }
}

export const setUserData = (userId, email, login, isAuth) => ({
    type: SET_USER_DATA,
    payload: {userId, email, login, isAuth}
})

export const setIsFetchingAuth = (isFetchingAuth) => ({type: TOGGLE_FETHING, isFetchingAuth})

export const getAuthUserData = () => async (dispatch) => {
    let response = await authAPI.me();
    // dispatch(setIsFetchingAuth(false));
    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setUserData(id, email, login, true));
    }
// dispatch(setIsFetchingAuth(true));
}

export const login = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe);
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData());
    } else {
        let message = response.data.messages.length > 0 ? response.data.messages[0] : "Something go wrong";
        dispatch(stopSubmit("login", {_error: message}));
    }
}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout();
    if (response.data.resultCode === 0) {
        dispatch(setUserData(null, null, null, false));
    }
}
export default authReducer;