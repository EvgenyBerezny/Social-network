import React from "react";
import Header from "./Header";
import {logout} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";

class HeaderContainer extends React.Component {
    render() {
        return <>
            {this.props.isFetchingAuth ?
                <Preloader/> :
                <Header {...this.props}/>}
        </>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    isFetchingAuth: state.auth.isFetchingAuth
});

export default compose(
    connect(mapStateToProps, {logout})
)(HeaderContainer)