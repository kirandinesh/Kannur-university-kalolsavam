import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./context/auth-context/index.jsx";
import AdminProvider from "./context/admin-context";
import UserViewProvider from "./context/userView-context";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <AdminProvider>
        <UserViewProvider>
          <Toaster position="top-center"/>
          <App />
        </UserViewProvider>
      </AdminProvider>
    </AuthProvider>
  </BrowserRouter>
);
