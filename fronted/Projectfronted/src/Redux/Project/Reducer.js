import * as actionTypes from "./ActionType"; // Ensure ActionType file exports the required constants

const initialState = {
    loading: false,
    projects: [],
    projectDetails: {},
    searchProjects: [],
    error: null,
};

export const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PROJECTS_REQUEST:
        case actionTypes.CREATE_PROJECT_REQUEST:
        case actionTypes.DELETE_PROJECT_REQUEST:
        case actionTypes.FETCH_PROJECT_BY_ID_REQUEST:
        case actionTypes.ACCEPT_INVITATION_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };

        case actionTypes.FETCH_PROJECTS_SUCCESS:
            return {
                ...state,
                loading: false,
                projects: action.projects,
                projectDetails:action.payload,
                error: null,
            };

        case actionTypes.FETCH_PROJECT_BY_ID_SUCCESS:
            return {
                ...state,
                loading: false,
                projectDetails: action.project,
                error: null,
            };

        case actionTypes.CREATE_PROJECT_SUCCESS:
            return {
                ...state,
                loading: false,
                projects: [...state.projects, action.project],
                error: null,
            };

        case actionTypes.DELETE_PROJECT_SUCCESS:
            return {
                ...state,
                loading: false,
                projects: state.projects.filter((project) => project.id !== action.id), // Fixed filter condition
                error: null,
            };

        case actionTypes.SEARCH_PROJECT_SUCCESS:
            return {
                ...state,
                loading: false,
                searchProjects: action.projects,
                error: null,
            };

        case actionTypes.FETCH_PROJECTS_FAILURE:
        case actionTypes.FETCH_PROJECT_BY_ID_FAILURE:
        case actionTypes.CREATE_PROJECT_FAILURE:
        case actionTypes.DELETE_PROJECT_FAILURE:
        case actionTypes.SEARCH_PROJECT_FAILURE:
        case actionTypes.ACCEPT_INVITATION_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        default:
            return state;
    }
};
