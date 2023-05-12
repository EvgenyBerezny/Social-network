import {Field, reduxForm} from "redux-form";
import {FormsControl} from "../../common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../../utilits/validator/validators";
import style from './ProfileDataForm.module.css';
// import Contact from "./Contacts";

const maxLength40 = maxLengthCreator(40);

const ProfileDataForm = ({handleSubmit, profile, error}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <button>Save
            </button>
        </div>
        {error && <div className={style.formSummaryError}>
            {error}
        </div>}
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
        </div>
        <div>
            <b>Contacts: </b> {Object.keys(profile.contacts).map(key => {
            return <div key={key} className={style.contact}>
                <b>
                    {key} : <Field component={FormsControl} name={"contacts." + key}
                                   placeholder={"Enter your " + key} elementType={"input"}/>
                </b>
            </div>
        })}
        </div>

    </form>
}

const ProfileReduxForm = reduxForm({
    form: 'edit-profile'
})(ProfileDataForm)
export default ProfileReduxForm;