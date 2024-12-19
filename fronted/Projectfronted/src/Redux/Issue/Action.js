import api from "@/config/api";
import * as actionTypes from "./ActionTypes";

export const fetchIssueById = (issueId) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.FETCH_ISSUE_REQUEST });
    try {
      const response = await api.get(`/api/issues/issue/${issueId}`);
      dispatch({
        type: actionTypes.FETCH_ISSUE_SUCCESS,
        issue: response.data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.FETCH_ISSUE_FAILURE,
        error: error.message,
      });
    }
  };
};

export const fetchIssuesByProject = (projectId) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.FETCH_ISSUES_BY_PROJECT_REQUEST });
    try {
      const response = await api.get(`/api/issues/project/${projectId}`);
      dispatch({
        type: actionTypes.FETCH_ISSUES_BY_PROJECT_SUCCESS,
        issues: response.data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.FETCH_ISSUES_BY_PROJECT_FAILURE,
        error: error.message,
      });
    }
  };
};

export const createIssue = (issueData, projectId, token) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.CREATE_ISSUE_REQUEST });
    try {
      const response = await api.post(
        `/api/issues/createIssue?projectId=${projectId}`,
        issueData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      dispatch({
        type: actionTypes.CREATE_ISSUE_SUCCESS,
        issue: response.data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.CREATE_ISSUE_FAILURE,
        error: error.message,
      });
    }
  };
};

export const deleteIssue = (issueId, token) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.DELETE_ISSUE_REQUEST });
    try {
      await api.delete(`/api/issues/${issueId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({
        type: actionTypes.DELETE_ISSUE_SUCCESS,
        issueId,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.DELETE_ISSUE_FAILURE,
        error: error.message,
      });
    }
  };
};

export const updateIssueAssignee = (issueId, userId) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.UPDATE_ISSUE_ASSIGNEE_REQUEST });
    try {
      const response = await api.put(
        `/api/issues/${issueId}/assignee/${userId}`
      );
      dispatch({
        type: actionTypes.UPDATE_ISSUE_ASSIGNEE_SUCCESS,
        issue: response.data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.UPDATE_ISSUE_ASSIGNEE_FAILURE,
        error: error.message,
      });
    }
  };
};

export const updateIssueStatus = (issueId, status) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.UPDATE_ISSUE_STATUS_REQUEST });
    try {
      const response = await api.put(
        `/api/issues/${issueId}/status/${status}`
      );
      dispatch({
        type: actionTypes.UPDATE_ISSUE_STATUS_SUCCESS,
        issue: response.data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.UPDATE_ISSUE_STATUS_FAILURE,
        error: error.message,
      });
    }
  };
};

export const assignIssueToUser = (issueId, userId) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.ASSIGNED_ISSUE_TO_USER_REQUEST });
    try {
      const response = await api.put(
        `/api/issues/${issueId}/assignee/${userId}`
      );
      dispatch({
        type: actionTypes.ASSIGNED_ISSUE_TO_USER_SUCCESS,
        issue: response.data,
      });
    } catch (error) {
      dispatch({
        type: actionTypes.ASSIGNED_ISSUE_TO_USER_FAILURE,
        error: error.message,
      });
    }
  };
};
