export const AUTH = `ducks/auth/AUTH`

const initialState = {
    isLoading: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH: {
            return {
                ...state,
                isLoading: false
            }
        }
    }
}

export const startAuth = () => {
    return dispatch => {
        dispatch({
            type: AUTH
        })
    }
}

export default authReducer