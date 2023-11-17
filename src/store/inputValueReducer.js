const defaultValue = {
  inputValue: "",
};

export const inputValueReducer = (state = defaultValue, action) => {
  switch (action.type) {
    case "CHANGE VALUE":
      return { ...state, inputValue: action.payload };
    default:
      return state;
  }
};
