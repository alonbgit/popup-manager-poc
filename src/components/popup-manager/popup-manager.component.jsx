import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './popup-manager.scss';
import Popup from '../popup/popup.component';
import * as popupUtils from '../../helpers/popup-utils';

class PopupManager extends Component {

    static propTypes = {
        popups: PropTypes.instanceOf(Array),
    }

    static defaultProps = {
        popups: [],
    }

    onOverlayClick = () => {
        const { popups } = this.props;
        const currentPopup = popups[popups.length - 1];
        if (currentPopup.config.closeOnBlur) {
            popupUtils.closePopup();
        }
    }

    render() {
        const { popups } = this.props;
        if (popups.length === 0) {
            return (null);
        }
        return (
            <div className='popup-manager'>
                {popups.map((popup, index) => {
                    const PopupComponent = popup.component;
                    return (
                        <Popup
                            {...popup.config} zIndex={1000 + index}
                            key={PopupComponent.name}
                            onClose={popupUtils.closePopup}
                        >
                            <PopupComponent
                                {...popup.props}
                                onClose={popupUtils.closePopup}
                            />
                        </Popup>
                    );
                })}
                <div
                    className='overlay'
                    style={{ zIndex: 998 + popups.length }}
                    onClick={this.onOverlayClick}
                >
                </div>
            </div>
        );
    }

}

export default PopupManager;