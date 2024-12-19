import * as actionTypes from "./ActionType";

const initialState = {
    loading: false,
    chat: null,
    messages: [],
    error: null,
};

export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        // Request cases
        case actionTypes.SEND_MESSAGE_REQUEST:
        case actionTypes.FETCH_CHAT_BY_PROJECT_REQUEST:
        case actionTypes.FETCH_CHAT_MESSAGES_REQUEST:
        case actionTypes.FETCH_MESSAGES_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };

        // Success cases
        case actionTypes.SEND_MESSAGE_SUCCESS:
            return {
                ...state,
                loading: false,
                messages: [...state.messages, action.message],
                error: null,
            };

        case actionTypes.FETCH_CHAT_BY_PROJECT_SUCCESS:
            return {
                ...state,
                loading: false,
                chat: action.chat,
                error: null,
            };

        case actionTypes.FETCH_CHAT_MESSAGES_SUCCESS:
        case actionTypes.FETCH_MESSAGES_SUCCESS: // Combine if they are the same
            return {
                ...state,
                loading: false,
                messages: action.messages,
                error: null,
            };

        // Failure cases
        case actionTypes.SEND_MESSAGE_FAILURE:
        case actionTypes.FETCH_CHAT_BY_PROJECT_FAILURE:
        case actionTypes.FETCH_CHAT_MESSAGES_FAILURE:
        case actionTypes.FETCH_MESSAGES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
            };

        // Default case
        default:
            return state;
    }
};
