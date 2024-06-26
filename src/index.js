import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./store";
import {Provider} from "react-redux";
import AlertTemplate from "react-alert-template-basic";
import  {positions,transitions,Provider as AlertProvider} from "react-alert";
const option ={
  timeout:5000,
  position:positions.BOTTOM_CENTER,
  transition:transitions.SCALE,
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <AlertProvider template={AlertTemplate}{...option}>
    <App />
    </AlertProvider>
   
  </Provider>
);


