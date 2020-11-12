import React from 'react';

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

import { Row, Col } from 'react-bootstrap'

function Contact() {
    return (<>
        <Header>

        </Header>
        <div className="container">
            <div className="row">
                <Row className="card width: 18rem" id="contactCard">
                    <Col lg={12} sm={4} md={8}>


                        <Col lg={12} sm={4} md={8}>
                            <div className="card-header" id="contactFeatureLine">
                                <b>Contact Me Information</b>
                            </div>
                            <ul className="list-group list-group-flush" id="contactLines"  >
                                <li className="list-group-item" id="contactLines">Frank Carr</li>
                                <li className="list-group-item" id="contactLines"><b>Mobile Number:</b>  (502) 974-5784</li>
                                <li className="list-group-item" id="contactLines"><b>Email:</b>gundamtrooperx@gmail.com</li>
                            </ul>
                        </Col>


                    </Col>
                </Row>

            </div>
        </div>

        <Footer>

        </Footer>
    </>);
}

export default Contact;

