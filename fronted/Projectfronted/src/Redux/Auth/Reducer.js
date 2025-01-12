import { LOGOUT } from "./ActionTypes";

const initialState = {
  username: null,
  loading: false,
  error: null,
  jwt: localStorage.getItem("jwt") || null,
  projectSize: 0,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REGISTER_REQUEST":
      return { ...state, loading: true, error: null };

    case "LOGIN_REQUEST":
      return { ...state, loading: true, error: null };

    case "GET_USER_REQUEST":
      console.log("Inside GET_USER_REQ");
      return { ...state, loading: true, error: null };

    case "REGISTER_SUCCESS":
      console.log("Inside REGISTER_SUCCESS");
      return { ...state, loading: false, error: null, jwt: action.payload.jwt , username: action.payload };

    case "LOGIN_SUCCESS":
      console.log(action.payload)
      return { ...state, loading: false, error: null, jwt: action.payload.jwt , username: action.payload };

    case "GET_USER_SUCCESS":
      console.log("Inside GET_USER_SUCCESS");
      return { ...state, loading: false, error: null, username: action.payload };

    case "LOGOUT":
      console.log("Inside LOGOUT");
      return {...state,username:null,loading:false};

    default:
      return state; // Explicitly return the current state
  }
};

export default authReducer;