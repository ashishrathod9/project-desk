// commentActions.js
import * as actionTypes from "./ActionType";
import axios from "axios";

// Create Comment
export const createComment = (commentData) => async (dispatch) => {
  dispatch({ type: actionTypes.CREATE_COMMENT_REQUEST });

  try {
    const token = (localStorage.getItem("jwt") || "").trim();  // Or retrieve the JWT token however you're storing it
    const response = await axios.post(
      "https://ample-solace-production-90a8.up.railway.app/api/comments",
      commentData,
      {
        headers: {
          Authorization: `Bearer ${token}`, // Include the token in the request
        },
      }
    );

    dispatch({
      type: actionTypes.CREATE_COMMENT_SUCCESS,
      payload: response.data,
    });






    console.log("this is cdata",response.data);
    
  } catch (error) {
    dispatch({
      type: actionTypes.CREATE_COMMENT_FAILURE,
      error: error.response ? error.response.data : "Network Error",
    });
  }
};


// Delete Comment
export const deleteComment = (commentId) => async (dispatch) => {
  dispatch({ type: actionTypes.DELETE_COMMENT_REQUEST });

  try {
    const token = (localStorage.getItem("jwt") || "").trim();  // Or retrieve the JWT token however you're storing it
    const response = await axios.delete(`https://ample-solace-production-90a8.up.railway.app/api/comments/${commentId}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Include the token in the request
      },
    });
    dispatch({
      type: actionTypes.DELETE_COMMENT_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.DELETE_COMMENT_FAILURE,
      error: error.response ? error.response.data : "Network Error",
    });
  }
};

// Fetch Comments by Issue ID
export const fetchCommentsByIssueId = (issueId) => async (dispatch) => {
  dispatch({ type: actionTypes.FETCH_COMMENTS_BY_ISSUE_REQUEST });

  try {
    // Retrieve JWT token from localStorage
    const token = (localStorage.getItem("jwt") || "").trim();

    // Send GET request with the Authorization header
    const response = await axios.get(`https://ample-solace-production-90a8.up.railway.app/api/comments/${issueId}`, {
      headers: {
        Authorization: `Bearer ${token}`, // Include the JWT token
      },
    });

    // Dispatch success action with response data
    dispatch({
      type: actionTypes.FETCH_COMMENTS_BY_ISSUE_SUCCESS,
      payload: response.data,
    });

    // Log the data for debugging
    console.log("This is all comments data:", response.data);
  } catch (error) {
    // Dispatch failure action with error details
    dispatch({
      type: actionTypes.FETCH_COMMENTS_BY_ISSUE_FAILURE,
      error: error.response ? error.response.data : "Network Error",
    });

    // Log the error for debugging
    console.error("Error fetching comments:", error);
  }
};

