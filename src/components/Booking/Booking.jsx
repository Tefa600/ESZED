import React, { useEffect, useState } from "react";
import { Link, Navigate, useHistory } from "react-router-dom";
import Footer from "../Footer/Footer";
import styles from "../Booking/Booking.module.css";
import Pic from "../../images/10.jpg";
import axios from "../../api/axios";
import Calender from "./Calender/Calender";
import { redirect, useNavigate } from "react-router";
import R2 from "../../images/16.jpg";
import R3 from "../../images/17.jpg";
import R4 from "../../images/coworking.jpg"; 
export default function Booking() {
  var currentDateTime = new Date();
  var year = currentDateTime.getFullYear();
  var month = currentDateTime.getMonth() + 1;
  var date = currentDateTime.getDate() + 1;
  var dateTomorrow = year + "-" + month + "-" + date;
  var checkinElem = document.querySelector("#checkin-date");
  var checkoutElem = document.querySelector("#checkout-date");

  const [spaceId, setSpaceId] = useState("");
  const [data, setData] = useState([]);
  // const [title, setTitle] = useState([]);
  let [roomID, setRoomID] = useState("");
  let [roomIndex, setRoomIndex] = useState("");
  const [zoneId, setZoneId] = useState("");
  const [loading, setLoading] = useState(false);
  // }
  const pathSegments = window.location.pathname.split("/");
  let zoneID, roomInd, roomId, title;
  if (pathSegments[pathSegments.length - 2] === "SharedArea") {
    zoneID = pathSegments[pathSegments.length - 1];
    title = "Shared Area";
  } else if (pathSegments[pathSegments.length - 2] === "Silent Room") {
    title = "Silent Room";
    zoneID = pathSegments[pathSegments.length - 1];
  } else {
    roomID = pathSegments[pathSegments.length - 1];
    zoneID = pathSegments[pathSegments.length - 3];
    roomIndex = pathSegments[pathSegments.length - 2];
    //     console.log("room id ", roomID);
  }
  // useEffect(() => {
  //   if (pathSegments[pathSegments.length - 2] === "SharedArea") {
  //     // title="SharedArea";
  //     setTitle("Shared Area");
  //     zoneID = pathSegments[pathSegments.length - 1];
  //     console.log("zone id ", zoneID);
  //   } else if (pathSegments[pathSegments.length - 2] === "SilentRoom") {
  //     // title= "SilentArea";
  //     setTitle("Silent Room");
  //     zoneID = pathSegments[pathSegments.length - 1];
  //     console.log("zone id ", zoneID);
  //     console.log("title", title);
  //   } else {
  //     setRoomID = pathSegments[pathSegments.length - 1];
  //     zoneID = pathSegments[pathSegments.length - 3];
  //     setRoomIndex = pathSegments[pathSegments.length - 2];
  //     console.log("room id ", roomID);
  //   }
  //
  //   // console.log(roomID);
  // }, []);

  useEffect(() => {
    axios.get(`api/places/${zoneID}`).then((res) => {
      setData(res.data.data);
      // console.log("data", data);
    });
  }, []);

  // console.log("daaata ", data);
  // zoneID = data._id;
  // console.log("the zzone Id", String(zoneID));

  {
    /*async function isAvail(e) {*/
  }
  {
    /*    e.preventDefault();*/
  }
  //     setLoading(true);
  //     let testData = await axios
  //         .post(`/api/booking/${spaceId}`)
  //         .then((response) => {
  //
  //         })
  // }

  const navigate = useNavigate();
  function handleSharedBook() {
    // redirect(`BB/SharedBook/${zoneID}`);
    navigate(`../../BB/SharedArea/${zoneID}`, { replace: true });
    // navigate(0);
  }
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
      {
          image: R2,
          caption: 'Room 1'
      },
      {
          image: R3,
          caption: 'Room 2'
      },
      {
          image: R4,
          caption: 'Room 3'
      }
  ];

  const prevSlide = () => {
      setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  const nextSlide = () => {
      setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };


  return (
    <>
      <div>
        <div className={`${styles.breadcrumbSection}`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className={`${styles.breadcrumbText}`}>
                  <h2>Our Room</h2>
                  <div className={`${styles.btOption}`}>
                    <a href="./Home">Home</a>
                    <span>{">"}</span>
                    <span className="ms-2">Rooms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Breadcrumb Section End */}
        {/* Room Details Section Begin */}
        <section className={`spad ${styles.roomDetailsSection}`}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
              <div id="slider" className={`carousel slide ${styles.slider}`} data-bs-ride="carousel">
            <div className="carousel-indicators gliders">
                {slides.map((slide, index) => (
                    <button
                        key={index}
                        type="button"
                        data-bs-target="#slider"
                        data-bs-slide-to={index}
                        className={index === currentSlide ? 'active' : ''}
                        aria-current={index === currentSlide ? 'true' : 'false'}
                        aria-label={`Slide ${index + 1}`}
                    ></button>
                ))}
            </div>
            <div className="coco">
                <button className="carousel-control-prev bb" type="button" onClick={prevSlide}>
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>

                <div className="carousel-inner">
                    {slides.map((slide, index) => (
                        <div key={index} className={`carousel-item ${index === currentSlide ? 'active' : ''}`}>
                            <img src={slide.image} className="d-block w-100" alt={`Slide ${index + 1}`}/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>{slide.caption}</h5>
                            </div>
                        </div>
                    ))}
                </div>

                <button className="carousel-control-next bb" type="button" onClick={nextSlide}>
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            </div>
              </div>
              <div className="col-lg-6">
                <div className={`shadow ${styles.roomBooking}`}>
                  <div className="row">
                    <div className="col-lg-6">
                    <h3>Room Details</h3>
                    </div>
                    <div className="col-lg-6">
                    <div className={`mt-3 ${styles.rdtRight}`}>
                        {/* <div className="rating">
                          <i className="fa fa-icon_star" />
                          <i className="icon_star" />
                          <i className="icon_star" />
                          <i className="icon_star" />
                          <i className="icon_star-half_alt" />
                        </div> */}
                        {zoneID && roomIndex && roomID && (
                          <div onClick={handleSharedBook}>Booking Now Room</div>
                        )}
                        {title === "Shared Area" && (
                          <a href={`/BB/SharedArea/${zoneID}`}>
                            Booking Now Shared
                          </a>
                        )}
                        {title === "Silent Room" && (
                          <div onClick={handleSharedBook}>
                            Booking Now Silent
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
               <div className="container"> 
                 <div className={`${styles.rdText}`}>
                    <div className={`${styles.rdTitle}`}>
                      {roomIndex ? data.roomsB[roomIndex].roomType : title}
            
                    
                    </div>
                    <h2>
                      {roomIndex && (
                        <>
                          {data.rooms[roomIndex].price} EGP <span>/ hour</span>
                        </>
                      )}
                      {title === "Shared Area" && (
                        <>
                          {" "}
                          {data.hourPrice} EGP <span>/ hour</span>
                        </>
                      )}
                      {title === "Silent Room" && (
                        <>
                          {data.silentSeatPrice} EGP / <span>hour</span>{" "}
                        </>
                      )}
                    </h2>
                    <table>
                      <tbody>
                        <tr>
                          <td className={`${styles.ro}`}>Seats:</td>
                          <td>{data.numberOfSeats}</td>
                        </tr>
                        <tr>
                          <td className={`${styles.ro}`}>Capacity:</td>
                          <td>Max person 20</td>
                        </tr>
                        <tr>
                          <td className={`${styles.ro}`}>Services:</td>
                          <td>Wifi, Television,...</td>
                        </tr>
                      </tbody>
                    </table>
                  </div></div>
                  {/* <form action="#">
                    <div className={`${styles.kaka}`}>
                      <div className={`${styles.checkDate}`}>
                        <label htmlFor="date-in">Check In:</label>
                        <input
                          type="time"
                          className="date-input"
                          id="date-in"
                        />
                        <i className="icon_calendar" />
                      </div>
                      <div className={`${styles.checkDate}`}>
                        <label htmlFor="date-out">Check Out:</label>
                        <input
                          type="time"
                          className="date-input"
                          id="date-out"
                        />
                        <i className="icon_calendar" />
                      </div>
                    </div>


                    <div className="row">
                      <div className="col-lg-4">
                        <div className={`${styles.selectOption}`}>
                          <label htmlFor="guest">Guests:</label>
                          <select id="guest">
                            <option value>3</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        {" "}
                        <div className={`${styles.selectOption}`}>
                          <label htmlFor="room">Room:</label>
                          <select id="room">
                            <option value>1 Room</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <button type="submit">
                      <span className="label">Check Availability</span>

                      <span class="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                        >
                          <path fill="none" d="M0 0h24v24H0z"></path>
                          <path
                            fill="currentColor"
                            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                          ></path>
                        </svg>
                      </span>
                    </button>
                  </form> */}
                </div>

                {/* <form action="reservation.php" method="post">
  <div className="elem-group">
    <label htmlFor="name">Your Name</label>
    <input type="text" id="name" name="visitor_name" placeholder="John Doe" pattern="[A-Z\sa-z]{3,20}" required />
  </div>
  <div className="elem-group">
    <label htmlFor="email">Your E-mail</label>
    <input type="email" id="email" name="visitor_email" placeholder="john.doe@email.com" required />
  </div>
  <div className="elem-group">
    <label htmlFor="phone">Your Phone</label>
    <input type="tel" id="phone" name="visitor_phone" placeholder="498-348-3872" pattern="(\d{3})-?\s?(\d{3})-?\s?(\d{4})" required />
  </div>
  <hr />
  <div className="elem-group inlined">
    <label htmlFor="adult">Adults</label>
    <input type="number" id="adult" name="total_adults" placeholder={2} min={1} required />
  </div>
  <div className="elem-group inlined">
    <label htmlFor="child">Children</label>
    <input type="number" id="child" name="total_children" placeholder={2} min={0} required />
  </div>
  <div className="elem-group inlined">
    <label htmlFor="checkin-date">Check-in Date</label>
    <input type="date" id="checkin-date" name="checkin" required />
  </div>
  <div className="elem-group inlined">
    <label htmlFor="checkout-date">Check-out Date</label>
    <input type="date" id="checkout-date" name="checkout" required />
  </div>
  <div className="elem-group">
    <label htmlFor="room-selection">Select Room Preference</label>
    <select id="room-selection" name="room_preference" required>
      <option value>Choose a Room from the List</option>
      <option value="connecting">Connecting</option>
      <option value="adjoining">Adjoining</option>
      <option value="adjacent">Adjacent</option>
    </select>
  </div>
  <hr />
  <div className="elem-group">
    <label htmlFor="message">Anything Else?</label>
    <textarea id="message" name="visitor_message" placeholder="Tell us anything else that might be important." required defaultValue={""} />
  </div>
  <button type="submit">Book The Rooms</button>
</form> */}
              </div>
            </div>
          </div>
        </section>
        {/* Room Details Section End */}
      </div>

      <Footer />
    </>
  );
}
