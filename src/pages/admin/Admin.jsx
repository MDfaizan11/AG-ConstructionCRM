// import React, { useState, useEffect } from "react";
// import "./Admin.css";
// import logo from "../../assets/royal.png";
// import { Link, Outlet, useNavigate } from "react-router-dom";
// import {

//   FaBoxes,
//   FaBuilding,
//   FaFileAlt,
//   FaLandmark,
//   FaTachometerAlt,
//   FaUsers,
// } from "react-icons/fa";
// import { FaUserFriends } from "react-icons/fa";
// import { RiFilePaper2Fill } from "react-icons/ri";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { MdCancel } from "react-icons/md";

// function Admin() {
//   const navigate = useNavigate()
//   const [icon, setIcon] = useState(false);
//   const [role, setRole] = useState("");

//   const handleLogout = () => {
//     localStorage.removeItem("token");

//   };

//   useEffect(() => {
//     const gettingRole = JSON.parse(
//       localStorage.getItem("employeROyalmadeLogin")
//     ) || {};
//     setRole(gettingRole.role);
//   }, []);

//   function handleLogIn() {
//     navigate("/login")
//   }

//   function handleLogOut() {
//     localStorage.removeItem("employeROyalmadeLogin")
//     navigate("/login")
//   }
//   return (
//     <>
//       <header className="admin-header">
//         <div className="header-icon">
//           <div
//             className="hidden"
//             onClick={() => {
//               setIcon(!icon);
//             }}
//           >
//             {icon ? "" : <GiHamburgerMenu size={40} color="#0dada5" className="hamberger_icon" style={{ cursor: "pointer" }} />}
//           </div>
//           <div className="hearder_div">
//             <h1> <b style={{ color: "#213a99" }}>R</b><b style={{ color: "red" }}>O</b><b style={{ color: "#fdcb07" }}>Y</b><b style={{ color: "#213a99" }}>A</b><b style={{ color: "#fdcb07" }}>A</b><b style={{ color: "green" }}>L</b><b style={{ color: "red" }}>M</b><b style={{ color: "#213a99" }}>E</b><b style={{ color: "green" }}>D</b><b style={{ color: "red" }}>E</b></h1>

//           </div>
//           {
//             role ? <button onClick={handleLogOut} className="login_button"> LogOut</button> : <button className="login_button" onClick={handleLogIn}>  Login </button>
//           }

//         </div>

//       </header>

//       <aside>
//         <div className={icon ? "open" : "sidebar"}>
//           <div style={{ display: "flex", justifyContent: "right" }}>
//             <MdCancel className="cancel" onClick={() => setIcon(!icon)} />
//           </div>
//           <img
//             src={logo}
//             alt=""
//             style={{ backgroundColor: "white", width: "100%" }}
//           />
//           <div className="items">
//             <div className="hospital">

//               {role === "Admin" && (
//                 <>
//                   <div className="link_container" >
//                     <Link to="/" onClick={() => setIcon(!icon)}>
//                       <FaTachometerAlt
//                         style={{ color: "white", fontSize: "1.5rem" }}
//                       />
//                       DashBoard
//                     </Link>
//                   </div>

//                   <div className="link_container">
//                     <Link
//                       to="/lead"
//                       className="click_link"
//                       onClick={() => setIcon(!icon)}
//                     >
//                       <FaFileAlt
//                         style={{ color: "white", fontSize: "1.5rem" }}
//                       />
//                       Lead Management
//                     </Link>
//                   </div>

//                   <div className="link_container">
//                     <Link
//                       to="/landpurchase"
//                       onClick={() => setIcon(!icon)}
//                       className="click_link"
//                     >
//                       <FaLandmark
//                         style={{ color: "white", fontSize: "1.5rem" }}
//                       />
//                       Land Management
//                     </Link>
//                   </div>

//                   <div className="link_container">
//                     <Link
//                       to="/flat"
//                       onClick={() => setIcon(!icon)}
//                       className="click_link"
//                     >
//                       <FaBuilding
//                         style={{ color: "white", fontSize: "1.5rem" }}
//                       />
//                       Flat Management
//                     </Link>
//                   </div>

//                   <div className="link_container">
//                     <Link
//                       to="/clist"
//                       onClick={() => setIcon(!icon)}
//                       className="click_link"
//                     >
//                       <FaUsers
//                         style={{ color: "white", fontSize: "1.5rem" }}
//                       />
//                       Customer Details
//                     </Link>
//                   </div>

//                   <div className="link_container">
//                     <Link
//                       to="/material"
//                       onClick={() => setIcon(!icon)}
//                       className="click_link"
//                     >
//                       <FaBoxes
//                         style={{ color: "white", fontSize: "1.5rem" }}
//                       />
//                       Material Management
//                     </Link>
//                   </div>
//                   <div className="link_container">
//                     <Link
//                       to="/contractor"
//                       onClick={() => setIcon(!icon)}
//                       className="click_link"
//                     >
//                       <FaBoxes
//                         style={{ color: "white", fontSize: "1.5rem" }}
//                       />
//                       Contractor
//                     </Link>
//                   </div>

//                   <div className="link_container">
//                     <Link
//                       to="/employee"
//                       className="click_link"
//                       onClick={() => setIcon(!icon)}
//                     >
//                       <FaUserFriends
//                         style={{ color: "white", fontSize: "1.5rem" }}
//                       />
//                       <p>Add Staff</p>
//                     </Link>
//                   </div>
//                   <div className="link_container">
//                     <Link
//                       to="letter"
//                       className="click_link"
//                       onClick={() => setIcon(!icon)}
//                     >
//                       <RiFilePaper2Fill
//                         style={{ color: "white", fontSize: "1.5rem" }}
//                       />
//                       <p>Letter</p>
//                     </Link>
//                   </div>
//                 </>
//               )}
//               {role === "AppUser" && (
//                 <>
//                   <div className="link_container">
//                     <Link
//                       to="/material"
//                       onClick={() => setIcon(!icon)}
//                       className="click_link"
//                     >
//                       <FaBoxes
//                         style={{ color: "white", fontSize: "1.5rem" }}
//                       />
//                       Material Management
//                     </Link>
//                   </div>

//                 </>
//               )}
//               {role === "Employee" && (
//                 <>
//                   <div className="link_container">
//                     <Link
//                       to="/lead"
//                       className="click_link"
//                       onClick={() => setIcon(!icon)}
//                     >
//                       <FaFileAlt
//                         style={{ color: "white", fontSize: "1.5rem" }}
//                       />
//                       Lead Management
//                     </Link>
//                   </div>

//                 </>
//               )}
//             </div>
//           </div>
//         </div>
//         <section>
//           <Outlet />
//         </section>
//       </aside>
//     </>
//   );
// }

// export default Admin;

import { useState, useEffect } from "react";
import "../admin/Admin.css";
// import logo from "../../assets/ag construction-1.png";
import { Link, Outlet, useNavigate, NavLink } from "react-router-dom";
import {
  FaBoxes,
  FaBuilding,
  FaFileAlt,
  FaLandmark,
  FaTachometerAlt,
  FaUsers,
  FaUserFriends,
  FaSignOutAlt,
  FaSignInAlt,
} from "react-icons/fa";
import { RiFilePaper2Fill } from "react-icons/ri";
import { MdClose } from "react-icons/md";
import { FiMenu, FiX, FiChevronRight } from "react-icons/fi";
import { Bell } from "lucide-react";
import axios from "axios";
import { BASE_URL } from "../../config";

function Admin() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [role, setRole] = useState("");
  const token = JSON.parse(
    localStorage.getItem("employeROyalmadeLogin") || "{}"
  )?.token;

  const [count, setCount] = useState(0);
  useEffect(() => {
    const gettingRole =
      JSON.parse(localStorage.getItem("employeROyalmadeLogin")) || {};
    setRole(gettingRole.role);
  }, []);

  function handleLogIn() {
    navigate("/login");
  }

  function handleLogOut() {
    const confirmLogout = window.confirm(" Are you sure you want to log out?");
    if (!confirmLogout) return;
    localStorage.removeItem("employeROyalmadeLogin");
    navigate("/login");
  }

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  const adminMenuItems = [
    { icon: FaTachometerAlt, label: "Dashboard", path: "/" },
    { icon: FaFileAlt, label: "Lead Management", path: "/lead" },
    { icon: FaLandmark, label: "Land Management", path: "/landpurchase" },
    { icon: FaBuilding, label: "Flat Management", path: "/flat" },
    { icon: FaUsers, label: "Customer Details", path: "/clist" },
    { icon: FaBoxes, label: "Stock Management", path: "/material" },
    { icon: FaBoxes, label: "Contractor", path: "/contractor" },
    { icon: FaUserFriends, label: "Add Staff", path: "/employee" },
    { icon: RiFilePaper2Fill, label: "Letter", path: "/letter" },
  ];

  const employeeMenuItems = [
    { icon: FaFileAlt, label: "Lead Management", path: "/lead" },
  ];

  const appUserMenuItems = [
    { icon: FaBoxes, label: "Material Management", path: "/material" },
  ];

  const getMenuItems = () => {
    switch (role) {
      case "Admin":
        return adminMenuItems;
      case "Employee":
        return employeeMenuItems;
      case "AppUser":
        return appUserMenuItems;
      default:
        return [];
    }
  };

  useEffect(() => {
    async function getNotificationCount() {
      try {
        const response = await axios.get(`${BASE_URL}/lead/alerts`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        setCount(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getNotificationCount();
  }, []);

  return (
    <div className="admin-layout">
      {/* Header */}
      <header className="modern-header">
        <div className="header-content">
          <div className="header-left">
            <button
              className="sidebar-toggle"
              onClick={toggleSidebar}
              aria-label="Toggle sidebar"
            >
              {sidebarOpen ? <FiX /> : <FiMenu />}
            </button>

            {/* <div className="brand-section">
              <h1 className="brand-title">
                <span className="brand-letter r">A</span>
                <span className="brand-letter o">G</span>
                <span>-</span>

                <span className="brand-letter y">C</span>
                <span className="brand-letter a1">O</span>
                <span className="brand-letter a2">N</span>
                <span className="brand-letter l">S</span>
                <span className="brand-letter m">T</span>
                <span className="brand-letter e">R</span>
                <span className="brand-letter d">U</span>
                <span className="brand-letter e2">C</span>
                <span className="brand-letter r">T</span>
                <span className="brand-letter o">I</span>
                <span className="brand-letter y">O</span>
                <span className="brand-letter a1">N</span>
              </h1>
              <span className="brand-subtitle">Real Estate Management</span>
            </div> */}
          </div>

          <div className="header-right">
            <div onClick={() => navigate("/notification")}>
              <button className="notification-button">
                <Bell />
                {count?.length > 0 && (
                  <span className="notification-count">
                    {count.length || 0}
                  </span>
                )}
              </button>
            </div>

            {role && (
              <div className="user-info">
                <span className="user-role">{role}</span>
              </div>
            )}

            {role ? (
              <button onClick={handleLogOut} className="auth-button logout">
                <FaSignOutAlt />
                <span>Logout</span>
              </button>
            ) : (
              <button className="auth-button login" onClick={handleLogIn}>
                <FaSignInAlt />
                <span>Login</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Sidebar Overlay */}
      {sidebarOpen && (
        <div className="sidebar-overlay" onClick={closeSidebar} />
      )}

      {/* Sidebar */}
      <aside className={`modern-sidebar ${sidebarOpen ? "sidebar-open" : ""}`}>
        <div className="sidebar-header">
          <div className="sidebar-logo">
            {/* <img src={logo || "/placeholder.svg"} alt="RoyaalMede Logo" /> */}
            <h2 className="SideLogo_name">
              <div className="AG_name">AG</div> Construction
            </h2>
          </div>
          <button className="sidebar-close" onClick={closeSidebar}>
            <MdClose />
          </button>
        </div>

        <nav className="sidebar-nav">
          <div className="nav-section">
            <h3 className="nav-section-title">Navigation</h3>
            <ul className="nav-menu">
              {getMenuItems().map((item, index) => (
                <li key={index} className="nav-item">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    onClick={closeSidebar}
                  >
                    <div className="nav-icon">
                      <item.icon />
                    </div>
                    <span className="nav-label">{item.label}</span>
                    <FiChevronRight className="nav-arrow" />
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="sidebar-footer">
          <div className="sidebar-user">
            <div className="user-avatar">
              {role ? role.charAt(0).toUpperCase() : "U"}
            </div>
            <div className="user-details">
              <span className="user-name">{role || "Guest"}</span>
              <span className="user-status">Online</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`main-content ${sidebarOpen ? "content-shifted" : ""}`}>
        <div className="content-wrapper">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Admin;
