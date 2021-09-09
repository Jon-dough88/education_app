import React, { Component } from 'react';

import './Sidebar.css';

class Sidebar extends Component {

    render() {

        return (
            // <div className="wrapper">
            // </div>
            <div className="row">
                 <div className="col wrapper">
                    <nav id="sidebar">
                    
                    <ul className="list-unstyled components">
                        
                    
                    {/* Home */}
                    <div className="sidebar-header">
                            <a className="navbar-brand" href="/">Home</a>
                    </div> 
                    
                    {/* User Menu: Sign up, login & admin access */}
                    <li className="active" id="user-menu">
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
                    </li>
                    

                    {/* Notifications */}
                    <li>
                    <a href="/notifications">Notifications</a>      
                    </li>

                    {/* Recommendations */}
                    <li>
                    <a href="/recommendations">Recommendations</a> 
                    </li>

                    {/* Saved */}
                    <li>
    
                         <a href="/saved"> <i class="far fa-save" style={{color: "grey"}}></i> Saved</a>
                    </li>  

                    {/* Starred */}
                    <li>
                        <i class="far fa-star" style={{color: "gold"}}></i>
                        <a href="/starred">Starred</a>
                    </li>

                    {/* My Groups */}
                    <li>
                    <a href="/groups">My Groups</a> 
                    </li>  

                    {/* My Profile */}
                    <li>
                    <a href="/profile">My Profile</a> 
                    </li>

                    {/* Settings */}
                    <li>
                    <a href="/settings">Settings</a> 
                    </li>

                    {/* Contact us */}
                    <li>
                    <a href="/contact">Contact Us</a> 
                    </li>

                    {/* Privacy policy */}
                    <li>
                    <a href="/privacy">Privacy Policy</a> 
                    </li>

                    {/* Account type */}
                </ul>    
            </nav>
           
                </div>   
            </div>
        )
    }

}


export default Sidebar