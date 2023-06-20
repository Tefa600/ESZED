import React, { useEffect, useState } from "react";
import styles from "../Booking/BB.module.css";
import Payment from "./Payment";
import { Link } from "react-router-dom";
import { differenceInHours, getTime } from "date-fns";
import styless from "../Profile/Owner/AddSpace/Week.module.css";
import axios from "../../api/axios";
import Cookies from "js-cookie";

export default function BB() {
  const [startTime, setStartTime] = useState("");
  const [date, setDate] = useState();
  const [rType, setRType] = useState("");
  const [pName, setPName] = useState("");
  const [endTime, setEndTime] = useState("");
  const [numOfSeats, setNumOfSeats] = useState(1);
  const [phone, setphone] = useState("");
  const [data, setData] = useState();
  const [showDiv, setShowDiv] = useState(false);

  const [paymentMethod, setPaymentMethod] = useState("");
  const pathSegments = window.location.pathname.split("/");
  const roomID = pathSegments[pathSegments.length - 1];
  useEffect(() => {
    axios.get(`api/places/${roomID}`).then((res) => {
      setData(res.data.data);
      console.log(res.data.data);
      setPName(res.data.data.placeName);
      // setRType(data.roomType);
    });
  }, []);

  let numberOfHours = 0;
  if (startTime && endTime) {
    numberOfHours = differenceInHours(
      new getTime(startTime),
      new getTime(endTime)
    );
  }
  const handleClick = () => {
    setShowDiv(!showDiv);
  };

  //and here will put the api

  function handleStartChange(value) {
    setStartTime(value);
    // console.log("check in ", startTime);
  }

  function handleEndChange(value) {
    setEndTime(value);
    // console.log("check out ", endTime);
  }

  const getNextSevenDays = () => {
    const dates = [];
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
    // console.log("date", Date);
  };

  const handlePayment = (e) => {
    setPaymentMethod(e.target.value);
  };
  const token = Cookies.get("token");
  console.log("token  ", token);

  function BookThisRoom() {
    const inputs = {
      startTime: startTime,
      endTime: endTime,
      numberOfSeats: numOfSeats,
      Date: date,
      paymentMethod: paymentMethod,
    };
    console.log("data", data);
    console.log("inputs ", inputs);
    alert("data");
    useEffect(() => {
      axios
        .post(`api/booking/bookSeat/${roomID}`, inputs, {
          headers: { Authorization: `Bearer ${Cookies.get("token")}` },
        })
        .then((res) => {
          alert("done");
          // setRType(data.roomType);
        })
        .catch((err) => {
          console.log("error", err);
          alert("doom");
        });
    }, []);
  }

  return (
    <>
      <div id="booking" className={`mt-3 ${styles.section}`}>
        <div className={`${styles.sectionCenter}`}>
          <div className="container">
            <div className="row">
              <div className={`${styles.bookingForm}`}>
                <div className={`${styles.bookingBg}`}>
                  <div className={`${styles.formHeader}`}>
                    {pName ? <h2> {pName}</h2> : <h2>Make Reservation</h2>}
                    <p>Shared Area</p>
                  </div>
                </div>
                <form>
                  {/* <div className={`${styles.formGroup}`}>
                  <span className={`${styles.formLabel} pe-2`}>Enter your phone</span>
                  <input className={`w-75 ${styles.formControl}`} type="number" min="0" max="11" required />
                </div> */}
                  <div className="row">
                    {/*<div className="col-md-4">*/}
                    {/*  <span className={`${styles.formLabel}`}>Date</span>*/}
                    {/*  <div className="col-lg-2 my-2">*/}
                    {/*    <select*/}
                    {/*      className={`w-175 ${styless.checkControl}`}*/}
                    {/*// required // onChange=*/}
                    {(e) => handleStartChange(e.target.value)}
                    {/*// >/!*      <span className={`${styless.selectArr}`} />*!/*/}
                    {/*      <option value selected hidden>*/}
                    {/*        start:*/}
                    {/*      </option>*/}
                    {/*      {Array.from({ length: 24 }, (_, index) => (*/}
                    {/*        <option key={index}>{index}</option>*/}
                    {/*      ))}*/}
                    {/*    </select>*/}
                    {/*  </div>*/}
                    {/*</div>*/}
                    <div>
                      <h1>Date</h1>
                      <select    className={`w-175 ${styless.checkControl}`} onChange={handleDateChange}>
                        <option> Select a date</option>
                        {getNextSevenDays().map((date, index) => (
                  
                          <option className={`${styless.selectArr}`} key={index} value={date.toISOString()}>
                            {date.toLocaleString().split(",")[0]}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="col-md-4 mt-2">
                      <span className={`${styles.formLabel}`}>Start</span>
                      <div className="col-lg-2">
                        <select
                          className={`w-175 ${styless.checkControl}`}
                          required
                          onChange={(e) => handleStartChange(e.target.value)}
                        >
                          <span className={`${styless.selectArr}`} />
                          <option value selected hidden>
                            start:
                          </option>
                          {Array.from({ length: 24 }, (_, index) => (
                            <option key={index}>{index}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <span className={`${styles.formLabel}`}>End</span>
                      <div className="col-lg-2 my-2">
                        <select
                          className={`w-175 ${styless.checkControl}`}
                          required
                          onChange={(e) => handleEndChange(e.target.value)}
                        >
                          <span className={`${styless.selectArr}`} />
                          <option value selected hidden>
                            end:
                          </option>
                          {Array.from(
                            { length: 24 - Number(startTime) },
                            (_, index) => (
                              <option key={index}>
                                {Number(startTime) + index + 1}
                              </option>
                            )
                          )}
                        </select>
                      </div>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-md-9">
                      <div className={` ${styles.formGroup}`}>
                        <span className={`${styles.formLabel}`}>{rType}</span>
                        <select
                          className={`w-100 ${styles.formControl}`}
                          required
                          onChange={handlePayment}
                        >
                          <span className={`${styles.selectArr}`} />
                          <option  className={` ${styless.checkControl}`}  value selected hidden>
                            Select Payment Method
                          </option>
                          <option>Cash </option>
                          <option>Wallet </option>
                          <option>Credit Card</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-md-2">
                      <div className={`${styles.formGroup}`}>
                        <span className={`${styles.formLabel}`}>Seats</span>
                        <input
                          className={`w-5 ${styles.formControl}`}
                          type="number"
                          min="1"
                          max="20"
                          required
                          placeholder="Enter"
                          value={numOfSeats}
                          onChange={(ev) => setNumOfSeats(ev.target.value)}
                        ></input>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className={`${styles.formGroup}`}>
                        <span className={`${styles.formLabel}`}>Price</span>
                        {startTime && endTime && (
                          <div>
                            {(endTime - startTime) *
                              data.hourPrice *
                              numOfSeats}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/*<div className={`${styles.formGroup}`}>*/}
                  {/*  <label className={`${styles.formLabel} pe-2`}>*/}
                  {/*    Enter your phone*/}
                  {/*  </label>*/}
                  {/*  <input*/}
                  {/*    className={`w-75 ${styles.formControl}`}*/}
                  {/*    type="tel"*/}
                  {/*    required*/}
                  {/*    placeholder="Ex: 01xxxxxxxxx"*/}
                  {/*    value={phone}*/}
                  {/*    onChange={(ev) => setphone(ev.target.value)}*/}
                  {/*  />*/}
                  {/*</div>*/}

                  <div className={`${styles.formBtn}`}>
                    <button
                    onClick={handleClick}
                      // onClick={BookThisRoom}
                      className={`${styles.submitBtn}`}
                    >
                      cash
                      {numberOfHours > 0 && (
                        <span>{numberOfHours}</span>
                        // * place.price
                      )}
                    </button>
                    {showDiv && <div><h2>DONEEEEEEEEEE</h2></div>}
                    <div className={`py-2 ${styles.separator}`}>
                      <hr className={`${styles.line}`} />
                      <p>OR</p>
                      <hr className={`${styles.line}`} />
                    </div>
                    <button className={`${styles.submitBtn}`}>
                      <Link
                        to={"/Payment"}
                        className="btn text-white"
                        style={{ textDecoration: "none" }}
                      >
                        Pay using credit card
                      </Link>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
