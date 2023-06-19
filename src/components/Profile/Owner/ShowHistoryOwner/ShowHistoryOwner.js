import React from "react";
import HistoryCardOwner from "./HistoryCardOwner";
import img1 from "../../../../images/4.jpg"
import { Row, Col } from 'react-bootstrap';
const ShowHistoryOwner = () => {
  let bookingsHistoryForOwner = [
    {
      title: "Majal",
      price: "100",
      image:img1
    },
  ];
  return (
    
    <div >
    <HistoryCardOwner bookings={bookingsHistoryForOwner}></HistoryCardOwner>
    </div>
        
     
  );
};

export default ShowHistoryOwner;
