export const loginSuccess = (userCredential) => {
    return {
        type: "LOGIN_SUCCESS",
        payload: userCredential,
    }
}
export const loginFail = () => {
    return {
        type: "LOGIN_FAIL",
    }
}
export const logout = () => {
    return {
        type: "LOGOUT"
    }
}