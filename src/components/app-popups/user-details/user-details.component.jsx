import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserDetails extends Component {

    static propTypes = {
        firstName: PropTypes.string,
        lastName: PropTypes.string,
    }

    render() {
        return (
            <div className='user-details'> 
                <div>First Name: {this.props.firstName}</div>
                <div>Last Name: {this.props.lastName}</div>
            </div>
        );
    }

}

export default UserDetails;