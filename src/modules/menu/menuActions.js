const prefix = 'SUB_MENU';

const actions = {
    TOGGLE: `${prefix}_TOGGLE`,
    HIDE: `${prefix}_HIDE`,
    SHOW: `${prefix}_SHOW`,
    SET_MENU_STATE: `${prefix}_SET_MENU_STATE`,
    RESET_MENU_STATE: `${prefix}_RESET_MENU_STATE`,

    doToggleSubMenu: (subMenu) => {
        return {
            type: actions.TOGGLE,
            payload: subMenu
        };
    },

    doShowSubMenu: (subMenu) => {
        return {
            type: actions.SHOW,
            payload: subMenu
        };
    },

    doHideSubMenu: (subMenu) => {
        return {
            type: actions.HIDE,
            payload: subMenu
        };
    },

    doSetMenuState: (menuState) => {
        return {
            type: actions.SET_MENU_STATE,
            payload: menuState
        };
    },

    doResetMenuState: () => {
        localStorage.removeItem('menuState')
        return {
            type: actions.SET_MENU_STATE,
            payload: {}
        };
    },
};

export default actions;