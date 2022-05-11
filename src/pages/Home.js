import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Main from '../components/main';


export default function Home() {
    return (
        <Container className="wrapper">
            <Row>
                <Col>
                   <Main/>
                </Col>
            </Row>
           
        </Container>
    )
}