import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { IsLoginProvider } from "./IsLoginContext";
import "./global.css";
import { Provider } from 'react-redux';
import store from './app/store';

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <IsLoginProvider>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    </Provider>
  </IsLoginProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
