import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Register extends Component {

    static propTypes = {
        username: PropTypes.string,
        password: PropTypes.string,
    }

    closeMe = () => {
        this.props.closePopup();
    }

    render() {
        return (
            <div className='login'>
                <div>Username: {this.props.username}</div>
                <div>Password: {this.props.password}</div>
                <button onClick={this.closeMe}>close me</button>
            </div>
        );
    }

}

export default Register;