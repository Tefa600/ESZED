// this one when we can get data from database

import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Image } from "react-bootstrap";
import styles from "./HistoryCardOwner.module.css";

const HistoryCardOwner = ({ bookings }) => {
  const navigate = useNavigate();

  const navigateToEditPage = (cardId) => {
    navigate(`/edit/${cardId}`);
  };
  
  return (
    <Container>
      <Row>
          {bookings.map((booking, index) => (
              <Col md={3} key={index} className={`${styles.OHcard} my-3 mx-3 shadow`}
              onClick={() => navigateToEditPage(booking.id)}>
                  <div>
                      <div className={`${styles.OHcardImgg}`}>
                      <Image
                          
                          src={booking.image}
                          alt={booking.title}
                          fluid
                          className={`w-100 ${styles.OimgH}`}
                      />
                      
                      </div>
                      <div className="card-body text-dark">                               
                          <div className={`${styles.Otapp}`}>
                              <span className={`${styles.OcardTitle}`}>{booking.title}
                              </span>
                              <span className={`float-end ${styles.OpriceWs}`}>
                              <div class={`${styles.OverticalLine}`}>
                                  </div>
                              {booking.price}{" "}                                    
                              <span
                                  className={`float-end`}
                                  style={{ fontSize: "9px", color: "gray" }}
                              >
                                  EGP/HOUR
                              </span>
                              </span>
                              <hr></hr>
                          </div>
                          <div >
                              <div className="card-text text-secondary">
                                  {booking.duration}
                              </div>
                              <p>{booking.date}</p>
                          </div>
                      </div>
                  </div>
              </Col>
          ))}
      </Row>
    </Container>
  );
};

export default HistoryCardOwner;
