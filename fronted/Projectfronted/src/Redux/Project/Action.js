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
} from "./ActionType";
import { INVITE_TO_PROJECT_FAILURE, INVITE_TO_PROJECT_REQUEST, INVITE_TO_PROJECT_SUCCESS } from "./ActionType";

// Fetch all projects
export const fetchProjects = ({ category, tag }) => async (dispatch) => {
  dispatch({ type: FETCH_PROJECTS_REQUEST });
  console.log(category);
  console.log(tag);
  
  
  try {
    const { data } = await api.get("https://project-demo-image1-tag1.onrender.com/api/projects", { params: { category, tag } });
    console.log(data);
    
    dispatch({ type: FETCH_PROJECTS_SUCCESS, projects: data });
  } catch (error) {
    console.log("error",error);
  }
};

// Fetch project by ID
export const fetchProjectById = (id) => async (dispatch) => {
  dispatch({ type: FETCH_PROJECT_BY_ID_REQUEST });
  try {
    const { data } = await api.get(`https://project-demo-image1-tag1.onrender.com/api/projects/${id}`);
    dispatch({ type: FETCH_PROJECT_BY_ID_SUCCESS, project: data });
  } catch (error) {
    dispatch({ type: FETCH_PROJECT_BY_ID_FAILURE, error: error.message });
  }
};

// Create a new project
export const createProject = (projectData) => async (dispatch) => {
  dispatch({ type: CREATE_PROJECT_REQUEST });
  try {
    // Ensure the data format is correct
    console.log("project", projectData);

    const  data  = await api.post("https://project-demo-image1-tag1.onrender.com/api/projects", projectData);
    console.log("project", data);
    dispatch({ type: CREATE_PROJECT_SUCCESS, project: data });
  } catch (error) {
    dispatch({ type: CREATE_PROJECT_FAILURE, error: error.message });
  }
};


// Search for projects
export const searchProjects = (keyword) => async (dispatch) => {
  dispatch({ type: SEARCH_PROJECT_REQUEST });
  try {
    const { data } = await api.get("https://project-demo-image1-tag1.onrender.com/api/projects/search?keyword="+keyword);
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
    await api.delete("https://project-demo-image1-tag1.onrender.com/api/projects/"+id);
    dispatch({ type: DELETE_PROJECT_SUCCESS, projectId: id });
  } catch (error) {
    dispatch({ type: DELETE_PROJECT_FAILURE, error: error.message });
  }
};

// Invite a user to a project
export const inviteToProject = ({ email, projectid }) => async (dispatch) => {
  dispatch({ type: INVITE_TO_PROJECT_REQUEST });
  try {
    console.log("email :",email);
    
    const { data } = await api.post("https://project-demo-image1-tag1.onrender.com/api/projects/invite", {
      email,
      projectid,
    });
    dispatch({ type: INVITE_TO_PROJECT_SUCCESS, payload: data });
    console.log("sucess");
    
  } catch (error) {
    dispatch({ type: INVITE_TO_PROJECT_FAILURE, error: error.message });
    console.error("Failed to invite to project:", error.message);
  }
};

// Accept an invitation
export const acceptInvitation = ({ token, navigate }) => async (dispatch) => {
  dispatch({ type: "ACCEPT_INVITATION_REQUEST" });
  console.log(token);
  

  try {
    const Token = (localStorage.getItem("jwt") || "").trim(); // Retrieve the JWT token

    const { data } = await api.get("https://project-demo-image1-tag1.onrender.com/api/projects/accept-invitation", {
      params: {
        token: token,
      },
      headers: {
        Authorization: `Bearer ${Token}`, // Correct string interpolation for Bearer token
      },
    });

    // Navigate to the project page
    console.log("before navigation");
    navigate("/project/" + data.projectid);

    // Dispatch success action
    dispatch({ type: "ACCEPT_INVITATION_SUCCESS", invitation: data });
    console.log("success");
  } catch (error) {
    // Dispatch failure action
    dispatch({ type: "ACCEPT_INVITATION_FAILURE", error: error.message });
  }
};


