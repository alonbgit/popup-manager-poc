import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
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
                <CSSTransition
                    in
                    appear
                    timeout={100}
                    classNames='popup-fade'
                >
                    <div
                        className='overlay'
                        style={{ zIndex: 999 + popups.length }}
                        onClick={this.onOverlayClick}
                    >
                    </div>
                </CSSTransition>
                {popups.map((popup, index) => {
                    const PopupComponent = popup.component;
                    return (
                        <CSSTransition
                            in
                            appear
                            timeout={100}
                            classNames='popup-fade'
                            key={index}
                        >
                            <Popup
                                {...popup.config} zIndex={1000 + index}
                                onClose={popupUtils.closePopup}
                            >
                                <PopupComponent
                                    {...popup.props}
                                    onClose={popupUtils.closePopup}
                                />
                            </Popup>
                        </CSSTransition>
                    );
                })}
            </div>
        );
    }

}

export default PopupManager;