import './App.css';
import { Container, Row, Col } from 'react-bootstrap'
import { getPlacesData } from './Api/Index';
import 'bootstrap/dist/css/bootstrap.min.css';
import List from './Components/List/List';
import Header from './Components/Header/Header';
import Map from './Components/Map/Map';
import { useEffect, useState } from 'react';


function App() {
  const [placesData, setPlacesData] = useState([]);
  const [coordinates, setCoordinates] = useState({});
  const [bounds, setBounds] = useState({});

  // useEffect that gives the current location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoordinates({ lat: latitude, lng: longitude })
    })
  }, [])

  useEffect(() => {
    let isSubscribed = true;
    getPlacesData(coordinates.lat, coordinates.lng)
      .then((data) => {
        setPlacesData(data);
      });

      return () =>{
      isSubscribed = false
      }  
  }, [coordinates.lat, coordinates.lng])


  return (
    <>
      <Header />
      <Container fluid>
        <Row>
          <Col xs={12} md={4}>
            <List places={placesData}
             />
          </Col>
          <Col xs={6} md={8}>
            <Map
              setBounds={setBounds}
              coordinates={coordinates}
              setCoordinates={setCoordinates}
              places={placesData}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
