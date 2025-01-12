
import * as actionTypes from "./ActionType";

const initialState = {
  comments: [], // List of comments for an issue
  loading: false,
  error: null,
};

const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    // Create Comment
    case actionTypes.CREATE_COMMENT_REQUEST:
      return { ...state, loading: true, error: null };
    case actionTypes.CREATE_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        comments: [...state.comments, action.comment],
      };
    case actionTypes.CREATE_COMMENT_FAILURE:
      return { ...state, loading: false, error: action.error };

    // Delete Comment
    case actionTypes.DELETE_COMMENT_REQUEST:
      return { ...state, loading: true, error: null };
    case actionTypes.DELETE_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        comments: state.comments.filter(
          (comment) => comment.id !== action.commentId
        ),
      };
    case actionTypes.DELETE_COMMENT_FAILURE:
      return { ...state, loading: false, error: action.error };

    // Fetch Comments by Issue ID
    case actionTypes.FETCH_COMMENTS_BY_ISSUE_REQUEST:
      return { ...state, loading: true, error: null };
    case actionTypes.FETCH_COMMENTS_BY_ISSUE_SUCCESS:
      return { ...state, loading: false, comments: action.payload };
    case actionTypes.FETCH_COMMENTS_BY_ISSUE_FAILURE:
      return { ...state, loading: false, error: action.error };

    default:
      return state;
  }
};

export default commentReducer;
