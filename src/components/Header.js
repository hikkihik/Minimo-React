import React, { Component } from 'react';
import { Container, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { Link } from "react-router-dom";

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
        isOpen: false
        };
    }
    toggle() {
        this.setState({
        isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
        <header>
            <Container>
                <Navbar color="transparent" light expand="lg" className="px-0">
                <Link className="navbar-brand" to="/">Minimo</Link>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-lg-auto" navbar>
                    <NavItem>
                        <NavLink href="javascript:void(0)">Lifestyle</NavLink>
                    </NavItem>
                    <NavItem>
                        <Link className="nav-link" to="/single-post-full-width">Photodiary</Link>     
                    </NavItem>
                    <NavItem>
                        <NavLink href="javascript:void(0)">Music</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="javascript:void(0)">Travel</NavLink>
                    </NavItem>
                    </Nav>
                </Collapse>
                </Navbar>
            </Container>
        </header>
        );
    }
}

export default Header;
