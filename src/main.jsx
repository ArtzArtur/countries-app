import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import {createStore,applyMiddleware} from "redux";
import thunk from 'redux-thunk'
import { Provider } from "react-redux";
import allReducers from "./store/reducers";
const store = createStore(allReducers,applyMiddleware(thunk));

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>
);
