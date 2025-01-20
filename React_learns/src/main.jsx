import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.jsx"; // the App component that is made in the App.jsx file is now imported here for use
import Greet from "./components/Greet.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
