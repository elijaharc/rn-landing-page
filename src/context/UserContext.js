import createDataContext from './createDataContext';

const userReducer = (state, action) => {
    switch (action.type) {
        case 'save_last_user':
            return { ...state, email: action.payload.email, priority: action.payload.priority };
        default:
            return state;
    };
};

const saveLastUser = (dispatch) => {
    return (email, priority) => {
        dispatch({
            type: 'save_last_user',
            payload: { email, priority }
        });
    };
};

export const { Context, Provider } = createDataContext(
    userReducer,
    { saveLastUser },
    { email: '', priority: '' }
);