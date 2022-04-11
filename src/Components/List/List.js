import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PlaceDetail from '../PlaceDetail/PlaceDetail';
import './List.css';


const List = ({ places }) => {
  // console.log(places);
  const [restaurant, setRestaurant] = useState('Restaurant')
  const [rating, setRating] = useState('');
  
  return (
    <>
      <Container style={{ marginBottom: '1.5rem' }}>
        <h3 className='title'>Restaurants, Hotels and Attractions around you</h3>
        <form>
          <Row>
            <Col>
              <div className="heading">
                Restaurants:
              </div>
              <select value={restaurant} onChange={(e) => setRestaurant(e.target.value)}>
                <option value='Restaurants'>Restaurants</option>
                <option value="Hotels">Hotels</option>
                <option value="Attractions">Attractions</option>
              </select>
            </Col>
            <Col>
              <div className="heading">
                Rating:
              </div>
              <select value={rating} onChange={(e) => setRating(e.target.value)}>
                <option value={0}>All</option>
                <option value={3}>Above 3.0</option>
                <option value={4}>Above 4.0</option>
                <option value={4.5}>Above 4.5</option>
              </select>
            </Col>
          </Row>
        </form>
      </Container>
      <Container fluid="md" className='item-container' >
        <Row>
          {places?.map((place, index) => (
            <Col key={index} xs={12} >
              <PlaceDetail place={place}
               />
            </Col>
          ))}
        </Row>
      </Container>
    </>

  )
}

export default List