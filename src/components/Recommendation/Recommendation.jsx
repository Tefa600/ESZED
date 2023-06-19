import React, { useEffect, useState } from "react";
import styles from "./Recommendation.module.css";
import Filter from "./Filter/Filter";
import Footer from "../Footer/Footer";
import Cards from "./Cards/Cards";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import Lottie from 'react-lottie';
import * as loadingg from "../../images/69398-loading-animation.json";
import * as donee from "../../images/95775-done-blue.json";

const defaultOptions1 = {
  loop: true,
  autoplay: true,
  animationData: loadingg.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const defaultOptions2 = {
  loop: true,
  autoplay: true,
  animationData: donee.default,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
export default function Recommendation() {
  const [priceMin, setPriceMin] = useState("");
  const [pricMax, setPriceMax] = useState("");
  const [] = useState("");
  const [] = useState("");
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState([]);
  // const [selectedZone, setSelectedZone] = useState("");
  const [priceRange, setPriceRange] = useState({ minPrice: "", maxPrice: "" });
  const [selectedZone, setSelectedZone] = useState("");
  const [showModal, setShowModal] = useState(false);
  const zones = ["Dokki", "Zone 2", "Zone 3"]; // Sample zone data
  const [cardData, setCardData] = useState([]);
  const [data, setData] = useState([]);
  const [loadingScr, setLoadingScr] = useState(undefined);
  const [completed, setcompleted] = useState(undefined);
  // useEffect(() => {
  //   setLoading(true);
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setData(json);
          setLoadingScr(true);

          setTimeout(() => {
            setcompleted(true);
          }, 500);
        });
    }, 1000);
  }, []);

  const fetchSurfData = async () => {
    setLoading(true);
    let url = "api/places/getAllPlaces";
    if (filters.length > 0) {
      url += "?";
    }
    if (filters.includes("Zone")) {
      if (filters.length > 1) {
        url += "&";
      } else {
        url += "";
      }
      url += `zone=${selectedZone}`;
    }
    if (
      filters.includes("price") &&
      priceRange.minPrice !== "" &&
      priceRange.maxPrice !== ""
    ) {
      console.log("price range", priceRange);
      if (filters.length > 1) {
        url += "&";
      } else {
        url += "";
      }
      url += `hourPrice[gte]=${priceRange.minPrice}&hourPrice[lte]=${priceRange.maxPrice}`;
    }
    try {
      const response = await axios.get(url);
      setPlaces(response.data.data.places);
    } catch (error) {
      console.log("Error fetching surf data:", error);
    }
    setLoading(false);
  };
  const FilterList = ({ onZoneFilterChange }) => {
    const [showModal, setShowModal] = useState(false);
    const [zones, setZones] = useState([
      "Dokii",
      "Mohandeseen",
      "Cairo",
      "Nasr City",
      // Add more zones as needed
    ]);
  };

  const handlePriceChange = (field, value) => {
    setPriceRange((prevRange) => ({
      ...prevRange,
      [field]: value,
    }));
  };

  const handleZoneSelect = (zone) => {
    setSelectedZone(zone);
    // setShowModal(false);
  };

  const handleFilterSelect = (filter) => {
    setLoading(true);

    if (filters.includes(filter)) {
      setFilters(filters.filter((f) => f !== filter));
      setSelectedZone(""); // Reset selected zone when unchecking the filter
    } else {
      setFilters([...filters, filter]);
    }
  };

  return (
    <>
      {!completed ?  (
        <>
          {!loadingScr ? (
            <Lottie options={defaultOptions1} style={{
             marginTop:"5rem", display:"flex" , justifyContent:"center", alignContent:"center"
            }} height={300} width={300} />
          ) : (
            <Lottie options={defaultOptions2} height={300} width={300} />
          )}
        </>
      ) : (
        <>

<div className=" row">
          <div className="col-md-2" style={{ fontSize: "12px" }}>
            <Filter />
          </div>
          <div className="col-md-10">
        <div className={`text-center ${styles.client}`}>
          <div className="text-center position-relative d-flex justify-content-center align-items-center">
            <h2 className=" mb-0 position-absolute">Workspaces</h2>
            <h3 className=" mb-0">W</h3>
          </div>
        </div>
       {(!loading && loadingScr )  && <Cards />}
        </div>
      </div>
      <Footer />
      </>
      )}
    </>
  );
}
