import actions from 'modules/menu/menuActions';

const initialData = JSON.parse(localStorage.getItem('menuState')) || {}

export default (state = initialData, { type, payload }) => {
    if (type === actions.TOGGLE) {
        return {
            ...state,
            [payload]: !!!state[payload]
        };
    }

    if (type === actions.SHOW) {
        return {
            ...state,
            [payload]: true
        };
    }

    if (type === actions.HIDE) {
        return {
            ...state,
            [payload]: false
        };
    }

    if (type === actions.SET_MENU_STATE) {
        return {
            ...payload
        }
    }

    return state;
};
