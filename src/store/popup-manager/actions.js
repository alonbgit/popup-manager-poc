import * as actionTypes from './action-types';

export const addPopup = (state, payload) => ({
    type: actionTypes.ADD_POPUP,
    payload
});

export const removePopup = (state) => ({
    type: actionTypes.REMOVE_POPUP,
});

export const changeLoginEmail = (payload) => ({
    type: actionTypes.CHANGE_EMAIL,
    payload,
});