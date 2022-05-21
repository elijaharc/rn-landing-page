const initialState = {
    locale: 'en'
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE_LANGUAGE':
            return {
                ...state, locale: action.payload
            };
        default:
            return state;
    }
}