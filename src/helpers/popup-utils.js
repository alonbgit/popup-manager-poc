import { store } from '../index';
import * as actionTypes from '../store/popup-manager/action-types';

export const showPopup = (payload) => {
    store.dispatch({
        type: actionTypes.ADD_POPUP,
        payload,
    });
}

export const closePopup = () => {
    store.dispatch({
        type: actionTypes.REMOVE_POPUP
    });
}