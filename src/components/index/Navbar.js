import React, {Component} from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './Navbar.css';

class Navmenu extends Component {
    state = {  }
    render() { 
        return ( 
           <div className="jumbotron" id="navbar">
               <Navbar bg="primary" fixed="top">
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
               </Navbar>
           </div>     
        );
    }
}
 
export default Navmenu;