import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

class RowPostOne extends Component {
    constructor(props) {
        super(props);

        this.state = {
            rowPosts: [
                {
                    id: 0,
                    title: "More than just a music festival",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
                    tags: "Lifestyle",
                    image: { 
                        src: "images/1-row-left.jpg",
                        alt: "More than just a music festival",
                        imgTitle: "More than just a music festival" 
                    }
                },
                {
                    id: 1,
                    title: "Life tastes better with coffee",
                    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
                    tags: "Lifestyle",
                    image: { 
                        src: "images/1-row-right.jpg",
                        alt: "Life tastes better with coffee",
                        imgTitle: "Life tastes better with coffee"
                    }
                }
            ]
        };
    }

    render() {
        const { rowPosts } = this.state;
        return (
            <section className="row-post">
                <Container>
                    <Row>
                        {rowPosts.map(rowPost => (
                            <Col sm="6">
                                <a href="javascript:void(0)">
                                    <img src={rowPost.image.src} alt={rowPost.image.alt} title={rowPost.image.imgTitle} className="img-fluid w-100" />
                                </a>
                                <div className="row__content">
                                    <div className="row__tags"><a href="javascript:void(0)">{rowPost.tags}</a></div>
                                    <h1 className="row__title"><a href="javascript:void(0)">{rowPost.title}</a></h1>
                                    <p className="row__description">
                                        {rowPost.description}
                                    </p>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </section>
        );
    }
}

export default RowPostOne;
