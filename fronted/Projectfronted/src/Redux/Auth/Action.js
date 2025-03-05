import axios from "axios";
import { API_BASE_URL } from "@/config/api";
import { GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTER_REQUEST, REGISTER_SUCCESS } from "./ActionTypes";

// Ensure that API_BASE_URL is a string
const getApiUrl = (endpoint) => {
  if (!API_BASE_URL || typeof API_BASE_URL !== 'string') {
    console.error("API_BASE_URL is not defined or is not a valid string");
    return ""; // You can return a default value or handle error accordingly
  }
  return `${API_BASE_URL}${endpoint}`;
};

export const registeruser = (userData) => async (dispatch) => {
    dispatch({ type: REGISTER_REQUEST });
    try {
        const { data } = await axios.post("https://project-demo-image1-tag1-1.onrender.com", userData);

        if (data.jwt) {
            localStorage.setItem("jwt", data.jwt);
            dispatch({ type: REGISTER_SUCCESS, payload: data });
        }

        console.log("register success", data);
    } catch (error) {
        console.log(error);
    }
};

export const login = (userData) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
      console.log("Sending login request with data:", userData); // Log data before making the API request
  
      const { data } = await axios.post(getApiUrl("/api/users/login"), userData);
  
      if (data.jwt) {
        localStorage.setItem("jwt", data.jwt);
        dispatch({ type: LOGIN_SUCCESS, payload: data });
      }
  
      console.log("LOGIN success", data);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

export const getUser = () => async (dispatch) => {
   dispatch({ type: GET_USER_REQUEST });
    try {
        const { data } = await axios.get(getApiUrl("/api/users/profile"), {
            headers: {
                "Authorization": `Bearer ${localStorage.getItem("jwt")}`,
            },
        });

        // const res=JSON.parse(data);
        
        console.log("data in getuser",data);
        

        
            dispatch({ type: GET_USER_SUCCESS, payload: data });
        

        console.log("User success", data);
    } catch (error) {
        console.log(error);
    }
};

export const logout = () => async (dispatch) => {
    dispatch({ type: LOGOUT });
    localStorage.clear();
};
