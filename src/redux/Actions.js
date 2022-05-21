const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";
const SAVE_LAST_USER = "SAVE_LAST_USER"

export const changeLanguage = (locale) => {
    return {
        type: CHANGE_LANGUAGE,
        payload: locale,
    }
}

export const saveUser = (email, priority) => {
    return {
        type: SAVE_LAST_USER,
        payload: { email: email, priority: priority },
    }
}