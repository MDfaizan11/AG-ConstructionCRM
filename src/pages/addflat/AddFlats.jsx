// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import "./AddFlat.css";
// import { BsFillBuildingsFill, FaEye } from "react-icons/bs";
// import { AiFillCheckCircle } from "react-icons/ai";
// import { AiOutlineClockCircle } from "react-icons/ai";
// import { FaTrashAlt } from "react-icons/fa";
// import Swal from "sweetalert2";
// import { BASE_URL } from "../../config";

// function Flat() {
//   const { id } = useParams();
//   console.log(id);

//   const [AddScheme, setAddScheme] = useState(false);
//   const [selectStatus, setSelectStatus] = useState("");
//   const [Schemename, setSchemeName] = useState("");
//   const token = JSON.parse(
//     localStorage.getItem("employeROyalmadeLogin")
//   )?.token;
//   const [myLand, setMyLand] = useState([]);
//   const [showCount, setShowCount] = useState("");
//   const navigate = useNavigate();
//   const [count, setCount] = useState(0);
//   const [totalFlat, setTotalFlat] = useState("");
//   const [buildingSize, setBuildingSize] = useState("");
//   const [searchScheme, setSearchScheme] = useState("");
//   function handlescheme(e) {
//     e.preventDefault();
//     setAddScheme(!AddScheme);
//   }

//   async function handleCreateScheme(e) {
//     e.preventDefault();
//     const obj = {
//       name: Schemename,
//       status: selectStatus,
//       landId: id,
//       totalflat: totalFlat,
//       buildingSize,
//     };
//     if (!id) {
//       return alert("project start from land");
//     }
//     try {
//       const reponse = await axios.post(`${BASE_URL}/createProject`, obj, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       console.log(reponse);
//       alert("add Scheme Successfully");
//       setAddScheme("");
//       setCount((prevCount) => prevCount + 1);
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   useEffect(() => {
//     async function getLand() {
//       try {
//         const response = await axios.get(`${BASE_URL}/getAllProjects`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         console.log(response.data);
//         setMyLand(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     getLand();
//   }, [id, token, count]);

//   function handleclick(id, newname) {
//     console.log(id);
//     if (!id) {
//       return alert("Project has not started yet"); // Custom alert message
//     }
//     console.log(id);
//     navigate(`/flatlist/${id}`, { state: { newname } });
//   }

//   useEffect(() => {
//     async function getingCount() {
//       try {
//         const reponse = await axios.get(`${BASE_URL}/count`, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         });
//         console.log(reponse.data);
//         setShowCount(reponse.data);
//       } catch (error) {
//         console.log(error);
//       }
//     }

//     getingCount();
//   }, []);

//   const confirmDelete = async (id) => {
//     Swal.fire({
//       title: "Are you sure?",
//       text: "You won't be able to revert this!",
//       icon: "warning",
//       showCancelButton: true,
//       confirmButtonColor: "#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "Yes, delete it!",
//     }).then(async (result) => {
//       if (result.isConfirmed) {
//         try {
//           await axios.delete(`${BASE_URL}/deleteProject/${id}`, {
//             headers: {
//               Authorization: `Bearer ${token}`,
//               "Content-Type": "application/json",
//             },
//           });
//           setCount((prevCount) => prevCount + 1);

//           Swal.fire("Deleted!", "The residency has been deleted.", "success");
//         } catch (error) {
//           console.error(error);
//           Swal.fire(
//             "Error!",
//             "Something went wrong while deleting the residency.",
//             "error"
//           );
//         }
//       }
//     });
//   };

//   const filterScheme = myLand.filter((item) =>
//     item.name.toLowerCase().includes(searchScheme.toLowerCase())
//   );
//   return (
//     <>
//       <div className="Add_flat_main_wrapper">
//         <h1>Flat Scheme Management System</h1>

//         <div className="scheme_search_add_section">
//           <div className="scheme_search_container">
//             <input
//               type="text"
//               placeholder="Search Scheme.."
//               value={searchScheme}
//               onChange={(e) => setSearchScheme(e.target.value)}
//             />
//           </div>
//           <div className="add_seheme_btn">
//             <button onClick={handlescheme}>Add Scheme</button>
//           </div>
//         </div>

//         {/* fetch All scheme */}
//         <div className="show_all_resigency_card_wrapper">
//           {Array.isArray(filterScheme) &&
//             filterScheme.map((item, index) => {
//               const countData = showCount[item.id];
//               const availableCount = countData ? countData.AVAILABLE : 0;
//               const bookedCount = countData ? countData.BOOKED : 0;

//               return (
//                 <div key={index} className="flatcontainer">
//                   <button
//                     className="residency_delete"
//                     onClick={() => confirmDelete(item.id)}
//                   >
//                     <FaTrashAlt />
//                   </button>
//                   <BsFillBuildingsFill
//                     size={80}
//                     color="rgb(224 45 45)"
//                     onClick={() => handleclick(item.id, item.name)}
//                     style={{ cursor: "pointer" }}
//                   />
//                   <p
//                     onClick={() => handleclick(item.id, item.name)}
//                     style={{ cursor: "pointer" }}
//                   >
//                     <b>{item.name} </b>
//                   </p>
//                   <p className="status">
//                     <b> {item.status} </b>{" "}
//                   </p>
//                   <div className="span">
//                     <span className="show_book_count">
//                       <AiFillCheckCircle
//                         style={{ fontSize: "25px", color: "red" }}
//                       />
//                       Booked <br /> {bookedCount || 0}
//                     </span>
//                     <span className="show_available_count_available">
//                       <AiOutlineClockCircle
//                         style={{ fontSize: "25px", color: "green" }}
//                       />
//                       Available <br /> {availableCount || 0}
//                     </span>
//                     <span className="show_available_count_available">
//                       Total Flat <br /> {item.totalflat || "N/A"}
//                     </span>
//                     <span className="show_available_count_available">
//                       Building Size <br /> {item.buildingSize || "N/A"}
//                     </span>
//                   </div>
//                 </div>
//               );
//             })}
//         </div>

//         {/* Add Scheme Here */}
//         {AddScheme && (
//           <>
//             <div className="AddSchemeForm_wrapper">
//               <form onSubmit={handleCreateScheme} className="AddSchemeForm">
//                 <button
//                   className="add_scheme_cross_button"
//                   onClick={() => setAddScheme(!AddScheme)}
//                 >
//                   X
//                 </button>
//                 <div>
//                   <select
//                     name=""
//                     id=""
//                     value={selectStatus}
//                     onChange={(e) => setSelectStatus(e.target.value)}
//                     className="AddSchemeForm_select"
//                   >
//                     <option value="">Select Type</option>
//                     <option value="IN_PROGRESS">IN_PROGRESS</option>
//                     <option value="IN_PROGRESS">COMPLETE</option>
//                     <option value="IN_PROGRESS">INACTIVE</option>
//                   </select>
//                   <input
//                     type="text"
//                     placeholder="Enter Total flat"
//                     value={totalFlat}
//                     onChange={(e) => setTotalFlat(e.target.value)}
//                   />
//                   <input
//                     type="text"
//                     placeholder="Enter Building Size"
//                     value={buildingSize}
//                     onChange={(e) => setBuildingSize(e.target.value)}
//                   />
//                   <input
//                     type="text"
//                     value={Schemename}
//                     onChange={(e) => setSchemeName(e.target.value)}
//                     placeholder="Enter Project Name"
//                     className="AddSchemeForm_input"
//                   />
//                 </div>
//                 <button className="addschemecreate_vutton">
//                   Create Scheme
//                 </button>
//               </form>
//             </div>
//           </>
//         )}
//       </div>
//     </>
//   );
// }

// export default Flat;

"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../addflat/AddFlat.css";
import { BsFillBuildingsFill } from "react-icons/bs";
import { AiFillCheckCircle, AiOutlineClockCircle } from "react-icons/ai";
import { FaTrashAlt, FaPlus, FaSearch, FaBuilding } from "react-icons/fa";
import { MdApartment, MdSquareFoot, MdLocationCity } from "react-icons/md";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import Swal from "sweetalert2";
import { BASE_URL } from "../../config";

function Flat() {
  const { id } = useParams();
  const [AddScheme, setAddScheme] = useState(false);
  const [selectStatus, setSelectStatus] = useState("");
  const [Schemename, setSchemeName] = useState("");
  const token = JSON.parse(
    localStorage.getItem("employeROyalmadeLogin")
  )?.token;
  const [myLand, setMyLand] = useState([]);
  const [showCount, setShowCount] = useState("");
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [totalFlat, setTotalFlat] = useState("");
  const [buildingSize, setBuildingSize] = useState("");
  const [searchScheme, setSearchScheme] = useState("");

  function handlescheme(e) {
    e.preventDefault();
    setAddScheme(!AddScheme);
  }

  async function handleCreateScheme(e) {
    e.preventDefault();
    const obj = {
      name: Schemename,
      status: selectStatus,
      landId: id,
      totalflat: totalFlat,
      buildingSize,
    };
    if (!id) {
      return alert("project start from land");
    }
    try {
      const response = await axios.post(`${BASE_URL}/createProject`, obj, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response);
      Swal.fire({
        title: "Success!",
        text: "Scheme added successfully",
        icon: "success",
        confirmButtonColor: "#00d4aa",
      });
      setAddScheme(false);
      setSchemeName("");
      setSelectStatus("");
      setTotalFlat("");
      setBuildingSize("");
      setCount((prevCount) => prevCount + 1);
    } catch (error) {
      console.log(error);
      Swal.fire({
        title: "Error!",
        text: "Failed to add scheme",
        icon: "error",
        confirmButtonColor: "#ff6b6b",
      });
    }
  }

  useEffect(() => {
    async function getLand() {
      try {
        const response = await axios.get(`${BASE_URL}/getAllProjects`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(response.data);
        setMyLand(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getLand();
  }, [id, token, count]);

  function handleclick(id, newname) {
    console.log(id);
    if (!id) {
      return Swal.fire({
        title: "Warning!",
        text: "Project has not started yet",
        icon: "warning",
        confirmButtonColor: "#ffa726",
      });
    }
    navigate(`/flatlist/${id}`, { state: { newname } });
  }

  useEffect(() => {
    async function getingCount() {
      try {
        const response = await axios.get(`${BASE_URL}/count`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });
        console.log(response.data);
        setShowCount(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    getingCount();
  }, []);

  const confirmDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ff6b6b",
      cancelButtonColor: "#74b9ff",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`${BASE_URL}/deleteProject/${id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          });
          setCount((prevCount) => prevCount + 1);

          Swal.fire({
            title: "Deleted!",
            text: "The residency has been deleted.",
            icon: "success",
            confirmButtonColor: "#00d4aa",
          });
        } catch (error) {
          console.error(error);
          Swal.fire({
            title: "Error!",
            text: "Something went wrong while deleting the residency.",
            icon: "error",
            confirmButtonColor: "#ff6b6b",
          });
        }
      }
    });
  };

  const filterScheme = myLand.filter((item) =>
    item.name.toLowerCase().includes(searchScheme.toLowerCase())
  );

  const getStatusColor = (status) => {
    switch (status) {
      case "IN_PROGRESS":
        return "addflat-status-progress";
      case "COMPLETE":
        return "addflat-status-complete";
      case "INACTIVE":
        return "addflat-status-inactive";
      default:
        return "addflat-status-default";
    }
  };

  return (
    <div className="addflat-main-wrapper">
      {/* Navigation Bar */}
      <nav className="addflat-navbar">
        <div className="addflat-nav-content">
          <div className="addflat-logo-section">
            <MdLocationCity className="addflat-logo-icon" />
            <span className="addflat-logo-text">FlatManager Pro</span>
          </div>
          <div className="addflat-nav-actions">
            <button onClick={handlescheme} className="addflat-primary-btn">
              <FaPlus className="addflat-btn-icon" />
              New Scheme
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="addflat-hero-section">
        <div className="addflat-hero-content">
          <h1 className="addflat-hero-title">Residential Scheme Management</h1>

          {/* Search Bar */}
          <div className="addflat-search-wrapper">
            <div className="addflat-search-container">
              <FaSearch className="addflat-search-icon" />
              <input
                type="text"
                placeholder="Search for schemes, projects, or locations..."
                value={searchScheme}
                onChange={(e) => setSearchScheme(e.target.value)}
                className="addflat-search-input"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Overview */}
      {/* <section className="addflat-stats-section">
        <div className="addflat-stats-grid">
          <div className="addflat-stat-card">
            <div className="addflat-stat-icon addflat-stat-icon-total">
              <HiOutlineOfficeBuilding />
            </div>
            <div className="addflat-stat-content">
              <h3 className="addflat-stat-number">{filterScheme.length}</h3>
              <p className="addflat-stat-label">Total Schemes</p>
            </div>
          </div>

          <div className="addflat-stat-card">
            <div className="addflat-stat-icon addflat-stat-icon-active">
              <FaBuilding />
            </div>
            <div className="addflat-stat-content">
              <h3 className="addflat-stat-number">
                {
                  filterScheme.filter((item) => item.status === "IN_PROGRESS")
                    .length
                }
              </h3>
              <p className="addflat-stat-label">Active Projects</p>
            </div>
          </div>

          <div className="addflat-stat-card">
            <div className="addflat-stat-icon addflat-stat-icon-completed">
              <MdApartment />
            </div>
            <div className="addflat-stat-content">
              <h3 className="addflat-stat-number">
                {
                  filterScheme.filter((item) => item.status === "COMPLETE")
                    .length
                }
              </h3>
              <p className="addflat-stat-label">Completed</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* Schemes Section */}
      <section className="addflat-schemes-section">
        <div className="addflat-section-header">
          <h2 className="addflat-section-title">Your Schemes</h2>
          <p className="addflat-section-subtitle">
            Manage and monitor all your residential projects
          </p>
        </div>

        {Array.isArray(filterScheme) && filterScheme.length > 0 ? (
          <div className="addflat-schemes-grid">
            {filterScheme.map((item, index) => {
              const countData = showCount[item.id];
              const availableCount = countData ? countData.AVAILABLE : 0;
              const bookedCount = countData ? countData.BOOKED : 0;

              return (
                <div key={index} className="addflat-scheme-card">
                  <div className="addflat-card-header">
                    <div className="addflat-card-title-section">
                      <div
                        className="addflat-building-icon-container"
                        onClick={() => handleclick(item.id, item.name)}
                      >
                        <BsFillBuildingsFill className="addflat-building-icon" />
                      </div>
                      <div className="addflat-title-info">
                        <h3
                          className="addflat-scheme-title"
                          onClick={() => handleclick(item.id, item.name)}
                        >
                          {item.name}
                        </h3>
                        <span
                          className={`addflat-status-badge ${getStatusColor(
                            item.status
                          )}`}
                        >
                          {item.status?.replace("_", " ")}
                        </span>
                      </div>
                    </div>
                    <button
                      className="addflat-delete-button"
                      onClick={() => confirmDelete(item.id)}
                      title="Delete Scheme"
                    >
                      <FaTrashAlt />
                    </button>
                  </div>

                  <div className="addflat-card-body">
                    <div className="addflat-metrics-row">
                      <div className="addflat-metric-item addflat-metric-booked">
                        <div className="addflat-metric-icon">
                          <AiFillCheckCircle />
                        </div>
                        <div className="addflat-metric-data">
                          <span className="addflat-metric-value">
                            {bookedCount || 0}
                          </span>
                          <span className="addflat-metric-label">Booked</span>
                        </div>
                      </div>

                      <div className="addflat-metric-item addflat-metric-available">
                        <div className="addflat-metric-icon">
                          <AiOutlineClockCircle />
                        </div>
                        <div className="addflat-metric-data">
                          <span className="addflat-metric-value">
                            {availableCount || 0}
                          </span>
                          <span className="addflat-metric-label">
                            Available
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="addflat-details-row">
                      <div className="addflat-detail-item">
                        <MdApartment className="addflat-detail-icon" />
                        <span className="addflat-detail-text">
                          <strong>{item.totalflat || "N/A"}</strong> Total Flats
                        </span>
                      </div>
                      <div className="addflat-detail-item">
                        <MdSquareFoot className="addflat-detail-icon" />
                        <span className="addflat-detail-text">
                          <strong>{item.buildingSize || "N/A"}</strong> Sq.ft
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="addflat-card-footer">
                    <button
                      className="addflat-view-button"
                      onClick={() => handleclick(item.id, item.name)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="addflat-empty-state">
            <div className="addflat-empty-icon">
              <MdLocationCity />
            </div>
            <h3 className="addflat-empty-title">No schemes found</h3>
            <p className="addflat-empty-description">
              {searchScheme
                ? "Try adjusting your search terms"
                : "Create your first scheme to get started"}
            </p>
            {!searchScheme && (
              <button
                onClick={handlescheme}
                className="addflat-empty-action-btn"
              >
                <FaPlus />
                Create First Scheme
              </button>
            )}
          </div>
        )}
      </section>

      {/* Add Scheme Modal */}
      {AddScheme && (
        <div className="addflat-modal-overlay">
          <div className="addflat-modal-container">
            <div className="addflat-modal-header">
              <div className="addflat-modal-title-section">
                <MdApartment className="addflat-modal-icon" />
                <h2 className="addflat-modal-title">Create New Scheme</h2>
              </div>
              <button
                className="addflat-modal-close"
                onClick={() => setAddScheme(false)}
              >
                ×
              </button>
            </div>

            <form onSubmit={handleCreateScheme} className="addflat-form">
              <div className="addflat-form-section">
                <div className="addflat-input-group">
                  <label htmlFor="schemeName" className="addflat-label">
                    Project Name
                  </label>
                  <input
                    id="schemeName"
                    type="text"
                    value={Schemename}
                    onChange={(e) => setSchemeName(e.target.value)}
                    placeholder="Enter project name"
                    className="addflat-input"
                    required
                  />
                </div>

                <div className="addflat-input-group">
                  <label htmlFor="status" className="addflat-label">
                    Project Status
                  </label>
                  <select
                    id="status"
                    value={selectStatus}
                    onChange={(e) => setSelectStatus(e.target.value)}
                    className="addflat-select"
                    required
                  >
                    <option value="">Select Status</option>
                    <option value="IN_PROGRESS">In Progress</option>
                    <option value="COMPLETE">Complete</option>
                    <option value="INACTIVE">Inactive</option>
                  </select>
                </div>

                <div className="addflat-input-row">
                  <div className="addflat-input-group">
                    <label htmlFor="totalFlat" className="addflat-label">
                      Total Flats
                    </label>
                    <input
                      id="totalFlat"
                      type="number"
                      value={totalFlat}
                      onChange={(e) => setTotalFlat(e.target.value)}
                      placeholder="Enter total flats"
                      className="addflat-input"
                      required
                    />
                  </div>

                  <div className="addflat-input-group">
                    <label htmlFor="buildingSize" className="addflat-label">
                      Building Size (Sq.ft)
                    </label>
                    <input
                      id="buildingSize"
                      type="text"
                      value={buildingSize}
                      onChange={(e) => setBuildingSize(e.target.value)}
                      placeholder="Enter building size"
                      className="addflat-input"
                      required
                    />
                  </div>
                </div>
              </div>

              <div className="addflat-form-actions">
                <button
                  type="button"
                  onClick={() => setAddScheme(false)}
                  className="addflat-secondary-btn"
                >
                  Cancel
                </button>
                <button type="submit" className="addflat-primary-btn">
                  <FaPlus className="addflat-btn-icon" />
                  Create Scheme
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Flat;
