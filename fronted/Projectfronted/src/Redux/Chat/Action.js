import api from "@/config/api";
import * as actionTypes from "./ActionType";

export const sendMessage = (messageData) => {
    return async (dispatch) => {
        console.log(messageData);
        
        dispatch({ type: actionTypes.SEND_MESSAGE_REQUEST });
        try {
            const response = await api.post(
                "https://ample-solace-production-90a8.up.railway.app/api/project/send",
                messageData
            );
            dispatch({
                type: actionTypes.SEND_MESSAGE_SUCCESS,
                message: response.data,
            });

            console.log("this is chat",response.data);
            
        } catch (error) {
            dispatch({
                type: actionTypes.SEND_MESSAGE_FAILURE,
                error: error.message,
            });
        }
    };
};

export const fetchChatByProject = (projectId) => {
    return async (dispatch) => {
        dispatch({ type: actionTypes.FETCH_CHAT_BY_PROJECT_REQUEST });
        try {
            const response = await api.get(
                `/api/projects/${projectId}/chat`
            );
            dispatch({
                type: actionTypes.FETCH_CHAT_BY_PROJECT_SUCCESS,
                chat: response.data,
                messages:response.data.messages
            });
            console.log("this is chats",response.data);
            
        } catch (error) {
            dispatch({
                type: actionTypes.FETCH_CHAT_BY_PROJECT_FAILURE,
                error: error.message,
            });
        }
    };
};

export const fetchChatMessages = (chatId) => {
  return async (dispatch) => {
    dispatch({ type: actionTypes.FETCH_CHAT_MESSAGES_REQUEST });
    try {
      const response = await api.get(`/api/messages/chat/${chatId}`);
      console.log("fetch messages", response.data);
      dispatch({
        type: actionTypes.FETCH_CHAT_MESSAGES_SUCCESS,
        chatId,
        chat: response.data,
      });
    } catch (error) {
      console.log("error--", error);
      dispatch({
        type: actionTypes.FETCH_CHAT_MESSAGES_FAILURE,
        error: error.message,
      });
    }
  };
};

