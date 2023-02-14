import React from "react";
import {Card,Button, Container} from "react-bootstrap";

const CardList = ({posts}) =>(
    <Container className="mt-5">
        {posts.map(({id,image,title,excerpt,action}) => (
            <Card key={id} xs={12} lg={4} className="d-inline-block m-3" style={{ width: '18rem'}}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {excerpt}
                    </Card.Text>
                    <Button variant="danger">{action}</Button>
                </Card.Body>
            </Card>
            )
        )}
    </Container>
);

export default CardList;