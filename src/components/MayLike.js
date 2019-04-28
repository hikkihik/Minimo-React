import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class MayLike extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mayLikePosts: [
                {
                    id: 0,
                    title: "Cold winter days",
                    image: {
                        src: "../images/you-may-also-like-1.jpg",
                        alt: "Cold winter days",
                        imgTitle: "Cold winter days"
                    }
                },
                {
                    id: 1,
                    title: "A day exploring the Alps",
                    image: {
                        src: "../images/you-may-also-like-2.jpg",
                        alt: "A day exploring the Alps",
                        imgTitle: "A day exploring the Alps"
                    }
                },
                {
                    id: 2,
                    title: "American dream",
                    image: {
                        src: "../images/you-may-also-like-3.jpg",
                        alt: "American dream",
                        imgTitle: "American dream"
                    }
                }
            ]
        };
    }

    render() {
        const { mayLikePosts } = this.state;
        return (
            <section className="may-like w-100">
                <Container>
                    <h3 className="may-like__title--small">You may also like</h3>
                    <Row className="may-like__post">
                        {mayLikePosts.map(mayLikePost => (
                            <Col sm="4" className="may-like__item">
                                <a href="javascript:void(0)">
                                    <img src={mayLikePost.image.src} alt={mayLikePost.image.alt} title={mayLikePost.image.imgTitle} className="img-fluid w-100" />
                                </a>
                                <h3 className="may-like__title--big"><a href="javascript:void(0)">{mayLikePost.title}</a></h3>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        );
    }
}

export default MayLike;
