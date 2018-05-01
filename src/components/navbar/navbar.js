import React, { Component } from 'react';
import {MenuItem, Nav, Navbar, NavDropdown, NavItem} from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import App from "../../App";
import LogIn from "../auth/log-in";

class Navigation extends Component {
    render() {
        return (
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            Соц. Захист
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav>
                        <NavItem eventKey={1}>
                            <Link to='/visiters'>
                                Відвідувачі
                            </Link>
                        </NavItem>
                        <NavItem eventKey={2} >
                            <Link to='/'>
                                Курси
                            </Link>
                        </NavItem>
                        <NavItem eventKey={3}>
                            <Link to='/'>
                                Заняття
                            </Link>
                        </NavItem>
                    </Nav>
                    <Nav pullRight>
                        <NavItem collapse eventKey={4}>
                            <Link to='/sign-in'>
                                Увійти
                            </Link>
                        </NavItem>
                    </Nav>
                </Navbar>
        );
    }
}

export default Navigation;