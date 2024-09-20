import "modern-normalize";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App/App";
import { ROOT_CONTAINER } from "./const";
import "./index.css";

createRoot(document.querySelector(ROOT_CONTAINER)).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
