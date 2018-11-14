import * as actionTypes from './action-types';

export const addPopup = (state, payload) => ({
    type: actionTypes.ADD_POPUP,
    payload
});

export const removePopup = (state, payload) => ({
    type: actionTypes.REMOVE_POPUP,
    payload,
});

export const changeLoginEmail = (payload) => ({
    type: actionTypes.CHANGE_EMAIL,
    payload,
});