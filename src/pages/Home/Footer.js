import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const bgcolour = {
        backgroundColor: '#E5E4E2',
    }
    return (
        <div style={bgcolour} className='container '>
            <div className="row">
                <div className="col-md-3">
                    <h1>KorboJoy</h1>
                    <h4>Rampura</h4>
                    <p>+8801742916158</p>
                    <FontAwesomeIcon icon={faFacebookF} /> Facebook
                    <div>
                        <FontAwesomeIcon icon={faYoutube} /> Youtube
                    </div>

                </div>
                <div className="col-md-3">
                    <h1>Company</h1>
                    <h5>About Us</h5>
                    <h5>Carear</h5>
                    <h5>Contact Us</h5>
                </div>
                <div className="col-md-3">
                    <h1>My Accounr</h1>
                    <h5>Track My Order</h5>
                    <h5>Cart</h5>
                    <h5>Sighn In</h5>
                </div>
                <div className="col-md-3">
                    <h1>Customer Service</h1>
                    <h5>Payment Method</h5>
                    <h5>Money Back Guarantee</h5>
                    <h5>Support Center</h5>
                </div>
            </div>
        </div>
    );
};

export default Footer;