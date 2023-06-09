import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import Logo from "../../images/SpaceZone.svg";
import axios from "../../api/axios";
import Cookies from "js-cookie";
import { HashLink } from "react-router-hash-link";

export default function Navbar({ loginData }) {
  console.log(loginData);

  const [userData, setUserData] = useState([]);
  useEffect(() => {
    axios
      .get("api/user/me", {
        headers: { Authorization: `Bearer ${sessionStorage.getItem("token")}` },
      })
      .then((e) => {
        // axios.defaults.headers.common["Authorization"] = `Bearer ${e.data.token}`;
        setUserData(e.data.data);
        console.log(userData);
      });
  }, []);

  function deleteCookie(name) {
    document.cookie =
      name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  }

  function Logout() {
    Cookies.remove("token");
    axios
      .post("api/user/logout")
      .then((e) => {
        console.log(e.status);
        console.log(Cookies.get("token"));
      })
      .catch();
  }

  console.log(Cookies.expires);

  deleteCookie("login_data");
  axios
    .post("api/user/logout")
    .then((e) => {
      console.log(e.status);
    })
    .catch();

  console.log(Cookies.expires);
  return (
    // fixed-top add it to class name to make it fixed
    <nav
      className={`navbar navbar-expand-lg  navbar-light text-white ${styles.navBg}`}
    >
      <div className="container-fluid">
        <div className="logoPic">
          <a href="Home" className="logoHome">
            <img src={Logo} alt="Space Logo" />
          </a>
        </div>
        <div></div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportContent"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className={`navbar-toggler-icon ${styles.togglerIcon}`} />
        </button>
        <div
          className={`collapse navbar-collapse  ${styles.items}`}
          id="navbarSupportContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item active ">
              <Link className="nav-link text-white" to="Home">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="About">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="Services">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="Recommendation">
                Workspaces
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link  text-white" to="Contact">
                Contact Us
              </Link>
            </li>
          </ul>
          <ul className="list-unstyled d-flex mb-lg-0">
            <li className="nav-item mx-2">
              <Link className="nav-link fa fa-user" to="UserProfile"></Link>
            </li>
            <li className="nav-item mx-2">
              <Link
                className="nav-link fa fa-users-gear"
                to="OwnerProfile"
              ></Link>
            </li>

            {!loginData ? (
              <>
                {" "}
                <li>
                  <div className={`${styles.dropdown}`}>
                    <button className={` px-2 ${styles.dropbtn}`}>
                      Login
                      <i className="fa fa-caret-down px-1 " />
                    </button>
                    <div className={`${styles.dropdownContent}`}>
                      <a href="Login">as a guest</a>
                      <a href="Ologin">as a owner</a>
                    </div>
                  </div>
                </li>
                <li>
                  <div className={`${styles.dropdown}`}>
                    <button className={`px-2 ${styles.dropbtn}`}>
                      Sign up
                      <i className="fa fa-caret-down px-1" />
                    </button>
                    <div className={`${styles.dropdownContent}`}>
                      <a href="Register">as a guest</a>
                      <a href="Osignup">as a owner</a>
                    </div>
                  </div>
                </li>
              </>
            ) : (
              <li className="nav-item mx-2">
                <Link className="nav-link" onClick={Logout} to="Login">
                  Logout
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
