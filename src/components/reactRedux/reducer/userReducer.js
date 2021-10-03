const initialState = {
  loading: false,
  users: [],
  error: "",
};
export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_REGUEST":
      return {
        ...state,
        loading: true,
      };
    case "USER_REGUEST_SUCCESS":
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case "USER_REGUEST_FAILED":
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
