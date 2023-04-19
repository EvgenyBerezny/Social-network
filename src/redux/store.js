import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profileState: {
            postData: [
                {id: '1', message: 'Well done', likeCount:'3'},
                {id: '2', message: 'It\'s me Mario', likeCount:'4'}
            ],
            newPostText: ''
        },
        dialogState: {
            dialogData: [
                {id: '1', name: 'Zoya'},
                {id: '2', name: 'Gena'},
                {id: '3', name: 'Andrey'}
            ],
            messageData: [
                {id: '1', message: 'Hi'},
                {id: '2', message: 'Ok let\'s go'},
                {id: '3', message: 'Congrats'}
            ],
            newMessageText: ''
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('Something');
    },
    getState() {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profileState = profileReducer(this._state.profileState, action);
        this._state.dialogState = dialogsReducer(this._state.dialogState, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state)
    }
}

window.store = store;
export default store;