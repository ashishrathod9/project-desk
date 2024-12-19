// commentActions.js
import * as actionTypes from "./ActionTypes";
import axios from "axios";

// Create Comment
export const createComment = (commentData) => async (dispatch) => {
  dispatch({ type: actionTypes.CREATE_COMMENT_REQUEST });

  try {
    const response = await axios.post("/api/comments", commentData, {
    });
    dispatch({
      type: actionTypes.CREATE_COMMENT_SUCCESS,
      payload: response.data,
    });
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
    const response = await axios.delete(`/api/comments/${commentId}`, {
      
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
    const response = await axios.get(`/api/comments/${issueId}`);
    dispatch({
      type: actionTypes.FETCH_COMMENTS_BY_ISSUE_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.FETCH_COMMENTS_BY_ISSUE_FAILURE,
      error: error.response ? error.response.data : "Network Error",
    });
  }
};
