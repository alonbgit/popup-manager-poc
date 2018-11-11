import * as actionTypes from './action-types';

const initialState = {
    popups: [],
    email: 'reduxemail@react.com',
};

const actionHandlers = {

    [actionTypes.ADD_POPUP]: (state, action) => {
        const popup = action.payload;
        const popups = [...state.popups];
        popups.push(popup);
        return {
            ...state,
            popups,
        }
    },

    [actionTypes.REMOVE_POPUP]: (state) => {
        const popups = [...state.popups];
        popups.splice(popups.length - 1, 1);
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