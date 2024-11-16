import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css"; // Ensure this matches your actual CSS file name
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);