import React from "react";
import "../scss/Cartao.scss";
import {Container, Col, Row, Image} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping , faCreditCard, faMobile, faWallet } from '@fortawesome/free-solid-svg-icons';
import Cart from '../assets/cartao.png';
import posts from "../data/posts.js";
import CardList from "./CardList";

const Cartao = () =>(
    <Container className="text-center text-dark mt-5">
        <Row>
            <Col>
                <h2 className="mx-0 mb-5">Cartão de Cŕedito</h2>
                <Row className="d-lg-none d-block ms-5">
                    <Col className=" ms-5 text-start">
                        <FontAwesomeIcon className="iconcolor" icon={faCreditCard} />
                        <p className="secc">Crédito Pessoal</p>
                    </Col>
                    <Col className="ms-5 text-start">
                        <FontAwesomeIcon className="iconcolor" icon={faCartShopping} />
                        <p className="secc">Pagamentos Online</p>
                    </Col>
                </Row>
                <Row className="d-lg-none d-block ms-5">
                    <Col className="ms-5 text-start">
                        <FontAwesomeIcon className="iconcolor" icon={faMobile} />
                        <p className="secc">APP</p>
                    </Col>
                    <Col className="ms-5 text-start">
                        <FontAwesomeIcon className="iconcolor" icon={faWallet} />
                        <p className="secc">Carteira Digital</p>
                    </Col>
                </Row>
                <Row className="d-none d-lg-inline-block ms-5">
                    <Col className="ms-5 text-start">
                        <FontAwesomeIcon className="iconcolor" icon={faCreditCard} />
                        <p className="secc">Crédito Pessoal</p>
                    </Col>
                    <Col className="ms-5 text-start">
                        <FontAwesomeIcon className="iconcolor" icon={faCartShopping} />
                        <p className="secc">Pagamentos Online</p>
                    </Col>
                </Row>
                <Row className="d-none d-lg-inline-block ms-5">
                    <Col className="ms-5 text-start">
                        <FontAwesomeIcon className="iconcolor" icon={faMobile} />
                        <p className="secc">APP</p>
                    </Col>
                    <Col className="ms-5 text-start">
                        <FontAwesomeIcon className="iconcolor" icon={faWallet} />
                        <p className="secc">Carteira Digital</p>
                    </Col>
                </Row>
            </Col>
            <Col>
                <Image src={Cart} height="200" />
            </Col>
        </Row>
        <CardList posts={posts}/>
    </Container>
);


export default Cartao;