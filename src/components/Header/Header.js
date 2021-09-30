import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className ="justify-content-center">
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand >React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="me-auto ">
                            <Link className = "text-white text-decoration-none  me-3" to="/home">Home</Link>
                            <Link className = "text-white text-decoration-none  me-3" to="/restaurent">Restaurent</Link>
                            <Link className = "text-white text-decoration-none" to="/features">Features</Link>
                        </Nav>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;