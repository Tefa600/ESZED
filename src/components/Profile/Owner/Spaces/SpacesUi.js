// this one when we can get data from database

import React from "react";
import { useNavigate, Link} from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "./SpacesUi.module.css";
import { MdOutlineChair } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
const SpacesUi = ({ bookings }) => {
  const navigate = useNavigate();

  const navigateToEditPage = (cardId, index,ownerId) => {
    navigate(`/edit/${cardId}/${index}/${ownerId}`);
  };

  return (
    <Container>
      <Row>
        {bookings.map((booking, index) => (
          <Col
            md={3}
            key={index}
            className={`${styles.OHcard} my-3 mx-3 shadow`}
            onClick={() => navigateToEditPage(booking.id, index, booking.ownerId)}
          >
                  <div>
                      <div className={`${styles.OHcardImgg}`}>
                      <Image
                          
                          src={booking.image}
                          alt={booking.title}
                          fluid
                          className={`w-100 ${styles.OimgH}`}
                      />
                      
                      </div>
                      <div className={`${styles.zoneWs}`}>
          <span className={`${styles.innerText}`}>{bookings.location}</span>
        </div>
        <div className={`${styles.contentofCard}`}>
          <div className="tapp ">
          <span className={`${styles.cardTitle}`}>{bookings.title}</span>
            <span className={`float-end ${styles.priceWs}`}>
              {bookings.price}{" "}
              <span
                className={`float-end`}
                style={{ fontSize: "9px", color: "gray" }}
              >
                EGP/HOUR
              </span>
            </span>
            <hr></hr>
          </div>
          <div className="seatnum ">
            <span className={` px-2 ${styles.cardSubtitle}`}>
              4 Rooms and Shared Area{" "}
            </span>
            <div className="d-flex seats">
              <span className={` px-2 ${styles.cardSubtitle}`}>
                {" "}
                <MdOutlineChair fontSize={16} /> {bookings.capacity} seat{" "}
              </span>
              <span className={` px-1 ${styles.cardSubtitle}`}>
                {" "}
                <BsTelephone fontSize={12} /> {bookings.phone}
              </span>
            </div>
            
          </div>
        </div>
                  </div>
              </Col>
          ))}
      </Row>
    </Container>
  );
};

export default SpacesUi;
