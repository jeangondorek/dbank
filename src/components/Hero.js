import React from "react";
import "../scss/Hero.scss";
import {Row, Col,Button, Image, Container} from "react-bootstrap";
import mpmo from "../assets/logo__magic-pay--mobile.png";
import mp from "../assets/logo__magic-pay.png";

const Hero = () =>(
    <Container fluid className="hero text-center text-light">
        <Row>
            <Col lg className="colum text-lg-right my-lg-5">
                <Image className="f d-none d-lg-inline-block" src={mp} />
                <Image className="f d-lg-none" src={mpmo} />
            </Col>
            <Col lg className="f colum text-lg-left my-lg-5">
                <p className="f" >Pague suas contas pelo nosso APP</p>
                <Button variant="outline-light">Abra sua conta</Button>
            </Col>
        </Row>
    </Container>
);

export default Hero;