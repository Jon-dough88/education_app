import React, { Component } from 'react';
import './Bell.css'

class Bell extends Component {
    state = {  }
    render() { 
        return ( 

            <div className="bell-container">
                <i className="fas fa-bell fa-2x bell"></i>
            </div>
        );
    }
}
 
export default Bell;