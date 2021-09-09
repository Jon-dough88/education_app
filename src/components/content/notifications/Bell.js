import React, { Component } from 'react';
import { Redirect } from 'react-router';
import './Bell.css'

class Bell extends Component {
    
    routeToNotifications(){
         return <Redirect to="/notifications"/>   
    }

    render() { 

       

        return ( 

            <div className="bell-container">
                <i className="fas fa-bell fa-2x bell" onClick={() => {this.routeToNotifications()}}></i>
            </div>
        );
    }
}
 
export default Bell;