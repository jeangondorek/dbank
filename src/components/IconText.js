import React from "react";
import "../scss/Institucional.scss";
import {Container, Row, Col} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faMobileAndroid, faMobileRetro, faShield } from '@fortawesome/free-solid-svg-icons';

const IconText = ({icon, size}) => (
    <Container>
        <Row>
            <Col className="my-5">
                <FontAwesomeIcon className="me-2 d-inline-block" icon={faMobileRetro} /> <p className="d-inline-block">Sem fila e sem burocracia</p><br/>
                <FontAwesomeIcon className="me-2 d-inline-block" icon={faMobileAndroid} /> <p className="d-inline-block">Simples e prático</p><br/>
                <FontAwesomeIcon className="me-2 d-inline-block" icon={faGlobe} /> <p className="d-inline-block">Abertura de conta 100% online</p><br/>
                <FontAwesomeIcon className="me-2 d-inline-block" icon={faShield} /> <p className="d-inline-block">Transações mais seguras</p><br/>
            </Col>
        </Row>
    </Container>    
);

export default IconText;