import React, {Component} from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class Navbar extends Component {
    state = {  }
    render() { 
        return ( 
           <div>
               <Navbar bg="primary" fixed="top">
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
               </Navbar>
           </div>     
        );
    }
}
 
export default Navbar;