import React from 'react';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

function Footer() {
    return (
        <footer className="mt-25 m-foot-color">
            <Container fluid={true}>
                <Row className="border-top justify-content-between p-3">
                    <Col className="p-0" md={3} sm={12}>
                        Marques Johnson
                    </Col>
                    <Col className="d-flex justify-content-around">
                        <a href="https://www.twitter.com/marques_l_j">Twitter</a>
                        <a href="https://www.linkedin.com/in/marques-johnson">LinkedIn</a>
                        <a href="https://www.github.com/marquesj8023">Github</a>
                    </Col>
                    <Col className="p-0 d-flex justify-content-end" md={3}>
                        This site was made by Marques Johnson
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;