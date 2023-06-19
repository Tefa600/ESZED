import React, { useEffect, useState } from "react";
import axios from "../../../../api/axios";
import { Container, Row, Col } from 'react-bootstrap';
import Cookies from "js-cookie";
import Logo from "../../../../images/SpaceZone.svg";
import styles from "./ShowHistory.module.css";

const ShowHistory = () => {
  const [upcomingBookings, setUpcomingBookings] = useState([]);
  const [bookingHistory, setBookingHistory] = useState([]);
  const [HisData, setHisData] = useState([]);
  const [placeID, setPlaceID] = useState([]);

  console.log("token", Cookies.get("token"));

  useEffect(() => {
    axios.get(`api/user/getMyBookings/${placeID}`, { headers: { Authorization: `Bearer ${Cookies.get("token")}` } }).then((e) => {
      const bookings = e.data.bookings;
      setHisData(bookings);
      console.log("idd  ", bookings);
      console.log("dataa", HisData);
      filterBookings(bookings);
    });
  }, []);

  const filterBookings = (bookings) => {
    const currentDate = new Date();
    const upcoming = [];
    const history = [];

    bookings.forEach((booking) => {
      const endTime = new Date(booking.endTime);
      if (endTime > currentDate) {
        upcoming.push(booking);
      } else {
        history.push(booking);
      }
    });

    setUpcomingBookings(upcoming);
    setBookingHistory(history);
  };

  return (
    <div>
      <div>
        <p className={`${styles.BookingTitle}`}>Upcoming</p>
        {upcomingBookings.length === 0 ? (
          <div className={`${styles.noBook}`}>
            <div>
              <img src={Logo} alt="Space Logo" className={`${styles.imgBo}`} />
              <p>You have no upcoming bookings</p>
            </div>
          </div>
        ) : (
          <Container>
            <Row>
              {upcomingBookings.map((place) => (
                <Col md={3} className={`${styles.Hcard} my-3 mx-3 shadow`} key={place.id}>
                  <div className="overflow">
                    <div className="card-body text-dark">
                      <div className={`${styles.tapp}`}>
                        <span className={`${styles.cardTitle}`}>{place.placeName}</span>
                        <span className={`float-end ${styles.priceWs}`}>
                          {place.priceToPay}{" "}
                          <span className={`float-end`} style={{ fontSize: "9px", color: "gray" }}>
                            EGP/HOUR
                          </span>
                        </span>
                        <hr />
                      </div>
                      <div className="card-footer">
                                    <div className="card-text text-secondary">
                                        {place.startTime}
                                    </div>
                                    {place.endTime}
                                </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        )}
        <hr></hr>
      </div>

      <div>
        <p className={`${styles.BookingTitle}`}>History</p>
        {bookingHistory.length === 0 ? (
          <div className="noBook">
            <div>
              <img src={Logo} alt="Space Logo" className="imgBo" />
              <p>You have no booking history</p>
            </div>
          </div>
        ) : (
          <Container>
            <Row>
              {bookingHistory.map((place) => (
                <Col md={3} className={`${styles.Hcard} my-3 mx-3 shadow`} key={place.id}>
                  <div className="overflow">
                    <div className="card-body text-dark">
                      <div className={`${styles.tapp}`}>
                        <span className={`${styles.cardTitle}`}>{place.placeName}</span>
                        <span className={`float-end ${styles.priceWs}`}>
                          {place.priceToPay}{" "}
                          <span className={`float-end`} style={{ fontSize: "9px", color: "gray" }}>
                            EGP/HOUR
                          </span>
                        </span>
                        <hr />
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        )}
      </div>
    </div>
  );
};

export default ShowHistory;