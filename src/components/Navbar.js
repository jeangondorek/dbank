import React from "react";
import {Navbar, Nav, NavDropdown, Container, ButtonGroup, Button} from "react-bootstrap";
import "./Navbar.scss";
import Dbank from "../assets/Dbank.svg";

const Navigation = () =>(
    <Navbar variant="dark" expand="lg">
    <Container>
        <Navbar.Brand href="#home">
            <img src={Dbank}
            height="30"
            className="d-inline-block align-top"
            alt="Dbank"
            />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
            <Nav.Link href="#cartao">Cartão</Nav.Link>
            <Nav.Link href="#quem-somos">Quem somos</Nav.Link>
            <Nav.Link href="#faq">FAQ</Nav.Link>
        </Nav>
        <ButtonGroup aria-label="Basic example">
                <Button variant="outline-light">
                    <NavDropdown title="Acessar minha conta" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Acessar minha conta</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                        Separated link
                    </NavDropdown.Item>
                    </NavDropdown>
                </Button>
                <Button variant="outline-light">abra sua conta</Button>
            </ButtonGroup>
        </Navbar.Collapse>
    </Container>
    </Navbar>
);

export default Navigation;