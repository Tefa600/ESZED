import React, { useEffect, useState } from 'react';
import CardsUI from './CardsUI';
import './Cards.css';
import img1 from '../../../images/eco.jpg';
import img2 from '../../../images/creativo-3.jpg';
import img3 from '../../../images/workspace2.jpg';
import axios from '../../../api/axios';
import { Row, Col } from 'react-bootstrap';

function Cards() {
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    axios.get('api/places/getAllPlaces').then((response) => {
      setCardData(response.data.data.places);
      console.log(response.data.data.places);
      console.log(response.data.data.places[10]._id);
    });
  }, []);

  if (!cardData) {
    return <div className="m-lg-3">Loading...</div>;
  }

  return (
    <Row className="justify-content-center">
      {cardData.map((place) => (
        <Col key={place.id} xs={12} sm={6} md={4} lg={3}>
          <CardsUI
            imgsrc={place.placePhotos}
            title={place.placeName}
            price={place.hourPrice}
            vip={place.vipHourPrice}
            location={place.zone}
            capacity={place.numberOfSeats}
            phone={place.number}
            id={place._id}
          />
        </Col>
      ))}
    </Row>
  );
}

export default Cards;
