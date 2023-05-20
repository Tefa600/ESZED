import React, {useEffect, useState} from "react";
import styles from "./Reviews.module.css";
import client2 from "../../../images/client-2.png";
import client3 from "../../../images/client-5.png";
import axios from "../../../api/axios";
import AddReviews from "./AddReviews";

var userNames = []

function Reviews(props) {
    const pathSegments = window.location.pathname.split('/');
    const spaceId = pathSegments[pathSegments.length - 1];
    const [feedback, setFeedback] = useState([]);
    const [userData, setUserData] = useState([]);
    const [uuu, setUuu] = useState([]);
    useEffect(() => {
        axios.get(`api/places/getFeedBacks/${spaceId}`).then((response) => {

            setFeedback(response.data.data);
            console.log(response.data.data[0].userID);
            console.log("before ")
            for (let i = 0; i < (response.data.data).length; i++) {
                axios.get(`api/user/${response.data.data[i].userID}`).then((response) => {
                    userNames.push(response.data.currentUser.userName)

                    setUuu(response.data);

                    // console.log(response.data)
                    console.log(userNames);

                })
            }
        });
        // axios.get(`api/user/me`, {headers: {Authorization: `Bearer ${Cookies.get("token")}`}}).then((e) => {
        //     // axios.defaults.headers.common["Authorization"] = `Bearer ${e.data.token}`;
        //     setUserData(e.data.data);
        //     // {
        //     //     Cookies.getItem("token")
        //     // }
        // });
    }, []);


    // let rates= feedback[0].feedbackNumber;
    //
    // ;
    // for (let  i =0 ; i<feedback.data.data.length-1; )
    // if (rates === 1) {
    //     rates = <h1>1 Star</h1>;
    // } else if (rates === 2) {
    //     rates = <h1>2 Stars</h1>;
    // } else {
    //     rates = <h1>No Stars</h1>;
    // }

    // const rates = feedback[0].feedbackNumber;
    // console.log(feedback);
    // console.log(userData);
    console.log(uuu);
    console.log(userNames);

    let counter = 0;
    return (<>
        <div className={`${styles.reviews}`}>
            <h4>Reviews</h4>
            {feedback.map((feed) => (<div className={`${styles.reviewItem}`}>
                    <div className={`${styles.revPic}`}>
                        <img src={client3} alt/>
                    </div>
                    <div className={`${styles.revText}`}>
                        <h5>{userNames[userNames.length - 1]}</h5>
                        <div>
                            <div className="rating">
                                {feed.feedbackNumber === 1 ? <i className="fa fa-star"/> : <></>}
                                {feed.feedbackNumber === 2 ?
                                    <div><i className="fa fa-star"/><i className="fa fa-star"/></div> : <></>}
                                {feed.feedbackNumber === 3 ?
                                    <div><i className="fa fa-star"/><i className="fa fa-star"/><i
                                        className="fa fa-star"/></div> : <></>}
                                {feed.feedbackNumber === 4 ?
                                    <div><i className="fa fa-star"/><i className="fa fa-star"/><i
                                        className="fa fa-star"/><i className="fa fa-star"/></div> : <></>}
                                {feed.feedbackNumber === 5 ?
                                    <div><i className="fa fa-star"/><i className="fa fa-star"/><i
                                        className="fa fa-star"/><i className="fa fa-star"/><i
                                        className="fa fa-star"/></div> : <></>}
                            </div>
                            <p>{feed.feedbackText}</p>
                        </div>
                    </div>
                </div>))}
        </div>
        <AddReviews/>
    </>);
}

export default Reviews;