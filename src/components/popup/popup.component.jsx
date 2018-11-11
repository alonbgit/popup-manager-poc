import React, { Component } from 'react';
import './popup.scss';
import PropTypes from 'prop-types';

class Popup extends Component {

    static propTypes = {
        zIndex: PropTypes.number.isRequired,
        header: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number,
        closeOnBlur: PropTypes.bool,  
    }

    static defaultProps = {
        width: 400,
        height: 400,
        closeOnBlur: false,
    }

    render() {
        const { width, height, zIndex, onClose } = this.props;
        return (
            <div
                className='popup'
                style={{
                    zIndex,
                    width: `${width}px`,
                    height: `${height}px`
                }}
            > 
                <div className='header'>
                    <div>
                        {this.props.header}
                    </div>
                    <div className='close-btn' onClick={onClose}>&#215;</div>
                </div>
                <div className='content' style={{ height: `${height - 52}px` }}>
                    {this.props.children}
                </div>
            </div>
        )
    }

}

export default Popup;