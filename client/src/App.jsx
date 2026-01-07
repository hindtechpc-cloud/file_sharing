import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";

// Pages
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import SettingsPage from "./pages/SettingsPage";
import Dashboard from "./pages/Dashboard";
import TopBar from "./pages/Dashboard/Topbar";
import FileManagementPage from "./pages/FileManagementPage.jsx";
import RecentFiles from "./pages/RecentFiles.jsx";
import Profile from "./pages/Profile.jsx";
import { AuthContext } from "./context/Authcontext.jsx";

// Dummy pages (create later)

function App() {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <Router>
      <div className="flex">
        {/* Sidebar */}

        <div className="fixed">
          <Sidebar />
        </div>

        {/* Main Content */}
        <main className="flex-1 ml-0 md:ml-64">
          <TopBar />

          <hr className="text-gray-200  h-2 w-full" />
          <div className="max-w-7xl mx-auto p-6 lg:p-8 bg-gray-100">
            <Routes>
              {/* Auth */}
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/settings"
                element={
                  user !== null && user.token != null ? (
                    <SettingsPage />
                  ) : (
                    <Login />
                  )
                }
              />
              <Route
                path="/dashboard"
                element={
                  user !== null && user.token != null ? (
                    <Dashboard />
                  ) : (
                    <Login />
                  )
                }
              />
              <Route
                path="/"
                element={
                  user !== null && user.token != null ? (
                    <Dashboard />
                  ) : (
                    <Login />
                  )
                }
              />
              <Route
                path="/share-with-me"
                element={
                  user !== null && user.token != null ? (
                    <FileManagementPage />
                  ) : (
                    <Login />
                  )
                }
              />
              <Route
                path="/recents"
                element={
                  user !== null && user.token != null ? (
                    <RecentFiles />
                  ) : (
                    <Login />
                  )
                }
              />
              <Route
                path="/profile"
                element={
                  user !== null && user.token != null ? <Profile /> : <Login />
                }
              />

              {/* App Pages
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/journal" element={<Journal />} />
              <Route path="/meditations" element={<Meditations />} />
              <Route path="/resources" element={<ResourcesPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/watch-now/:id" element={<WatchNow />} />
              <Route path="/read-more/:id" element={<ReadMore />} /> */}
              {/* Default */}
              {/* <Route path="/" element={<Navigate to="/dashboard" replace />} /> */}
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
