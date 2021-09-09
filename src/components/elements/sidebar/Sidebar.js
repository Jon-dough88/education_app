import React, { Component } from 'react';

import './Sidebar.css';

class Sidebar extends Component {

    render() {

        return (
            // <div className="wrapper">
            // </div>
            // <div className="row">
                //  <div className="col wrapper">
                    <nav id="sidebar">
                    
                    <ul className="list-unstyled components">
                        
                    
                    {/* Home */}
                    <div className="sidebar-header">
                            <a className="navbar-brand" href="/">Home</a>
                    </div> 

                    <div className="card login-block">
                        <h4><strong>Have an account?</strong></h4>
                        <a className="slider-link" href="/login"><h4><strong>Login!</strong></h4></a>
                    </div>
                    
                    {/* User Menu: Sign up, login & admin access */}
                    {/* <li className="active" id="user-menu">
                        <a href="#userSubmenu" className="dropdown-toggle" data-toggle="collapse" aria-expanded="false" >Users</a>
                        <ul className="collapse list-unstyled" id="userSubmenu">
                            <li>
                                <a href="/signup">Sign Up</a>
                            </li>
                            <li>
                            <a href="/login">Login</a>     
                            </li>
                            <li>
                                <a href="/admin">Admin Access</a>
                            </li>
                        </ul>
                    </li> */}
                    

                    {/* Notifications */}
                    <li>
                    <a className="slider-link" href="/notifications">Notifications</a>      
                    </li>

                    {/* Recommendations */}
                    <li>
                    <a className="slider-link" href="/recommendations">Recommendations</a> 
                    </li>

                    {/* Saved */}
                    <li>
    
                         <a className="slider-link" href="/saved"> <i className="far fa-save" style={{color: "grey"}}></i> Saved</a>
                    </li>  

                    {/* Starred */}
                    <li>
                        
                        <a className="slider-link" href="/starred"><i className="far fa-star sidebar-star"></i>Starred</a>
                    </li>

                    {/* My Groups */}
                    <li>
                    <a className="slider-link" href="/groups">My Groups</a> 
                    </li>  

                    {/* My Profile */}
                    <li>
                    <a className="slider-link" href="/profile">My Profile</a> 
                    </li>

                    {/* Settings */}
                    <li>
                    <a className="slider-link" href="/settings">Settings</a> 
                    </li>

                    {/* Contact us */}
                    <li>
                    <a className="slider-link" href="/contact">Contact Us</a> 
                    </li>

                    {/* Privacy policy */}
                    <li>
                    <a className="slider-link" href="/privacy">Privacy Policy</a> 
                    </li>

                    {/* Account type */}
                </ul>    
            </nav>
           
                // </div>   
            // </div>
        )
    }

}


export default Sidebar