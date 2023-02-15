import React from "react";
import "../scss/Institucional.scss";
import {Container, Row, Col, Button} from "react-bootstrap";
import IconText from "./IconText";

const Institucional = () => (
    <div className="institucional text-light py-5">
        <Container>
            <Row>
                <Col xs={12} lg={5}/>
                <Col xs={12} lg={7}>
                    <h3 className="my-3">Já nascemos digital</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt arcu vel arcu fermentum, eget accumsan dolor dignissim. Nam eget quam semper, varius ligula sed, auctor augue. Maecenas et porta magna. Nulla mattis tortor vitae metus vestibulum scelerisque. Ut mollis a nisl vel suscipit. Curabitur scelerisque placerat ultrices. Proin purus ante, congue vel arcu ac, porta condimentum mauris. Maecenas massa orci, fringilla eget fermentum nec, dignissim nec diam.</p>
                    <IconText/>
                    <Button className="px-5 ms-3 d-block" variant='outline-light'>Abra já sua conta</Button>
                </Col>
            </Row>
        </Container>
    </div>
    
);

export default Institucional;