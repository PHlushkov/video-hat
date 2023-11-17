const defaultState = {
  data: [],
};

export const dataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "GET DATA":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};
