import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';

class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            topPosts: [
                {
                    title: "A day exploring the Alps",
                    comments: 24
                },
                {
                    title: "American dream",
                    comments: 19
                },
                {
                    title: "Cold winter days",
                    comments: 15
                }
            ]
        };
    }

    render() {
        const { topPosts } = this.state;
        return (
            <section className="sidebar">
                <img src="../images/bio-image.jpg" alt="About me" title="About me" className="img-fluid w-100" />
                <div className="about-me">
                    <h3 className="about-me__title"><a href="javascript:void(0)">About me</a></h3>
					<p className="about-me__description">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
					</p>
					<div className="d-flex icons">
						<a href="#" class="icons__item"><FontAwesomeIcon icon={faFacebookF} className="footer__icon" /></a>
						<a href="#" class="icons__item"><FontAwesomeIcon icon={faInstagram} className="footer__icon" /></a>
						<a href="#" class="icons__item"><FontAwesomeIcon icon={faPinterest} className="footer__icon" /></a>
					</div>
                </div>
                <div className="top-post">
					<h4 className="top-post__title">Top posts</h4>
					<ul className="top-post__content">
                        {topPosts.map(topPost => (
                            <li className="top-post__item">
                                <a href="javascript:void(0)">{topPost.title}</a>
                                <p className="top-post__comment">{topPost.comments} comments</p>
                            </li>
                        ))}
					</ul>
				</div>
                <div className="banner">
					<img src="../images/banner-sidebar.jpg" alt="Banner" title="Banner" className="img-fluid" />
				</div>
            </section>
        );
    }
}

export default Sidebar;
