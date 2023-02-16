import React from "react";
import "../scss/FaqIcon.scss";
import {Container, Row, Col} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShield, faCreditCard, faWallet, faUserTie } from '@fortawesome/free-solid-svg-icons';

const FaqIcon = () => (
    <Container>
        <Row>
            <Col className="d-lg-block d-none my-5">
                <FontAwesomeIcon className="tamanho me-2 d-inline-block" icon={faCreditCard} /> <h4 className="texxt d-inline-block">Cartão de crédito e débito</h4><br/>
                <FontAwesomeIcon className="tamanho me-2 d-inline-block" icon={faWallet} /> <h4 className="texxt d-inline-block">Conta e abertura</h4><br/>
                <FontAwesomeIcon className="tamanho me-2 d-inline-block" icon={faShield} /> <h4 className="texxt d-inline-block">Token digital</h4><br/>
                <FontAwesomeIcon className="tamanho me-2 d-inline-block" icon={faUserTie} /> <h4 className="texxt d-inline-block">Produtos e serviços</h4><br/>
            </Col>
        </Row>
        <Row className="d-lg-none d-flex justify-content-center mb-5">
            <FontAwesomeIcon className="tamanho d-inline " icon={faCreditCard} /> <h4 className="d-none">Cartão de crédito e débito</h4>
            <FontAwesomeIcon className="tamanho d-inline" icon={faWallet} /> <h4 className="d-none">Conta e abertura</h4>
            <FontAwesomeIcon className="tamanho d-inline" icon={faShield} /> <h4 className="d-none">Token digital</h4>
            <FontAwesomeIcon className="tamanho d-inline" icon={faUserTie} /> <h4 className="d-none">Produtos e serviços</h4>
        </Row>
    </Container>    
);

export default FaqIcon;