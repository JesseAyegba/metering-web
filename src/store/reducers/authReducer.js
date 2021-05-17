let initialState = localStorage.getItem("userCredential");

export const authReducer = (state=initialState, action) => {
    switch(action.type) {
        case "LOGIN_SUCCESS":
            localStorage.setItem("userCredential", action.payload)
            return {
                ...initialState
            }

        case "LOGIN_FAIL":
            localStorage.clear();
            return {
                ...initialState
            }

        default: 
            return state
    }
}