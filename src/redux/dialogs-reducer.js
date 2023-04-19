const ADD_MESSAGE = 'ADD-MESSAGE';


let initialState = {
    dialogData: [
        {id: '1', name: 'Zoya'},
        {id: '2', name: 'Gena'},
        {id: '3', name: 'Andrey'}
    ],
    messageData: [
        {id: '1', message: 'Hi'},
        {id: '2', message: 'Ok let\'s go'},
        {id: '3', message: 'Congrats'}
    ]
}
const dialogsReducer = (state = initialState, action) => {


    switch (action.type) {
        case ADD_MESSAGE: {
            // let body = action.newMessageText;
            return {...state,
                messageData: [...state.messageData, {id: 6, message: action.newMessageBody}],
                newMessageText: ''
            };
        }
        default: return state;
    }

}

export const addMessageActionCreator = (newMessageBody) => ({ type: ADD_MESSAGE, newMessageBody })
export default dialogsReducer;