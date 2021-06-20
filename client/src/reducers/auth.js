import { AUTH, LOGOUT } from '../constants/actionTypes';

const authReducer = (state = { authData: null }, action) => {

    switch (action.type) {
        case AUTH:
            localStorage.setItem('profile', JSON.stringify({ ... action?.data}) )
            console.log(action?.data)
            return { ... state, authData: action?.data}
        case LOGOUT:
            localStorage.clear()
            return { ...state, authDatha: null}
        default:
            console.log(`Old state: ${state}`)
            return state
    };

}

export default authReducer