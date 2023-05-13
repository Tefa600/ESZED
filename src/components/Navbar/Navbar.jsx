import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import styles from "./Navbar.module.css";
import Logo from "../../images/SpaceZone.svg";
import axios from "../../api/axios";
import Cookies from "js-cookie";

export default function Navbar() {
    const [userData, setUserData] = useState([]);
    useEffect(() => {
        axios.get("api/user/me", {headers: {Authorization: `Bearer ${sessionStorage.getItem("token")}`}}).then((e) => {
            // axios.defaults.headers.common["Authorization"] = `Bearer ${e.data.token}`;
            setUserData(e.data.data)
            console.log(userData);
        });
    }, []);

    function Logout() {
        axios.post("api/user/logout").then((e) => {
            console.log(e.status);
        }).catch()

    }

    console.log(Cookies.expires)

    return (<nav
        className={`navbar navbar-expand-lg fixed-top navbar-light text-white ${styles.navBg}`}
    >

        <div className="container-fluid">
            <div className="logoPic">
                <a href="Home" className="logoHome">
                    <img src={Logo} alt="Space Logo"/>
                </a>

            </div>
            <div>
                <div>Hi {userData.userName}  </div>
            </div>

            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportContent"
                aria-controls="navbarText"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className={`navbar-toggler-icon ${styles.togglerIcon}`}/>
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
                        <Link className="nav-link text-white" to="WorkSpace">
                            Workspaces
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="Recommendation">
                            Surf
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link  text-white" to="Contact">
                            Contact Us
                        </Link>
                    </li>
                </ul>
                <ul className="list-unstyled d-flex mb-lg-0">
                    <div className="social-Links d-flex align-items-center">
                        <i className="fab fa-facebook"></i>
                        <i className="fab fa-instagram mx-3"></i>
                        <i className="fab fa-twitter"></i>
                    </div>

                    <li className="nav-item mx-2">
                        <Link className="nav-link fa fa-user" to="UserProfile"></Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link
                            className="nav-link fa fa-users-gear"
                            to="OwnerProfile"
                        ></Link>
                    </li>
                    {(Cookies.expires >= Date.now()) ? <li></li>

                        : <li className="nav-item mx-2">
                            <Link className="nav-link" to="Register">
                                Register
                            </Link>
                        </li>

                    }
                    {(Cookies.expires >= Date.now()) ? <li></li>

                        : <li className="nav-item mx-2">
                            <Link className="nav-link" to="Login">
                                Login
                            </Link>
                        </li>}
                    {(Cookies.expires <= Date.now()) ? <li></li> : <li className="nav-item mx-2">
                        <Link className="nav-link" onClick={Logout} to="Login">
                            Logout
                        </Link>
                    </li>}
                </ul>
            </div>
        </div>
    </nav>);
}
