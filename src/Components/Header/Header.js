import React from 'react';
// import { Autocomplete } from '@react-google-maps/api';
import { Navbar, Nav, Container } from 'react-bootstrap';
// import { SearchOutlined } from '@material-ui/icons'
// import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './Header.css';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Travel Advisor</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>
                    <div className="form-container">
                        <div className="form">
                            <TextField
                                label="Explore places"
                                size="small"
                            />
                        </div>

                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header