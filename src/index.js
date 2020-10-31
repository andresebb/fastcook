import React from "react";
import ReactDOM from "react-dom";
import "./styles//index.css";
import App from "./App";
import { FoodProvider } from "./Context";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

ReactDOM.render(
  <React.StrictMode>
    <FoodProvider>
      <App />
    </FoodProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorkerRegistration.register();
