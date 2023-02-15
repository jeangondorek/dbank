import React from "react";
import "../scss/Institucional.scss";
import {Container, Row, Col, Button} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faMobileAndroid, faMobileRetro, faShield } from '@fortawesome/free-solid-svg-icons';

const Institucional = () => (
    <Container className="institucional">
        <Row>
            <Col xs={12} lg={5}/>
            <Col xs={12} lg={7}>
                <h3>Já nascemos digital</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt arcu vel arcu fermentum, eget accumsan dolor dignissim. Nam eget quam semper, varius ligula sed, auctor augue. Maecenas et porta magna. Nulla mattis tortor vitae metus vestibulum scelerisque. Ut mollis a nisl vel suscipit. Curabitur scelerisque placerat ultrices. Proin purus ante, congue vel arcu ac, porta condimentum mauris. Maecenas massa orci, fringilla eget fermentum nec, dignissim nec diam.</p>
                <FontAwesomeIcon className="d-inline" icon={faMobileRetro}/><p className="d-inline">Sem fila e sem burocracia</p>
                <FontAwesomeIcon icon={faMobileAndroid} />
                <FontAwesomeIcon icon={faGlobe} />
                <FontAwesomeIcon icon={faShield} />
                <Button variant='outline-dark' className="d-block">Abra já sua conta</Button>
            </Col>
        </Row>

    </Container>
    
);

export default Institucional;