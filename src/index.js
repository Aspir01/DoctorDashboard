import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import documentsReducer from "./store/documentsSlice"
import patientsReducer from "./store/patientsSlice"
import workersReducer from "./store/workersSlice"
import notesReducer from "./store/notesSlice"

const store = configureStore({
  reducer: {
    documents: documentsReducer,
    patients: patientsReducer,
    workers: workersReducer,
    notes: notesReducer
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
