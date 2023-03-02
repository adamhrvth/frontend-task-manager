import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import './index.css';

import App from './App';

import { UserContextProvider } from './context/UserContext';
import { TaskContextProvider } from './context/TaskContext';

import { disableReactDevTools } from "@fvilers/disable-react-devtools";



disableReactDevTools();

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <UserContextProvider>
      <TaskContextProvider>

        <BrowserRouter>
          <App />
        </BrowserRouter>

      </TaskContextProvider>
    </UserContextProvider>
);
