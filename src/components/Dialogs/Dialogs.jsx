import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import AddMessageReduxForm from "./Message/AddMessageForm";


const Dialogs = (props) => {

    let dialogsEl = props.dialogsPage.dialogData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);
    let messagesEl = props.dialogsPage.messageData.map(mes => <Message message={mes.message}/>);

    let addNewMessage = (values) => {
        props.addMessage(values.newMessageBody);
    }

    return (
        <div className={style.padding}>
            <div id={style.h1}>Dialogs</div>
            <div className={style.chats}>
                <div className={style.dialogs}>
                    {dialogsEl}
                </div>
                <div className={style.messages}>
                    <div> { messagesEl } </div>
                    <div className={style.newMessage}>
                        <AddMessageReduxForm onSubmit={addNewMessage}/>
                    </div>
                </div>

            </div>
        </div>
    )
}



export default Dialogs;