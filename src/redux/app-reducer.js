import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'app-test/app/INITIALIZED_SUCCESS';


let initialState = {
    initialized: false

}
export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

export const setInitializedSuccess = () => ({type: INITIALIZED_SUCCESS})

// export const initialize = () => ({type: TOGGLE_FETHING, isFetchingAuth})

export const initializeApp = () => async(dispatch) => {
    // const promise = 
        await dispatch(getAuthUserData());
    //
    // Promise.all([promise])
    //     .then(() => {
        dispatch(setInitializedSuccess());
    // })
}

export default appReducer;