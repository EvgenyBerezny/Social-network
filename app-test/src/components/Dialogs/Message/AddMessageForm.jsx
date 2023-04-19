import {Field, reduxForm} from "redux-form";
import style from "../Dialogs.module.css";
import React from "react";
import {maxLengthCreator, requiredField} from "../../../utilits/validator/validators";
import {FormsControl} from "../../common/FormsControls/FormsControls";


const maxLength40 = maxLengthCreator(40);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={FormsControl} name={"newMessageBody"} elementType={"textarea"}
                       placeholder={"Enter your message"} className={style.area} validate={[requiredField, maxLength40]}/>
                <button>Send message</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({
    form: 'dialogAddMessageForm'
})(AddMessageForm)

export default AddMessageReduxForm;