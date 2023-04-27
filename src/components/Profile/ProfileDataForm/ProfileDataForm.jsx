import {Field, reduxForm} from "redux-form";
import {FormsControl} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../../utilits/validator/validators";
// import Contact from "./Contacts";

const maxLength40 = maxLengthCreator(40);

const ProfileDataForm = ({handleSubmit, profile}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <button>Save
            </button>
        </div>
        <div>
            <div><b>Full name: </b> <Field component={FormsControl} name={"fullName"}
                                           validate={[requiredField, maxLength40]} placeholder={"Full name"}
                                           elementType={"input"} />
            </div>

            <div><b>About Me:</b></div>
            <div><Field component={FormsControl} name={"aboutMe"}
                        validate={[requiredField, maxLength40]} placeholder={"About Me"} elementType={"textarea"}/></div>
            <div>
                <b>Looking for a job: </b>
            </div>
            <Field component={FormsControl} name={"lookingForAJob"}
                   placeholder={"LookingForAJob"} elementType={"input"} type={"checkbox"}/>
            <div>
                <b>My skills:</b>
                <Field component={FormsControl} name={"lookingForAJobDescription"}
                       validate={[requiredField, maxLength40]} placeholder={"My skills"} elementType={"textarea"}/>
            </div>
        {/*</div>*/}
        {/*<div>*/}
        {/*    <b>Contacts: </b> {Object.keys(profile.contacts).map(key => {*/}
        {/*    return <Contact contactType={key} contactValue={profile.contacts.key}/>*/}
        {/*})}*/}
        </div>

    </form>
}

const ProfileReduxForm = reduxForm({
    form: 'edit-profile',
    enableReinitialize: true
})(ProfileDataForm)
export default ProfileReduxForm;