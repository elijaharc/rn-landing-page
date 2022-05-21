const initialState = {
    email: '',
    priority: '',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'SAVE_LAST_USER':
            return {
                ...state, email: action.payload.email, priority: action.payload.priority
            };
        default:
            return state;
    }
}