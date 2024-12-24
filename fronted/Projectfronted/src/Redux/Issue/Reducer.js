import * as actionTypes from "./ActionType";

const initialState = {
  issues: [], // List of issues
  issue: null, // Single issue details
  loading: false,
  issueDetails:null,
  error: null,
};

const issueReducer = (state = initialState, action) => {
  switch (action.type) {
    // Fetch single issue
    case actionTypes.FETCH_ISSUE_REQUEST:
      return { ...state, loading: true, error: null };
    case actionTypes.FETCH_ISSUE_SUCCESS:
      return { ...state, loading: false, issueDetails: action.issue };
    case actionTypes.FETCH_ISSUE_FAILURE:
      return { ...state, loading: false, error: action.error };

    // Fetch issues by project
    case actionTypes.FETCH_ISSUES_BY_PROJECT_REQUEST:
      return { ...state, loading: true, error: null };
    case actionTypes.FETCH_ISSUES_BY_PROJECT_SUCCESS:
      return { ...state, loading: false, issues: action.issues };
    case actionTypes.FETCH_ISSUES_BY_PROJECT_FAILURE:
      return { ...state, loading: false, error: action.error };

    // Create issue
    case actionTypes.CREATE_ISSUE_REQUEST:
      return { ...state, loading: true, error: null };
    case actionTypes.CREATE_ISSUE_SUCCESS:
      return {
        ...state,
        loading: false,
        issues: [...state.issues, action.issue],
      };
    case actionTypes.CREATE_ISSUE_FAILURE:
      return { ...state, loading: false, error: action.error };

    // Delete issue
    case actionTypes.DELETE_ISSUE_REQUEST:
      return { ...state, loading: true, error: null };
    case actionTypes.DELETE_ISSUE_SUCCESS:
      return {
        ...state,
        loading: false,
        issues: state.issues.filter((issue) => issue.id !== action.issueId),
      };
    case actionTypes.DELETE_ISSUE_FAILURE:
      return { ...state, loading: false, error: action.error };

    // Update issue assignee
    case actionTypes.UPDATE_ISSUE_ASSIGNEE_REQUEST:
      return { ...state, loading: true, error: null };
    case actionTypes.UPDATE_ISSUE_ASSIGNEE_SUCCESS:
      return {
        ...state,
        loading: false,
        issues: state.issues.map((issue) =>
          issue.id === action.issue.id ? action.issue : issue
        ),
      };
    case actionTypes.UPDATE_ISSUE_ASSIGNEE_FAILURE:
      return { ...state, loading: false, error: action.error };

    // Update issue status
    case actionTypes.UPDATE_ISSUE_STATUS_REQUEST:
      return { ...state, loading: true, error: null };
    case actionTypes.UPDATE_ISSUE_STATUS_SUCCESS:
      return {
        ...state,
        loading: false,
        issues: state.issues.map((issue) =>
          issue.id === action.issue.id ? action.issue : issue
        ),
      };
    case actionTypes.UPDATE_ISSUE_STATUS_FAILURE:
      return { ...state, loading: false, error: action.error };

    // Assign issue to user
    case actionTypes.ASSIGNED_ISSUE_TO_USER_REQUEST:
      return { ...state, loading: true, error: null };
    case actionTypes.ASSIGNED_ISSUE_TO_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        issues: state.issues.map((issue) =>
          issue.id === action.issue.id ? action.issue : issue
        ),
      };
    case actionTypes.ASSIGNED_ISSUE_TO_USER_FAILURE:
      return { ...state, loading: false, error: action.error };

    default:
      return state;
  }
};

export default issueReducer;
