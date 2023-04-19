import {addMessageActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {authRedirect} from "../../hoc/AuthRedirect";
import {compose} from "redux";




let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogState
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (newMessageBody) => {
            dispatch(addMessageActionCreator(newMessageBody));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    authRedirect
)(Dialogs);
//
// let AuthRedirectComponent = authRedirect(Dialogs);
//
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
//
// export default DialogsContainer;



// const DialogsContainer = (props) => {
//     return (
//         <StoreContext.Consumer>
//             {
//             (store) => {
//                 let state = store.getState().dialogState;
//
//                 let addMessage = () => {
//                     store.dispatch(addMessageActionCreator());
//                 }
//                 let onMessageChange = (text) => {
//                     store.dispatch(newMessageTextActionCreator(text));
//                 }
//
//                 return <Dialogs updateNewMessageText={onMessageChange}
//                                 addMessage={addMessage}
//                                 dialogsPage={state}/>
//             }
//         }
//         </StoreContext.Consumer>
//     )
// }