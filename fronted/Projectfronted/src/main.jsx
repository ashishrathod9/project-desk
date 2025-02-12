import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import './index.css';
import App from './App.jsx';
import { store,persistor } from './Redux/Store.js';
import { Provider } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> {/* Wrap with BrowserRouter */}
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
    </BrowserRouter>
  </React.StrictMode>
);