import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { AuthProvider } from "./hooks/AuthProvider.js";
import { TanstackProvider } from "./TanstackProvider.jsx";

createRoot(document.getElementById("root")).render(
  <TanstackProvider>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </TanstackProvider>
);
