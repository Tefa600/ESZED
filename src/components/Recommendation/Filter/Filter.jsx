import React, { useEffect, useState } from "react";
import { Slider, RangeSlider } from "rsuite";
import styles from "./Filter.module.css";
import "rsuite/dist/rsuite.css";
import axios from "axios";

export default function Filter() {
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
    if (filters.includes(filter)) {
      setFilters(filters.filter((f) => f !== filter));
      setSelectedZone(""); // Reset selected zone when unchecking the filter
    } else {
      setFilters([...filters, filter]);
    }
  };

  return (
    <div className="container my-component">
      <h3 className="filter-title">Filters:</h3>
      <div className="filter-scrollview-content">
        <button
          className={`btn btn-outline-primary filter-button ${
            filters.includes("price") && "selected-filter-button"
          }`}
          onClick={() => handleFilterSelect("price")}
        >
          <span
            className={`filter-button-text ${
              filters.includes("price") && "selected-filter-button-text"
            }`}
          >
            Price
          </span>
        </button>
        {filters.includes("price") && (
          <div className="price-range-container">
            <input
              className="form-control price-input"
              type="number"
              placeholder="Min Price"
              value={priceRange.minPrice}
              onChange={(event) =>
                handlePriceChange("minPrice", event.target.value)
              }
            />
            <span className="price-range-separator">-</span>
            <input
              className="form-control price-input"
              type="number"
              placeholder="Max Price"
              value={priceRange.maxPrice}
              onChange={(event) =>
                handlePriceChange("maxPrice", event.target.value)
              }
            />
          </div>
        )}
        <button
          className={`btn btn-outline-primary filter-button ${
            filters.includes("Zone") && "selected-filter-button"
          }`}
          onClick={() => handleFilterSelect("Zone")}
        >
          <span
            className={`filter-button-text ${
              filters.includes("Zone") && "selected-filter-button-text"
            }`}
          >
            Zone
          </span>
        </button>
        {filters.includes("Zone") && (
          <div className="zone-container">
            <div className="filter-container">
              <button
                className="btn btn-outline-primary zone-input"
                onClick={() => setShowModal(true)}
              >
                {selectedZone ? selectedZone : "Select Zone"}
              </button>

              {/* Zone Modal */}
              {showModal && (
                <div className="modal-container">
                  <div className="modal-content">
                    <h3 className="modal-title">Select Zone</h3>
                    <ul className="list-group">
                      {zones.map((zone) => (
                        <li key={zone} className="list-group-item">
                          <button
                            className="btn btn-primary"
                            onClick={() => handleZoneSelect(zone)}
                          >
                            {zone}
                          </button>
                        </li>
                      ))}
                    </ul>
                    <button
                      className="btn btn-secondary btn-close-modal"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
        {/* Add more filters as needed */}
      </div>
    </div>
  );
}
