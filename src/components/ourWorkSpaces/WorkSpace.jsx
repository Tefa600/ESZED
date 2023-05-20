import React, {useEffect, useState} from "react";
import styles from "./Workspace.module.css";
import R2 from "../../images/coworking.jpg";
import Footer from "../Footer/Footer";
import Reviews from "./Reviews/Reviews";
import axios from "../../api/axios";

export default function WorkSpace() {
    const pathSegments = window.location.pathname.split('/');
    const spaceId = pathSegments[pathSegments.length - 1];
    const [rooms, setRrooms] = useState([]);
    const [pp, setPP] = useState([]);
    useEffect(() => {
        axios.get(`api/places/${spaceId}`).then((response) => {
            setRrooms(response.data.data.rooms);
            // console.log("workspace")
            // console.log(response.data.data);
            // console.log(response.data.data.rooms);
            setPP(response.data.data.placePhotos)
            // console.log(rr);
        });
    }, []);
    R2 = pp[1];
    return (
        <>
            <div
                className="bg_image"
                style={{
                    backgroundImage: "url(" + R2 + ")",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    width: "100%",
                    height: "70vh",
                    color: "#f5f5f5",
                }}
            ></div>
            <div className={`container ${styles.wsName}`}>
                <h2>Majal Coworking space</h2>
            </div>
            <p>{spaceId}</p>
            {/*<p><p>Type: {queryParameters.get("name")}</p></p>*/}
            <div className={`${styles.Rooms}`}>
                <div className="container">
                    <h4 className="my-3">Rooms</h4>
                    <div className="row row-cols-1  row-cols-md-2 g-4">
                        {rooms.map((card) => (
                            // <div className="col-le-1 cardHolder">
                            <div className="col-lg-3">
                                <div key={card.id} className={`card ${styles.cards}`}>
                                    <img
                                        src={card.image}
                                        className={`card-img-top ${styles.cardImg}`}
                                        alt={card.roomType}
                                    />
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-lg-8">
                                                <h6 className="card-title">{card.title}</h6>
                                                <p className="card-text">{card.roomNumber} Seats</p>
                                            </div>
                                            {/* <div className="col-lg-4 m-0">
          <p>from</p>
          <h6>100.0</h6>
          <p>EGP/H</p>
        </div> */}
                                        </div>
                                    </div>
                                    <a
                                        href={"/Booking"}
                                        className={`btn text-white m-auto ${styles.btnCard}`}
                                    >
                                        <span>Book now</span>
                                    </a>
                                </div>
                            </div>
                            // </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container">
                <div className={`${styles.details} my-2`}>
                    <h4>About the workspace</h4>
                    <div className={`${styles.icon}`}>
                        <i class="fa-solid fa-location-dot"></i>
                    </div>
                    <p className="mt-2">Address: 50 MohyEldin Abo El-Azz -Dokki</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
                        nostrum porro commodi quos iusto dolore debitis quia quidem
                        dignissimos ut. Nobis porro asperiores maxime voluptatem aliquid
                        autem placeat architecto quia!
                    </p>
                </div>
                <hr className={`${styles.line}`}></hr>
                <div className="row">
                    <div className="col-lg-6">
                        <div className="amenities">
                            <h5 className="my-2">Amenities</h5>
                            <div className={`${styles.icon}`}>
                                <i class="fa-solid fa-snowflake"></i>
                            </div>
                            <h6>Air Conditioner</h6>
                            <div className={`${styles.icon}`}>
                                <i class="fa-solid fa-mosque"></i>
                            </div>
                            <h6>Prayer room</h6>
                            <div className={`${styles.icon}`}>
                                <i class="fa-solid fa-wifi"></i>
                            </div>
                            <h6>Wifi</h6>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="roles">
                            <h5 className="my-2">Rules</h5>
                            <h6>Lorem ipsum dolor sit.</h6>
                            <h6>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h6>
                            <h6>Lorem ipsum dolor sit amet consectetur.</h6>
                        </div>
                    </div>
                </div>
                <Reviews id={spaceId}/>
            </div>

            <Footer/>
        </>
    );
}
