// import React, { useState } from "react";
// import "./ownerPofile.css";
// import { Link } from "react-router-dom";
// import deleteAccount from "../../../images/deleteAccount.png";
// import ShowHistoryOwner from "./ShowHistoryOwner/ShowHistoryOwner";
// import OwnerDetails from "./OwnerDetails/OwnerDetails";
// import WorkspaceForm from "./WorkspaceForm/WorkspaceForm";
// import Amenities from "./Amenities/Amenities";
// import axios from 'axios';
// import Spaces from "./Spaces/Spaces";
// function OwnerProfile() {
//   let data = ["Owner Name", "OWNER_EMAIL@EMAIL.COM"];
//   const [isOwnerDetailActive, setIsOwnerDetailActive] = useState(true);
//   const [isOwnerHistoryActive, setIsOwnerHistoryActive] = useState(false);
//   const [isWorkspaceFormActive, setWorkspaceFormActive] = useState(false);
//   const [isSpaces, setIsSpaces] = useState(false);
//   function hideDeleteBox() {
//     const element = document.getElementById("deleteBox");
//     element.style.display = "none";
//   }
//   function showDeleteBox() {
//     const element = document.getElementById("deleteBox");
//     element.style.display = "flex";
//   }
//   function showODetails() {
//     // setIsOwnerDetailActive((current) => !current);
//     setIsOwnerHistoryActive(false);
//     setWorkspaceFormActive(false);
//     setIsOwnerDetailActive(true);
//     setIsSpaces(false);
//   }
//   function showHODetails() {
//     // setIsOwnerHistoryActive((current) => !current);
//     setIsOwnerDetailActive(false);
//     setWorkspaceFormActive(false);
//     setIsOwnerHistoryActive(true);
//     setIsSpaces(false);
//   }
//   function showOSpaces() {
//     // setIsOwnerHistoryActive((current) => !current);
//     setIsOwnerDetailActive(false);
//     setIsOwnerHistoryActive(false);
//     setWorkspaceFormActive(false);
//     setIsSpaces(true);
//   }
//   const handleWorkspaceCreate = (workspaceData) => {
//     // Send the workspaceData to the backend API for creation
//     axios
//       .post('/api/workspaces', workspaceData)
//       .then((response) => {
//         console.log('Workspace created:', response.data);
//       })
//       .catch((error) => {
//         console.error('Error creating workspace:', error);
//       });
//   };
//   return (
//     <div className="bigContainer">
//       <div id={"deleteBox"} className="alerts">
//         <div className="alertBox">
//           <img src={deleteAccount} alt="Delete Account" />
//           <div className="txt mt-3">Do you want to delete your Account?</div>
//           <div className="alertButtons mt-3">
//             <button className={"deleteAccount btn btn-danger"}>Delete</button>
//             <button className={"btn btn-primary"} onClick={hideDeleteBox}>
//               Cancel
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="leftContainer col-2">
//         {/* <div className="profilePicture mt-1"> */}
//           {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
//           {/* <img
//             src={require("../../../images/owner-profile.png")}
//             alt="Your Picture"
//             className="guestPic"
//           />
//         </div> */}
//         <div className="PGInfo mt-3">
//           {/* {data.map(function (value, index) {
//             return (
//               <div className="PGData" key={index}>
//                 {value}
//               </div>
//             );
//           })} */}
//         </div>
//         <div className={"PGButtonHolder m-4"}>
//           <button
//             className={"btn btn-primary  m-lg-1 PGButtons" } id="button"
//             onClick={showODetails}
//           >
//             Expand Owner Details
//           </button>
//           <button
//             className={"btn btn-primary  m-lg-1 PGButtons"} id="button"
//             onClick={showOSpaces}
//           >
//             Spaces
//           </button>
//           {/* <button
//             className={"btn btn-primary  m-lg-1 PGButtons"} id="button"
//             onClick={showOSpaces}
//           >
//             Add Spaces
//           </button> */}
//           <button
//             className={"btn btn-primary  m-lg-1 PGButtons"} id="button"
//             onClick={showHODetails}
//           >
//             Show History
//           </button>
//           <Link to={"/Contact"} className={"btn btn-primary  m-lg-1 PGButtons"} id="button">
//             Contact Us
//           </Link>
//           <button className={"btn btn-primary  m-lg-1 PGButtons"} id="button">
//             Log out
//           </button>
//           <button className={"btn btn-primary  m-lg-1 PGButtons"} id="button">
//             Reports
//           </button>
//           <button
//             className={"btn btn-danger m-lg-1 PGButtons"} id="button"
//             onClick={showDeleteBox}
//           >
//             Delete Account
//           </button>
//         </div>
//       </div>
//       <div className="middleContainer col-4 mt-3">
//         <div className="historyCards mt-3">
//           <div
//             className="UDetails"
//             style={{ display: isOwnerDetailActive ? "block" : "none" }}
//           >
//             <OwnerDetails></OwnerDetails>
//           </div>
//           <div
//             className="OHistory"
//             style={{ display: isOwnerHistoryActive ? "block" : "none" }}
//           >
//             <ShowHistoryOwner/>
//           </div>
//           <div
//             className="OHistory"
//             style={{ display: isWorkspaceFormActive ? "block" : "none" }}
//           >
//             <WorkspaceForm onWorkspaceCreate={handleWorkspaceCreate} />
//           </div>
//           <div
//             className="OSpaces"
//             style={{ display: isSpaces ? "block" : "none" }}
//           >
//             <Spaces/>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// export default OwnerProfile;
// // import "./ownerPofile.css";
// // import React, { useState } from "react";
// // import Joi from "joi";
// // import axios from '../../../api/axios';
// // import { useNavigate } from "react-router";
// // import LoginBg from "../../../images/10.jpg";
// // import { Link } from "react-router-dom";
// // export default function Login() {
// //   let [user, setUser] = useState({
// //     email: "",
// //     password: "",
// //   });
// //   let [errorMsg, setErrorMsg] = useState("");
// //   let [errorList, setErrorList] = useState([]);
// //   let [loading, setLoading] = useState(false);
// //   const navigate = useNavigate();
// //   function goToHome() {
// //     let path = "/Home";
// //     navigate(path);
// //   }
// //   async function submitFormData(e) {
// //     e.preventDefault();
// //     setLoading(true);
// //     let validationResult = validateForm();
// //     console.log(validationResult);
// //     if (validationResult.error) {
// //       alert('Validation Error')
// //       setErrorList(validationResult.error.details)
// //       setLoading(false);
// //     }
// //     else {
// //       let data = await axios.post(
// //         "/api/user/loginUser",
// //         user,
// //         {
// //           headers: { 'Content-Type': 'application/json' },
// //         }
// //       ).then((e) => {
// //         alert(`Logging in Welcome ${e.data.data.user.userName}`);
// //         window.sessionStorage.setItem('token', e.data.token);
// //         axios.defaults.headers.common["Authorization"] = `Bearer ${e.data.token}`; // this is how you send token in the Authorization as a header
// //         console.log(sessionStorage.getItem("token"))  // this is how you get the token every time as it is stored in sessionStorage
// //         goToHome()
// //       }).catch((err) => {
// //         alert(err.message)
// //         setLoading(false);
// //       })
// //       setLoading(false);
// //     }
// //   }
// //   function validateForm() {
// //     const schema = Joi.object({
// //       email: Joi.string().required(),
// //       password: Joi.string().required(),
// //     });
// //     return schema.validate(user, { abortEarly: false });
// //   }
// //   function getFormValue(e) {
// //     let myUser = { ...user };
// //     myUser[e.target.name] = e.target.value;
// //     setUser(myUser);
// //     console.log(myUser);
// //   }
// //   return (
// //     <>
// //     <div
// //       className="w-100 h-100vh"
// //       style={{
// //         backgroundImage: "url(" + LoginBg + ")",
// //         backgroundSize: "cover",
// //         backgroundPosition: "center",
// //         backgroundRepeat: "no-repeat",
// //         width: "100%",
// //         height: "100vh",
// //         color: "#f5f5f5",
// //       }}
// //     >
// //     <div className="filter">
// //         <div className="container">
// //         <div className="row">
// //         <div className=" col-lg-12">
// //             <form className="form_main" action onSubmit={submitFormData}>
// //             <p className="heading">Login</p>
// //             {errorMsg ? (<div className="alert alert-denger p-1 display-inline-block">{errorMsg}</div>) : ("")}
// //             {errorList.map((error, index) => (<div key={index} className="alert alert-danger p-2 ">{error.message}</div>))}
// //             {/* <p className='text-dark middelText'>as a guest</p> */}
// //             <div className="inputContainer">
// //               <svg viewBox="0 0 16 16" fill="#2e2e2e" height={16} width={16} xmlns="http://www.w3.org/2000/svg" className="inputIcon">
// //                 <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z" />
// //               </svg>
// //               <input placeholder="Email" id="email" className="inputField" type="text" onChange={getFormValue} name="email"/>
// //             </div>
// //             <div className="inputContainer">
// //               <svg viewBox="0 0 16 16" fill="#2e2e2e" height={16} width={16} xmlns="http://www.w3.org/2000/svg" className="inputIcon">
// //                 <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
// //               </svg>
// //               <input placeholder="Password" id="password" className="inputField" type="password"
// //               onChange={getFormValue}
// //               name="password" />
// //             </div>
// //             <button id="button">Submit
// //             {loading ? (<i className="fa fa-spinner fa-spin text-white ps-2"></i>) : (Login)}
// //           </button>
// //             {/* <div className="Forget-password text-end mt-2">
// //             <a href={"/ForgetPassword"} className="text-dark text-decoration-none">Forgot Password?</a>
// //             </div> */}
// //             {/* <div className="signupContainer mt-2">
// //               <p className="pt-3">Don't have any account?</p>
// //               <a href={"/Register"} className="text-white text-decoration-none btnSignUp">Sign up</a>
// //             </div> */}
// //           </form>
// //         </div>
// //         </div>
// //         </div>
// //     </div>
// //     </div>
// //     </>
// //   );
// // }
// ********************************************************
import React, { useState } from "react";
import styles from "./ownerPofile.module.css";
import { Link } from "react-router-dom";
import deleteAccount from "../../../images/deleteAccount.png";
import ShowHistoryOwner from "./ShowHistoryOwner/ShowHistoryOwner";
import OwnerDetails from "./OwnerDetails/OwnerDetails";
import WorkspaceForm from "./WorkspaceForm/WorkspaceForm";
import Amenities from "./Amenities/Amenities";
import axios from "axios";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaUserCircle,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from "react-icons/fa";
import { RiLogoutCircleLine } from "react-icons/ri";
import { CgPlayListAdd } from "react-icons/cg";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { MdHistory } from "react-icons/md";
import { TiDelete } from "react-icons/ti";
import { TbFileReport } from "react-icons/tb";

import { NavLink } from "react-router-dom";
import Spaces from "./Spaces/Spaces";

export default function OwnerProfile({ children }) {
  let oName = window.sessionStorage.getItem("ownerName");
  let oEmail = window.sessionStorage.getItem("ownerEmail");
  let oId = window.sessionStorage.getItem("ownerId");
  let data = [oName, oEmail];
  const [isOpen, setIsOpen] = useState(true);
  const [isOwnerDetailActive, setIsOwnerDetailActive] = useState(true);
  const [isOwnerHistoryActive, setIsOwnerHistoryActive] = useState(false);
  const [isWorkspaceFormActive, setWorkspaceFormActive] = useState(false);
  const [isShowSpacesActive, setIsShowSpacesActive] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      function: () => {
        // setIsOwnerDetailActive((current) => !current);
        setIsOwnerHistoryActive(false);
        setIsShowSpacesActive(false);
        setWorkspaceFormActive(false);
        setIsOwnerDetailActive(true);
      },
      name: "Expand Owner Details",
      icon: <FaUserCircle />,
    },
    {
      function: () => {
        setIsOwnerDetailActive(false);
        setIsOwnerHistoryActive(false);
        setWorkspaceFormActive(false);
        setIsShowSpacesActive(true);
      },
      name: "My Spaces",
      icon: <FaTh fontSize={"15px"} />,
    },
    // {
    //   function: () => {
    //     // setIsOwnerHistoryActive((current) => !current);
    //     setIsOwnerDetailActive(false);
    //     setIsOwnerHistoryActive(false);
    //     setWorkspaceFormActive(true);
    //   },
    //   // name: "My Spaces",
    //   // icon: <FaTh fontSize={"15px"} />,
    // },
    {
      function: "",
      name: "Add Spaces",
      icon: <CgPlayListAdd />,
    },
    {
      function: () => {
        // setIsOwnerHistoryActive((current) => !current);
        setIsOwnerDetailActive(false);
        setWorkspaceFormActive(false);
        setIsShowSpacesActive(false);
        setIsOwnerHistoryActive(true);
      },
      name: "Show History",
      icon: <MdHistory />,
    },
    {
      function: "/Contact",
      name: "Contact Us",
      icon: <MdOutlineConnectWithoutContact />,
    },
    {
      function: "",
      name: "Reports",
      icon: <TbFileReport />,
    },
    {
      function: "/Home",
      name: "Log out",
      icon: <RiLogoutCircleLine />,
    },
    {
      function: "showDeleteBox",
      name: "Delete Account",
      icon: <TiDelete />,
    },
  ];

  function hideDeleteBox() {
    const element = document.getElementById("deleteBox");
    element.style.display = "none";
  }

  // function showDeleteBox() {
  //   const element = document.getElementById("deleteBox");
  //   element.style.display = "flex";
  // }

  // function showODetails() {
  //   // setIsOwnerDetailActive((current) => !current);
  //   setIsOwnerHistoryActive(false);
  //   setWorkspaceFormActive(false);
  //   setIsOwnerDetailActive(true);
  // }
  // function showHODetails() {
  //   // setIsOwnerHistoryActive((current) => !current);
  //   setIsOwnerDetailActive(false);
  //   setWorkspaceFormActive(false);
  //   setIsOwnerHistoryActive(true);
  // }

  // function showOSpaces() {
  //   // setIsOwnerHistoryActive((current) => !current);
  //   setIsOwnerDetailActive(false);
  //   setIsOwnerHistoryActive(false);
  //   setWorkspaceFormActive(true);
  // }

  const handleWorkspaceCreate = (workspaceData) => {
    // Send the workspaceData to the backend API for creation
    axios
      .post("/api/workspaces", workspaceData)
      .then((response) => {
        console.log("Workspace created:", response.data);
      })
      .catch((error) => {
        console.error("Error creating workspace:", error);
      });
  };

  return (
    <div className="bigContainer">
      <div className={`row`}>
        {/* <div id={"deleteBox"} className="alerts">
        <div className="alertBox">
          <img src={deleteAccount} alt="Delete Account" />
          <div className="txt mt-3">Do you want to delete your Account?</div>
          <div className="alertButtons mt-3">
            <button className={"deleteAccount btn btn-danger"}>Delete</button>
            <button className={"btn btn-primary"} onClick={hideDeleteBox}>
              Cancel
            </button>
          </div>
        </div>
      </div> */}
        <div
          className={`col-md-3 mt-3 pt-5 ${styles.leftcontainer}`}
          // style={{ width: "0%" }}
        >
          <div
            style={{ width: isOpen ? "210px" : "50px" }}
            className={`shadow ${styles.sidebar}`}
          >
            <div className={`${styles.topSection}`}>
              <h1
                style={{ display: isOpen ? "block" : "none" }}
                className={`${styles.logo}`}
              >
                Your Profile
              </h1>
              <div
                style={{ marginLeft: isOpen ? "50px" : "0px" }}
                className={`${styles.bars}`}
              >
                <FaBars onClick={toggle} />
              </div>
            </div>
            <div className="profilePicture m-auto">
              <center>
                <img
                  src={require("../../../images/owner-profile.png")}
                  alt="Your Picture"
                  className={`m-auto w-25 ${styles.guestPic}`}
                  style={{ marginLeft: isOpen ? "50px" : "0px" }}
                />
              </center>
            </div>
            <div className="PGInfo m-auto mt-1">
              {data.map(function (value, index) {
                return (
                  <div
                    style={{ display: isOpen ? "block" : "none" }}
                    className={`${styles.PGData}`}
                    key={index}
                  >
                    {value}
                  </div>
                );
              })}
            </div>

            {menuItem.map((item) => (
              <NavLink
                className={`${styles.leftBtns}`}
                activeclassName={`${styles.active}`}
              >
                <div style={{ margin: "auto" }} className={`${styles.icon}`}>
                  {item.icon}
                </div>
                <button
                  style={{
                    display: isOpen ? "block" : "none",
                    textDecoration: "none",
                    border: "0",
                    backgroundColor: "transparent",
                  }}
                  className={`${styles.btnss}`}
                  id="button"
                  onClick={item.function}
                >
                  {item.name}
                </button>
              </NavLink>
            ))}
          </div>
          <main>{children}</main>
        </div>

        <div className="col-md-3 middleContainer mt-3">
          <div className="historyCards mt-3">
            <div
              className="UDetails"
              style={{ display: isOwnerDetailActive ? "block" : "none" }}
            >
              <OwnerDetails />
            </div>
            <div
              className="OSpace"
              style={{ display: isShowSpacesActive ? "block" : "none" }}
            >
              <Spaces id={oId}></Spaces>
            </div>
            <div
              className="OHistory"
              style={{ display: isOwnerHistoryActive ? "block" : "none" }}
            >
              <ShowHistoryOwner />
            </div>

            <div
              className="OHistory"
              style={{ display: isWorkspaceFormActive ? "block" : "none" }}
            >
              <WorkspaceForm onWorkspaceCreate={handleWorkspaceCreate} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className={"PGButtonHolder m-4"}>    


          <button
            className={"btn btn-primary  m-lg-1 PGButtons" } id="button"
            onClick={showODetails}
          >
            Expand Owner Details
          </button>
          <button
            className={"btn btn-primary  m-lg-1 PGButtons"} id="button"
            onClick={showOSpaces}
          >
            Spaces
          </button>
          <button
            className={"btn btn-primary  m-lg-1 PGButtons"} id="button"
            onClick={showOSpaces}
          >
            Add Spaces
          </button>
          <button
            className={"btn btn-primary  m-lg-1 PGButtons"} id="button"
            onClick={showHODetails}
          >
            Show History
          </button>
          <Link to={"/Contact"} className={"btn btn-primary  m-lg-1 PGButtons"} id="button">
            Contact Us
          </Link>
          <button className={"btn btn-primary  m-lg-1 PGButtons"} id="button">
            Log out
          </button>
          <button className={"btn btn-primary  m-lg-1 PGButtons"} id="button">
            Reports
          </button>
          <button
            className={"btn btn-danger m-lg-1 PGButtons"} id="button"
            onClick={showDeleteBox}
          >
            Delete Account
          </button>
          
        </div> */
}
