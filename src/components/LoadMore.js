import React, { Component } from 'react';
import { Container } from 'reactstrap';

class LoadMore extends Component {
    render() {
        return (
            <section className="load-more">
                <Container>
                    <div className="d-flex justify-content-center">
                        <a href="javascript:void(0)" className="btn btn-outline-secondary">Load more</a>
                    </div>
                </Container>
            </section>
        );
    }
}

export default LoadMore;
