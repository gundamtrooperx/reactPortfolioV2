import React from 'react';

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import imgProfile from "./frankSelfie.jpg"
import { Row, Col, Container } from 'react-bootstrap'

function Contact() {
    return (<>
        <Header>

        </Header>
        <div className="container">
            <div className="row">
                <Row className="col-md-4 justify-content-center" id="imgProfile">
                    <Col lg={12} sm={4} md={8}>


                        <img src={imgProfile} alt="frankSelfie" className="img-fluid img-frankSelfie mx-auto mb-2" id="frankSelfie">

                        </img>
                    </Col>
                </Row>
                <div className="col-md-9" id="aboutMeParagraph">

                    <p>
                        Contact page
                    </p>

                </div>
            </div>
        </div>

        <Footer>

        </Footer>
    </>);
}

export default Contact;

