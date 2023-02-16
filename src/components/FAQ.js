import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import FaqIcon from "./FaqIcon";
import "../scss/Faq.scss";

export default function Faq() {
    return (
        <div className='faq text-light'>
            <Container className='d-block d-lg-none'>
                <h3 className='d-flex justify-content-center p-5'>Dúvidas frequentes</h3>
                <Row>
                    <FaqIcon />
                    <Accordion className="d-lg-none d-block text-light" defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>
                                Lorem ipsum dolor sit amet
                            </Accordion.Header>
                            <Accordion.Body className="faq text-light">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt arcu vel arcu fermentum, eget accumsan dolor dignissim. Nam eget quam semper, varius ligula sed, auctor augue. Maecenas et porta magna. Nulla mattis tortor vitae metus vestibulum scelerisque. Ut mollis a nisl vel suscipit. Curabitur scelerisque placerat ultrices. Proin purus ante, congue vel arcu ac, porta condimentum mauris. Maecenas massa orci, fringilla eget fermentum nec, dignissim nec diam.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>
                                Nulla porttitor eros ac ex tristique posuere
                            </Accordion.Header>
                            <Accordion.Body className="faq text-light">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt arcu vel arcu fermentum, eget accumsan dolor dignissim. Nam eget quam semper, varius ligula sed, auctor augue. Maecenas et porta magna. Nulla mattis tortor vitae metus vestibulum scelerisque. Ut mollis a nisl vel suscipit. Curabitur scelerisque placerat ultrices. Proin purus ante, congue vel arcu ac, porta condimentum mauris. Maecenas massa orci, fringilla eget fermentum nec, dignissim nec diam.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>
                                Quisque fringilla tincidunt arcu
                            </Accordion.Header>
                            <Accordion.Body className="faq text-light">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt arcu vel arcu fermentum, eget accumsan dolor dignissim. Nam eget quam semper, varius ligula sed, auctor augue. Maecenas et porta magna. Nulla mattis tortor vitae metus vestibulum scelerisque. Ut mollis a nisl vel suscipit. Curabitur scelerisque placerat ultrices. Proin purus ante, congue vel arcu ac, porta condimentum mauris. Maecenas massa orci, fringilla eget fermentum nec, dignissim nec diam.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item className='mb-5' eventKey="4">
                            <Accordion.Header>
                                Nam elementum lobortis purus a maximus tortor
                            </Accordion.Header>
                            <Accordion.Body className="faq text-light">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt arcu vel arcu fermentum, eget accumsan dolor dignissim. Nam eget quam semper, varius ligula sed, auctor augue. Maecenas et porta magna. Nulla mattis tortor vitae metus vestibulum scelerisque. Ut mollis a nisl vel suscipit. Curabitur scelerisque placerat ultrices. Proin purus ante, congue vel arcu ac, porta condimentum mauris. Maecenas massa orci, fringilla eget fermentum nec, dignissim nec diam.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Row>
            </Container>
            <Container className='d-none d-lg-block text-light'>
                <h3 className='d-flex justify-content-center p-5'>Dúvidas frequentes</h3>
                <Row>
                    <Col className='p-5'>
                        <FaqIcon />
                    </Col>
                    <Col className='mb-5 pb-5'>
                        <Accordion className="d-lg-block d-none text-light" defaultActiveKey="0">
                            <Accordion.Item className="escuro" eventKey="0">
                                <Accordion.Header className="escuro">
                                    Lorem ipsum dolor sit amet
                                </Accordion.Header>
                                <Accordion.Body className="faq text-light">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt arcu vel arcu fermentum, eget accumsan dolor dignissim. Nam eget quam semper, varius ligula sed, auctor augue. Maecenas et porta magna. Nulla mattis tortor vitae metus vestibulum scelerisque. Ut mollis a nisl vel suscipit. Curabitur scelerisque placerat ultrices. Proin purus ante, congue vel arcu ac, porta condimentum mauris. Maecenas massa orci, fringilla eget fermentum nec, dignissim nec diam.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className="escuro" eventKey="2">
                                <Accordion.Header className="accord-h">
                                    Nulla porttitor eros ac ex tristique posuere
                                </Accordion.Header>
                                <Accordion.Body className="faq text-light">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt arcu vel arcu fermentum, eget accumsan dolor dignissim. Nam eget quam semper, varius ligula sed, auctor augue. Maecenas et porta magna. Nulla mattis tortor vitae metus vestibulum scelerisque. Ut mollis a nisl vel suscipit. Curabitur scelerisque placerat ultrices. Proin purus ante, congue vel arcu ac, porta condimentum mauris. Maecenas massa orci, fringilla eget fermentum nec, dignissim nec diam.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item className="escuro" eventKey="3">
                                <Accordion.Header className="accord-h">
                                    Quisque fringilla tincidunt arcu
                                </Accordion.Header>
                                <Accordion.Body className="faq text-light">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt arcu vel arcu fermentum, eget accumsan dolor dignissim. Nam eget quam semper, varius ligula sed, auctor augue. Maecenas et porta magna. Nulla mattis tortor vitae metus vestibulum scelerisque. Ut mollis a nisl vel suscipit. Curabitur scelerisque placerat ultrices. Proin purus ante, congue vel arcu ac, porta condimentum mauris. Maecenas massa orci, fringilla eget fermentum nec, dignissim nec diam.
                                </Accordion.Body>
                            </Accordion.Item><Accordion.Item className="escuro" eventKey="4">
                                <Accordion.Header className="accord-h">
                                    Nam elementum lobortis purus a maximus tortor
                                </Accordion.Header>
                                <Accordion.Body className="faq text-light">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt arcu vel arcu fermentum, eget accumsan dolor dignissim. Nam eget quam semper, varius ligula sed, auctor augue. Maecenas et porta magna. Nulla mattis tortor vitae metus vestibulum scelerisque. Ut mollis a nisl vel suscipit. Curabitur scelerisque placerat ultrices. Proin purus ante, congue vel arcu ac, porta condimentum mauris. Maecenas massa orci, fringilla eget fermentum nec, dignissim nec diam.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}