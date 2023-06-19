import React, { useEffect, useState } from "react";
import axios from "../../../../api/axios";
import Cookies from "js-cookie";
import SpacesUi from "./SpacesUi";
import img1 from "../../../../images/4.jpg"

function Spaces() {
  const [spaceData, setSpaceData] = useState([]);

  useEffect(() => {
    axios
      .get("api/owner/getOwnerPlaces", {
        headers: { Authorization: `Bearer ${Cookies.get("token")}` },
      })
      .then((response) => {
        setSpaceData(response.data);
      });
  }, []);

  let WorkspaceForOwner = [
    {
      title: "Majal",
      price: "100",
      image: img1,
      ownerId: "",
    },
  ];

  return (
    <div>
      <SpacesUi bookings={WorkspaceForOwner} />
    </div>
  );
}

export default Spaces;
