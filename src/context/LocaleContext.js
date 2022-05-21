import createDataContext from './createDataContext';

const contextReducer = (state, action) => {
    switch (action.type) {
        case 'change_locale':
            return { ...state, locale: action.payload };
        default:
            return state;
    }
}

const changeLocale = (dispatch) => {
    return (locale) => {
        dispatch({
            type: 'change_locale',
            payload: locale
        });
    }
}

export const { Context, Provider } = createDataContext(
    contextReducer,
    { changeLocale },
    { locale: 'en' }
);