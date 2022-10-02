import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
function NavabarItem({ setLoginUser }) {

    return (
        <div>
            <Navbar bg="success" expand="lg">
                <Container>
                    <Navbar.Brand >Todo-Task</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Link to={'/read'}><Nav.Link href='/read'  >Home</Nav.Link></Link>
                            <Link to={'/create'}><Nav.Link href='/create' >Create</Nav.Link></Link>
                            <Nav.Link href='/' onClick={() => setLoginUser({})}> LogOut</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavabarItem
