import React from "react";
import ReactDOM from "react-dom";
import styles from "./index.css";
import App from "./app";
import AuthService from "./service/auth_service";

const authService = new AuthService();
ReactDOM.render(
  <>
    <App authService={authService} />
  </>,
  document.getElementById("root")
);
