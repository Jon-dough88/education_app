import React, {Component} from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux';


import Bell from '../content/notifications/Bell';
import Dumbbell from '../content/notifications/Dumbbell';
import Counter from '../content/notifications/Counter';
import PackageBar from '../elements/Package_bar/PackageBar';
import BackArrow from '../content/notifications/BackArrow';

import './Navbar.css';

class Navmenu extends Component {
    

    render() {

        const {userName, userType} = this.props
        console.log(userName)

        return ( 
           <div className="jumbotron " id="navbar">
              
                <Navbar bg="primary" expand="md" fixed="top" variant="dark" collapseOnSelect="true"
                // className={this.state.scrollBackground} onScroll={this.handleScroll}
                >
                    <Container>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <BackArrow className="back-arrow" />
                        <Navbar.Brand href="/"><h2 className="onHover">Logo</h2></Navbar.Brand>
                        <Dumbbell className="dumbbell" />
                        <Bell className="bell" />
                        
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
                            <LinkContainer to="/lessonTestPath">
                                <Nav.Link>
                                    Lesson Test
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
                       {userName &&
                            <div>
                                    <p>Welcome, 
                                    {userName}!
                                    </p>
                            </div>
                       }
                       
                        
                 </Container>
                </Navbar>
           </div>     
        );
    }
}


const mapStateToProps = (state) => {
    return {
        // user: state.users.currentUser
        userName: state.users.userName,
        userType: state.users.userType
    }
}
 
export default connect(mapStateToProps, null)(Navmenu);