export const AUTH = `ducks/auth/AUTH`

const initialState = {
    isLoading: false,
    count: 0
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH: {
            return {
                ...state,
                isLoading: false,
                count: action.payload
            }
        }
        default: {
            return { ...state }
        }
    }
}

export const startAuth = (count) => {
    return dispatch => {
        dispatch({
            type: AUTH,
            payload: count
        })
    }
}

export default authReducer