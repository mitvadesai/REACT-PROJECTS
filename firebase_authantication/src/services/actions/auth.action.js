

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { auth } from "../../firebaseconfig"

const signUpSuc = () => {
    return {
        type: "SIGNUP_SUCCESS"
    }
}
const signUpRej = (error) => {
    return {
        type: "SIGNUP_REJECT",
        payload: error
    }
}
const loginSuc = (user) => {
    return {
        type: "SIGNIN_SUCCESS",
        payload: user
    }
}
const loginRej = (error) => {
    return {
        type: "SIGNIN_REJECT",
        payload: error
    }
}
const logout = () => {
    return {
        type: "LOGOUT",
        
    }
}


export const registerUserAsync = (data) => {
    return async (dispatch) => {
        try {
            let newUser = await createUserWithEmailAndPassword(auth, data.email, data.password)
            // console.log(newUser);
            dispatch(signUpSuc())
        } catch (error) {
            console.log(error);
            dispatch(signUpRej(error.message))
        }
    }
}

export const loginUserAsync = (data) => {
    return async (dispatch) => {
        try {
            let loginUser = await signInWithEmailAndPassword(auth, data.email, data.password)
            // console.log(loginUser.user);
            dispatch(loginSuc({...loginUser.user, id: loginUser.user.uid}))
        } catch (error) {
            console.log(error);
            dispatch(loginRej(error.message))
        }
    }
}

export const logOutAsync = () => {
    return async dispatch => {
        try {
            await signOut(auth);
            dispatch(logout())
        } catch (error) {
            console.log(error);
            dispatch(loginRej(error.message))
        }
    }
}
