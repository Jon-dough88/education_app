import React, { Component } from 'react';
import './Bell.css'

class Bell extends Component {
    state = {  }
    render() { 
        return ( 

            <div className="bell-container">
                <a href="/notifications"><i className="fas fa-bell fa-2x bell"></i></a>
            </div>
        );
    }
}
 
export default Bell;