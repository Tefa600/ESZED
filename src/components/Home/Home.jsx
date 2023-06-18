import React, { useState } from "react";
import styles from "./Home.module.css";
import Services from "../Services/Services";
import homeBg from "../../images/1.jpg";
import serpic from "../../images/7.jpg";
import serpic1 from "../../images/9.jpg";
import serpic2 from "../../images/10.jpg";
import Footer from "../Footer/Footer";
import About from "../About/About";
import "../About/About.module.css";
import Contact from "../ContactUs/Contact";
import PartnerComponent from "../BecomePartner/BecomePartner";
import axios from "../../api/axios";
import { useNavigate } from "react-router";
import { Navigate } from "react-router-dom";

export default function Home() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const go = false;
  const handleSearch = async () => {
    console.log("final ", search);
    let data = await axios
      .get(`/api/places/getAllPlaces?zone=${search}`)
      .then((response) => {
        console.log(response.data.data);
        alert(`Search Successful`);
        console.log("resss", response.data);
        handleSearch2(search);
      });
  };

  const handleSearch2 = (search) => {
    navigate(`/Recommendation?search=`);
  };
  // navigation.navigate("Surf", { data: response.data.data });

  return (
    <>
      <div
        className="bg_image"
        style={{
          backgroundImage: "url(" + homeBg + ")",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100vh",
          // color: "#f5f5f5",
        }}
      >
        <div className={`buttonBg ${styles.butBg}`}>
          <div>
            <h1>SPACE TO ELEVATE WORK</h1>
            <form>
              <div className="inputZone m-auto my-4">
                <label className="urZone" htmlFor="your_zone">
                  ENTER YOUR ZONE
                </label>
                <input
                  type="text"
                  placeholder="Where do you want to work?"
                  className={`form-control mt-2 ${styles.homeInp}`}
                  name="your_zone"
                  onChange={(e) => {
                    const ss = e.target.value;
                    setSearch(ss);
                  }}
                />
              </div>
              <button
                className={`btn text-white px-4 py-2`}
                style={{ backgroundColor: "#63ace5" }}
                onClick={!go}
              >
                Find Your Workspace
              </button>

              {go && (
                <Navigate
                  to={`Recommendation/yourzone?=${search}`}
                  replace={false}
                />
              )}
              <div className="clearfix"></div>
            </form>
          </div>
        </div>
        <div className="mt-5" id="About">
          <About />
        </div>
        <div className="mt-5" id="Become-Partner">
          <PartnerComponent />
        </div>
        <div className="mt-5" id="Our-Services">
          <Services />
        </div>
        {/* <main ref={contactRef}>{children}</main> */}
        <div className="mt-5" id="Contact-us">
          <Contact />
        </div>

        <Footer></Footer>
      </div>
    </>
  );
}
