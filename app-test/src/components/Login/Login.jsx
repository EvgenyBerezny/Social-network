import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, requiredField} from "../../utilits/validator/validators";
import {FormsControl} from "../common/FormsControls/FormsControls";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {Navigate} from "react-router-dom";
import style from "../common/FormsControls/FormsControls.module.css";


const maxLength15 = maxLengthCreator(15);

const LoginForm = ({handleSubmit, error}) => {
    return <form onSubmit={handleSubmit}>
        <div>
            <Field component={FormsControl} name={"email"}
                   validate={[requiredField, maxLength15]} placeholder={"Login"} elementType={"input"}/>
        </div>
        <div>
            <Field component={FormsControl} name={"password"}
                   validate={[requiredField, maxLength15]} placeholder={"Password"} type={"password"}
                   elementType={"input"}/>
        </div>
        <div>
            <Field component={"input"} name={"rememberMe"} type={"Checkbox"}/> remember me
        </div>
        {error && <div className={style.formSummaryError}>
            {error}
        </div>}
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)
const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

    if (props.isAuth) {
        return <Navigate to={"/profile"}/>
    }
    return <>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);