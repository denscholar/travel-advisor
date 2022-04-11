import React, {useEffect, useState} from 'react';
import GoogleMapReact from 'google-map-react';
import { useMediaQuery } from '@material-ui/core';
import { LocationOnOutlined } from '@material-ui/icons';
import Rating from '@mui/material/Rating';
import { Container } from 'react-bootstrap';
import './Map.css';


const Map = ({ setCoordinates, coordinates, setBounds, places }) => {
  const isDesktop = useMediaQuery('(min-width:600px)');
 
  return (
    <Container fluid style={{ height: '80vh', padding: 0 }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyB0OIvol9LYjmBBIR4bANZ4ffE8INLbxfo' }}
        defaultCenter={coordinates}
        center={coordinates}
        yesIWantToUseGoogleMapApiInternals
        defaultZoom={14}
        margin={[50, 50, 50, 50]}
        onChange={(e) => {
          setCoordinates({ lat: e.center.lat, lng: e.center.lng });
          setBounds({ sw: e.marginBounds.sw, ne: e.marginBounds.ne })
        }}
      // onChildClick={(child) => setChildClicked(child)}
      >
        {places?.map((place, index) => (
          <div className="container"
            lat={Number(place.latitude)}
            lng={Number(place.longitude)}
            key={index}
          >
            {!isDesktop ? (
              <LocationOnOutlined className='location' color='primary' fontSize='large' />
            ) : (
              <div className='image-container'>
                <p>{place.hotel_name_trans.slice(0, 30)}</p>
                <img src={place.max_photo_url} alt={place.hotel_name_trans} />
                <Rating size='small' value={Number(place.review_score)} readOnly style={{
                  marginBottom: '20px',
                }} />

              </div>)}

          </div>
        ))}
      </GoogleMapReact>
    </Container>
  )
}

export default Map