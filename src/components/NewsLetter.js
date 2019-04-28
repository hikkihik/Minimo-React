import React, { Component } from 'react';
import { Form, Input, FormText } from 'reactstrap';

class NewsLetter extends Component {
    render() {
        return (
            <section className="w-100 row-post news-letter">
                <div className="text-center">
                    <h1 className="news-letter__title">Sign up for our newsletter!</h1>
                    <Form>
                        <Input type="text" placeholder="Enter a valid email address" />
                    </Form>
                </div>
            </section>
        );
    }
}

export default NewsLetter;
