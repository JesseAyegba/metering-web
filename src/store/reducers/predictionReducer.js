export const predictionReducer = (state = false, action) => {
  switch (action.type) {
    case "PREDICTION_NOT_DONE":
      return false;
    case "PREDICTION_DONE":
      return true;
    default:
      return state;
  }
};
