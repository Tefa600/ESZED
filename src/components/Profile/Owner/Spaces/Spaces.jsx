import React, { useEffect, useState } from "react";
import "./Spaces.css";
import axios from "../../../../api/axios";
import Cookies from "js-cookie";
import CardsUI from "../../../Cards/CardsUI";

function Spaces(props) {
  const [spaceData, setSpaceData] = useState([]);
  console.log();
  // console.log(Cookies.get("token"));

  useEffect(() => {
    axios
      .get("api/owner/getOwnerPlaces", {
        headers: { Authorization: `Bearer ${Cookies.get("token")}` },
      })
      .then((response) => {
        setSpaceData(response.data);
        console.log(response.data);
        // console.log(Cookies.get("token"));
      });
  }, []);

  return (
    <>
      {spaceData.map((spac) => (
        <div key={spac.id} className="sp">
          <CardsUI
            imgsrc={spac.placePhotos}
            title={spac.placeName}
            location={spac.zone}
          />
        </div>
      ))}
    </>
  );
}

export default Spaces;
