import React from "react";
import styles from "./Reviews.module.css";
import client2 from "../../../images/client-2.png";
import client3 from "../../../images/client-5.png";

function Reviews(){
    return(
        <>
            <div className={`${styles.reviews}`}>
                <h4>Reviews</h4>
                <div className={`${styles.reviewItem}`}>
                    <div className={`${styles.revPic}`}>
                        <img src={client2} alt />
                    </div>
                    <div className={`${styles.revText}`}>
                        <span>27 Aug 2019</span>
                        <div className="rating">
                            <i className="icon_star" />
                            <i className="icon_star" />
                            <i className="icon_star" />
                            <i className="icon_star" />
                            <i className="icon_star-half_alt" />
                        </div>
                        <h5>Brandon Kelley</h5>
                        <p>Neque porro qui squam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                            adipisci velit, sed quia non numquam eius modi tempora. incidunt ut labore et dolore
                            magnam.</p>
                    </div>
                </div>
                <div className={`${styles.reviewItem}`}>
                    <div className={`${styles.revPic}`}>
                        <img src={client3} alt />
                    </div>
                    <div className={`${styles.revText}`}>
                        <span>27 Aug 2019</span>
                        <div className="rating">
                            <i className="icon_star" />
                            <i className="icon_star" />
                            <i className="icon_star" />
                            <i className="icon_star" />
                            <i className="icon_star-half_alt" />
                        </div>
                        <h5>Brandon Kelley</h5>
                        <p>Neque porro qui squam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                            adipisci velit, sed quia non numquam eius modi tempora. incidunt ut labore et dolore
                            magnam.</p>
                    </div>
                </div>
            </div>
            <div className={`${styles.reviewAdd}`}>
                <h4>Add Review</h4>
                <form action="#" className={`${styles.raForm}`}>
                    <div className="row">
                        <div className="col-lg-6">
                            <input type="text" placeholder="Name*" />
                        </div>
                        <div className="col-lg-6">
                            <input type="text" placeholder="Email*" />
                        </div>
                        <div className="col-lg-12">
                            <div>
                                <h5>You Rating:</h5>
                                <div className="rating">
                                    <i className="icon_star" />
                                    <i className="icon_star" />
                                    <i className="icon_star" />
                                    <i className="icon_star" />
                                    <i className="icon_star-half_alt" />
                                </div>
                            </div>
                            <textarea placeholder="Your Review" defaultValue={""} />
                            <button type="submit">Submit Now</button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}
export default Reviews;