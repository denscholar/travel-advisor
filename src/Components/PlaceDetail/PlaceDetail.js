import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import Rating from '@mui/material/Rating';
import './PlaceDetail.css';

const PlaceDetail = ({ place }) => {

  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  return (
    <Card style={{ marginBottom: '20px' }}>
      <Card.Img variant="top" src={place.max_photo_url} />
      <Card.Body>
        <Card.Title>{place.hotel_name_trans}</Card.Title>
        <div className="address-rating">
          <p className="address">{place.address_trans}</p>
          <Rating size='small' value={Number(place.review_score)} readOnly />
        </div>
        <div className="price-container">
          <p className="price">NGR</p>
          <p className="amount">{place.currency_code === 'NGN' ? numberWithCommas(place.min_total_price) : numberWithCommas(place.min_total_price * 550)}</p>
        </div>
        {/* checking time */}
        <div className="checkin-container">
          <div className="checking">
            <p>Checking Time</p>
            <hr />
            from{' '}<Badge bg="secondary">{place.checkin.from}</Badge>
            {' '}
            to{' '}<Badge bg="secondary">{place.checkin.until}</Badge>
          </div>
          <div className="checking">
            <p>CheckOut Time</p>
            <hr />
            from{' '}<Badge bg="secondary">{place.checkout.from}</Badge>
            {' '}
            to{' '}<Badge bg="secondary">{place.checkout.until}</Badge>
          </div>
        </div>
        {/* Distance */}
        <div className="website-container">
          {place.distances.map((location, index) => (
            <Badge bg="success" key={index}>{location.text}</Badge>
          ))}
          <a href={place.url} target='_blank' rel="noreferrer">Website</a>
        </div>
      </Card.Body>
    </Card>
  )
}

export default PlaceDetail


