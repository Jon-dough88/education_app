import React, {Component} from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import './Navbar.css';
import Bell from '../content/notifications/Bell';
import Dumbbell from '../content/notifications/Dumbbell';
import Counter from '../content/notifications/Counter';
import PackageBar from '../elements/Package_bar/PackageBar';

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
              
                <Navbar bg="primary" expand="md" fixed="top" variant="dark" 
                // className={this.state.scrollBackground} onScroll={this.handleScroll}
                >
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Brand href="/"><h2 className="onHover">Logo</h2></Navbar.Brand>
                        <Bell className="bell" />
                        <Dumbbell />
                        <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
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
                            <LinkContainer to="/admin">
                                <Nav.Link>
                                    Admin access
                                </Nav.Link>
                            </LinkContainer>
                            
                            {/* <LinkContainer to="/upgrade">   
                                <Nav.Link>
                                Upgrade to Premium
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/notifications">
                                <Nav.Link>
                                    Notifications
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/recommendations">
                                <Nav.Link>
                                    Recommendations
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/saved">
                                <Nav.Link>
                                    Saved
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/starred">
                                <Nav.Link>
                                    Starred
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/groups">
                                <Nav.Link>
                                    My Groups
                                </Nav.Link>
                            </LinkContainer> 
                            <LinkContainer to="/profile">
                                <Nav.Link>
                                    My Profile
                                </Nav.Link>
                            </LinkContainer> 
                            <LinkContainer to="/settings">
                                <Nav.Link>
                                    Settings
                                </Nav.Link>
                            </LinkContainer> 
                            <LinkContainer to="/contact">
                                <Nav.Link>
                                    Contact us
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/privacy">
                                <Nav.Link>
                                    Privacy Policy
                                </Nav.Link>
                            </LinkContainer>   */}
                            

                        <NavDropdown title="" id="basic-nav-dropdown" menuVariant="primary" style={{margin: "0 3rem"}}>
                            
                            <NavDropdown.Item href="/notifications"><span>Notifications <Counter/></span> </NavDropdown.Item>
                            <NavDropdown.Item href="/recommendations">Recommendations</NavDropdown.Item>
                            <NavDropdown.Item href="/saved"><i class="far fa-save" style={{color: "grey"}}></i> Saved</NavDropdown.Item>
                            <NavDropdown.Item href="/starred"><i class="far fa-star" style={{color: "gold"}}></i> Starred</NavDropdown.Item>
                            <NavDropdown.Item href="/groups">My Groups</NavDropdown.Item>
                            <NavDropdown.Item href="/profile">My Profile</NavDropdown.Item>
                            <NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
                            <NavDropdown.Item href="/contact">Contact us</NavDropdown.Item>
                            <NavDropdown.Item href="/privacy">Privacy Policy</NavDropdown.Item>
                            
                            <NavDropdown.Divider />
                                <NavDropdown.Item href="/upgrade">Upgrade to Premium <PackageBar /> </NavDropdown.Item>
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