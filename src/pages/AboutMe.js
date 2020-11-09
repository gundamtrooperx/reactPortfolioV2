import React from 'react';

import Header from '../components/Header.js';
import Footer from '../components/Footer.js';

function AboutMe() {
    return (<>
        <Header>

        </Header>
        <div className="container">
            <div className="row">
                <div className="col-md-4 justify-content-center">
                    <img src="/images/frankSelfie.jpg" alt="frankSelfie" className="img-fluid img-frankSelfie mx-auto mb-2" id="frankSelfie">

                    </img>
                </div>
                <div className="col-md-9">
                    <p>I'm Frank Carr, not born in Arizona although I have lived here for about 10 years
                            of my life.
                            During my time of living in AZ I have just been working full-time at a car dealership for
                            Honda.
                            Mostly for about 3 years, but I want to start onto a new career which has led me to studying
                            in a online class for the Full-Stack development course from the U-of-A University. I am
                            currently learning the fundamentals
                            of coding. So far with html, css, and js. So right now I may not have much experience but by
                            the end of the course I'll have
                            the skills you are looking for to hire!</p>
                </div>
            </div>
        </div>

        <Footer>

        </Footer>
    </>);
}

export default AboutMe; 