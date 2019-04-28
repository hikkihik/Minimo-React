import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";

class Post extends Component {
    render() {
        return (
            <section className="post">
                <Container>
                    <Row>
                        <Col>
                            <Link to="/single-post-full-width">
                                <img src="images/first-post.jpg" alt="The perfect weekend getaway" title="The perfect weekend getaway" className="img-fluid w-100 post__image" />
                            </Link>
                            <div className="post__content">
                                <div className="post__tags"><Link to="/single-post-full-width/">Photodiary</Link></div>
                                <h1 className="post__title"><Link to="/single-post-full-width/">The perfect weekend getaway</Link></h1>
                                <p className="post__description">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                                </p>
                                <div className="post__leave-comment"><a href="javascript:void(0)">Leave a comment</a></div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}

export default Post;
