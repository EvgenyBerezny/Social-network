import React from "react";
import style from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState( {
            editMode : true
        });
    }

    deactivateEditMode = () => {
        this.setState( {
            editMode : false
        });
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }

        console.log("x")
    }

    render() {
        return (
            <>
                {!this.state.editMode &&
                    <div onDoubleClick={this.activateEditMode}>
                        {this.props.status || "Status"}
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}
                               className={style.inputArea} value={this.state.status}/>
                    </div>
                }
            </>
        )
    }
}

export default ProfileStatus;