import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

class Footer extends Component {
    render() {
        return (
            <footer>
                <Container fluid="true">
                    <Container>
                        <Row>
                            <Col sm="6">
                                <div className="footer__left">
                                    <a href="javascript:void(0)">Terms and conditions</a>
						            <a href="javascript:void(0)">Privacy</a>
                                </div>
                            </Col>
                            <Col sm="6">
                                <div className="footer__right">
                                    <a href="#">Follow</a>
                                    <a href="#"><FontAwesomeIcon icon={faFacebookF} className="footer__icon" /></a>
                                    <a href="#"><FontAwesomeIcon icon={faTwitter} className="footer__icon" /></a>
                                    <a href="#"><FontAwesomeIcon icon={faInstagram} className="footer__icon" /></a>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </Container>
            </footer>
        );
    }
}

export default Footer;
