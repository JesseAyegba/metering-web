let initialState = localStorage.getItem("userCredential");

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      localStorage.setItem("userCredential", JSON.stringify(action.payload));
      return localStorage.getItem("userCredential");

    case "LOGIN_FAIL":
      localStorage.clear();
      return localStorage.getItem("userCredential");

    case "LOGOUT":
      localStorage.clear();
      return localStorage.getItem("userCredential");

    default:
      return state;
  }
};
