import api from "@/config/api";
import {
  FETCH_PROJECTS_REQUEST,
  FETCH_PROJECTS_SUCCESS,
  FETCH_PROJECTS_FAILURE,
  FETCH_PROJECT_BY_ID_REQUEST,
  FETCH_PROJECT_BY_ID_SUCCESS,
  FETCH_PROJECT_BY_ID_FAILURE,
  CREATE_PROJECT_REQUEST,
  CREATE_PROJECT_SUCCESS,
  CREATE_PROJECT_FAILURE,
  SEARCH_PROJECT_REQUEST,
  SEARCH_PROJECT_SUCCESS,
  SEARCH_PROJECT_FAILURE,
  DELETE_PROJECT_REQUEST,
  DELETE_PROJECT_SUCCESS,
  DELETE_PROJECT_FAILURE,
  ACCEPT_INVITATION_REQUEST,
  ACCEPT_INVITATION_SUCCESS,
  ACCEPT_INVITATION_FAILURE,
} from "./ActionTypes";
import { INVITE_TO_PROJECT_FAILURE, INVITE_TO_PROJECT_REQUEST, INVITE_TO_PROJECT_SUCCESS } from "./ActionType";

// Fetch all projects
export const fetchProjects = ({ category, tag }) => async (dispatch) => {
  dispatch({ type: FETCH_PROJECTS_REQUEST });
  try {
    const { data } = await api.get("/api/projects", { params: { category, tag } });
    dispatch({ type: FETCH_PROJECTS_SUCCESS, projects: data });
  } catch (error) {
    console.log("error",error);
  }
};

// Fetch project by ID
export const fetchProjectById = (id) => async (dispatch) => {
  dispatch({ type: FETCH_PROJECT_BY_ID_REQUEST });
  try {
    const { data } = await api.get("/api/projects/"+id);
    dispatch({ type: FETCH_PROJECT_BY_ID_SUCCESS, project: data });
  } catch (error) {
    dispatch({ type: FETCH_PROJECT_BY_ID_FAILURE, error: error.message });
  }
};

// Create a new project
export const createProject = (projectData) => async (dispatch) => {
  dispatch({ type: CREATE_PROJECT_REQUEST });
  try {
    const { data } = await api.post("/api/projects", projectData);
    dispatch({ type: CREATE_PROJECT_SUCCESS, project: data });
  } catch (error) {
    dispatch({ type: CREATE_PROJECT_FAILURE, error: error.message });
  }
};

// Search for projects
export const searchProjects = (keyword) => async (dispatch) => {
  dispatch({ type: SEARCH_PROJECT_REQUEST });
  try {
    const { data } = await api.get("/api/projects/search?keyword="+keyword);
    dispatch({ type: SEARCH_PROJECT_SUCCESS, projects: data });
    console.log("search projects",data)
  } catch (error) {
    dispatch({ type: SEARCH_PROJECT_FAILURE, error: error.message });
  }
};

// Delete a project
export const deleteProject = ({id}) => async (dispatch) => {
  dispatch({ type: DELETE_PROJECT_REQUEST });
  try {
    await api.delete("/api/projects/"+id);
    dispatch({ type: DELETE_PROJECT_SUCCESS, projectId: id });
  } catch (error) {
    dispatch({ type: DELETE_PROJECT_FAILURE, error: error.message });
  }
};

// Invite a user to a project
export const inviteToProject = ({email, projectId}) => async (dispatch) => {
  dispatch({ type: INVITE_TO_PROJECT_REQUEST });
  try {
    const { data } = await api.post("/api/projects/invite",{email,projectId});
    dispatch({ type: INVITE_TO_PROJECT_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: INVITE_TO_PROJECT_FAILURE, error: error.message });
  }
};

// Accept an invitation
export const acceptInvitation = ({invitationToken,navigate}) => async (dispatch) => {
  dispatch({ type: ACCEPT_INVITATION_REQUEST });
  try {
    const { data } = await api.get("/api/projects/accept_invitation", {
        params:{
            token:invitationToken
        }
    });

    navigate("/project"+data.projectId)
    
    dispatch({ type: ACCEPT_INVITATION_SUCCESS, invitation: data });
  } catch (error) {
    dispatch({ type: ACCEPT_INVITATION_FAILURE, error: error.message });
  }
};
