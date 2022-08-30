import React from "react";
import {createRoot} from 'react-dom/client'
import { BrowserRouter as Router } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import App from "./App";





const container = document.querySelector('#root')
const root = createRoot(container)
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
