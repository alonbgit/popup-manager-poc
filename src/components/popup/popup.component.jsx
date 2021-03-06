import React, { Component } from 'react';
import './popup.scss';
import PropTypes from 'prop-types';

class Popup extends Component {

    static propTypes = {
        id: PropTypes.string.isRequired,
        zIndex: PropTypes.number.isRequired,
        header: PropTypes.string,
        width: PropTypes.number,
        height: PropTypes.number,
        closeOnBlur: PropTypes.bool,
        animate: PropTypes.bool,
    }

    static defaultProps = {
        width: 400,
        height: 400,
        closeOnBlur: false,
        animate: true,
    }

    render() {
        const { width, height, zIndex, closePopup, id } = this.props;
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
                    <div className='close-btn' onClick={() => closePopup(id)}>&#215;</div>
                </div>
                <div className='content' style={{ height: `${height - 52}px` }}>
                    {this.props.children}
                </div>
            </div>
        )
    }

}

export default Popup;