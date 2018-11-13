import * as actionTypes from './action-types';
import * as popupUtils from '../../helpers/popup-utils';

const initialState = {
    popups: [],
    email: 'reduxemail@react.com',
};

const actionHandlers = {

    [actionTypes.ADD_POPUP]: (state, action) => {
        const popup = action.payload;
        // if the user didn't supply any config object,
        // set it to an empty object
        if (!popup.config) {
            popup.config = {};
        }
        // in case the user didn't supply any id, generate auto id
        if (!popup.config.id) {
            popup.config.id = popupUtils.generatePopupId();
        } 
        const popups = [...state.popups];
        popups.push(popup);
        return {
            ...state,
            popups,
        }
    },

    [actionTypes.REMOVE_POPUP]: (state, action) => {
        const popups = [...state.popups];
        const id = action.id;
        // in case popup id supplied, delete the popup by id.
        // in case no popup id was supplied, delete the last popup
        if (id) {
            const index = popups.findIndex((popup) => popup.config.id === id);
            if (index !== -1) {
                popups.splice(index, 1);
            }
        } else {
            popups.splice(popups.length - 1, 1);
        }
        return {
            ...state,
            popups,
        }
    },

    [actionTypes.CHANGE_EMAIL]: (state, action) => {
        return {
            ...state,
            email: action.payload,
        }
    }

}

const reducer = (state = initialState, action) => {
    const handler = actionHandlers[action.type];
    return handler ? handler(state, action) : state;

}

export default reducer;