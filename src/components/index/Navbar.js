import React, {Component} from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import './Navbar.css';
import Bell from '../content/notifications/Bell';

class Navmenu extends Component {
    
    // constructor(props) {
    //     super(props);
    //     this.state = { scrollBackground: 'nav-bg' };
    //     this.handleScroll = this.handleScroll.bind(this)
    // }

    // handleScroll() {
    //     this.setState({
    //         scrollBackground: !this.state.scrollBackground
    //     })
    // }

    render() {

        

        return ( 
           <div className="jumbotron" id="navbar">
              
                <Navbar bg="primary" expand="lg" fixed="top" variant="dark" 
                // className={this.state.scrollBackground} onScroll={this.handleScroll}
                >
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
                        <NavDropdown title="" id="basic-nav-dropdown" style={{margin: "0 3rem"}}>
                            
                            
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