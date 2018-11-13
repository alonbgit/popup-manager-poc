import { store } from '../index';
import * as actionTypes from '../store/popup-manager/action-types';

let popupId = 0;

export const showPopup = (payload) => {
    store.dispatch({
        type: actionTypes.ADD_POPUP,
        payload,
    });
}

export const closePopup = (id) => {
    store.dispatch({
        type: actionTypes.REMOVE_POPUP,
        id
    });
}

export const generatePopupId = () => {
    popupId++;
    return `popup_${popupId}`;
}