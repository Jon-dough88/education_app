import React, {Component} from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import './Navbar.css';
import Bell from '../content/notifications/Bell';

class Navmenu extends Component {
    state = {  }
    render() { 
        return ( 
           <div className="jumbotron" id="navbar">
               {/* <Navbar bg="primary" fixed="top">
                    <Container>
                    <Nav>
                        <LinkContainer to="/">
                            <Nav.Link>
                                Home
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/login">
                            <Nav.Link>
                                Login
                            </Nav.Link>
                        </LinkContainer>
                    </Nav>
                    </Container>
               </Navbar> */}

                <Navbar bg="primary" expand="lg" fixed="top" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Logo</Navbar.Brand>
                        <Bell />
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <LinkContainer to="/">
                                <Nav.Link>
                                    Home
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/login">
                                <Nav.Link>
                                    Login
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/signup">
                                <Nav.Link>
                                    Sign up
                                </Nav.Link>
                            </LinkContainer>
                        <NavDropdown title={<i className="fas fa-bars fa-2x"></i>} id="basic-nav-dropdown" style={{margin: "0 3rem"}}>
                            
                            
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                      </Navbar.Collapse>
                 </Container>
                </Navbar>
           </div>     
        );
    }
}
 
export default Navmenu;