import React, { useEffect, useState} from 'react'
import CardsUI from './CardsUI'
import img1 from "../../../images/eco.jpg";
import img2 from "../../../images/creativo-3.jpg";
import img3 from "../../../images/workspace2.jpg";
import axios from "../../../api/axios";


function Cards (){
    const [cardData, setCardData] = useState([]);
    useEffect(() => {
        axios.get("api/places/getAllPlaces").then((response) => {
            setCardData(response.data.data.places);
            console.log(response.data.data.places);
        });
    }, []);
    if (!cardData) {
        return <div>Loading...</div>;
    }
    return(
      <div className='container-fluid d-flex justify-content-center'>
        <div className="row">
            <div className="col-md-4">
                {cardData.map((pace) => (
                    <div key={pace.id}>
                        <CardsUI
                            imgsrc={pace.placePhotos}
                            title={pace.placeName}
                            price={pace.hourPrice}
                            vip={pace.vipHourPrice}
                            location={pace.zone}
                            capacity={pace.numberOfSeats}
                            phone={pace.number}
                        />
                    </div>
                ))}
            </div>
        </div>
      </div>
    )
}
export default Cards