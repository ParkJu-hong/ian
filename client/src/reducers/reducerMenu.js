import initalState from './initialState';

export const reducerMenu = (state = initalState, action) => {
    switch (action.type) {
        case 'CHANGE_MENU':
            return Object.assign({}, state, { selected: action.payload.selected, isMobileMenu: false });
        case 'OPEN_MOBILE_MENU':
            return Object.assign({}, state, {isMobileMenu: true});
        case 'CLOSE_MOBILE_MENU':
            return Object.assign({}, state, {isMobileMenu: false});
        case 'LOGIN_MANAGER':
            return Object.assign({}, state, {ismanagerLogin: true});
        case 'ACCESS_TOKEN':
            return Object.assign({}, state, {accessToken: action.payload.accessToken});
        default:
            return state;
    }
}
