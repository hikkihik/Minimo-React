import React, { Component } from 'react';
import { Container, Row, Col, Form, Input, FormText } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';

class Comments extends Component {
    render() {
        return (
            <section className="comments">
                <Container>
                    <h3 className="comments__title">2 Comments</h3>
                    <Row className="comments__info">
                        <Col>
                            <Row className="comments__description">
                                <Col sm="2" lg="1" className="d-none d-sm-block">
                                    <img src="../images/user-avatar.png" alt="User Avatar" title="User Avatar" className="rounded-circle comments__avatar" />
                                </Col>
                                <Col sm="10" lg="11">
                                    <p className="comments__name">John Doe</p>
                                    <p className="comments__content">
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo!
                                    </p>
                                    <p className="comments__reply">Reply</p>
                                </Col>
                            </Row>
                            <Row className="comments__description">
                                <Col sm="2" lg="1" className="d-none d-sm-block">
                                    <div className="rounded-circle comments__avatar --comment">
                                        <div className="avatar__name">JD</div>
                                    </div>
                                </Col>
                                <Col sm="10" lg="11">
                                    <p className="comments__name">Jane Doe</p>
                                    <p className="comments__content">
                                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.
                                    </p>
                                    <p className="comments__reply">Reply</p>
                                </Col>
                            </Row>
                            <Row className="comments__description">
                                <Col sm="2" lg="1" className="d-none d-sm-block">
                                    <div className="rounded-circle comments__avatar --default">
                                        <div className="avatar__name">JD</div>
                                    </div>
                                </Col>
                                <Col sm="10" lg="11">
                                    <Form>
                                        <Input type="textarea" className="comments__area" placeholder="JOIN THE DISCUSSION"></Input>
                                    </Form>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <div className="d-flex justify-content-end comments__connect">
                        <a href="javascript:void(0)" className="connect__item">Connected with</a>
                        <a href="javascript:void(0)" className="connect__item"><FontAwesomeIcon icon={faTwitter} /></a>
                        <a href="javascript:void(0)" className="connect__item"><FontAwesomeIcon icon={faFacebookF} /></a>
                    </div>
                </Container>
            </section>
        );
    }
}

export default Comments;
