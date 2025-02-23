import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import AuthPage from "./pages/auth";
import AdminMainLayout from "./components/Admin-view/layout";
import UserCommonLayout from "./components/User-view";

import { useContext, useEffect } from "react";
import { AuthContext } from "./context/auth-context";
import NotFoundPage from "./pages/not-found";
import RouteGuard from "./components/route-guard";
import AdminIndividualReusltPage from "./pages/Admin-pages/IndividualResult-Page";
import WinnerListPage from "./pages/Admin-pages/winner-page/winnerList-Page";

function App() {
  const { auth } = useContext(AuthContext);
  const location = useLocation();

  useEffect(() => {
    if (auth?.user?.role === "user") {
      sessionStorage.removeItem("accessToken");
    }
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/adminlogin" element={<AuthPage />} />
      <Route path="/" element={<UserCommonLayout />} />

      <Route
        path="/adminhome"
        element={
          <RouteGuard
            element={<AdminMainLayout />}
            authenticated={auth?.authenticate}
            user={auth?.user}
          />
        }
      />

      <Route
        path="/adminhome/winnerpage"
        element={
          <RouteGuard
            element={<AdminIndividualReusltPage />}
            authenticated={auth?.authenticate}
            user={auth?.user}
          />
        }
      />
      <Route
        path="/adminhome/winnerlist"
        element={
          <RouteGuard
            element={<WinnerListPage />}
            authenticated={auth?.authenticate}
            user={auth?.user}
          />
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
