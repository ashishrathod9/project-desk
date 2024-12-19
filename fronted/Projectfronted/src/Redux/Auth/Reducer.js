import { LOGOUT } from "./ActionTypes";

const initialState = {
  user: null,
  loading: false,
  error: null,
  jwt: null,
  projectSize: 0,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_REQUEST":
      return { ...state, loading: true, error: null };

    case "LOGIN_REQUEST":
      return { ...state, loading: true, error: null };

    case "GET_USER_REQUEST":
      return { ...state, loading: true, error: null };

    case "REGISTER_SUCCESS":
      return { ...state, loading: false, error: null, jwt: action.payload.jwt };

    case "LOGIN_SUCCESS":
      return { ...state, loading: false, error: null, jwt: action.payload.jwt };

    case "GET_USER_SUCCESS":
      return { ...state, loading: false, error: null, user: action.payload };

    case LOGOUT:
      return initialState;

    default:
      return state; // Explicitly return the current state
  }
};

export default authReducer;