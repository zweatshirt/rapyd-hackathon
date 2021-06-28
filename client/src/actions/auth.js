import { AUTH } from '../constants/actionTypes'
import { signIn, signUp } from '../api/index.js'

export const signin = (formData, history) => async (dispatch) => {
    try {
        const { data } = await signIn(formData);
        dispatch({ type: AUTH, data })
        history.push('/')
    }
    catch (error) {
        console.log(error)
    }
}

export const signup = (formData, history) => async (dispatch) => {
    try {
        const { data } = await signUp(formData);
        dispatch({ type: AUTH, data })
        history.push('/');
    }
    catch (error) {
        console.log(error);
    }
}