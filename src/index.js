import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import "antd/dist/antd.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Provider } from "mobx-react";
import Store from "./roomList/store/Store";
import TodoStore from "./myPage/store/TodoStore";
import UserStore from "./oauth/store/UserStore";

ReactDOM.render(
  <Provider Store={Store} TodoStore={TodoStore} UserStore={UserStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
