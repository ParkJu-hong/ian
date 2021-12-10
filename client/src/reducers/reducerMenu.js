import initalState from './initialState';

export const reducerMenu = (state = initalState, action) => {
    switch (action.type) {
        case 'CHANGE_MENU':
            return Object.assign({}, state, {selected: action.payload.selected});
        case '':
            return;
        default:
            return state;
    }
}
