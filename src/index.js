import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
<<<<<<< HEAD
import "antd/dist/antd.css";
import { Provider } from "mobx-react";
import Store from "./roomList/store/Store";

ReactDOM.render(
  <Provider Store={Store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
=======

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
>>>>>>> 0f4890cb6e29e71f71c34d84f40b536261aca7af
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
