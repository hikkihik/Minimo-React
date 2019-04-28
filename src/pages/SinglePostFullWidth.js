import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGooglePlusG, faTumblr, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import MayLike from '../components/MayLike';
import Comments from '../components/Comments';

class SinglePostFullWidth extends Component {
    render() {
        return (
            <div className="SinglePostFullWidth">
                <section className="post">
                    <Container>
                        <Row>
                            <Col>
                                <Link to="/single-post-full-width">
                                    <img src="../images/first-post.jpg" alt="The perfect weekend getaway" title="The perfect weekend getaway" className="img-fluid w-100 post__image" />
                                </Link>
                                <div className="post__content">
                                    <div className="post__tags"><a href="single-post-full-width.html">Photodiary</a></div>
                                    <h1 className="post__title"><a href="single-post-full-width.html">The perfect weekend getaway</a></h1>
                                    <p className="post__description">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <strong>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</strong>, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.<br /><br />

                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                    <img src="../images/photo-1.jpg" alt="The perfect weekend getaway" title="The perfect weekend getaway" className="img-fluid w-100 post__photo" />
                                    <img src="../images/photo-2.jpg" alt="The perfect weekend getaway" title="The perfect weekend getaway" className="img-fluid w-100 post__photo" />
                                    <img src="../images/photo-3.jpg" alt="The perfect weekend getaway" title="The perfect weekend getaway" className="img-fluid w-100 post__photo" />
                                    <blockquote cite="/single-post-full-width/" className="post__quotation">
                                        <q>
                                            <em>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</em>
                                        </q>
                                    </blockquote>
                                    <p className="post__description">
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <strong>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</strong>. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                                    </p>
                                    <div className="d-flex flex-wrap justify-content-end post__share">
                                        <a href="javascript:void(0)" className="share__item">Share</a>
                                        <a href="javascript:void(0)" className="share__item"><FontAwesomeIcon icon={faFacebookF} /></a>
                                        <a href="javascript:void(0)" className="share__item"><FontAwesomeIcon icon={faTwitter} /></a>
                                        <a href="javascript:void(0)" className="share__item"><FontAwesomeIcon icon={faGooglePlusG} /></a>
                                        <a href="javascript:void(0)" className="share__item"><FontAwesomeIcon icon={faTumblr} /></a>
                                        <a href="javascript:void(0)" className="share__item"><FontAwesomeIcon icon={faPinterest} /></a>
                                    </div>
                                    <div className="switch-page">
                                    You can switch page to <Link to="/single-post-sidebar">Single post sidebar <FontAwesomeIcon icon={faLongArrowAltRight} /></Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
                <MayLike />
                <Comments />
            </div>
        );
    }
}

export default SinglePostFullWidth;
