import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Login extends Component {

    static propTypes = {
        username: PropTypes.string,
        password: PropTypes.string,
        email: PropTypes.string,
    }

    closeMe = () => {
        this.props.onClose();
    }

    render() {
        return (
            <div className='login'>
                <div>Email: {this.props.email}</div>
                <div>Username: {this.props.username}</div>
                <div>Password: {this.props.password}</div>
                <button onClick={this.closeMe}>close me</button>
            </div>
        );
    }

}

export default Login;