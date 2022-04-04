import './App.css';
import { Container, Row, Col } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import List from './Components/List/List';
import Header from './Components/Header/Header';
import Map from './Components/Map/Map';

function App() {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col xs={12} md={5}>
            <List />
          </Col>
          <Col xs={6} md={7}>
            <Map />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
