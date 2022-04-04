import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { Navbar, Nav, Container, Form, FormControl } from 'react-bootstrap';
import { SearchOutlined } from '@material-ui/icons'
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
                        <p className='explore'>Explore new places</p>
                        <div className="form">
                            <SearchOutlined />
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-2"
                                    aria-label="Search"
                                />
                            </Form>
                        </div>

                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header