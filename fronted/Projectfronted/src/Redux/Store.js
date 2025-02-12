import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import {thunk} from "redux-thunk"; // Adjusted import to use the correct export
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Default storage (localStorage)
import authReducer from "./Auth/Reducer";
import { projectReducer } from "./Project/Reducer";
import { chatReducer } from "./Chat/Reducer";
import commentReducer from "./Comment/Reducer";
import issueReducer from "./Issue/Reducer";

// Combine all reducers into a single root reducer
const rootReducer = combineReducers({
  auth: authReducer,
  project: projectReducer,
  chat: chatReducer,
  comment: commentReducer,
  issue: issueReducer,
});

// Configuration for redux-persist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "project"], // Specify reducers to persist
};

// Apply persistence to the root reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create Redux store with the persisted reducer and apply middleware
export const store = legacy_createStore(
  persistedReducer,
  applyMiddleware(thunk) // Use thunk.default if needed
);

// Create a persistor for the store
export const persistor = persistStore(store);
