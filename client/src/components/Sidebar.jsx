import React, { useState } from "react";

import { FiActivity, FiSettings, FiLogOut, FiMenu, FiX } from "react-icons/fi";
import { MdDashboard, MdPeopleAlt } from "react-icons/md";
import { IoIosTimer } from "react-icons/io";

import LogoutModal from "./LogoutModal";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../context/Authcontext";
import { useEffect } from "react";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const { logout, user } = useContext(AuthContext);
  const [userData, setUserData] = useState(user?.user);
  const navigate = useNavigate();
  useEffect(() => {
    setUserData(user?.user);
  }, []);
  const navItems = [
    {
      icon: <MdDashboard className="w-5 h-5" />,
      text: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: <MdPeopleAlt className="w-5 h-5" />,
      text: "Share With Me",
      path: "/share-with-me",
    },
    {
      icon: <IoIosTimer className="w-5 h-5" />,
      text: "Recents",
      path: "/recents",
    },
    // {
    //   icon: <FiBook className="w-5 h-5" />,
    //   text: "Resources",
    //   path: "/resources",
    // },
    {
      icon: <FiSettings className="w-5 h-5" />,
      text: "Settings",
      path: "/settings",
    },
    {
      icon: <FaUser className="w-5 h-5" />,
      text: "Profile",
      path: "/profile",
    },
  ];
  const handleClick = () => {
    setIsLogoutOpen(true);
  };
  const handleConfirmLogout = () => {
    logout();
    setIsLogoutOpen(false);
    navigate("/login");
  };
  const handleCancel = () => {
    setIsLogoutOpen(false);
  };
  return (
    <>
      {/* Mobile menu button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md bg-gray-50 text-black"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Overlay for mobile */}
      {isSidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static top-0 left-0 h-screen w-64 bg-gray-50 text-black transform transition-transform duration-300 ease-in-out z-40 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0`}
      >
        {/* Logo Section */}
        <div className="p-6 border-b border-gray-700">
          <h1 className="md:text-start text-center text-2xl font-bold text-black">
            Zenith
          </h1>
        </div>

        {/* User Profile Section */}
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-600 rounded-full text-white flex items-center justify-center">
              {user?.user?.pic ? (
                <img
                  src={`http://localhost:5000/uploads/${user?.user?.pic}`}
                  className="rounded-full"
                ></img>
              ) : (
                <span className="font-semibold capitalize">
                  {user?.user?.name[0] || "U"}
                </span>
              )}
            </div>

            <Link to={"/profile"}>
              <h3 className="font-semibold text-black">
                {" "}
                {user?.user?.name || "User"}
              </h3>
              <p className="text-sm text-gray-400">
                {user?.user?.name || "exampleemail@gmail.com"}
              </p>
            </Link>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="p-4">
          <ul className="space-y-2">
            {navItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive
                        ? "bg-blue-600 text-white"
                        : "text-black hover:bg-blue-800 hover:text-white"
                    }`
                  }
                  onClick={() => setIsSidebarOpen(false)} // auto close on mobile
                >
                  {item.icon}
                  <span className="font-medium">{item.text}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Resources Section */}
        {/* <div className="absolute bottom-[1px] left-0 right-0 p-4">
          <div className="bg-gray-800 rounded-lg p-4">
            <div className="flex items-center space-x-3 mb-2">
              <FiHelpCircle className="w-5 h-5 text-gray-400" />
              <h4 className="font-semibold text-black">Need help?</h4>
            </div>
            <p className="text-sm text-gray-400 mb-3">
              Check our documentation or contact support
            </p>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-black py-2 px-4 rounded-lg transition-colors text-sm font-medium">
              Get Help
            </button>
          </div>
        </div> */}

        <div className="absolute bottom-px left-0 right-0 p-4">
          <button
            onClick={handleClick}
            className="  flex w-full cursor-pointer items-center space-x-3 px-4 py-3 hover:bg-blue-900 hover:text-white rounded-lg transition-colors "
          >
            <FiLogOut className="w-5 h-5" />
            <span className="font-medium">Log Out</span>
          </button>
        </div>
      </aside>
      {isLogoutOpen && (
        <LogoutModal onCancel={handleCancel} onConfirm={handleConfirmLogout} />
      )}
    </>
  );
};

export default Sidebar;
