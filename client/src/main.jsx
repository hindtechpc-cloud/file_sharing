import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./context/Authcontext.jsx";
import { FileContextProvider } from "./context/FileContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <FileContextProvider>
        <App />
      </FileContextProvider>
    </AuthProvider>
  </StrictMode>
);
