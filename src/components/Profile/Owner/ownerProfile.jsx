import React, { useState, useRef } from "react";
import styles from "./ownerPofile.module.css";
import { Link } from "react-router-dom";
import deleteAccount from "../../../images/deleteAccount.png";
import ShowHistoryOwner from "./ShowHistoryOwner/ShowHistoryOwner";
import OwnerDetails from "./OwnerDetails/OwnerDetails";
import WorkspaceForm from "./WorkspaceForm/WorkspaceForm";
import Amenities from "./Amenities/Amenities";
import axios from "axios";
import { useNavigate } from "react-router-dom";
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
import AddSpace from "./AddSpace/AddSpace";

export default function OwnerProfile({ children }) {
  let oName = window.sessionStorage.getItem("ownerName");
  let oEmail = window.sessionStorage.getItem("ownerEmail");
  let oId = window.sessionStorage.getItem("ownerId");
  let data = [oName, oEmail];
  const [isOpen, setIsOpen] = useState(true);
  const [isOwnerDetailActive, setIsOwnerDetailActive] = useState(false);
  const [isOwnerHistoryActive, setIsOwnerHistoryActive] = useState(false);
  const [isWorkspaceFormActive, setWorkspaceFormActive] = useState(true);
  const [isShowSpacesActive, setIsShowSpacesActive] = useState(false);
  const navigate = useNavigate();
  const toggle = () => setIsOpen(!isOpen);
  const contactRef = useRef(null);
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
    {
      function: () => {
        setIsShowSpacesActive(false);
        setIsOwnerDetailActive(false);
        setWorkspaceFormActive(true);
        setIsOwnerHistoryActive(false);
      },
      name: "Add Spaces",
      icon: <CgPlayListAdd />,
    },
    {
      function: () => {
        // setIsOwnerHistoryActive((current) => !current);
        setIsShowSpacesActive(false);
        setIsOwnerDetailActive(false);
        setWorkspaceFormActive(false);
        setIsOwnerHistoryActive(true);
      },
      name: "Show History",
      icon: <MdHistory />,
    },
    {
      function: () => {
        // <Navigate to={"/Home/#Contact-us"} replace={true} />;
        const contactSection = document.getElementById("Contact-us");
        contactSection.scrollIntoView({ behavior: "smooth" });
      },
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
    <div className={`styles.bigContainer`} style={{ display: "flex" }}>
      <div className={`row`} style={{ flex: 1 }}>
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
          className={`col-md-1 d-flex mt-3 pt-5 ${styles.leftcontainer}`}
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
              // <NavLink
              // className={`${styles.leftBtns}`}
              // activeclassName={`${styles.active}`}
              // >
              <div className={`${styles.leftBtns}`} style={{ display: "flex" }}>
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
              </div>
              // {/* </NavLink> */}
            ))}
          </div>
          <main>{children}</main>
        </div>

        <div
          className="col-md-9 middleContainer mt-5"
          style={{ marginTop: "250px", marginLeft: "50px" }}
        >
          <div className="historyCards mt-3">
            <div
              className="UDetails"
              style={{
                display: isOwnerDetailActive ? "block" : "none",
                width: "35rem",
                marginLeft: "15rem",
              }}
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
              <AddSpace />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
