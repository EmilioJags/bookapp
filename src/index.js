import { createRoot } from "react-dom/client";
import React from "react";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import AppRouter from "./router/AppRouter";

const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<AppRouter tab="home" />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
